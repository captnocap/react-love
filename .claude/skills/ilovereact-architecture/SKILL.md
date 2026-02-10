---
name: ilovereact-architecture
description: >
  Complete architecture reference for the iLoveReact framework. Use when the user
  asks about how iLoveReact works, its architecture, package structure, available
  targets, style system, components, build system, or any general question about
  the framework. Also use when you need context before modifying any code in this
  monorepo.
---

# iLoveReact Architecture Reference

iLoveReact lets you write React JSX once and render it on any surface: Love2D, terminal, Neovim, ComputerCraft (Minecraft), Hammerspoon (macOS), AwesomeWM (Linux), or web browsers.

Built on `react-reconciler` with a custom flexbox layout engine, React Native-inspired style system, animation primitives, and a pluggable transport+painter architecture.

## Monorepo Structure

```
packages/
  shared/    @ilovereact/core      Primitives (Box, Text, Image), style types, animation, hooks, bridge interface
  native/    @ilovereact/native    react-reconciler host config, createRoot, Instance tree, event dispatcher
  web/       @ilovereact/web       DOM overlay renderer for Love2D web builds (Emscripten bridge)
  grid/      @ilovereact/grid      Grid layout engine, flatten, transports (WebSocket, stdio), RenderServer
  cc/        @ilovereact/cc        ComputerCraft target (WebSocket, 51x19 char grid, 16-color palette)
  nvim/      @ilovereact/nvim      Neovim target (stdio, floating windows, 24-bit highlights)
  hs/        @ilovereact/hs        Hammerspoon target (WebSocket, pixel canvas)
  awesome/   @ilovereact/awesome   AwesomeWM target (stdio, Cairo/Pango pixel rendering)
  terminal/  @ilovereact/terminal  Terminal target (direct ANSI truecolor, no external client)

targets/           Client-side scripts (Lua) for each target
examples/          Demo apps for each target
cli/               `ilovereact init/dev/build` CLI (Love2D target only)
lua/               Love2D Lua modules (tree, layout, painter, bridge, events)
native/            QuickJS FFI shim (C code)
quickjs/           QuickJS source (compiled via Makefile)
packaging/         Fused Love2D executable packaging
```

## Data Flow

```
JSX Components
  -> react-reconciler (packages/native hostConfig)
    -> Instance tree (id, type, props, handlers, children)
      -> Transport layer (varies by target)
        -> Layout + Flatten (packages/grid or lua/)
          -> Draw commands -> Native painter
```

## Target Types

There are two fundamentally different rendering paths:

### Full-featured targets (Love2D, Web)
- Love2D: QuickJS FFI bridge, Lua-side layout+painter with full graphics (gradients, shadows, transforms, images, clipping, scroll)
- Web: DOM elements via `<div>`, `<span>`, `<img>` with CSS flexbox

### Grid targets (CC, Neovim, Hammerspoon, AwesomeWM, Terminal)
All use `@ilovereact/grid` which provides:
- `computeLayout(root, width, height, options)` -> LayoutNode tree with {x,y,w,h}
- `flatten(layoutTree, options)` -> DrawCommand[] with {x,y,w,h,bg?,text?,fg?}
- `createRenderServer(options)` -> hooks into reconciler commit, broadcasts frames via transport
- Transports: `createWebSocketTransport(port)` or `createStdioTransport()`

Grid target servers are tiny (~15 lines). They wrap `createRenderServer` with target defaults:
- Transport choice (WebSocket vs stdio)
- Grid dimensions (chars or pixels)
- coordBase (0 for pixel, 1 for 1-based char grids like CC)
- Optional color mapping function (e.g., CC 16-color quantization)

## Key Interfaces

### Instance (reconciler node) — packages/native/src/hostConfig.ts
```typescript
interface Instance {
  id: number;
  type: string;       // 'View', 'Text', 'Image'
  props: Record<string, any>;
  handlers: Record<string, Function>;
  children: Instance[];
}
```

### Transport — packages/grid/src/transports/types.ts
```typescript
interface Transport {
  broadcast(data: string): void;
  onConnect?(callback: (send: (data: string) => void) => void): void;
  stop(): void;
}
```

### DrawCommand — packages/grid/src/flatten.ts
```typescript
interface DrawCommand {
  x: number; y: number; w: number; h: number;
  bg?: any; text?: string; fg?: any;
}
```

