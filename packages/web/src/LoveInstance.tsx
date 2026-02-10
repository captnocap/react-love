/**
 * <LoveInstance>: Mount a Love2D WASM canvas as a React component.
 *
 * Children render as DOM overlays on top of the canvas.
 * Nests arbitrarily -- each instance gets its own Module.FS namespace.
 *
 * Transport: Module.FS file I/O (not js.global:eval).
 * Cost: ~4MB per instance.
 */

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { BridgeProvider, RendererProvider } from '../../shared/src/context';
import { WebBridge, bridges } from './WebBridge';
import type { EmscriptenModule } from './WebBridge';

/** Tracks the namespace chain for nested instances */
const NamespaceContext = createContext<string | null>(null);

export interface LoveInstanceProps {
  /** Unique ID for this instance */
  id: string;
  /** Path to the compiled love.js output (the .js entry point) */
  src: string;
  /** Canvas dimensions */
  width?: number;
  height?: number;
  /** WASM memory in bytes (default 64MB) */
  memory?: number;
  /** CSS class for the wrapper */
  className?: string;
  /** React children render ON TOP of the canvas */
  children?: ReactNode;
  /**
   * Called when the bridge is ready.
   * Useful for sending initial configuration before children mount.
   */
  onReady?: (bridge: WebBridge) => void;
}

export function LoveInstance({
  id,
  src,
  width,
  height,
  memory = 67108864,
  className,
  children,
  onReady,
}: LoveInstanceProps) {
  const parentNamespace = useContext(NamespaceContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [bridge, setBridge] = useState<WebBridge | null>(null);
  const [ready, setReady] = useState(false);

  // Build the namespace chain
  const namespace = parentNamespace ? `${parentNamespace}__${id}` : id;

  useEffect(() => {
    if (!containerRef.current) return;

    let destroyed = false;
    let moduleBridge: WebBridge | null = null;

    const init = async () => {
      // Create canvas
      const canvas = document.createElement('canvas');
      canvas.id = `love-canvas-${namespace}`;
      if (width) canvas.width = width;
      if (height) canvas.height = height;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.display = 'block';
      containerRef.current!.appendChild(canvas);
      canvasRef.current = canvas;

      try {
        const Module = await loadLoveModule({
          canvas,
          src,
          namespace,
          memory,
        });

        if (destroyed) return;

        // Create the bridge pointing at this module's FS
        moduleBridge = bridges.create(Module as EmscriptenModule, namespace);

        moduleBridge.onReady(() => {
          if (destroyed) return;
          setBridge(moduleBridge);
          setReady(true);
          onReady?.(moduleBridge!);
        });
      } catch (err) {
        console.error(`[LoveInstance:${namespace}] Failed to boot:`, err);
      }
    };

    init();

    return () => {
      destroyed = true;
      moduleBridge?.destroy();
      if (canvasRef.current) {
        canvasRef.current.remove();
        canvasRef.current = null;
      }
      setBridge(null);
      setReady(false);
    };
  }, [id, src, namespace, memory]);

  return (
    <NamespaceContext.Provider value={namespace}>
      <div className={`relative ${className || ''}`} style={{ width, height }}>
        {/* Love2D canvas mounts here */}
        <div ref={containerRef} className="absolute inset-0" />

        {/* React overlay layer */}
        {ready && bridge && (
          <BridgeProvider bridge={bridge}>
            <RendererProvider mode="web">
              <div className="absolute inset-0 pointer-events-none">
                <div className="relative w-full h-full [&>*]:pointer-events-auto">
                  {children}
                </div>
              </div>
            </RendererProvider>
          </BridgeProvider>
        )}

        {/* Loading indicator */}
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="text-white/40 text-xs">Loading {id}...</span>
          </div>
        )}
      </div>
    </NamespaceContext.Provider>
  );
}

// ============================================================================
// love.js Module loader
// ============================================================================

interface LoadConfig {
  canvas: HTMLCanvasElement;
  src: string;
  namespace: string;
  memory: number;
}

/**
 * Load a love.js module.
 *
 * Adapt this to your love.js build. The typical pattern is:
 * 1. love.js produces a .js file + .wasm + .data (or .love pre-packaged)
 * 2. The .js file exports a factory that accepts Module config
 * 3. We pass our canvas and memory settings
 *
 * Each call creates an isolated WASM instance with its own FS.
 */
async function loadLoveModule(config: LoadConfig): Promise<any> {
  return new Promise((resolve, reject) => {
    // Create isolated Module config
    const Module: any = {
      canvas: config.canvas,
      INITIAL_MEMORY: config.memory,

      // Prevent this instance from grabbing global keyboard/mouse
      keyboardListeningElement: config.canvas,

      // Callback when WASM is ready
      onRuntimeInitialized: () => {
        resolve(Module);
      },

      // Error handling
      onAbort: (msg: string) => {
        reject(new Error(`[${config.namespace}] WASM abort: ${msg}`));
      },

      // Print routing for debugging
      print: (text: string) => console.log(`[love:${config.namespace}]`, text),
      printErr: (text: string) => console.warn(`[love:${config.namespace}]`, text),

      // Pre-run: write the namespace into FS so Lua can read it
      preRun: [
        (mod: any) => {
          mod.FS.writeFile('/__bridge_namespace', config.namespace);
        },
      ],
    };

    // Dynamically load the love.js script for this instance
    const script = document.createElement('script');
    script.src = config.src;
    script.onerror = () => reject(new Error(`Failed to load ${config.src}`));
    document.head.appendChild(script);

    // Attach Module so the script picks it up
    (window as any)[`Module_${config.namespace}`] = Module;
  });
}
