import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(ROOT, 'temporary screenshots');

const [, , url, label] = process.argv;

if (!url) {
    console.error('Usage: node screenshot.mjs <url> [label]');
    process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

function nextNumber() {
    const existing = fs.readdirSync(OUT_DIR)
        .map((f) => f.match(/^screenshot-(\d+)/))
        .filter(Boolean)
        .map((m) => parseInt(m[1], 10));
    return existing.length ? Math.max(...existing) + 1 : 1;
}

const n = nextNumber();
const fileName = `screenshot-${n}${label ? `-${label}` : ''}.png`;
const outPath = path.join(OUT_DIR, fileName);

const browser = await puppeteer.launch();
try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle0' });

    // index.html's loader overlay covers the page for ~1.5s+ after networkidle0
    // resolves (progress bar animation is JS-timed, not network-bound); wait for
    // it to fade out before capturing, otherwise the shot catches it mid-loader.
    await page.waitForFunction(() => {
        const overlay = document.getElementById('loader-overlay');
        return !overlay || overlay.style.opacity === '0';
    }, { timeout: 5000 }).catch(() => {});

    // Let entry animations (text scramble, badge reveal) settle.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // This site drives scroll through GSAP ScrollSmoother (transforms a wrapper
    // element) rather than native window scroll, and reveals sections via
    // IntersectionObserver toggling `.is-visible`. Puppeteer's `fullPage` capture
    // just resizes the viewport once — it never moves the smoother or fires the
    // observers — so anything below the fold would otherwise be captured in its
    // pre-reveal (hidden) state. Drive the scroll manually first so every
    // section has actually entered the viewport at least once.
    await page.evaluate(async () => {
        const total = document.body.scrollHeight || document.documentElement.scrollHeight;
        const step = window.innerHeight;
        const scrollTo = window.pageSmoother
            ? (y) => window.pageSmoother.scrollTo(y, false)
            : (y) => window.scrollTo(0, y);
        for (let y = 0; y <= total; y += step) {
            scrollTo(y);
            await new Promise((r) => setTimeout(r, 250));
        }
        scrollTo(0);
        await new Promise((r) => setTimeout(r, 250));
    });

    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved ${path.join('temporary screenshots', fileName)}`);
} finally {
    await browser.close();
}
