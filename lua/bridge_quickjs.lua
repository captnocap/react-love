--[[
  quickjs_bridge.lua

  LuaJIT FFI bindings to QuickJS. Creates a JavaScript runtime embedded
  inside the Love2D process. Exposes host functions to JS:

    __hostFlush(commands)      -- JS sends mutation commands (raw array) to Lua
    __hostGetEvents()          -- JS polls for input events from Lua (raw array)
    __hostMeasureText(params)  -- JS queries text dimensions (raw object) from Love2D

  Values cross the bridge via direct QuickJS C API traversal (no JSON).
  This eliminates per-frame GC pressure from JSON.stringify/parse on both sides.

  This is the same architectural pattern as React Native's JSI bridge,
  except simpler because we only need unidirectional command buffers.
]]

local ffi = require("ffi")
local json = require("json")  -- need a JSON lib (cjson, lunajson, etc.)
local Measure = require("lua.measure")

-- ============================================================================
-- QuickJS C API declarations
-- Subset needed for evaluation + host function exposure
-- ============================================================================

ffi.cdef[[
  typedef struct JSRuntime JSRuntime;
  typedef struct JSContext JSContext;

  /* JSValue is a 128-bit struct on 64-bit systems in newer QuickJS.
     For simplicity we treat it as opaque and use helper functions.
     In practice you'd match the exact ABI of your QuickJS build. */

  typedef struct { int64_t u; int64_t tag; } JSValue;

  JSRuntime *JS_NewRuntime(void);
  void JS_SetMaxStackSize(JSRuntime *rt, size_t stack_size);
  void JS_SetMemoryLimit(JSRuntime *rt, size_t limit);
  JSContext *JS_NewContext(JSRuntime *rt);
  void JS_FreeContext(JSContext *ctx);
  void JS_FreeRuntime(JSRuntime *rt);
  void JS_FreeValue(JSContext *ctx, JSValue val);

  /* Evaluation */
  JSValue JS_Eval(JSContext *ctx, const char *input, size_t input_len,
                  const char *filename, int eval_flags);

  /* String conversion */
  const char *JS_ToCString(JSContext *ctx, JSValue val);
  void JS_FreeCString(JSContext *ctx, const char *ptr);
  JSValue JS_NewString(JSContext *ctx, const char *str);

  /* Object/property access */
  JSValue JS_GetGlobalObject(JSContext *ctx);
  JSValue JS_GetPropertyStr(JSContext *ctx, JSValue this_obj, const char *prop);
  int JS_SetPropertyStr(JSContext *ctx, JSValue this_obj, const char *prop, JSValue val);

  /* Function creation */
  typedef JSValue (*JSCFunction)(JSContext *ctx, JSValue this_val,
                                  int argc, JSValue *argv);
  JSValue JS_NewCFunction(JSContext *ctx, JSCFunction func, const char *name, int length);

  /* Type checking */
  int JS_IsException(JSValue val);
  int JS_IsUndefined(JSValue val);
  JSValue JS_GetException(JSContext *ctx);

  /* Job queue (promises, async) */
  int JS_ExecutePendingJob(JSRuntime *rt, JSContext **pctx);

  /* Standard library init (console, setTimeout, etc.) */
  void js_std_init_handlers(JSRuntime *rt);
  void js_std_add_helpers(JSContext *ctx, int argc, char **argv);

  /* Array/object traversal (direct FFI value passing) */
  int JS_IsArray(JSContext *ctx, JSValue val);
  JSValue JS_GetPropertyUint32(JSContext *ctx, JSValue this_obj, uint32_t idx);
  int JS_ToFloat64(JSContext *ctx, double *pres, JSValue val);
  int JS_ToBool(JSContext *ctx, JSValue val);
  int JS_ToInt32(JSContext *ctx, int32_t *pres, JSValue val);

  /* JS value construction */
  JSValue JS_NewObject(JSContext *ctx);
  JSValue JS_NewArray(JSContext *ctx);
  JSValue JS_NewFloat64(JSContext *ctx, double d);
  JSValue JS_NewBool(JSContext *ctx, int val);
  JSValue JS_NewInt32(JSContext *ctx, int32_t val);
  int JS_SetPropertyUint32(JSContext *ctx, JSValue this_obj, uint32_t idx, JSValue val);

  /* Property enumeration */
  typedef uint32_t JSAtom;
  typedef struct { int is_enumerable; JSAtom atom; } JSPropertyEnum;
  int JS_GetOwnPropertyNames(JSContext *ctx, JSPropertyEnum **ptab, uint32_t *plen, JSValue obj, int flags);
  const char *JS_AtomToCString(JSContext *ctx, JSAtom atom);
  void JS_FreeAtom(JSContext *ctx, JSAtom atom);
  void js_free(JSContext *ctx, void *ptr);
]]

