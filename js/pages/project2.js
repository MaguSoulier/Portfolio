// ── Language: apply saved preference, expose changeLanguage() for the
//    header's ES/EN switcher ─────────────────────
// Not js/i18n.js (used by index.html) — same reasoning as project1.js: this
// dictionary is keyed for this page's own data-key vocabulary (case-study
// body copy), which only partially overlaps js/i18n.js's, so loading it
// instead of this local one would risk silently mismatched translations.
const T = {
        es: {
            navwork: 'TRABAJOS',
            navabout: 'SOBRE MÍ',
            diseno_interfaz: 'DISEÑO DE INTERFAZ',
            modelado_3d: 'MODELADO 3D',
            diseno_experiencia: 'DISEÑO DE EXPERIENCIA',
            cta_juego: 'IR AL JUEGO',
            detalle_anio: '[2024]',
            detalle_ubicacion: '[MONTEVIDEO, URUGUAY]',
            detalle_derechos: 'DERECHOS RESERVADOS MUCHO GAMES',
            cs_descripcion: '<p>Videojuego web diseñado para Revista Gigantes (La Diaria) con el objetivo de transformar el consumo pasivo de contenido en una experiencia participativa de User-Generated Content (UGC).</p><p>El proyecto funciona como puente para conectar usuarios de la revista a la plataforma digital, incrementando la retención y la participación comunitaria.</p>',
            sec_tecnologias: 'Tecnologías utilizadas',
            cat_diseno: 'Diseño',
            cat_implementacion: 'Implementación',
            sec_conceptualizacion: 'Conceptualización Narrativa',
            conceptualizacion_texto: '<p>El proyecto resuelve la paradoja de una audiencia infantil interpelada bajo el nombre de "gigantes". El juego tangibiliza esta tensión a través de un pequeño avatar que navega por el mapa y recolecta piezas para construir seres monumentales.</p><p>Para incentivar la adopción, la revista impresa incluye códigos exclusivos que desbloquean assets especiales dentro del juego. A su vez, los gigantes más votados y creativos generados por los usuarios tienen la posibilidad de aparecer en las siguientes ediciones impresas de la revista.</p><p>Crear un gigante constituye una metáfora interactiva sobre la capacidad de las infancias para intervenir en su entorno y dejar una marca propia en la comunidad.</p>',
            sec_limitaciones: 'Limitaciones técnicas',
            limitaciones_texto: '<p>Para garantizar la equidad en el acceso, el rendimiento del software se optimizó para hardware de gama baja y computadoras escolares de recursos limitados.</p><p>El estilo visual y el modelado 3D de los assets se diseñaron bajo una restricción de baja carga computacional: se implementó una técnica de texturizado pixelado combinada con un renderizado plano basado exclusivamente en un valor de luz y un valor de sombra (estilo cel-shading de alto contraste).</p><p>Esta solución técnica redujo drásticamente el consumo de memoria gráfica, asegurando una tasa de cuadros por segundo estable sin sacrificar la identidad artística del proyecto.</p>',
            cat_renderizado: 'Renderizado',
            cat_sin_render: 'Sin render',
            sec_validaciones: 'Validaciones',
            validaciones_texto: '<p>Como responsable del flujo de experiencia, la UI y el diseño de entornos, lideré el mapeo de interacciones adaptado a modelos mentales infantiles.</p><p>Conduje sesiones de testeo con niños para validar la usabilidad de la interfaz, la navegación en los mapas y la fricción en el sistema de construcción de piezas.</p><p>Estas pruebas permitieron iterar la jerarquía visual de los controles, simplificar la arquitectura de la información y asegurar que el storyline actuara como un hilo conductor intuitivo sin necesidad de tutoriales complejos.</p>',
            footer_inicio: 'INICIO',
            footer_siguiente: 'SIGUIENTE PROYECTO',
            footer_creditos: 'Diseñado y desarrollado por Magdalena soulier | © 2026',
        },
        en: {
            navwork: 'WORK',
            navabout: 'ABOUT ME',
            diseno_interfaz: 'INTERFACE DESIGN',
            modelado_3d: '3D MODELING',
            diseno_experiencia: 'EXPERIENCE DESIGN',
            cta_juego: 'GO TO GAME',
            detalle_anio: '[2024]',
            detalle_ubicacion: '[MONTEVIDEO, URUGUAY]',
            detalle_derechos: 'ALL RIGHTS RESERVED MUCHO GAMES',
            cs_descripcion: '<p>A web game designed for Revista Gigantes (LaDiaria), aimed at turning passive content consumption into a participatory User-Generated Content (UGC) experience.</p><p>The project acts as a bridge connecting the magazine\'s readers to its digital platform, increasing retention and community participation.</p>',
            sec_tecnologias: 'Technologies used',
            cat_diseno: 'Design',
            cat_implementacion: 'Implementation',
            sec_conceptualizacion: 'Narrative Concept',
            conceptualizacion_texto: '<p>The project resolves the paradox of a young audience being addressed as "giants". The game gives shape to this tension through a small avatar who navigates the map and collects pieces to build monumental beings.</p><p>To encourage adoption, the print magazine includes exclusive codes that unlock special in-game assets. In turn, the most-voted and most creative giants generated by users may appear in upcoming print editions of the magazine.</p><p>Building a giant works as an interactive metaphor for children\'s capacity to shape their surroundings and leave their own mark on the community.</p>',
            sec_limitaciones: 'Technical constraints',
            limitaciones_texto: '<p>To guarantee equitable access, the software\'s performance was optimized for low-end hardware and resource-limited school computers.</p><p>The visual style and 3D modeling of the assets were designed under a low computational load constraint: a pixelated texturing technique was implemented, combined with flat rendering based exclusively on a single light value and a single shadow value (high-contrast cel-shading style).</p><p>This technical solution drastically reduced graphics memory usage, ensuring a stable frame rate without sacrificing the project\'s artistic identity.</p>',
            cat_renderizado: 'Rendered',
            cat_sin_render: 'Unrendered',
            sec_validaciones: 'Validations',
            validaciones_texto: '<p>As the lead for experience flow, UI, and environment design, I led the mapping of interactions adapted to children\'s mental models.</p><p>I ran testing sessions with children to validate the usability of the interface, map navigation, and friction in the piece-building system.</p><p>These tests made it possible to iterate on the controls\' visual hierarchy, simplify the information architecture, and ensure the storyline worked as an intuitive throughline without needing complex tutorials.</p>',
            footer_inicio: 'HOME',
            footer_siguiente: 'NEXT PROJECT',
            footer_creditos: 'Designed and developed by Magdalena soulier | © 2026',
        }
    };

