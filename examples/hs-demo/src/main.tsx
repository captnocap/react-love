/**
 * Hammerspoon Demo entry point.
 *
 * Starts a WebSocket server. Connect from Hammerspoon
 * with the ilovereact.lua client to see the rendered widget.
 */

import React from 'react';
import { createHammerspoonServer } from '@ilovereact/hs';
import App from './App';

const server = createHammerspoonServer({
  port: 8081,
  width: 400,
  height: 300,
});

console.log('Hammerspoon demo server running on ws://localhost:8081');
console.log('Widget size: 400x300 pixels');

server.render(<App />);

process.on('SIGINT', () => {
  server.stop();
  process.exit(0);
});