local JS_EVAL_TYPE_GLOBAL = 0
local JS_EVAL_TYPE_MODULE = 1
local JS_EVAL_FLAG_STRICT = 8

-- QuickJS 64-bit JSValue tags (validated at init time)
local TAG_INT       = 0
local TAG_BOOL      = 1
local TAG_NULL      = 2
local TAG_UNDEFINED = 3
local TAG_FLOAT64   = 7
local TAG_OBJECT    = -1  -- arrays are objects too
local TAG_STRING    = -7

local JS_GPN_STRING_MASK = 1   -- enumerate string-named keys
local JS_GPN_ENUM_ONLY   = 16  -- enumerable only

-- ============================================================================
-- JSValue <-> Lua value converters (direct FFI, no JSON)
-- ============================================================================

-- Pre-allocated buffers for numeric conversions (avoid per-call allocation)
local _double_buf = ffi.new("double[1]")
local _int32_buf  = ffi.new("int32_t[1]")

--- Convert a QuickJS JSValue to a Lua value via direct FFI traversal.
--- @param ctx  JSContext pointer
--- @param qjs  FFI library handle
--- @param val  JSValue struct (NOT owned by us -- caller manages lifetime)
--- @param depth  recursion depth (default 0, max 32)
--- @return any  Lua value (string, number, boolean, table, or nil)
local function jsValueToLua(ctx, qjs, val, depth)
  depth = depth or 0
  if depth > 32 then
    print("[react-love] jsValueToLua: max depth exceeded")
    return nil
  end

  local tag = tonumber(val.tag)

  if tag == TAG_STRING then
    local cstr = qjs.JS_ToCString(ctx, val)
    if cstr == nil then return nil end
    local s = ffi.string(cstr)
    qjs.JS_FreeCString(ctx, cstr)
    return s

  elseif tag == TAG_INT then
    if qjs.JS_ToInt32(ctx, _int32_buf, val) ~= 0 then return nil end
    return tonumber(_int32_buf[0])

  elseif tag == TAG_FLOAT64 then
    if qjs.JS_ToFloat64(ctx, _double_buf, val) ~= 0 then return nil end
    return tonumber(_double_buf[0])

  elseif tag == TAG_BOOL then
    return qjs.JS_ToBool(ctx, val) ~= 0

  elseif tag == TAG_NULL or tag == TAG_UNDEFINED then
    return nil

  elseif tag == TAG_OBJECT then
    -- Check if array
    if qjs.JS_IsArray(ctx, val) ~= 0 then
      local lengthVal = qjs.JS_GetPropertyStr(ctx, val, "length")
      local len = 0
      if qjs.JS_ToInt32(ctx, _int32_buf, lengthVal) == 0 then
        len = tonumber(_int32_buf[0])
      end
      qjs.JS_FreeValue(ctx, lengthVal)

      local arr = {}
      for i = 0, len - 1 do
        local elem = qjs.JS_GetPropertyUint32(ctx, val, i)
        arr[i + 1] = jsValueToLua(ctx, qjs, elem, depth + 1)
        qjs.JS_FreeValue(ctx, elem)
      end
      return arr
    else
      -- Object: enumerate own properties
      local ptab = ffi.new("JSPropertyEnum*[1]")
      local plen = ffi.new("uint32_t[1]")
      local flags = JS_GPN_STRING_MASK + JS_GPN_ENUM_ONLY

      if qjs.JS_GetOwnPropertyNames(ctx, ptab, plen, val, flags) ~= 0 then
        return {}
      end

      local obj = {}
      local count = tonumber(plen[0])

      for i = 0, count - 1 do
        local prop = ptab[0][i]
        local keyCstr = qjs.JS_AtomToCString(ctx, prop.atom)
        if keyCstr ~= nil then
          local key = ffi.string(keyCstr)
          qjs.JS_FreeCString(ctx, keyCstr)

          local propVal = qjs.JS_GetPropertyStr(ctx, val, key)
          obj[key] = jsValueToLua(ctx, qjs, propVal, depth + 1)
          qjs.JS_FreeValue(ctx, propVal)
        end
        qjs.JS_FreeAtom(ctx, prop.atom)
      end

      -- Free the property names array
      qjs.js_free(ctx, ptab[0])

      return obj
    end

  else
    -- Unknown tag
    print(string.format("[react-love] jsValueToLua: unknown tag %d", tag))
    return nil
  end
