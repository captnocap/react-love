--[[
  init.lua -- Main integration module for react-love

  This is the entry point that a Love2D game requires:

    local ReactLove = require("lua")

  It auto-detects whether we are running in the browser (love.js / WASM with
  Module.FS transport) or natively (embedded QuickJS), and wires up the
  appropriate bridge, tree, layout, painter, and events modules.
]]

local ReactLove = {}

-- ============================================================================
-- Submodule references (populated in init)
-- ============================================================================

local bridge   = nil   -- bridge_fs or bridge_quickjs instance
local tree     = nil   -- tree.lua module
local layout   = nil   -- layout.lua module
local painter  = nil   -- painter.lua module
local events   = nil   -- events.lua module
local measure  = nil   -- measure.lua module (text measurement + font cache)

local mode     = nil   -- "web" or "native"
local basePath = nil   -- directory containing these modules

-- ============================================================================
-- Mode detection
-- ============================================================================

--- Detect whether we are running in the browser (love.js) or natively.
--- In web mode, the presence of a /__bridge_namespace file signals Module.FS.
local function detectMode(config)
  if config and config.mode and config.mode ~= "auto" then
    return config.mode
  end

  -- Check for the Module.FS sentinel file
  local ns = (config and config.namespace) or "default"
  local sentinelPath = "__bridge_" .. ns .. "_ready"
  if love.filesystem.getInfo("/__bridge_namespace")
    or love.filesystem.getInfo(sentinelPath) then
    return "web"
  end

  return "native"
end

-- ============================================================================
-- Resolve require paths
-- ============================================================================

--- Figure out where our sibling modules live so requires work regardless
--- of how the user has set up their project.
local function resolveBasePath()
  -- The init.lua file is loaded via require("lua") or require("lua.init").
  -- We need the directory portion so we can require siblings.
  local info = debug.getinfo(1, "S")
  local source = info and info.source or ""
  -- Strip the leading @ that Lua adds to file-based sources
  source = source:gsub("^@", "")
  local dir = source:match("^(.*[/\\])") or ""
  return dir
end

-- ============================================================================
-- Public API
-- ============================================================================

--- Initialize react-love.
--- config fields:
---   mode       : "auto" | "web" | "native"  (default "auto")
---   bundlePath : path to the JS bundle       (default "bundle.js")
---   namespace  : bridge namespace string     (default "default")
---   libpath    : path to libquickjs shared library (default "lib/libquickjs")
function ReactLove.init(config)
  config = config or {}
  basePath = resolveBasePath()

  mode = detectMode(config)
  local ns = config.namespace or "default"

  if mode == "web" then
    -- Web mode: use Module.FS bridge.
    -- In web mode the DOM/browser handles rendering; Lua only bridges data.
    bridge = require("lua.bridge_fs")
    bridge.init(ns)
    print("[react-love] Initialized in WEB mode (Module.FS bridge)")

  else
    -- Native mode: use QuickJS bridge + retained tree + layout + painter.
    local BridgeQJS = require("lua.bridge_quickjs")
    bridge = BridgeQJS.new(config.libpath or "lib/libquickjs")

    tree    = require("lua.tree")
    measure = require("lua.measure")
    layout  = require("lua.layout")
    painter = require("lua.painter")
    events  = require("lua.events")

    events.setTreeModule(tree)
    tree.init()

    -- Load the bundled React app into QuickJS
    local bundlePath = config.bundlePath or "bundle.js"
    local bundleJS = love.filesystem.read(bundlePath)
    if not bundleJS then
      error("[react-love] " .. bundlePath .. " not found -- run `npm run build` first")
    end
    bridge:eval(bundleJS, bundlePath)

    print("[react-love] Initialized in NATIVE mode (QuickJS bridge)")
  end
end

--- Call once per frame from love.update(dt).
--- Ticks the bridge, drains mutation commands, and relayouts the tree.
function ReactLove.update(dt)
  if mode == "web" then
    -- Web mode: poll the Module.FS inbox and flush the outbox
    bridge.poll()
    bridge.flush()
    return
  end

  -- Native mode -----------------------------------------------------------

  -- 1. Tick JS timers + microtasks
  bridge:tick()

  -- 2. Tell JS to process any pending input events
  bridge:eval("if (globalThis._pollAndDispatchEvents) _pollAndDispatchEvents();")

  -- 3. Tick again (event handlers may have triggered state updates)
  bridge:tick()

  -- 4. Drain mutation commands from JS and apply to retained tree
  local commands = bridge:drainCommands()
  if #commands > 0 then
    tree.applyCommands(commands)
  end

  -- 5. Relayout if tree changed
  if tree.isDirty() then
    local root = tree.getTree()
    if root then
      layout.layout(root)
    end
    tree.clearDirty()
  end
