---
name: ilovereact-component
description: >
  Build React components for iLoveReact using its primitives and style system.
  Use when the user asks to "create a component", "build a UI", "make a widget",
  "style a component", "add a button", "create a layout", "build a dashboard",
  or any request involving building UI with iLoveReact primitives. Also use when
  the user asks about available components, styling, or animation.
---

# Build iLoveReact Components

## Which Primitives to Use

### Grid targets (terminal, CC, Neovim, Hammerspoon, AwesomeWM)

Use lowercase JSX intrinsics. Define convenience wrappers:

```tsx
function Box({ style, children }: { style?: any; children?: React.ReactNode }) {
  return <view style={style}>{children}</view>;
}

function Text({ style, children }: { style?: any; children?: React.ReactNode }) {
  return <text style={style}>{children}</text>;
}
```

### Love2D / Web targets

Import from `@ilovereact/core`:

```tsx
import { Box, Text, Image, Pressable, ScrollView, TextInput, Modal } from '@ilovereact/core';
```

These auto-switch between DOM elements (web) and reconciler host elements (native) based on RendererMode context.

## Style Reference

Colors accept CSS strings (`'#ff0000'`, `'rgba(0,0,0,0.5)'`) or Love2D arrays (`[1, 0, 0, 1]`).

### Layout (works everywhere)
```typescript
{
  width: number | string,        // absolute px/chars or '%'
  height: number | string,
  flexDirection: 'row' | 'column',  // default 'column'
  flexGrow: number,
  flexShrink: number,
  flexBasis: number | string | 'auto',
  justifyContent: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
  alignItems: 'start' | 'center' | 'end' | 'stretch',
  alignSelf: 'auto' | 'start' | 'center' | 'end' | 'stretch',
  flexWrap: 'nowrap' | 'wrap',
  gap: number | string,
  padding: number | string,      // also paddingTop/Right/Bottom/Left
  margin: number | string,       // also marginTop/Right/Bottom/Left
  display: 'flex' | 'none',
}
```

### Visual (Love2D/Web only, except backgroundColor and color which work on grid)
```typescript
{
  backgroundColor: Color,
  color: Color,                  // text color
  borderRadius: number,
  borderWidth: number,           // also borderTop/Right/Bottom/LeftWidth
  borderColor: Color,
  overflow: 'visible' | 'hidden' | 'scroll',
  opacity: number,
  zIndex: number,
  // Shadow
  shadowColor: Color,
  shadowOffsetX: number,
  shadowOffsetY: number,
  shadowBlur: number,
  // Gradient
  backgroundGradient: { direction: 'horizontal' | 'vertical' | 'diagonal', colors: [Color, Color] },
  // Transform
  transform: { translateX?, translateY?, rotate?, scaleX?, scaleY?, originX?, originY? },
}
```

### Text (Love2D/Web only, except color which works on grid)
```typescript
{
  fontSize: number,
  fontFamily: string,
  fontWeight: 'normal' | 'bold' | number,
  textAlign: 'left' | 'center' | 'right',
  textOverflow: 'clip' | 'ellipsis',
  textDecorationLine: 'none' | 'underline' | 'line-through',
  lineHeight: number,
  letterSpacing: number,
}
```

### Positioning
```typescript
{
  position: 'relative' | 'absolute',
  top: number | string,
  bottom: number | string,
  left: number | string,
  right: number | string,
}
```

## Component Catalog

### Box (container)
```tsx
<Box style={{ flexDirection: 'row', gap: 8, padding: 16, backgroundColor: '#1a1a2e' }}>
  {children}
</Box>
```
Events: onClick, onRelease, onPointerEnter/Leave, onKeyDown/Up, onTextInput, onWheel, onTouchStart/End/Move, onGamepadPress/Release/Axis, onDragStart/Drag/DragEnd

### Text
```tsx
<Text style={{ color: '#fff', fontSize: 14 }} numberOfLines={2}>Hello</Text>
```
Events: onKeyDown, onKeyUp, onTextInput

### Image (Love2D/Web only)
```tsx
<Image src="path/to/image.png" style={{ width: 100, height: 100, objectFit: 'cover' }} />
```

### Pressable (Love2D/Web only)
```tsx
<Pressable
  onPress={() => console.log('pressed')}
  onPressIn={() => {}}
  onPressOut={() => {}}
  onLongPress={() => {}}
  hitSlop={10}
  style={(state) => ({
    backgroundColor: state.pressed ? '#333' : '#666',
    opacity: state.hovered ? 0.8 : 1,
  })}
>
  {(state) => <Text>{state.pressed ? 'Pressing...' : 'Press me'}</Text>}
</Pressable>
```