function applyLanguage(lang) {
    const t = T[lang] || T.es;
    document.querySelectorAll('[data-key]').forEach(function (el) {
        const key = el.getAttribute('data-key');
        if (t[key] === undefined) return;
        // Buttons/links (e.g. the "Ir al juego" CTA) carry their label in a
        // child <span>, alongside an icon that innerHTML would wipe out.
        const label = el.querySelector(':scope > span:first-child');
        if (label && el.tagName === 'A') {
            label.innerText = t[key];
        } else {
            el.innerHTML = t[key];
        }
    });
    document.documentElement.lang = lang;

    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    if (btnEs) {
        btnEs.classList.toggle('active', lang === 'es');
        btnEs.setAttribute('aria-pressed', lang === 'es');
        if (lang === 'es') btnEs.setAttribute('aria-current', 'true');
        else btnEs.removeAttribute('aria-current');
    }
    if (btnEn) {
        btnEn.classList.toggle('active', lang === 'en');
        btnEn.setAttribute('aria-pressed', lang === 'en');
        if (lang === 'en') btnEn.setAttribute('aria-current', 'true');
        else btnEn.removeAttribute('aria-current');
    }
}

// Global — called from the header's onclick="changeLanguage('es')" buttons.
function changeLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
    window.history.pushState({ path: newurl }, '', newurl);
    applyLanguage(lang);
}

applyLanguage(
    new URLSearchParams(window.location.search).get('lang')
    || localStorage.getItem('preferredLang')
    || 'es'
);

// ── Custom cursor ──────────────────────────────────────────
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    });
});
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
});
document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// ── Header nav links (TRABAJOS / SOBRE MÍ): scramble on hover, same
//    TextScramble class/timing as index.html's header. ──
document.querySelectorAll('.nav-work, .nav-about').forEach(link => {
    const scrambler = new TextScramble(link);
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-pointer');
        scrambler.setText(link.innerText);
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-pointer');
    });
});

// ── Hero image parallax (GSAP ScrollTrigger — same scroll system
//    ScrollSmoother already drives, so it stays in sync everywhere) ──
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    document.querySelectorAll('.cs-hero-image-wrap').forEach(wrap => {
        const heroImg = wrap.querySelector('.cs-hero-image');
        if (!heroImg) return;

        gsap.fromTo(heroImg,
            { yPercent: 0 },
            {
                yPercent: 22,
                ease: 'none',
                scrollTrigger: {
                    trigger: wrap,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );
    });
});

// ── Before/after compare slider (Renderizado / Sin render) ──────────
// Drags a vertical divider across the two stacked screenshots — CSS
// clip-path on the overlay image (shader-no.png) is driven by a
// --compare-pos custom property on the wrapper (css/pages/case-study.css).
(function () {
    const wrap = document.getElementById('csCompareWrap');
    const handle = document.getElementById('csCompareHandle');
    if (!wrap || !handle) return;

    let dragging = false;

    function setPosFromClientX(clientX) {
        const rect = wrap.getBoundingClientRect();
        const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
        wrap.style.setProperty('--compare-pos', pct + '%');
    }

    function onMove(e) {
        if (!dragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setPosFromClientX(clientX);
    }

    function stopDrag() {
        dragging = false;
    }

    wrap.addEventListener('mousedown', (e) => { dragging = true; setPosFromClientX(e.clientX); });
    wrap.addEventListener('touchstart', (e) => { dragging = true; setPosFromClientX(e.touches[0].clientX); }, { passive: true });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);

    wrap.addEventListener('mouseenter', () => cursor.classList.add('cursor-pointer'));
    wrap.addEventListener('mouseleave', () => cursor.classList.remove('cursor-pointer'));
}());

// ── Footer links: scramble + cursor-pointer ────────────────
// SlowTextScramble (text-scramble.js) — same class/duration/space-preserving
// fix used elsewhere on the site, so the footer nav links scramble at the
// same calmer pace instead of their own faster, unpatched local copy.

// Inicio link — scramble on text span, hover on full <a>
const inicioLink = document.querySelector('.text-inicio');
const inicioSpan = document.querySelector('.cs-footer-inicio-text');
if (inicioLink && inicioSpan) {
    const fxInicio = new SlowTextScramble(inicioSpan);
    inicioLink.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-pointer');
        fxInicio.setText(inicioSpan.innerText);
    });
    inicioLink.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-pointer');
    });
}

// Siguiente proyecto — scramble on text span, hover on full <a>
const nextLink = document.querySelector('.cs-footer-next');
const nextSpan = document.querySelector('.cs-footer-next-text');
if (nextLink && nextSpan) {
    const fxNext = new SlowTextScramble(nextSpan);
    nextLink.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-pointer');
        fxNext.setText(nextSpan.innerText);
    });
    nextLink.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-pointer');
    });
}