end

--- Convert a Lua value to a QuickJS JSValue via direct FFI construction.
--- The returned JSValue is OWNED by the caller (must be freed or passed to
--- a function that takes ownership, like JS_SetPropertyStr).
--- @param ctx  JSContext pointer
--- @param qjs  FFI library handle
--- @param val  Lua value
--- @param depth  recursion depth (default 0, max 32)
--- @return JSValue
local function luaToJSValue(ctx, qjs, val, depth)
  depth = depth or 0
  if depth > 32 then
    print("[react-love] luaToJSValue: max depth exceeded")
    return ffi.new("JSValue", {0, TAG_NULL})
  end

  local t = type(val)

  if t == "string" then
    return qjs.JS_NewString(ctx, val)

  elseif t == "number" then
    -- Use int32 for values that fit, float64 otherwise
    if val == math.floor(val) and val >= -2147483648 and val <= 2147483647 then
      return qjs.JS_NewInt32(ctx, val)
    else
      return qjs.JS_NewFloat64(ctx, val)
    end

  elseif t == "boolean" then
    return qjs.JS_NewBool(ctx, val and 1 or 0)

  elseif t == "nil" then
    return ffi.new("JSValue", {0, TAG_NULL})

  elseif t == "table" then
    -- Heuristic: array if val[1] ~= nil, object otherwise.
    -- Empty tables become empty objects (empty arrays rarely matter).
    if val[1] ~= nil then
      -- Array mode
      local arr = qjs.JS_NewArray(ctx)
      local len = #val
      for i = 1, len do
        local child = luaToJSValue(ctx, qjs, val[i], depth + 1)
        -- SetPropertyUint32 takes ownership of child, do NOT free
        qjs.JS_SetPropertyUint32(ctx, arr, i - 1, child)
      end
      return arr
    else
      -- Object mode
      local obj = qjs.JS_NewObject(ctx)
      for k, v in pairs(val) do
        local child = luaToJSValue(ctx, qjs, v, depth + 1)
        -- SetPropertyStr takes ownership of child, do NOT free
        qjs.JS_SetPropertyStr(ctx, obj, tostring(k), child)
      end
      return obj
    end

  else
    -- Unsupported type (function, userdata, etc.)
    return ffi.new("JSValue", {0, TAG_NULL})
  end
end

