/**
 * Inlines the Vite build into one self-contained HTML file that runs
 * straight from disk — no server, no npm install.
 *   node scripts/bundle-standalone.mjs
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
const assets = readdirSync(join(dist, 'assets'))
const js = assets.find((f) => f.endsWith('.js'))
const css = assets.find((f) => f.endsWith('.css'))

if (!js || !css) {
  throw new Error('Run `npm run build` first — dist/assets is missing.')
}

// Replacer *functions*, not strings: the bundles contain `$&`-style
// sequences that a string replacement would expand.
const html = readFileSync(join(dist, 'index.html'), 'utf8')
  .replace(
    /<script type="module"[^>]*><\/script>/,
    () =>
      `<script type="module">${readFileSync(join(dist, 'assets', js), 'utf8')}</script>`,
  )
  .replace(
    /<link rel="stylesheet"[^>]*\/assets\/[^>]*>/,
    () => `<style>${readFileSync(join(dist, 'assets', css), 'utf8')}</style>`,
  )

const out = 'sushil-choudhary-portfolio.html'
writeFileSync(out, html)
console.log(`${out} — ${(html.length / 1024).toFixed(0)} KB`)
