/**
 * aliases.mjs — Shared esbuild alias resolution for @ilovereact/* imports
 *
 * Auto-detects which packages exist in ilovereact/ and generates --alias flags.
 * Used by both build.mjs and dev.mjs to keep alias logic DRY.
 */

import { existsSync } from 'node:fs';
import { join } from 'node:path';

export const ALIAS_MAP = {
  shared: '@ilovereact/core',
  native: '@ilovereact/native',
  router: '@ilovereact/router',
  storage: '@ilovereact/storage',
  components: '@ilovereact/components',
};

/**
 * Generate esbuild --alias flags for packages that exist in ilovereact/
 * @param {string} cwd - Project root directory
 * @returns {string[]} Array of --alias:@ilovereact/pkg=./ilovereact/pkg/src flags
 */
export function getEsbuildAliases(cwd) {
  const flags = [];
  for (const [dir, alias] of Object.entries(ALIAS_MAP)) {
    const pkg = join(cwd, 'ilovereact', dir, 'src');
    if (existsSync(pkg)) {
      flags.push(`--alias:${alias}=./ilovereact/${dir}/src`);
    }
  }
  return flags;
}