--- Validate JSValue tag layout by creating known values and checking their tags.
--- Auto-detects tags rather than asserting, so it works across QuickJS builds.
local function validateTags(ctx, qjs)
  local str = qjs.JS_NewString(ctx, "test")
  local strTag = tonumber(str.tag)
  qjs.JS_FreeValue(ctx, str)

  local intVal = qjs.JS_Eval(ctx, "42", 2, "<tag>", 0)
  local intTag = tonumber(intVal.tag)
  qjs.JS_FreeValue(ctx, intVal)

  local boolVal = qjs.JS_Eval(ctx, "true", 4, "<tag>", 0)
  local boolTag = tonumber(boolVal.tag)
  qjs.JS_FreeValue(ctx, boolVal)

  local nullVal = qjs.JS_Eval(ctx, "null", 4, "<tag>", 0)
  local nullTag = tonumber(nullVal.tag)
  qjs.JS_FreeValue(ctx, nullVal)

  local floatVal = qjs.JS_Eval(ctx, "3.14", 4, "<tag>", 0)
  local floatTag = tonumber(floatVal.tag)
  qjs.JS_FreeValue(ctx, floatVal)

  local objVal = qjs.JS_Eval(ctx, "({})", 4, "<tag>", 0)
  local objTag = tonumber(objVal.tag)
  qjs.JS_FreeValue(ctx, objVal)

  -- Update constants if they differ from expected
  if strTag ~= TAG_STRING or intTag ~= TAG_INT or boolTag ~= TAG_BOOL
     or nullTag ~= TAG_NULL or floatTag ~= TAG_FLOAT64 or objTag ~= TAG_OBJECT then
    print("[react-love] JSValue tags differ from defaults, updating...")
    TAG_STRING = strTag
    TAG_INT = intTag
    TAG_BOOL = boolTag
    TAG_NULL = nullTag
    TAG_FLOAT64 = floatTag
    TAG_OBJECT = objTag
    print(string.format("  STRING=%d INT=%d BOOL=%d NULL=%d FLOAT64=%d OBJECT=%d",
      strTag, intTag, boolTag, nullTag, floatTag, objTag))
  end
end

-- ============================================================================
-- Bridge object
-- ============================================================================

local Bridge = {}
Bridge.__index = Bridge

function Bridge.new(libpath)
  libpath = libpath or "lib/libquickjs"

  local qjs = ffi.load(libpath)

  local self = setmetatable({
    qjs = qjs,
    rt = nil,
    ctx = nil,
    commandBuffer = {},
    eventQueue = {},
    useDirectFFI = true,  -- direct FFI value passing (fallback to JSON on error)
    _callbacks = {},  -- prevent GC of FFI callbacks
  }, Bridge)

  -- Create runtime with reasonable limits for game UI
  self.rt = qjs.JS_NewRuntime()
  qjs.JS_SetMaxStackSize(self.rt, 1024 * 1024)      -- 1MB stack
  qjs.JS_SetMemoryLimit(self.rt, 64 * 1024 * 1024)   -- 64MB heap

  self.ctx = qjs.JS_NewContext(self.rt)

  -- Initialize standard handlers (gives us console.log, setTimeout, etc.)
  -- Note: js_std_add_helpers may not exist in all QuickJS builds.
  -- If using a minimal build, you'll need to polyfill setTimeout/console.
  pcall(function()
    qjs.js_std_init_handlers(self.rt)
    qjs.js_std_add_helpers(self.ctx, 0, nil)
  end)

  -- Validate JSValue tag layout for this QuickJS build
  validateTags(self.ctx, qjs)

  -- Expose host functions
  self:_exposeHostFlush()
  self:_exposeHostGetEvents()
  self:_exposeHostLog()
  self:_exposeHostMeasureText()

  -- Polyfill basics if std helpers aren't available
  self:eval([[
    if (typeof console === 'undefined') {
      globalThis.console = {
        log: function() { __hostLog(Array.from(arguments).join(' ')); },
        warn: function() { __hostLog('[WARN] ' + Array.from(arguments).join(' ')); },
        error: function() { __hostLog('[ERROR] ' + Array.from(arguments).join(' ')); },
      };
    }
    if (typeof setTimeout === 'undefined') {
      // QuickJS doesn't have timers by default -- we approximate with a job queue
      const _timers = [];
      let _timerId = 0;
      globalThis.setTimeout = function(fn, ms) {
        const id = ++_timerId;
        _timers.push({ id, fn, at: Date.now() + (ms || 0) });
        return id;
      };
      globalThis.clearTimeout = function(id) {
        const idx = _timers.findIndex(t => t.id === id);
        if (idx !== -1) _timers.splice(idx, 1);
      };
      globalThis.setInterval = function(fn, ms) {
        const id = ++_timerId;
        function tick() {
          fn();
          const t = _timers.find(t => t.id === id);
          if (t) t.at = Date.now() + ms;
        }
        _timers.push({ id, fn: tick, at: Date.now() + ms, interval: true });
        return id;
      };
      globalThis.clearInterval = globalThis.clearTimeout;
      // Tick function called from Lua
      globalThis.__tickTimers = function() {
        const now = Date.now();
        const ready = _timers.filter(t => t.at <= now);
        for (const t of ready) {
          t.fn();
          if (!t.interval) {
            const idx = _timers.indexOf(t);
            if (idx !== -1) _timers.splice(idx, 1);
          }
        }
      };
    }
  ]], "<polyfills>")

  return self
