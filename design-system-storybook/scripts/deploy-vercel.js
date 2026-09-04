/**
 * Vercel Deployment Verification & Helper Script (ESM)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('--- Starting Vercel Deployment & Build Pre-check ---');

const rootDir = path.join(__dirname, '..');
const staticDir = path.join(rootDir, 'storybook-static');
const vercelJsonPath = path.join(rootDir, 'vercel.json');

// 1. Verify vercel.json configuration
if (!fs.existsSync(vercelJsonPath)) {
  console.error('Error: vercel.json is missing!');
  process.exit(1);
}
console.log('✔ vercel.json verified.');

// 2. Check if static output exists
if (!fs.existsSync(staticDir) || fs.readdirSync(staticDir).length === 0) {
  console.log('Running Storybook static build...');
  try {
    execSync('node node_modules/storybook/bin/index.cjs build -o storybook-static', { cwd: rootDir, stdio: 'inherit' });
  } catch (err) {
    console.error('Storybook build failed:', err);
    process.exit(1);
  }
}

// 3. Inspect static output contents
const files = fs.readdirSync(staticDir);
console.log(`✔ storybook-static directory contains ${files.length} build artifacts.`);
console.log('✔ Build pre-check complete. Ready for Vercel static deployment!');
