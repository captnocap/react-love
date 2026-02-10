/**
 * Stdio transport for render servers.
 *
 * Writes newline-delimited JSON frames to process.stdout.
 * Used by targets like Neovim and AwesomeWM where the host process
 * is spawned by the target and communicates via stdin/stdout.
 */

import type { Transport } from './types';

export function createStdioTransport(): Transport {
  return {
    broadcast(data: string) {
      process.stdout.write(data + '\n');
    },

    stop() {
      // Nothing to clean up — stdout closes with the process
    },
  };
}