### TextInput (Love2D/Web only)
```tsx
<TextInput
  value={text}
  onChangeText={setText}
  onSubmit={(val) => console.log(val)}
  placeholder="Type here..."
  placeholderColor="#888"
  style={{ backgroundColor: '#222', padding: 8 }}
  textStyle={{ color: '#fff', fontSize: 14 }}
  autoFocus
/>
```

### ScrollView (Love2D/Web only)
```tsx
<ScrollView
  style={{ height: 200 }}
  horizontal={false}
  showScrollIndicator
  onScroll={({ scrollX, scrollY }) => {}}
>
  {/* tall content */}
</ScrollView>
```

### FlatList (Love2D/Web only)
```tsx
<FlatList
  data={items}
  renderItem={({ item, index }) => <ItemRow item={item} />}
  keyExtractor={(item) => item.id}
  itemHeight={40}
  style={{ height: 300 }}
  onEndReached={loadMore}
/>
```

### Modal (Love2D/Web only)
```tsx
<Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
  <Box style={{ backgroundColor: '#fff', padding: 20 }}>
    <Text>Modal content</Text>
  </Box>
</Modal>
```

### Form Components (Love2D/Web only)
```tsx
<Slider value={val} onValueChange={setVal} min={0} max={100} />
<Switch value={on} onValueChange={setOn} />
<Checkbox checked={checked} onValueChange={setChecked} label="Option" />
<RadioGroup value={selected} onValueChange={setSelected}>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>
<Select
  value={selected}
  onValueChange={setSelected}
  options={[{ label: 'One', value: '1' }, { label: 'Two', value: '2' }]}
/>
```

## Animation System (Love2D/Web only)

```tsx
import { useAnimation, useSpring, AnimatedValue, Easing, parallel, sequence, stagger, loop } from '@ilovereact/core';

// Timing animation
const opacity = useAnimation(0, 1, { duration: 300, easing: Easing.easeInOut });

// Spring animation
const scale = useSpring(1, { stiffness: 150, damping: 12 });

// Manual AnimatedValue
const val = new AnimatedValue(0);
val.timing({ toValue: 100, duration: 500 }).start();
val.spring({ toValue: 100, stiffness: 200 }).start();

// Composition
parallel([anim1, anim2]).start();
sequence([anim1, anim2]).start();
stagger(100, [anim1, anim2, anim3]).start();
loop(anim, { iterations: 3 }).start();
```

## Hooks

```tsx
import { useLove, useLoveEvent, useLoveRPC, useLoveState, useLoveReady, useLoveSend } from '@ilovereact/core';

// Access bridge
const bridge = useLove();

// Listen to bridge events
useLoveEvent('game:score', (data) => { ... });

// Call Lua functions
const result = await useLoveRPC()('getPlayerHealth', { id: 1 });

// Shared state with Lua
const [count, setCount] = useLoveState('counter', 0);

// Wait for bridge ready
const ready = useLoveReady();

// Send messages to Lua
const send = useLoveSend();
send('ui:action', { type: 'click' });
```

## Common Patterns

### Grid Target Dashboard
```tsx
function Dashboard() {
  return (
    <Box style={{ width: '100%', height: '100%', backgroundColor: '#0a0a0a', flexDirection: 'column' }}>
      <Box style={{ backgroundColor: '#16213e', padding: 1 }}>
        <Text style={{ color: '#e94560' }}>Dashboard</Text>
      </Box>
      <Box style={{ flexDirection: 'row', flexGrow: 1 }}>
        <Box style={{ width: '30%', backgroundColor: '#1a1a2e', padding: 1 }}>
          <Text style={{ color: '#888' }}>Sidebar</Text>
        </Box>
        <Box style={{ flexGrow: 1, padding: 1 }}>
          <Text style={{ color: '#fff' }}>Main Content</Text>
        </Box>
      </Box>
      <Box style={{ backgroundColor: '#16213e', padding: 1 }}>
        <Text style={{ color: '#555' }}>Footer</Text>
      </Box>
    </Box>
  );
}
```

### Love2D HUD Overlay
```tsx
function HUD() {
  const [health] = useLoveState('health', 100);
  return (
    <Box style={{ position: 'absolute', top: 10, left: 10, flexDirection: 'row', gap: 8 }}>
      <Box style={{
        width: 200, height: 20,
        backgroundColor: '#333',
        borderRadius: 4,
        overflow: 'hidden',
      }}>
        <Box style={{
          width: `${health}%`, height: '100%',
          backgroundColor: health > 50 ? '#4CAF50' : '#f44336',
        }} />
      </Box>
      <Text style={{ color: '#fff', fontSize: 14 }}>{health} HP</Text>
    </Box>
  );
}
```
