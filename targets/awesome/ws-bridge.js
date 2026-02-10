#!/usr/bin/env node
/**
 * ws-bridge.js — WebSocket-to-stdout bridge for AwesomeWM
 *
 * Connects to a WebSocket server and pipes received messages to stdout
 * as newline-delimited JSON. Use when the Node.js render server is shared
 * across multiple widgets or when using createWebSocketTransport.
 *
 * Usage: node ws-bridge.js ws://localhost:8080
 */

import { WebSocket } from 'ws';

const url = process.argv[2] || 'ws://localhost:8080';
const ws = new WebSocket(url);

ws.on('message', (data) => {
  process.stdout.write(data.toString() + '\n');
});

ws.on('close', () => process.exit(0));
ws.on('error', (err) => {
  process.stderr.write('ws-bridge error: ' + err.message + '\n');
  process.exit(1);
});