end

--- Call once per frame from love.draw().
--- Paints the retained UI tree (native mode only).
function ReactLove.draw()
  if mode ~= "native" then return end

  local root = tree.getTree()
  if root then
    painter.paint(root)
  end
end

--- Call from love.mousepressed(x, y, button).
--- Hit-tests the tree and dispatches a click event to JS.
--- Also starts tracking for potential drag operations.
function ReactLove.mousepressed(x, y, button)
  if mode ~= "native" then return end

  local root = tree.getTree()
  if not root then return end

  local hit = events.hitTest(root, x, y)
  if hit then
    -- Always start drag tracking on any clicked node
    -- JS side will decide if it has drag handlers
    events.startDrag(hit.id, x, y)

    -- Fire click event with bubblePath
    local bubblePath = events.buildBubblePath(hit)
    bridge:pushEvent(events.createEvent("click", hit.id, x, y, button, bubblePath))
  end
end

--- Call from love.mousereleased(x, y, button).
--- Ends any active drag operation and dispatches release event.
function ReactLove.mousereleased(x, y, button)
  if mode ~= "native" then return end

  local root = tree.getTree()
  if not root then return end

  -- End drag if active
  local dragEndEvent = events.endDrag(x, y)
  if dragEndEvent then
    bridge:pushEvent(dragEndEvent)
  end

  -- Dispatch normal release event with bubblePath
  local hit = events.hitTest(root, x, y)
  if hit then
    local bubblePath = events.buildBubblePath(hit)
    bridge:pushEvent(events.createEvent("release", hit.id, x, y, button, bubblePath))
  end
end

--- Call from love.mousemoved(x, y, dx, dy).
--- Tracks pointer enter/leave and dispatches hover events.
--- Also updates drag state if a drag is active.
function ReactLove.mousemoved(x, y)
  if mode ~= "native" then return end

  local root = tree.getTree()
  if not root then return end

  -- Update drag if active
  if events.isDragging() then
    local dragEvents = events.updateDrag(x, y)
    if dragEvents then
      for _, evt in ipairs(dragEvents) do
        bridge:pushEvent(evt)
      end
    end

    -- Don't update hover while dragging (unless threshold not crossed)
    if events.isDragThresholdCrossed() then
      return
    end
  end

  -- Normal hover tracking when not dragging
  local hoverEvents = events.updateHover(root, x, y)
  for _, evt in ipairs(hoverEvents) do
    bridge:pushEvent(evt)
  end
end

--- Call from love.resize(w, h).
--- Marks the tree dirty so layout is recomputed next frame.
function ReactLove.resize(w, h)
  if mode ~= "native" then return end
  if measure then
    measure.clearCache()
  end
  if tree then
    tree.markDirty()
  end
end

--- Call from love.keypressed(key, scancode, isrepeat).
--- Dispatches a global keydown event to all JS keyboard listeners.
function ReactLove.keypressed(key, scancode, isrepeat)
  if mode ~= "native" then return end
  if not bridge then return end

  bridge:pushEvent(events.createKeyEvent("keydown", key, scancode, isrepeat))
end

--- Call from love.keyreleased(key, scancode).
--- Dispatches a global keyup event to all JS keyboard listeners.
function ReactLove.keyreleased(key, scancode)
  if mode ~= "native" then return end
  if not bridge then return end

  bridge:pushEvent(events.createKeyEvent("keyup", key, scancode, false))
end

--- Call from love.textinput(text).
--- Dispatches a text input event (handles unicode, IME, etc.).
function ReactLove.textinput(text)
  if mode ~= "native" then return end
  if not bridge then return end

  bridge:pushEvent(events.createTextInputEvent(text))
end

