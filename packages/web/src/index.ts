// Web renderer
export { WebBridge, bridges } from './WebBridge';
export type { EmscriptenModule } from './WebBridge';
export { LoveInstance } from './LoveInstance';
export type { LoveInstanceProps } from './LoveInstance';
export { CanvasBridge } from './CanvasBridge';

// Re-export everything from shared
export {
  // Context & providers
  BridgeProvider,
  useBridge,
  RendererProvider,
  useRendererMode,

  // Hooks
  useLove,
  useLoveEvent,
  useLoveRPC,
  useLoveState,
  useLoveReady,
  useLoveSend,
  useLoveOverlays,

  // Primitives
  Box,
  Text,
  Image,
  styleToCSS,
  colorToCSS,
} from '../../shared/src/index';

// Re-export types from shared
export type {
  IBridge,
  BridgeEvent,
  Listener,
  Unsubscribe,
  RendererMode,
  Style,
  Color,
  LoveEvent,
  BoxProps,
  TextProps,
  ImageProps,
  Overlay,
} from '../../shared/src/index';
