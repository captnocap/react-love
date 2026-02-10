/**
 * WebSocket transport for render servers.
 *
 * Broadcasts frames to all connected WS clients.
 * Used by targets like ComputerCraft and Hammerspoon.
 */

import { WebSocketServer, type WebSocket } from 'ws';
import type { Transport } from './types';

export function createWebSocketTransport(port: number): Transport {
  const clients = new Set<WebSocket>();
  let connectCallback: ((send: (data: string) => void) => void) | null = null;

  const wss = new WebSocketServer({ port });

  wss.on('connection', (ws) => {
    clients.add(ws);
    ws.on('close', () => clients.delete(ws));
    ws.on('error', () => clients.delete(ws));

    if (connectCallback) {
      connectCallback((data) => {
        if (ws.readyState === ws.OPEN) {
          ws.send(data);
        }
      });
    }
  });

  return {
    broadcast(data: string) {
      for (const ws of clients) {
        if (ws.readyState === ws.OPEN) {
          ws.send(data);
        }
      }
    },

    onConnect(callback) {
      connectCallback = callback;
    },

    stop() {
      wss.close();
      clients.clear();
    },
  };
}
