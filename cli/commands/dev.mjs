import { existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { spawn } from 'node:child_process';
import { TARGETS, TARGET_NAMES, esbuildArgs } from '../targets.mjs';
import { getEsbuildAliases } from '../lib/aliases.mjs';

export async function devCommand(args) {
  const cwd = process.cwd();
  const targetName = args.filter(a => !a.startsWith('--'))[0] || 'love';

  if (!TARGETS[targetName]) {
    console.error(`Unknown target: ${targetName}`);
    console.error(`Available targets: ${TARGET_NAMES.join(', ')}`);
    process.exit(1);
  }

  const target = TARGETS[targetName];
  const entryCandidates = target.entries.map(e => join(cwd, 'src', e));
  const entry = entryCandidates.find(p => existsSync(p));

  if (!entry) {
    const names = target.entries.map(e => `src/${e}`).join(', ');
    console.error(`No entry point found. Looked for: ${names}`);
    console.error('Are you in an iLoveReact project directory?');
    process.exit(1);
  }

  const outfile = join(cwd, target.output);
  const outdir = dirname(outfile);
  if (!existsSync(outdir)) mkdirSync(outdir, { recursive: true });

  const hints = {
    love: 'Love2D will launch automatically and restart on rebuild.',
    terminal: 'The terminal app will auto-reload on save.',
    web: 'Serve dist/ with any HTTP server to see your app.',
  };
  const hint = hints[targetName] || `Output: ${target.output}`;

  console.log(`
  iLoveReact dev mode [${targetName}]
  Watching for changes...
  ${hint}
`);

  let loveProcess = null;
  let isShuttingDown = false;

  // Determine Love2D directory (some projects use love/ subdirectory)
  const loveDir = existsSync(join(cwd, 'love', 'main.lua')) ? 'love' : '.';

  // Spawn esbuild watch process
  const esbuild = spawn('npx', [
    'esbuild',
    ...esbuildArgs(target),
    `--outfile=${outfile}`,
    '--watch',
    ...getEsbuildAliases(cwd),
    entry,
  ], { cwd, stdio: 'pipe' });

  // Forward esbuild output and detect build completion
  esbuild.stdout.on('data', (data) => {
    process.stdout.write(data);
    const output = data.toString();

    // Restart Love2D on successful build
    if (targetName === 'love' && (output.includes('build finished') || output.match(/\d+ bytes/))) {
      console.log('\n[ilr] Build complete, launching Love2D...');
      if (loveProcess && !isShuttingDown) {
        loveProcess.kill();
        loveProcess = null;
      }
      if (!isShuttingDown) {
        setTimeout(() => {
          if (!isShuttingDown) {
            console.log('[ilr] Starting Love2D process...');
            loveProcess = spawn('love', [loveDir], { cwd, stdio: 'inherit' });
            loveProcess.on('exit', (code) => {
              if (!isShuttingDown && code !== null && code !== 0) {
                console.error(`\nLove2D exited with code ${code}`);
              }
              loveProcess = null;
            });
          }
        }, 100);
      }
    }
  });

  esbuild.stderr.on('data', (data) => {
    process.stderr.write(data);
    const output = data.toString();

    // Also check stderr for build completion (esbuild watch messages go here)
    if (targetName === 'love' && output.includes('build finished')) {
      console.log('\n[ilr] Build complete, launching Love2D...');
      if (loveProcess && !isShuttingDown) {
        loveProcess.kill();
        loveProcess = null;
      }
      if (!isShuttingDown) {
        setTimeout(() => {
          if (!isShuttingDown) {
            console.log('[ilr] Starting Love2D process...');
            loveProcess = spawn('love', [loveDir], { cwd, stdio: 'inherit' });
            loveProcess.on('exit', (code) => {
              if (!isShuttingDown && code !== null && code !== 0) {
                console.error(`\nLove2D exited with code ${code}`);
              }
              loveProcess = null;
            });
          }
        }, 100);
      }
    }
  });

  // Cleanup handler
  const cleanup = () => {
    if (isShuttingDown) return;
    isShuttingDown = true;

    if (loveProcess) {
      loveProcess.kill();
      loveProcess = null;
    }

    esbuild.kill();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  // Wait for esbuild to exit
  await new Promise((resolve) => {
    esbuild.on('exit', resolve);
  });
}
