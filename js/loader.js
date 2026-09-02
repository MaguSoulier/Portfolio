// ==========
// CARGA
// ==========

const percentEl = document.getElementById('loader-percentage');
const iris = document.getElementById('anim-iris');
const corona = document.getElementById('anim-corona');
const centro = document.getElementById('Centro');
const ojo = document.getElementById('anim-ojo');
const parpado = document.getElementById('anim-parpado');
const overlay = document.getElementById('loader-overlay');

let isClosing = false;
let irisTimeout, blinkTimeout;

// ==========
// PROGRESO REAL
// ==========
// The percentage used to be a fixed setInterval (1%/15ms, always ~1.5s,
// regardless of the network) — decoupled from whether anything had
// actually loaded. It's now driven by real checkpoints below; the visible
// number is smoothed by requestAnimationFrame so it doesn't jump-cut
// between them, but it never renders ahead of what's actually known to be
// done — targetProgress only ever moves forward as a real checkpoint
// resolves, and displayProgress eases toward it, never past it.
let targetProgress = 0;
let displayProgress = 0;

function setTargetProgress(value) {
    if (value > targetProgress) targetProgress = value;
}

function tickProgress() {
    displayProgress += (targetProgress - displayProgress) * 0.08;
    if (targetProgress - displayProgress < 0.5) displayProgress = targetProgress;
    if (percentEl) percentEl.innerText = Math.round(displayProgress) + "%";
    if (displayProgress < 100) requestAnimationFrame(tickProgress);
}

// The hero photo actually decoded — not just requested. img.complete +
// naturalWidth handles the cache-hit case (already done, synchronously,
// before any event would fire); img.decode() covers the normal case.
// A broken image (network error, bad path) resolves instead of rejecting —
// it must not hang the reveal.
function esperarFoto() {
    const img = document.querySelector('#main-photo img');
    if (!img) return Promise.resolve();
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    if (typeof img.decode === 'function') {
        return img.decode().catch(() => {});
    }
    return new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
    });
}

// The two Space Mono weights actually used above the fold (#main-name,
// .tagline, .badge, .web-portfolio, header nav — see hero.css/header.css)
// are usable. Deliberately not document.fonts.ready, which would also
// wait on Space Grotesk and Mono's italics — neither appears above the
// fold, so waiting on them would only add time for nothing visible.
function esperarFuentes() {
    if (!('fonts' in document)) return Promise.resolve();
    return Promise.all([
        document.fonts.load('400 16px "Space Mono"'),
        document.fonts.load('700 16px "Space Mono"'),
    ]).catch(() => {});
}

function esperarMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function iniciarCarga() {
    // 1. Aparece el Iris casi de inmediato
    setTimeout(() => { iris.style.opacity = "1"; }, 100);
    // 2. Se abre el ojo poco después
    setTimeout(() => { ojo.classList.add('eye-open'); }, 300);
    // 3. Comienza movimiento aleatorio
    setTimeout(moverIris, 700);
    parpadearOjo();

    requestAnimationFrame(tickProgress);

    // Real readiness gate. Each checkpoint only ever pushes the visible
    // percentage forward as it actually resolves; a 4s safety timeout
    // guarantees the page is never stuck behind the overlay if a request
    // stalls outright. A small minimum-display floor (~450ms) runs
    // alongside — not after — the real gate, so it costs nothing once the
    // network is already slower than that (the common case), while still
    // giving the iris-open/eye-open choreography above room to play out
    // on an instant cache-hit load.
    const fuentesListas = esperarFuentes().then(() => setTargetProgress(50));
    const fotoLista = esperarFoto().then(() => setTargetProgress(100));
    const listo = Promise.all([fuentesListas, fotoLista]);
    const timeoutDeSeguridad = esperarMs(4000).then(() => setTargetProgress(100));

    Promise.all([
        Promise.race([listo, timeoutDeSeguridad]),
        esperarMs(450),
    ]).then(() => {
        // The hero photo's real dimensions (not whatever the layout
        // guessed before it loaded) are now known, so ScrollSmoother's
        // scroll-height and parallax.js's scrollTrigger start/end
        // positions — both computed back on DOMContentLoaded — may be
        // stale. smooth-scroll.js's own window.load handler corrects this
        // eventually for every page, but that also waits on every
        // below-the-fold image; refresh now, as soon as the one image that
        // actually matters for first paint is confirmed ready.
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        finalizarCarga();
    });
}

