/**
 * Web renderer entry point.
 *
 * This renders the shared HUD as DOM overlays on top of a Love2D WASM canvas.
 * The LoveInstance component handles booting love.js and establishing the
 * Module.FS bridge.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { LoveInstance } from '../../../packages/web/src/LoveInstance';
import { HUD } from '../../shared-components';

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0a0a0f',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <LoveInstance
        id="game"
        src="./love.js"
        width={1024}
        height={768}
        className="game-canvas"
      >
        <HUD />
      </LoveInstance>
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}
