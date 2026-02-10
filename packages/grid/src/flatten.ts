/**
 * Flatten a LayoutNode tree into an array of draw commands.
 *
 * Walks depth-first, clips children to parent bounds.
 * Color mapping is pluggable: pass a mapColor function to quantize
 * (e.g., CC 16-color palette) or leave undefined for CSS pass-through.
 */

import type { LayoutNode } from './layout';

export interface DrawCommand {
  x: number;
  y: number;
  w: number;
  h: number;
  bg?: any;       // Color value (CSS string or mapped value)
  text?: string;
  fg?: any;       // Color value (CSS string or mapped value)
}

export interface FlattenOptions {
  /** Map a CSS color string to a target-specific value. Default: pass-through. */
  mapColor?: (cssColor: string) => any;
  /** Default foreground color for text. Default: '#FFFFFF'. */
  defaultFg?: any;
  /** Default background color. Default: undefined (transparent). */
  defaultBg?: any;
}

interface ClipRect {
  x1: number;
  y1: number;
  x2: number;  // exclusive
  y2: number;  // exclusive
}

function intersect(a: ClipRect, b: ClipRect): ClipRect | null {
  const x1 = Math.max(a.x1, b.x1);
  const y1 = Math.max(a.y1, b.y1);
  const x2 = Math.min(a.x2, b.x2);
  const y2 = Math.min(a.y2, b.y2);
  if (x1 >= x2 || y1 >= y2) return null;
  return { x1, y1, x2, y2 };
}

/**
 * Flatten a LayoutNode tree to draw commands.
 */
export function flatten(root: LayoutNode, options?: FlattenOptions): DrawCommand[] {
  const commands: DrawCommand[] = [];
  const clip: ClipRect = {
    x1: root.x,
    y1: root.y,
    x2: root.x + root.w,
    y2: root.y + root.h,
  };
  const mapColor = options?.mapColor ?? ((c: string) => c);
  const defaultFg = options?.defaultFg ?? '#FFFFFF';
  flattenNode(root, clip, commands, mapColor, defaultFg);
  return commands;
}

function flattenNode(
  node: LayoutNode,
  parentClip: ClipRect,
  out: DrawCommand[],
  mapColor: (css: string) => any,
  defaultFg: any,
): void {
  const nodeRect: ClipRect = {
    x1: node.x,
    y1: node.y,
    x2: node.x + node.w,
    y2: node.y + node.h,
  };

  const clipped = intersect(nodeRect, parentClip);
  if (!clipped) return;

  const w = clipped.x2 - clipped.x1;
  const h = clipped.y2 - clipped.y1;

  // Emit background fill
  const bgColor = node.style.backgroundColor || node.style.background;
  if (bgColor) {
    out.push({
      x: clipped.x1,
      y: clipped.y1,
      w,
      h,
      bg: mapColor(bgColor),
    });
  }

  // Emit text
  const isText = node.type === 'Text' || node.type === 'text' || node.type === '__TEXT__';
  if (node.text && isText) {
    const fg = node.style.color ? mapColor(node.style.color) : defaultFg;
    const bg = bgColor ? mapColor(bgColor) : undefined;

    const truncated = node.text.slice(0, w);
    if (truncated.length > 0) {
      out.push({
        x: clipped.x1,
        y: clipped.y1,
        w,
        h: 1,
        text: truncated,
        fg,
        bg,
      });
    }
  }

  // Recurse children
  for (const child of node.children) {
    flattenNode(child, clipped, out, mapColor, defaultFg);
  }
}