function moverIris() {
    if (isClosing) return;
    const moveX = (Math.random() - 0.5) * 170;
    const moveY = (Math.random() - 0.5) * 90;
    iris.style.transform = `translate(${moveX}px, ${moveY}px)`;
    irisTimeout = setTimeout(moverIris, Math.random() * 1600 + 400);
}

function parpadearOjo() {
    if (isClosing) return;
    parpado.classList.remove('parpadeando');
    void parpado.offsetWidth; // Force reflow
    parpado.classList.add('parpadeando');
    blinkTimeout = setTimeout(parpadearOjo, Math.random() * 3000 + 2000);
}

function finalizarCarga() {
    isClosing = true;
    clearTimeout(irisTimeout);
    clearTimeout(blinkTimeout);

    if (percentEl) percentEl.style.opacity = "0";

    // 1. Animación de salida del loader (ojo cierra, luego escala)
    ojo.classList.remove('eye-open');
    ojo.classList.add('eye-close');

    setTimeout(() => {
        iris.style.transform = `translate(0px, 0px)`;
        corona.classList.add('out-scale');
        iris.classList.add('out-scale');

        setTimeout(() => {
            centro.classList.add('out-fade');

            // 2. Desvanecer el fondo gris
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
            document.body.style.overflow = "auto";

            // --- 3. INICIO DE LA APERTURA DE PÁGINA ---
            iniciarAnimacionesEntrada();

        }, 400);
    }, 200);
}

// --- FUNCIÓN DE INICIO ACTUALIZADA ---
// SlowTextScramble now lives in text-scramble.js (loaded before this file),
// alongside the base TextScramble class it extends — see there for its
// definition.
function iniciarAnimacionesEntrada() {
    // 0. Arriving via a link to a specific section (e.g. project1.html's
    //    header linking to index.html#trabajos) — jump there now that the
    //    page is revealed and layout has settled. Doing this any earlier
    //    (e.g. on DOMContentLoaded) would measure the target's position
    //    before images have finished loading, landing short; body's
    //    overflow:hidden during the loader also blocks it from being
    //    visible until now anyway. work-section.js's unconditional
    //    scrollTo(0, 0) on DOMContentLoaded runs first but is invisible
    //    under the opaque loader overlay, so it doesn't fight this.
    if (window.location.hash && window.pageSmoother) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            window.pageSmoother.scrollTo(target, false, 'top 70px'); // 70 = --header-h, see smooth-scroll.js
        }
    }

    // 1. Logo del Header
    const headerLogo = document.querySelector('.header-logo');
    if (headerLogo) headerLogo.classList.add('header-active');

    // 2. Scramble LENTO para el Nombre (Respeta <br>)
    const nameEl = document.getElementById('main-name');
    if (nameEl) {
        nameEl.style.visibility = 'visible';
        const fxName = new SlowTextScramble(nameEl);
        // Enviamos el texto con el <br> incluido
        fxName.setText("MAGDALENA<br>SOULIER");
    }

    // 3. Scramble LENTO para el botón Connect
    // Make ALL connect buttons visible (desktop footer + mobile nav menu)
    document.querySelectorAll('[data-key="connect"]').forEach(el => {
        el.style.visibility = 'visible';
    });
    // Apply scramble animation only to the desktop footer button
    const connectEl = document.querySelector('footer [data-key="connect"]');
    if (connectEl) {
        const fxConnect = new SlowTextScramble(connectEl);
        fxConnect.setText(translations[currentLang].connect);
    }
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.style.animationPlayState = 'paused'; // Asegura que estén quietos
        setTimeout(() => {
            badge.style.animationPlayState = 'running';
        }, 2000); // 2 segundos de espera tras el loader
        });
}

// Disparar al cargar
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = "hidden";
    iniciarCarga();
});
