/**
 * Terminal input handler for keyboard events.
 *
 * Enables raw mode on stdin and parses key presses including
 * ANSI escape sequences for special keys.
 */

export interface KeyEvent {
  name: string;     // 'a', 'enter', 'up', 'down', 'left', 'right', 'escape', 'tab', etc.
  ctrl: boolean;
  shift: boolean;
  raw: string;      // raw bytes received
}

/** Key name mapping for ANSI escape sequences. */
const ESCAPE_KEYS: Record<string, string> = {
  '[A': 'up',
  '[B': 'down',
  '[C': 'right',
  '[D': 'left',
  '[H': 'home',
  '[F': 'end',
  '[2~': 'insert',
  '[3~': 'delete',
  '[5~': 'pageup',
  '[6~': 'pagedown',
};

/** Parse raw stdin data into a KeyEvent. */
function parseKey(data: Buffer): KeyEvent {
  const raw = data.toString();
  const bytes = [...data];

  // Ctrl+C
  if (bytes[0] === 3) {
    return { name: 'c', ctrl: true, shift: false, raw };
  }

  // Escape / ANSI sequences
  if (bytes[0] === 27) {
    if (bytes.length === 1) {
      return { name: 'escape', ctrl: false, shift: false, raw };
    }
    const seq = raw.slice(1);
    const mapped = ESCAPE_KEYS[seq];
    if (mapped) {
      return { name: mapped, ctrl: false, shift: false, raw };
    }
    return { name: 'escape', ctrl: false, shift: false, raw };
  }

  // Enter
  if (bytes[0] === 13) {
    return { name: 'enter', ctrl: false, shift: false, raw };
  }

  // Tab
  if (bytes[0] === 9) {
    return { name: 'tab', ctrl: false, shift: false, raw };
  }

  // Backspace
  if (bytes[0] === 127) {
    return { name: 'backspace', ctrl: false, shift: false, raw };
  }

  // Ctrl+letter (1-26 maps to a-z)
  if (bytes[0] >= 1 && bytes[0] <= 26) {
    const letter = String.fromCharCode(bytes[0] + 96);
    return { name: letter, ctrl: true, shift: false, raw };
  }

  // Regular character
  return { name: raw, ctrl: false, shift: false, raw };
}

/**
 * Enable raw terminal input and call onKey for each key press.
 * Ctrl+C always triggers process exit for safety.
 *
 * @returns Cleanup function to disable raw input
 */
export function enableRawInput(onKey: (key: KeyEvent) => void): () => void {
  if (!process.stdin.setRawMode) {
    return () => {};
  }

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  const handler = (data: Buffer) => {
    const key = parseKey(data);

    // Ctrl+C always exits
    if (key.ctrl && key.name === 'c') {
      process.exit(0);
    }

    onKey(key);
  };

  process.stdin.on('data', handler as any);

  return () => {
    process.stdin.removeListener('data', handler as any);
    if (process.stdin.setRawMode) {
      process.stdin.setRawMode(false);
    }
    process.stdin.pause();
  };
}