### RenderServerOptions — packages/grid/src/RenderServer.ts
```typescript
interface RenderServerOptions {
  width: number;
  height: number;
  transport: Transport;
  coordBase?: number;       // 0 = pixel, 1 = 1-based char grid
  flattenOptions?: {
    mapColor?: (css: string) => any;
    defaultFg?: any;
    defaultBg?: any;
  };
}
```

### IBridge (Love2D/Web only) — packages/shared/src/bridge.ts
```typescript
interface IBridge {
  send(type: string, payload?: any): void;
  flush(): void;
  subscribe(type: string, fn: Listener): Unsubscribe;
  rpc<T>(method: string, args?: any, timeoutMs?: number): Promise<T>;
  setState(key: string, value: any): void;
  isReady(): boolean;
  onReady(callback: () => void): void;
  destroy(): void;
}
```

## Primitives and Components

### Universal primitives (from @ilovereact/core)
- `Box` — flexbox container. In web mode: `<div>`. In native mode: `'View'` host element.
- `Text` — text content. In web mode: `<span>`. In native mode: `'Text'` host element.
- `Image` — image display. In web mode: `<img>`. In native mode: `'Image'` host element.

### For grid targets, use lowercase JSX intrinsics directly:
```tsx
<view style={...}>{children}</view>
<text style={...}>{text}</text>
```
These go through the reconciler -> Instance tree -> grid layout pipeline.

### Interactive components (from @ilovereact/core)
Pressable, TextInput, ScrollView, Modal, Slider, Switch, Checkbox, Radio, RadioGroup, Select, FlatList, Portal, PortalHost

### Animation (from @ilovereact/core)
AnimatedValue, useAnimation, useSpring, useTransition, Easing, parallel, sequence, stagger, loop

## Style System

The `Style` interface (packages/shared/src/types.ts) supports:

| Category | Properties |
|----------|-----------|
| Sizing | width, height, minWidth, minHeight, maxWidth, maxHeight, aspectRatio |
| Flexbox | display, flexDirection, flexWrap, justifyContent, alignItems, alignSelf, flexGrow, flexShrink, flexBasis, gap |
| Spacing | padding(Top/Right/Bottom/Left), margin(Top/Right/Bottom/Left) |
| Visual | backgroundColor, borderRadius, borderWidth, borderColor, overflow, opacity, zIndex |
| Shadow | shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur |
| Gradient | backgroundGradient: { direction, colors } |
| Transform | transform: { translateX/Y, rotate, scaleX/Y, originX/Y } |
| Text | color, fontSize, fontFamily, fontWeight, textAlign, textOverflow, lineHeight, letterSpacing |
| Image | objectFit |
| Position | position (relative/absolute), top, bottom, left, right |

Colors: CSS strings (`'#ff0000'`, `'rgba(...)'`) or Love2D arrays `[r, g, b, a?]` (0-1 range).

**Grid target note:** Grid layout only supports: width, height (abs or %), flexDirection, flexGrow, padding, gap. Visual props (backgroundColor, color) pass through to draw commands.

## Build System

All bundling via **esbuild**. Key patterns:

- Love2D: `--format=iife --global-name=ReactLove` (runs in QuickJS)
- Grid targets (Node.js): `--platform=node --format=esm`
- WebSocket targets: `--external:ws`
- Web: `--format=esm`

Build commands in root package.json: `npm run build:<target>-demo`

Watch mode: `npm run watch:<target>`

## Workspace Config

- npm workspaces monorepo
- Packages reference each other via `"*"` version
- TypeScript path aliases in tsconfig.base.json map `@ilovereact/*` to `packages/*/src`
- Target ES2020, JSX react-jsx, bundler module resolution

## Event System

Handlers (onClick, onKeyDown, etc.) NEVER cross the bridge. They stay in JS in a `handlerRegistry` keyed by node ID. Only a `hasHandlers` boolean crosses to Lua. Lua dispatches events referencing `targetId`, and JS does handler invocation with event bubbling.

Event types on BoxProps: onClick, onRelease, onPointerEnter/Leave, onKeyDown/Up, onTextInput, onWheel, onTouchStart/End/Move, onGamepadPress/Release/Axis, onDragStart/Drag/DragEnd.
