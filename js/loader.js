// ==========
// CARGA
// ==========

let progress = 0;
const percentEl = document.getElementById('loader-percentage');
const iris = document.getElementById('anim-iris');
const corona = document.getElementById('anim-corona');
const centro = document.getElementById('Centro');
const ojo = document.getElementById('anim-ojo');
const parpado = document.getElementById('anim-parpado');
const overlay = document.getElementById('loader-overlay');

let isClosing = false;
let irisTimeout, blinkTimeout;

function iniciarCarga() {
    // 1. Aparece el Iris casi de inmediato
    setTimeout(() => { iris.style.opacity = "1"; }, 100);
    // 2. Se abre el ojo poco después
    setTimeout(() => { ojo.classList.add('eye-open'); }, 300);
    // 3. Comienza movimiento aleatorio
    setTimeout(moverIris, 700);
    parpadearOjo();

    const interval = setInterval(() => {
        progress++;
        if (percentEl) percentEl.innerText = progress + "%";
        if (progress >= 100) {
            clearInterval(interval);
            finalizarCarga();
        }
    }, 15);
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

// --- CLASE PARA TEXTOS LENTOS Y CON SALTOS DE LÍNEA (FIXED) ---
class SlowTextScramble extends TextScramble {
  constructor(el) {
    super(el);
    this.isAnimating = false; // Ensure this is initialized
  }

  setText(newText) {
    // 1. Check if we're already animating to this exact text
    if (this.isAnimating && this.targetText === newText) {
      return; // Ignore redundant request
    }

    // 2. If we're animating to something different, clean up first
    if (this.isAnimating) {
      this.completeImmediately();
    }

    // 3. NOW start the new animation from a clean state
    this.targetText = newText;
    this.isAnimating = true;

    // Usamos innerHTML para capturar los <br>
    const oldText = this.el.innerHTML || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    this.maxEnd = 0;

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';

      // AUMENTO DE DURACIÓN: start 0-60 y end hasta 120 frames
      const start = Math.floor(Math.random() * 10);
      const end = start + Math.floor(Math.random() * 40);

      if (end > this.maxEnd) this.maxEnd = end;
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  completeImmediately() {
    cancelAnimationFrame(this.frameRequest);
    this.el.innerHTML = this.targetText; // Use innerHTML for <br> tags
    this.isAnimating = false;
    if (this.resolve) this.resolve();
  }

  update() {
    // Defensive check: if we're no longer supposed to be animating, stop immediately
    if (!this.isAnimating) {
      return;
    }

    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        // Si el destino es parte de un <br>, no ponemos caracteres aleatorios
        if (to === '<' || to === 'b' || to === 'r' || to === '>') {
           output += to;
        } else {
           output += `<span class="d">${char}</span>`;
        }
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output; // Usar innerHTML para procesar los <br>
    if (complete === this.queue.length) {
      this.el.innerHTML = this.targetText; // SET FINAL CLEAN TEXT - CRITICAL FIX
      this.isAnimating = false; // Animation complete
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

// --- FUNCIÓN DE INICIO ACTUALIZADA ---
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
