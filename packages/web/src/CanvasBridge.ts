/**
 * CanvasBridge: Bridges the react-reconciler to a Love2D WASM instance
 * running in "canvas" mode (FS transport + native rendering pipeline).
 *
 * Outbound: Sets globalThis.__hostFlush so the reconciler writes mutation
 * commands to Module.FS at /__reconciler_in.json.
 *
 * Inbound: Polls the Module.FS outbox for events from Lua and dispatches
 * them to the handlerRegistry via eventDispatcher.
 */

import type { EmscriptenModule } from './WebBridge';
import type { IBridge, Listener, Unsubscribe, BridgeEvent } from '../../shared/src/bridge';
import { initEventDispatching } from '../../native/src/eventDispatcher';

export class CanvasBridge implements IBridge {
  private module: EmscriptenModule;
  private namespace: string;
  private listeners = new Map<string, Set<Listener>>();
  private polling = false;
  private animFrameId: number | null = null;
  private ready = false;
  private readyCallbacks: Array<() => void> = [];
  private commandQueue: Array<{ type: string; payload: any }> = [];

  // FS file paths
  private reconcilerInboxPath: string;
  private bridgeInboxPath: string;
  private outboxPath: string;
  private readyPath: string;

  constructor(module: EmscriptenModule, namespace?: string) {
    this.module = module;
    this.namespace = namespace || 'default';

    this.reconcilerInboxPath = '/__reconciler_in.json';

    if (this.namespace === 'default') {
      this.bridgeInboxPath = '/__bridge_in.json';
      this.outboxPath = '/__bridge_out.json';
    } else {
      this.bridgeInboxPath = `/__bridge_${this.namespace}_in.json`;
      this.outboxPath = `/__bridge_${this.namespace}_out.json`;
    }
    this.readyPath = `/__bridge_${this.namespace}_ready`;

    this.installHostFlush();
    this.waitForReady();
  }

  /**
   * Wire up globalThis.__hostFlush so the react-reconciler's flushToHost()
   * writes mutation commands to Module.FS instead of QuickJS FFI.
   */
  private installHostFlush(): void {
    const self = this;
    (globalThis as any).__hostFlush = (commands: any[]) => {
      try {
        const data = JSON.stringify(commands);
        self.module.FS.writeFile(self.reconcilerInboxPath, data);
      } catch (e) {
        console.error('[CanvasBridge] __hostFlush error:', e);
      }
    };

    // Also provide a no-op __hostGetEvents since some code may reference it
    if (!(globalThis as any).__hostGetEvents) {
      (globalThis as any).__hostGetEvents = () => [];
    }
  }

  private waitForReady(): void {
    const check = () => {
      try {
        this.module.FS.stat(this.readyPath);
        this.ready = true;

        // Wire up event dispatching from Lua events → handlerRegistry
        initEventDispatching(this);

        this.startPolling();
        this.readyCallbacks.forEach(cb => cb());
        this.readyCallbacks = [];
      } catch {
        setTimeout(check, 50);
      }
    };
    check();
  }

  private startPolling(): void {
    if (this.polling) return;
    this.polling = true;

    const poll = () => {
      if (!this.polling) return;

      // Read outbox from Lua (events)
      try {
        const data = this.module.FS.readFile(
          this.outboxPath,
          { encoding: 'utf8' }
        ) as string;
        this.module.FS.unlink(this.outboxPath);

        const events: BridgeEvent[] = JSON.parse(data);
        for (const evt of events) {
          this.listeners.get(evt.type)?.forEach(fn => {
            try { fn(evt.payload); } catch (e) {
              console.error('[CanvasBridge] Listener error:', e);
            }
          });
          // Wildcard listeners
          this.listeners.get('*')?.forEach(fn => {
            try { fn(evt); } catch { /* swallow */ }
          });
        }
      } catch {
        // No outbox file -- normal
      }

      // Flush any pending bridge commands (non-reconciler)
      this.flush();

      this.animFrameId = requestAnimationFrame(poll);
    };

    this.animFrameId = requestAnimationFrame(poll);
  }

  // ── IBridge interface ─────────────────────────────────────

  send(type: string, payload?: any): void {
    this.commandQueue.push({ type, payload: payload ?? null });
  }

  flush(): void {
    if (this.commandQueue.length === 0) return;
    try {
      const data = JSON.stringify(this.commandQueue);
      this.module.FS.writeFile(this.bridgeInboxPath, data);
      this.commandQueue = [];
    } catch (e) {
      console.error('[CanvasBridge] flush error:', e);
    }
  }

  subscribe(type: string, fn: Listener): Unsubscribe {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type)!.add(fn);
    return () => { this.listeners.get(type)?.delete(fn); };
  }

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
      this.flush();
    });
  }

  setState(key: string, value: any): void {
    this.send('state:update', { key, value });
  }

  isReady(): boolean { return this.ready; }

  onReady(callback: () => void): void {
    if (this.ready) callback();
    else this.readyCallbacks.push(callback);
  }

  destroy(): void {
    this.polling = false;
    if (this.animFrameId !== null) cancelAnimationFrame(this.animFrameId);
    this.listeners.clear();
    this.commandQueue = [];
    delete (globalThis as any).__hostFlush;
  }
}
