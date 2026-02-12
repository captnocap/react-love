#!/usr/bin/env node

/**
 * Documentation build script.
 *
 * Parses content/ .txt files → validates → generates dist/llms/*.txt endpoints.
 *
 * Usage:
 *   npx tsx scripts/docs/build.ts          # Full build
 *   npx tsx scripts/docs/build.ts validate # Validate only
 */

import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { parseContentDirectory } from './parser';
import { validateContent } from './validate';
import {
  renderFullDoc,
  renderEndpoint,
  renderCheatsheet,
  renderExamplesEndpoint,
  renderContentToPlaintext,
} from './plaintext-renderer';
import type { ParsedDirectory } from './types';

const ROOT = join(process.cwd());
const CONTENT_DIR = join(ROOT, 'content');
const DIST_DIR = join(ROOT, 'dist', 'llms');

function main() {
  const command = process.argv[2] || 'build';

  console.log('');
  console.log('  iLoveReact Documentation Builder');
  console.log('  ================================');
  console.log('');

  // Step 1: Parse
  console.log('  Parsing content files...');
  const dir = parseContentDirectory(CONTENT_DIR);
  console.log(`  Found ${dir.allFiles.length} content files in ${Object.keys(dir.sections).length} sections`);

  if (dir.errors.length > 0) {
    console.log(`  Parse errors: ${dir.errors.length}`);
    for (const err of dir.errors) {
      console.log(`    ERROR ${err.file}: ${err.message}`);
    }
  }
  console.log('');

  // Step 2: Validate
  console.log('  Validating content...');
  const validation = validateContent(dir);

  if (validation.errors.length > 0) {
    console.log(`  ${validation.errors.length} error(s):`);
    for (const err of validation.errors) {
      console.log(`    ERROR ${err.file}: ${err.message}`);
    }
  }

  if (validation.warnings.length > 0) {
    console.log(`  ${validation.warnings.length} warning(s):`);
    for (const warn of validation.warnings.slice(0, 20)) {
      console.log(`    WARN  ${warn.file}: ${warn.message}`);
    }
    if (validation.warnings.length > 20) {
      console.log(`    ... and ${validation.warnings.length - 20} more`);
    }
  }

  console.log('');
  console.log(`  Stats:`);
  console.log(`    Files:    ${validation.stats.totalFiles}`);
  console.log(`    Sections: ${validation.stats.totalSections}`);
  console.log(`    Examples: ${validation.stats.totalExamples}`);
  console.log(`    Categories: ${Object.entries(validation.stats.byCategory).map(([k, v]) => `${k}(${v})`).join(', ')}`);
  console.log('');

  if (command === 'validate') {
    if (validation.valid) {
      console.log('  Validation passed.');
    } else {
      console.log('  Validation FAILED.');
      process.exit(1);
    }
    return;
  }

  // Step 3: Generate /llms.txt endpoints
  console.log('  Generating /llms.txt endpoints...');
  mkdirSync(DIST_DIR, { recursive: true });

  const endpoints = generateEndpoints(dir);

  for (const [filename, content] of Object.entries(endpoints)) {
    const filePath = join(DIST_DIR, filename);
    writeFileSync(filePath, content, 'utf-8');
    const sizeKB = (Buffer.byteLength(content, 'utf-8') / 1024).toFixed(1);
    console.log(`    ${filename} (${sizeKB} KB)`);
  }

  console.log('');
  console.log(`  Generated ${Object.keys(endpoints).length} endpoint files in dist/llms/`);
  console.log('  Done.');
  console.log('');
}

function generateEndpoints(dir: ParsedDirectory): Record<string, string> {
  const endpoints: Record<string, string> = {};

  // 1. Full documentation
  endpoints['llms.txt'] = renderFullDoc(dir);

  // 2. API reference (components + hooks + types)
  endpoints['api.txt'] = renderEndpoint(
    dir,
    'API Reference',
    ['05-components', '06-hooks', '12-api-reference'],
  );

  // 3. Components only
  endpoints['components.txt'] = renderEndpoint(
    dir,
    'Components Reference',
    ['05-components'],
  );

  // 4. Hooks only
  endpoints['hooks.txt'] = renderEndpoint(
    dir,
    'Hooks Reference',
    ['06-hooks'],
  );

  // 5. Layout system
  endpoints['layout.txt'] = renderEndpoint(
    dir,
    'Layout System',
    ['04-layout-system'],
  );

  // 6. CLI reference
  endpoints['cli.txt'] = renderEndpoint(
    dir,
    'CLI Reference',
    ['03-cli-reference'],
  );

  // 7. Targets
  endpoints['targets.txt'] = renderEndpoint(
    dir,
    'Target Guides',
    ['09-targets'],
  );

  // 8. Troubleshooting
  endpoints['troubleshooting.txt'] = renderEndpoint(
    dir,
    'Troubleshooting & FAQ',
    ['11-troubleshooting'],
  );

  // 9. Cheatsheet
  endpoints['cheatsheet.txt'] = renderCheatsheet(dir);

  // 10. Examples
  endpoints['examples.txt'] = renderExamplesEndpoint(dir);

  // 11. Architecture
  endpoints['architecture.txt'] = renderEndpoint(
    dir,
    'Architecture',
    ['02-architecture'],
  );

  // 12. Animation
  endpoints['animation.txt'] = renderEndpoint(
    dir,
    'Animation',
    ['07-animation'],
  );

  // 13. Getting started
  endpoints['getting-started.txt'] = renderEndpoint(
    dir,
    'Getting Started',
    ['01-getting-started'],
  );

  return endpoints;
}

main();
