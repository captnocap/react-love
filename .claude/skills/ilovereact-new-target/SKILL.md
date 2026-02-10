---
name: ilovereact-new-target
description: >
  Scaffold a new rendering target for iLoveReact. Use when the user asks to
  "add a target", "create a new target", "add a new rendering backend",
  "port iLoveReact to X", or wants to render React on a new surface/platform.
---

# Scaffold a New iLoveReact Target

## Overview

A target needs two things:
1. **JS server package** under `packages/<name>/` — thin wrapper around `@ilovereact/grid`
2. **Client script** under `targets/<name>/` — in the target's native language (Lua, Python, etc.)

Plus monorepo registration and an example app.

## Instructions

### Step 1: Determine Target Properties

Ask the user:
- **Target name** (kebab-case, e.g., `kitty`, `wezterm`, `godot`)
- **Transport**: WebSocket (target connects to Node.js server) or stdio (target spawns Node.js process)
- **Grid type**: Character grid (like CC/Neovim) or pixel grid (like Hammerspoon/AwesomeWM)
- **Coordinate base**: 0 (standard) or 1 (1-based grids like ComputerCraft)
- **Default dimensions**: width x height in chars or pixels
- **Color handling**: Pass CSS strings through, or quantize to a limited palette?
- **Client language**: What scripting language does the target platform use?

### Step 2: Create the JS Server Package

Create `packages/<name>/` with these files:

#### package.json
```json
{
  "name": "@ilovereact/<name>",
  "version": "0.1.0",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "dependencies": {
    "@ilovereact/grid": "*",
    "@ilovereact/native": "*"
  },
  "peerDependencies": {
    "react": "^18.3.0"
  }
}
```

#### src/index.ts
```typescript
export { create<Name>Server, type <Name>ServerOptions } from './<Name>Server';
```

#### src/<Name>Server.ts — Follow this exact pattern:

**For WebSocket transport:**
```typescript
import type { ReactNode } from 'react';
import {
  createRenderServer,
  createWebSocketTransport,
  type RenderServerHandle,
} from '@ilovereact/grid';

export interface <Name>ServerOptions {
  port?: number;
  width?: number;
  height?: number;
}

export function create<Name>Server(options: <Name>ServerOptions = {}): RenderServerHandle {
  const port = options.port ?? 8080;
  const width = options.width ?? <DEFAULT_WIDTH>;
  const height = options.height ?? <DEFAULT_HEIGHT>;

  const transport = createWebSocketTransport(port);

  return createRenderServer({
    width,
    height,
    transport,
    coordBase: <0_OR_1>,
    // Add flattenOptions if color mapping needed:
    // flattenOptions: { mapColor: myColorMapper, defaultFg: ... },
  });
}
```

**For stdio transport:**
```typescript
import type { ReactNode } from 'react';
import {
  createRenderServer,
  createStdioTransport,
  type RenderServerHandle,
} from '@ilovereact/grid';

export interface <Name>ServerOptions {
  width?: number;
  height?: number;
}

export function create<Name>Server(options: <Name>ServerOptions = {}): RenderServerHandle {
  const width = options.width ?? <DEFAULT_WIDTH>;
  const height = options.height ?? <DEFAULT_HEIGHT>;

  const transport = createStdioTransport();

  return createRenderServer({
    width,
    height,
    transport,
    coordBase: <0_OR_1>,
  });
}
```

#### Optional: src/palette.ts (if color mapping needed)
```typescript
// Map CSS color strings to the target's native color format
export function nearestColor(cssColor: string): any {
  // Parse hex/rgb, find nearest in palette
}
export const DEFAULT_FG = ...;
```

### Step 3: Register in Monorepo

1. Add to `workspaces` array in root `package.json`:
   ```json
   "packages/<name>"
   ```

2. Add TypeScript path alias in `tsconfig.base.json`:
   ```json
   "@ilovereact/<name>": ["./packages/<name>/src"]
   ```

3. Add build script in root `package.json` scripts:

   For WebSocket targets:
   ```json
   "build:<name>-demo": "esbuild --bundle --platform=node --format=esm --target=es2020 --jsx=automatic --outfile=examples/<name>-demo/dist/main.js --external:ws examples/<name>-demo/src/main.tsx"
   ```

   For stdio targets (no --external:ws):
   ```json
   "build:<name>-demo": "esbuild --bundle --platform=node --format=esm --target=es2020 --jsx=automatic --outfile=examples/<name>-demo/dist/main.js examples/<name>-demo/src/main.tsx"
   ```

4. Run `npm install` to link the new workspace.

### Step 4: Create the Client Script

Place in `targets/<name>/`. This script runs on the target platform and:
1. Connects to the transport (WebSocket URL or reads stdin line-by-line)
2. Parses each line as JSON -> array of DrawCommand: `{x, y, w, h, bg?, text?, fg?}`
3. For each command with `bg`: draw a filled rectangle at (x, y) with size (w, h) in that color
4. For each command with `text`: draw the text string at (x, y) with fg color (and bg if present)
5. Flush/present the screen

The client is typically 25-80 lines. Reference existing clients:
- WebSocket: `targets/computercraft/startup.lua`, `targets/hammerspoon/ilovereact.lua`
- Stdio: `targets/neovim/lua/ilovereact/init.lua`, `targets/awesome/ilovereact.lua`

### Step 5: Create Example App

Create `examples/<name>-demo/` with:

#### src/main.tsx
```tsx
import React from 'react';
import { create<Name>Server } from '@ilovereact/<name>';
import App from './App';

const server = create<Name>Server({
  // target-specific options
});

server.render(<App />);

process.on('SIGINT', () => {
  server.stop();
  process.exit(0);
});
```

#### src/App.tsx
Use lowercase JSX intrinsics for grid targets:
```tsx
import React from 'react';

function Box({ style, children }: { style?: any; children?: React.ReactNode }) {
  return <view style={style}>{children}</view>;
}

function Text({ style, children }: { style?: any; children?: React.ReactNode }) {
  return <text style={style}>{children}</text>;
}

export default function App() {
  return (
    <Box style={{ width: '100%', height: '100%', backgroundColor: '#1a1a2e', flexDirection: 'column' }}>
      <Box style={{ backgroundColor: '#16213e', padding: 1 }}>
        <Text style={{ color: '#e94560' }}>iLoveReact on <Name></Text>
      </Box>
    </Box>
  );
}
```

### Step 6: Build and Test

```bash
npm run build:<name>-demo
node examples/<name>-demo/dist/main.js
```

## Checklist
- [ ] `packages/<name>/package.json` with correct dependencies
- [ ] `packages/<name>/src/<Name>Server.ts` wrapping `createRenderServer`
- [ ] `packages/<name>/src/index.ts` re-exporting
- [ ] Root `package.json` updated: workspaces + build script
- [ ] `tsconfig.base.json` path alias added
- [ ] `targets/<name>/` client script
- [ ] `examples/<name>-demo/src/main.tsx` and `App.tsx`
- [ ] `npm install` run to link workspace
- [ ] Build succeeds, client connects and renders
