/**
 * Transport interface for render servers.
 *
 * Implementations deliver serialized draw command frames to target clients.
 */

export interface Transport {
  /** Broadcast a frame (JSON string) to all connected clients. */
  broadcast(data: string): void;

  /** Optional: register a callback for when a new client connects.
   *  The callback receives a `send` function to push data to that specific client. */
  onConnect?(callback: (send: (data: string) => void) => void): void;

  /** Shut down the transport. */
  stop(): void;
}
