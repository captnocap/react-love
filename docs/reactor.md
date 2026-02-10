# Reactor — Architecture & Design Decisions

## The Core Problem

React assumes a retained DOM that the framework owns and mutates. Love2D gives you a `love.draw()` callback that fires every frame on a blank canvas. Bridging this requires three things that no single existing library provides:

1. **A virtual representation** of what UI you _want_ (VNodes)
2. **A reconciler** that diffs old vs new, preserving state across renders (Fibers)
3. **A retained element tree** that owns layout data and responds to input (LayoutNodes)

Reactor unifies these into a single coherent pipeline.

## What Was Borrowed (and from where)

### From Luact → Hooks + Fiber Concept
Luact proved that React's hooks model works in Lua. The sequential hook index pattern, where `useState`/`useEffect` calls are tracked by position within a component's render, translates cleanly. Reactor adopts this directly but simplifies the Fiber architecture — Luact implemented React's full async scheduling (16ms frame budget), which is overkill for a game that already has its own frame loop via `love.update`.

### From FlexLöve → Layout Philosophy
FlexLöve demonstrated that a pure-Lua flexbox implementation is viable and that viewport units (`vw`, `vh`, `%`) are essential for game UIs that need to be resolution-independent. Reactor's layout engine borrows the property naming conventions and unit resolution approach, but implements flexbox as a single recursive pass rather than FlexLöve's multi-pass retained mode. The key insight from FlexLöve is that `style` tables should look like CSS — developers shouldn't have to learn a new property vocabulary.

### From Inky → Event Model
Inky's approach of being input-source agnostic (mouse, touch, gamepad all route through the same pointer abstraction) is correct for games. Reactor adopts this: events are dispatched by type (`click`, `pointerEnter`, `press`) and bubble up the retained tree. The hit-testing walks computed layout rects, not the virtual tree.

### From react-lua (Roblox) → Reconciliation Strategy
The key-based reconciliation with positional fallback is adapted from react-lua's approach. When children have `key` props, they're matched across renders by key. Without keys, positional matching is used (same index + same type = same element). This is what makes list reordering efficient.

### Original: The VNode → Fiber → Retained Node Pipeline
No existing library cleanly separates these three concerns:

```
h(Component, props)          -- VNode: "I want this"
  → Fiber tree               -- Reconciler: "Here's what changed"
    → Retained element tree   -- Layout + Paint: "Here's where it goes and how it looks"
```

This separation is what makes React React. Luact conflates fibers and output. Helium conflates state and rendering. FlexLöve has no virtual layer at all.

## Pipeline in Detail

```
[State Change]
     ↓
[setState marks fiber dirty]
     ↓
[love.update detects dirty fibers]
     ↓
[Re-render: call component functions, produce new VNodes]
     ↓
[Reconcile: diff old/new VNode children, reuse fibers where types match]
     ↓
[Commit: build retained element tree from fiber tree]
     ↓
[Run effects: useEffect callbacks execute after commit]
     ↓
[Layout: flexbox pass over retained tree, compute (x, y, w, h)]
     ↓
[love.draw: paint pass, walk retained tree issuing Love2D draw calls]
```

## What's Not Here Yet (the honest gaps)

### Text Input & Focus Management
React has a concept of controlled inputs where the component owns the value and the DOM just reflects it. Love2D has `love.textinput` and `love.keypressed` but no native text fields. A real implementation needs:
- Focus tracking (which element receives keyboard input)
- Cursor position management
- Text selection
- IME support

This is genuinely hard and is why most Love2D UI libraries punt on it. The correct approach is probably a dedicated `TextInput` element type that manages its own cursor/selection state internally, exposed via `value`/`onChange` props like React's controlled inputs.

### Scroll Containers
Overflow scrolling requires:
- A scissor region (Love2D supports this)
- Scroll offset state
- Scroll momentum / easing
- Scrollbar rendering
- Touch/drag scroll support

The layout engine already computes content overflow — adding scroll is a matter of offsetting child positions by scroll offset and clipping.

### Animation
React itself doesn't include animation — that's `react-spring`, `framer-motion`, etc. The correct approach for Reactor is a `useSpring` or `useTween` hook that interpolates values over time and triggers re-renders each frame:

```lua
local opacity = useSpring(visible and 1 or 0, { stiffness = 200, damping = 20 })
```

This would integrate with `love.update(dt)` naturally.

### Portals
Rendering a subtree outside the parent hierarchy (for modals, tooltips, dropdowns). Architecturally straightforward — the retained tree insertion point differs from the fiber tree parent — but needs implementation.

### Hot Reloading
Fennel and some Lua setups support hot-reload. Preserving hooks state across code reloads requires serializing fiber state and reattaching it after the module is re-required. Doable, extremely useful for game dev iteration.

### Performance: Dirty Tracking Granularity
Currently, any `setState` marks the entire tree for re-reconciliation. React uses fiber-level dirty tracking so only the subtree rooted at the changed component re-renders. This is the single most important optimization to add — without it, large UIs will bog down as every state change walks the full tree.

## File Structure for a Real Library

```
reactor/
├── init.lua            -- module entry, re-exports everything
├── core/
│   ├── vnode.lua       -- createElement / h()
│   ├── fiber.lua       -- fiber creation, tag types
│   ├── reconciler.lua  -- diff algorithm
│   ├── hooks.lua       -- useState, useEffect, useMemo, useRef, useContext
│   └── context.lua     -- createContext, Provider
├── layout/
│   ├── flexbox.lua     -- flexbox computation
│   ├── units.lua       -- px, %, vw, vh resolution
│   └── grid.lua        -- CSS grid (future)
├── render/
│   ├── painter.lua     -- Love2D draw calls
│   ├── elements.lua    -- built-in element renderers (box, text, image)
│   └── custom.lua      -- registerElement API
├── events/
│   ├── hittest.lua     -- spatial hit testing
│   ├── dispatch.lua    -- event bubbling
│   └── pointer.lua     -- mouse/touch/gamepad abstraction
├── components/
│   ├── ScrollView.lua  -- scrollable container
│   ├── TextInput.lua   -- text input with cursor
│   ├── Button.lua      -- accessible button
│   └── Modal.lua       -- portal-based modal
└── extras/
    ├── spring.lua      -- useSpring animation hook
    ├── devtools.lua     -- layout inspector overlay
    └── hot.lua         -- hot reload state preservation
```

## Why Not Just Embed a WebView?

I researched this. The TL;DR: Love2D's rendering pipeline is a single OpenGL context. Embedding Chromium (via CEF) or WebKit creates a separate window or requires GPU texture sharing that no existing Lua binding supports cleanly. You'd also lose the entire point — if you're running a browser inside your game, just use Electron.

The hybrid approach (Love2D for game world, separate webview window for UI) works for tools but not for in-game UI that needs to overlay and interact with game content.

## Why Not Port react-lua Directly?

react-lua is ~50K lines of Luau (Roblox's typed Lua). The core React reconciler (~15K lines) is relatively portable, but:
- Luau's type system doesn't exist in standard Lua 5.1/LuaJIT
- The renderer (`ReactRoblox`) is deeply coupled to Roblox's `Instance` hierarchy
- Testing infrastructure assumes Roblox's `TestService`
- Module resolution uses Roblox's package system

A direct port would be a multi-month project. Reactor takes the architectural lessons (fiber reconciliation, sequential hooks, key-based diffing) and re-implements them in ~600 lines of idiomatic Lua that integrates naturally with Love2D's callback model.