end

-- ============================================================================
-- Host function: __hostFlush
-- Called by React renderer to send mutation commands to Lua
-- ============================================================================

function Bridge:_exposeHostFlush()
  local selfRef = self
  local cb = ffi.cast("JSCFunction", function(ctx, this_val, argc, argv)
    if argc < 1 then return ffi.new("JSValue", {0, TAG_UNDEFINED}) end

    if selfRef.useDirectFFI then
      -- Direct FFI: argv[0] is a raw JS array, traverse it directly
      -- Do NOT free argv[0] -- it belongs to the JS caller
      local ok, commands = pcall(jsValueToLua, ctx, selfRef.qjs, argv[0])
      if ok and type(commands) == "table" then
        for _, cmd in ipairs(commands) do
          selfRef.commandBuffer[#selfRef.commandBuffer + 1] = cmd
        end
      else
        -- Fallback to JSON for this call
        print("[react-love] Direct FFI failed in __hostFlush, falling back to JSON: " .. tostring(commands))
        local cstr = selfRef.qjs.JS_ToCString(ctx, argv[0])
        if cstr ~= nil then
          local str = ffi.string(cstr)
          selfRef.qjs.JS_FreeCString(ctx, cstr)
          local jok, jcmds = pcall(json.decode, str)
          if jok and type(jcmds) == "table" then
            for _, cmd in ipairs(jcmds) do
              selfRef.commandBuffer[#selfRef.commandBuffer + 1] = cmd
            end
          end
        end
      end
    else
      -- Legacy JSON path
      local cstr = selfRef.qjs.JS_ToCString(ctx, argv[0])
      if cstr ~= nil then
        local str = ffi.string(cstr)
        selfRef.qjs.JS_FreeCString(ctx, cstr)
        local ok, commands = pcall(json.decode, str)
        if ok and type(commands) == "table" then
          for _, cmd in ipairs(commands) do
            selfRef.commandBuffer[#selfRef.commandBuffer + 1] = cmd
          end
        else
          print("[react-love] Failed to parse commands: " .. tostring(str):sub(1, 200))
        end
      end
    end

    return ffi.new("JSValue", {0, TAG_UNDEFINED})
  end)
  self._callbacks[#self._callbacks + 1] = cb  -- prevent GC

  local global = self.qjs.JS_GetGlobalObject(self.ctx)
  local fn = self.qjs.JS_NewCFunction(self.ctx, cb, "__hostFlush", 1)
  self.qjs.JS_SetPropertyStr(self.ctx, global, "__hostFlush", fn)
  self.qjs.JS_FreeValue(self.ctx, global)
end

-- ============================================================================
-- Host function: __hostGetEvents
-- Called by React event dispatcher to poll for input events
-- ============================================================================

function Bridge:_exposeHostGetEvents()
  local selfRef = self
  local cb = ffi.cast("JSCFunction", function(ctx, this_val, argc, argv)
    local events = selfRef.eventQueue
    selfRef.eventQueue = {}

    if selfRef.useDirectFFI then
      -- Direct FFI: build a JS array and return it (ownership transfers to JS)
      local ok, jsArr = pcall(luaToJSValue, ctx, selfRef.qjs, events)
      if ok then
        return jsArr
      else
        -- Fallback to JSON
        print("[react-love] Direct FFI failed in __hostGetEvents, falling back to JSON: " .. tostring(jsArr))
        local str = json.encode(events)
        return selfRef.qjs.JS_NewString(ctx, str)
      end
    else
      local str = json.encode(events)
      return selfRef.qjs.JS_NewString(ctx, str)
    end
  end)
  self._callbacks[#self._callbacks + 1] = cb

  local global = self.qjs.JS_GetGlobalObject(self.ctx)
  local fn = self.qjs.JS_NewCFunction(self.ctx, cb, "__hostGetEvents", 0)
  self.qjs.JS_SetPropertyStr(self.ctx, global, "__hostGetEvents", fn)
  self.qjs.JS_FreeValue(self.ctx, global)
end

-- ============================================================================
-- Host function: __hostLog
-- Routes console.log from JS to Love2D's print
-- ============================================================================

function Bridge:_exposeHostLog()
  local cb = ffi.cast("JSCFunction", function(ctx, this_val, argc, argv)
    if argc >= 1 then
      local cstr = ffi.C.JS_ToCString(ctx, argv[0])
      if cstr ~= nil then
        print("[JS] " .. ffi.string(cstr))
        ffi.C.JS_FreeCString(ctx, cstr)
      end
    end
    return ffi.new("JSValue", {0, 3})
  end)
  self._callbacks[#self._callbacks + 1] = cb

  local global = self.qjs.JS_GetGlobalObject(self.ctx)
  local fn = self.qjs.JS_NewCFunction(self.ctx, cb, "__hostLog", 1)
  self.qjs.JS_SetPropertyStr(self.ctx, global, "__hostLog", fn)
  self.qjs.JS_FreeValue(self.ctx, global)
end

-- ============================================================================
-- Host function: __hostMeasureText
-- Allows JS to query text dimensions using Love2D's font measurement APIs
-- ============================================================================

function Bridge:_exposeHostMeasureText()
  local selfRef = self
  local cb = ffi.cast("JSCFunction", function(ctx, this_val, argc, argv)
    local zeroResult = { width = 0, height = 0 }

    if argc < 1 then
      return luaToJSValue(ctx, selfRef.qjs, zeroResult)
    end

    if selfRef.useDirectFFI then
      -- Direct FFI: argv[0] is a raw JS object
      -- Do NOT free argv[0] -- it belongs to the JS caller
      local pok, params = pcall(jsValueToLua, ctx, selfRef.qjs, argv[0])
      if not pok or type(params) ~= "table" then
        -- Fallback to JSON for input
        print("[react-love] Direct FFI failed in __hostMeasureText input, falling back to JSON: " .. tostring(params))
        local cstr = selfRef.qjs.JS_ToCString(ctx, argv[0])
        if cstr == nil then
          return luaToJSValue(ctx, selfRef.qjs, zeroResult)
        end
        local str = ffi.string(cstr)
        selfRef.qjs.JS_FreeCString(ctx, cstr)
        local jok, jparams = pcall(json.decode, str)
        if not jok or type(jparams) ~= "table" then
          return luaToJSValue(ctx, selfRef.qjs, zeroResult)
        end
        params = jparams
      end

      local text = params.text or ""
      local fontSize = params.fontSize or 14
      local maxWidth = params.maxWidth  -- nil means unconstrained

      local result = Measure.measureText(text, fontSize, maxWidth)
      local resultTbl = { width = result.width, height = result.height }

      local rok, jsResult = pcall(luaToJSValue, ctx, selfRef.qjs, resultTbl)
      if rok then
        return jsResult
      else
        -- Fallback to JSON for output
        print("[react-love] Direct FFI failed in __hostMeasureText output, falling back to JSON: " .. tostring(jsResult))
        local resultJson = json.encode(resultTbl)
        return selfRef.qjs.JS_NewString(ctx, resultJson)
      end
    else
      -- Legacy JSON path
      local cstr = selfRef.qjs.JS_ToCString(ctx, argv[0])
      if cstr == nil then
        return selfRef.qjs.JS_NewString(ctx, '{"width":0,"height":0}')
      end

      local str = ffi.string(cstr)
      selfRef.qjs.JS_FreeCString(ctx, cstr)

      local ok, params = pcall(json.decode, str)
      if not ok or type(params) ~= "table" then
        return selfRef.qjs.JS_NewString(ctx, '{"width":0,"height":0}')
      end

      local text = params.text or ""
      local fontSize = params.fontSize or 14
      local maxWidth = params.maxWidth

      local result = Measure.measureText(text, fontSize, maxWidth)
      local resultJson = json.encode({ width = result.width, height = result.height })
      return selfRef.qjs.JS_NewString(ctx, resultJson)
    end
  end)
  self._callbacks[#self._callbacks + 1] = cb

  local global = self.qjs.JS_GetGlobalObject(self.ctx)
  local fn = self.qjs.JS_NewCFunction(self.ctx, cb, "__hostMeasureText", 1)
  self.qjs.JS_SetPropertyStr(self.ctx, global, "__hostMeasureText", fn)
  self.qjs.JS_FreeValue(self.ctx, global)
end

-- ============================================================================
-- Public API
-- ============================================================================

function Bridge:eval(code, filename)
  filename = filename or "<eval>"
  local val = self.qjs.JS_Eval(
    self.ctx, code, #code, filename, JS_EVAL_TYPE_GLOBAL
  )

  if self.qjs.JS_IsException(val) ~= 0 then
    local exc = self.qjs.JS_GetException(self.ctx)
    local cstr = self.qjs.JS_ToCString(self.ctx, exc)
    local msg = cstr ~= nil and ffi.string(cstr) or "unknown error"
    if cstr ~= nil then self.qjs.JS_FreeCString(self.ctx, cstr) end
    self.qjs.JS_FreeValue(self.ctx, exc)
    error("[QuickJS] " .. msg)
  end

  self.qjs.JS_FreeValue(self.ctx, val)
end

--- Tick the JS event loop (promises, microtasks, timers)
function Bridge:tick()
  -- Drain pending microtasks
  local ctx_ptr = ffi.new("JSContext*[1]")
  while self.qjs.JS_ExecutePendingJob(self.rt, ctx_ptr) > 0 do end

  -- Tick polyfilled timers
  pcall(function() self:eval("if (globalThis.__tickTimers) __tickTimers();") end)
end

--- Drain the command buffer (called by Love2D each frame)
function Bridge:drainCommands()
  local cmds = self.commandBuffer
  self.commandBuffer = {}
  return cmds
end

--- Push an input event for JS to pick up
function Bridge:pushEvent(event)
  self.eventQueue[#self.eventQueue + 1] = event
end

--- Clean shutdown
function Bridge:destroy()
  self.qjs.JS_FreeContext(self.ctx)
  self.qjs.JS_FreeRuntime(self.rt)
  self.ctx = nil
  self.rt = nil
end

return Bridge
