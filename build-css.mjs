// Bundles the individual css/*.css partials into css/main.css, in cascade
// order, as one physical file.
//
// Why this exists: main.css used to just @import these 12 files. @import
// forces the browser to fetch them sequentially, one at a time, blocking
// first paint (bad on any connection). The fix isn't to link all 12 files
// separately from each page's <head> either — on a high-latency mobile
// connection each separate request still pays a real round-trip cost, and
// PageSpeed measured ~810ms lost to exactly that. A single concatenated
// file gets one request, one round trip, correct cascade order, no
// sequential blocking.
//
// Run this after editing any file in PARTIALS, then commit the updated
// css/main.css alongside your change. Nothing runs this automatically —
// there's no build step in this project (it's plain static HTML/CSS/JS
// served as-is), so it's on you to remember. main.css itself carries a
// warning comment for the same reason.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const CSS_DIR = path.join(ROOT, 'css');

// Order matters — this is the cascade order, same as the old @import list.
const PARTIALS = [
    'tokens.css',
    'fonts.css',
    'typography.css',
    'base.css',
    'button.css',
    'header.css',
    'hero.css',
    'work.css',
    'about.css',
    'loader.css',
    'connect-card.css',
    'footer.css',
    'responsive.css',
];

const banner = `/* Bundled by build-css.mjs from the files listed in PARTIALS, in cascade
   order. Do NOT hand-edit this file — edit the source file in css/ and
   rerun \`node build-css.mjs\`, or your change is silently lost the next
   time someone rebuilds this file. See build-css.mjs for why this is a
   single concatenated file instead of @import or separate <link> tags. */\n\n`;

const body = PARTIALS.map((f) => {
    const content = fs.readFileSync(path.join(CSS_DIR, f), 'utf8').replace(/\r\n/g, '\n');
    return `/* ==== ${f} ==== */\n${content}`;
}).join('\n');

fs.writeFileSync(path.join(CSS_DIR, 'main.css'), banner + body, 'utf8');
console.log(`Wrote css/main.css from ${PARTIALS.length} files.`);
