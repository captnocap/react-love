/**
 * WebBridge: IBridge implementation over Emscripten Module.FS.
 *
 * Both Lua and JS share Emscripten's in-memory filesystem.
 * No js.global:eval(), no custom exports. Just JSON files
 * on a shared ramdisk.
 *
 * Love2D writes __bridge_out.json -> JS reads via Module.FS.readFile
 * JS writes __bridge_in.json -> Love2D reads via love.filesystem.read
 *
 * Both sides batch and flush once per frame.
 */

import type { IBridge, BridgeEvent, Listener, Unsubscribe } from '../../shared/src/bridge';

// ============================================================================
// Emscripten Module type (subset we interact with)
// ============================================================================

export interface EmscriptenModule {
  FS: {
    readFile(path: string, opts?: { encoding?: string }): string | Uint8Array;
    writeFile(path: string, data: string | Uint8Array): void;
    unlink(path: string): void;
    stat(path: string): any;
  };
  canvas: HTMLCanvasElement;
}

// ============================================================================
// WebBridge
// ============================================================================

export class WebBridge implements IBridge {
  private module: EmscriptenModule;
  private namespace: string;
  private commandQueue: Array<{ type: string; payload: any }> = [];
  private listeners: Map<string, Set<Listener>> = new Map();
  private polling = false;
  private animFrameId: number | null = null;
  private ready = false;
  private readyCallbacks: Array<() => void> = [];

  // File paths (namespaced for multi-instance)
  private inboxPath: string;
  private outboxPath: string;
  private readyPath: string;

  constructor(module: EmscriptenModule, namespace?: string) {
    this.module = module;
    this.namespace = namespace || 'default';

    // Match the Lua side's file naming
    if (this.namespace === 'default') {
      this.inboxPath = '/__bridge_in.json';
      this.outboxPath = '/__bridge_out.json';
      this.readyPath = `/__bridge_${this.namespace}_ready`;
    } else {
      this.inboxPath = `/__bridge_${this.namespace}_in.json`;
      this.outboxPath = `/__bridge_${this.namespace}_out.json`;
      this.readyPath = `/__bridge_${this.namespace}_ready`;
    }

    this.waitForReady();
  }

  // ============================================================================
  // Lifecycle
  // ============================================================================

  private waitForReady(): void {
    const check = () => {
      try {
        this.module.FS.stat(this.readyPath);
        // File exists -- Love2D is ready
        this.ready = true;
        this.startPolling();
        this.readyCallbacks.forEach((cb) => cb());
        this.readyCallbacks = [];
      } catch {
        // Not ready yet, keep checking
        setTimeout(check, 50);
      }
    };
    check();
  }

  onReady(callback: () => void): void {
    if (this.ready) callback();
    else this.readyCallbacks.push(callback);
  }

  isReady(): boolean {
    return this.ready;
  }

  // ============================================================================
  // React -> Love2D: Command batching + flush
  // ============================================================================

  /** Queue a command. Won't be sent until flush(). */
  send(type: string, payload?: any): void {
    this.commandQueue.push({ type, payload: payload ?? null });
  }

  /**
   * Write all queued commands to the inbox file.
   * Call once per frame, or let the polling loop handle it.
   */
  flush(): void {
    if (this.commandQueue.length === 0) return;

    try {
      const data = JSON.stringify(this.commandQueue);
      this.module.FS.writeFile(this.inboxPath, data);
      this.commandQueue = [];
    } catch (e) {
      console.error(`[WebBridge:${this.namespace}] Flush error:`, e);
    }
  }

  // ============================================================================
  // Love2D -> React: Poll outbox via rAF
  // ============================================================================

  private startPolling(): void {
    if (this.polling) return;
    this.polling = true;

    const poll = () => {
      if (!this.polling) return;

      // Read outbox from Love2D
      try {
        const data = this.module.FS.readFile(this.outboxPath, { encoding: 'utf8' }) as string;
        this.module.FS.unlink(this.outboxPath);

        const events: BridgeEvent[] = JSON.parse(data);
        for (const evt of events) {
          // Dispatch to type-specific listeners
          this.listeners.get(evt.type)?.forEach((fn) => {
            try { fn(evt.payload); } catch (e) {
              console.error(`[WebBridge:${this.namespace}] Listener error:`, e);
            }
          });
          // Dispatch to wildcard listeners
          this.listeners.get('*')?.forEach((fn) => {
            try { fn(evt); } catch (e) {
              // Swallow wildcard listener errors
            }
          });
        }
      } catch {
        // File doesn't exist -- nothing to read. Normal.
      }

      // Flush any pending commands while we're here
      this.flush();

      this.animFrameId = requestAnimationFrame(poll);
    };

    this.animFrameId = requestAnimationFrame(poll);
  }

  // ============================================================================
  // Event subscription
  // ============================================================================

  subscribe(type: string, fn: Listener): Unsubscribe {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type)!.add(fn);
    return () => { this.listeners.get(type)?.delete(fn); };
  }

  // ============================================================================
  // RPC: Request/Response over the file bridge
  // ============================================================================

  async rpc<T = any>(method: string, args?: any, timeoutMs = 5000): Promise<T> {
    const id = crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9);

    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        unsub();
        reject(new Error(`RPC timeout: ${method} (${timeoutMs}ms)`));
      }, timeoutMs);

      const unsub = this.subscribe(`rpc:${id}`, (response: any) => {
        clearTimeout(timer);
        unsub();
        if (response.error) reject(new Error(response.error));
        else resolve(response.result as T);
      });

      this.send('rpc:call', { id, method, args: args ?? null });
      // Flush immediately so the RPC request doesn't wait for next frame
      this.flush();
    });
  }

  // ============================================================================
  // Shared state convenience
  // ============================================================================

  setState(key: string, value: any): void {
    this.send('state:update', { key, value });
  }

  // ============================================================================
  // Cleanup
  // ============================================================================

  destroy(): void {
    this.polling = false;
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
    this.listeners.clear();
    this.commandQueue = [];
  }
}

// ============================================================================
// Multi-instance registry
// ============================================================================

class BridgeRegistry {
  private instances = new Map<string, WebBridge>();

  create(module: EmscriptenModule, namespace?: string): WebBridge {
    const ns = namespace || 'default';
    const bridge = new WebBridge(module, ns);
    this.instances.set(ns, bridge);
    return bridge;
  }

  get(namespace: string): WebBridge | undefined {
    return this.instances.get(namespace);
  }

  list(): WebBridge[] {
    return Array.from(this.instances.values());
  }

  destroyAll(): void {
    this.instances.forEach((b) => b.destroy());
    this.instances.clear();
  }
}

export const bridges = new BridgeRegistry();