--- Call from love.wheelmoved(x, y).
--- If the wheel event hits a scroll container, update its scroll position
--- directly in Lua for immediate visual response AND send the event to JS.
--- The scroll speed multiplier converts Love2D wheel units to pixels.
function ReactLove.wheelmoved(x, y)
  if mode ~= "native" then return end

  local root = tree.getTree()
  if not root then return end

  -- Get current mouse position
  local mx, my = love.mouse.getPosition()
  local hit = events.hitTest(root, mx, my)
  if not hit then return end

  -- Check if the hit node or any ancestor is a scroll container
  local scrollContainer = events.findScrollContainer(hit, mx, my)
  if scrollContainer and scrollContainer.scrollState then
    -- Update scroll position directly in Lua for immediate response
    local ss = scrollContainer.scrollState
    local scrollSpeed = 40  -- pixels per wheel tick
    local newScrollX = (ss.scrollX or 0) - x * scrollSpeed
    local newScrollY = (ss.scrollY or 0) - y * scrollSpeed

    tree.setScroll(scrollContainer.id, newScrollX, newScrollY)
  end

  -- Always send the wheel event to JS regardless of scroll handling
  local bubblePath = events.buildBubblePath(hit)
  bridge:pushEvent(events.createWheelEvent(hit.id, mx, my, x, y, bubblePath))
end

--- Call from love.touchpressed(id, x, y, dx, dy, pressure).
--- Dispatches a touchstart event to the node under the touch point.
function ReactLove.touchpressed(id, x, y, dx, dy, pressure)
  if mode ~= "native" then return end

  local root = tree.getTree()
  if not root then return end

  local hit = events.hitTest(root, x, y)
  if hit then
    local bubblePath = events.buildBubblePath(hit)
    bridge:pushEvent(events.createTouchEvent("touchstart", hit.id, id, x, y, dx, dy, pressure, bubblePath))
  end
end

--- Call from love.touchreleased(id, x, y, dx, dy, pressure).
--- Dispatches a touchend event to the node under the touch point.
function ReactLove.touchreleased(id, x, y, dx, dy, pressure)
  if mode ~= "native" then return end

  local root = tree.getTree()
  if not root then return end

  local hit = events.hitTest(root, x, y)
  if hit then
    local bubblePath = events.buildBubblePath(hit)
    bridge:pushEvent(events.createTouchEvent("touchend", hit.id, id, x, y, dx, dy, pressure, bubblePath))
  end
end

--- Call from love.touchmoved(id, x, y, dx, dy, pressure).
--- Dispatches a touchmove event (broadcast globally, finger may have moved off element).
function ReactLove.touchmoved(id, x, y, dx, dy, pressure)
  if mode ~= "native" then return end
  if not bridge then return end

  bridge:pushEvent(events.createTouchEvent("touchmove", nil, id, x, y, dx, dy, pressure))
end

--- Call from love.gamepadpressed(joystick, button).
--- Dispatches a global gamepad button press event.
function ReactLove.gamepadpressed(joystick, button)
  if mode ~= "native" then return end
  if not bridge then return end

  local joystickId = joystick:getID()
  bridge:pushEvent(events.createGamepadButtonEvent("gamepadpressed", button, joystickId))
end

--- Call from love.gamepadreleased(joystick, button).
--- Dispatches a global gamepad button release event.
function ReactLove.gamepadreleased(joystick, button)
  if mode ~= "native" then return end
  if not bridge then return end

  local joystickId = joystick:getID()
  bridge:pushEvent(events.createGamepadButtonEvent("gamepadreleased", button, joystickId))
end

--- Call from love.gamepadaxis(joystick, axis, value).
--- Dispatches a global gamepad axis movement event.
function ReactLove.gamepadaxis(joystick, axis, value)
  if mode ~= "native" then return end
  if not bridge then return end

  local joystickId = joystick:getID()
  bridge:pushEvent(events.createGamepadAxisEvent(axis, value, joystickId))
end

--- Call from love.quit().
--- Cleans up the bridge and releases resources.
function ReactLove.quit()
  if mode == "native" and bridge then
    bridge:destroy()
  end
  bridge = nil
end

--- Return the active bridge instance.
--- Useful for game code that needs to push custom events or call bridge APIs.
function ReactLove.getBridge()
  return bridge
end

--- Return the current mode ("web" or "native").
function ReactLove.getMode()
  return mode
end

--- Return the tree module (native mode only).
function ReactLove.getTree()
  return tree
end

--- Return the measure module (native mode only).
--- Useful for game code that needs to measure text outside the layout pass.
function ReactLove.getMeasure()
  return measure
end

--- Set the scroll position for a node programmatically.
--- @param nodeId number|string The node ID of the scroll container
--- @param scrollX number Desired horizontal scroll position in pixels
--- @param scrollY number Desired vertical scroll position in pixels
function ReactLove.setScroll(nodeId, scrollX, scrollY)
  if mode ~= "native" then return end
  if not tree then return end
  tree.setScroll(nodeId, scrollX or 0, scrollY or 0)
end

return ReactLove
