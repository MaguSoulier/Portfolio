// ── Language: apply saved preference ─────────────────────
(function () {
    const T = {
        es: {
            diseno_web: 'DISEÑO WEB',
            direccion_de_arte: 'DIRECCIÓN DE ARTE',
            ilustracion: 'ILUSTRACIÓN',
            diseno_estrategia: 'DISEÑO DE ESTRATEGIA',
            detalle_anio: '[2025]',
            detalle_universidad: '[UDELAR]',
            detalle_equipo: 'Realizado en equipo con Iara Rodriguez y Emilia Fripp',
            cs_descripcion: '<p>El ecosistema de las ferias barriales en Montevideo presenta una brecha crítica para el segmento joven. El objetivo del proyecto fue digitalizar una experiencia tradicionalmente analógica, eliminando la complejidad de la fragmentación informativa.</p><p>Se buscó crear una solución intuitiva que centralizara datos en tiempo real, permitiendo que el usuario tenga el control de su consumo y su tiempo al alcance de la mano.</p>',
            sec_tecnologias: 'Tecnologías utilizadas',
            cat_diseno: 'Diseño',
            cat_implementacion: 'Implementación',
            sec_propuesta: 'Propuesta estratégica',
            propuesta_texto: '<p>Las ferias vecinales ocupan un lugar significativo en el tejido barrial, funcionando como focos de encuentro donde se entrecruzan intercambios económicos, interacciones sociales e identidades comunitarias.</p><p>Este proyecto no trata de modificar la dinámica de las ferias, sino de reactivarla: la propuesta opera como puerta de entrada al consumo en territorio.</p><p class="cs-bold">El desafío: Fragmentación informativa y falta de una experiencia de usuario cohesiva.</p><p>Mientras que los competidores del sector retail ofrecen experiencias digitales fluidas, la feria carecía de una interfaz unificada, lo que generaba una percepción de obsolescencia.</p><p>El reto consistió en estructurar un lenguaje de diseño capaz de convivir con la identidad del Municipio B, priorizando una arquitectura de información clara que resolviera la inconsistencia visual y los problemas de comunicación previos en el territorio.</p>',
            sec_publicos: 'Públicos',
            publicos_intro: '<p>El proyecto se dirige al grupo de jóvenes de 18 a 34 años, que se ocupan de la compra de alimentos.</p><p>En función de su relación con el contexto se detectan 3 perfiles.</p>',
            card_desvinculado: 'Desvinculado',
            body_desvinculado: '<p><strong>Comportamiento:</strong> Posee una relación nula o escasa con el entorno físico de la feria y el barrio.</p><p><strong>Necesidad:</strong> Superar la barrera del desconocimiento.</p><p><strong>Oportunidad de Diseño:</strong> Generar interés mediante una interfaz que presente la feria como un evento relevante, moderno y digno de ser explorado.</p>',
            card_practico: 'Práctico',
            body_practico: '<p><strong>Comportamiento:</strong> Prioriza la rapidez y la accesibilidad sobre el vínculo emocional. Su decisión de compra es puramente funcional. Buscan optimizar el tiempo y demandan acceso inmediato a la información.</p><p><strong>Punto de Dolor:</strong> La percepción de que la feria es "difícil" o "lenta" comparada con un supermercado.</p><p><strong>Oportunidad de diseño:</strong> Enfoque mobile-first. La UI debe destacar la cercanía (geolocalización) y la competitividad de precios, posicionando a la feria como la opción más eficiente y sencilla en su rutina diaria.</p>',
            card_consciente: 'Consciente',
            body_consciente: '<p><strong>Comportamiento:</strong> Usuario con valores éticos y de consumo responsable alineados con la soberanía alimentaria. Ya posee un vínculo con el territorio.</p><p><strong>Necesidad:</strong> Profundizar la conexión y pertenencia.</p><p><strong>Oportunidad de Diseño:</strong> Retención y Comunidad. El diseño debe ofrecer contenido de valor agregado (historia de los productos, impacto social) que refuerce su compromiso y lo convierta en un promotor activo del sistema de ferias.</p>',
            sec_sistema: 'Sistema Visual y Lenguaje de Diseño',
            sistema_intro: '<p>Se proyectó un sistema visual claro y cautivante, diseñado con una estructura flexible que permite una aplicación coherente tanto en interfaces digitales como en dispositivos territoriales de diversa complejidad. El enfoque técnico consistió en equilibrar la identidad Institucional del Municipio B con recursos gráficos contemporáneos que responden a los patrones de consumo visual de las audiencias jóvenes.</p>',
            cat_impacto_visual: 'Impacto Visual',
            impacto_texto: '<p>A partir de una paleta que es llamativa y colorida, pero también orgánica y terrenal, se generan superposiciones de tramas geométricas. Estos elementos, en movimiento, permiten construir piezas visualmente potentes que captan la atención en entornos digitales saturados.</p><p>Además, introducen una lectura visual de movimiento colectivo, reforzando la idea de un espacio barrial dinámico y en constante transformación.</p>',
            cat_ilustraciones_sistema: 'Ilustraciones',
            ilustraciones_texto: '<p>Se desarrolló un estilo de ilustraciones que aporta una arista humana al sistema, equilibrando la construcción vectorial con la calidez del trazo manual. Estos recursos permiten representar escenas, gestos y dinámicas propias de la feria, humanizando la interfaz.</p><p>Los componentes de interacción (botones) también han sido ilustrados, simulando la apariencia de un sticker, reforzando el carácter táctil y cercano de la propuesta digital.</p>',
            cat_fidelizacion: 'Piezas para fidelización de conusmidores',
            footer_inicio: 'INICIO',
            footer_siguiente: 'SIGUIENTE PROYECTO',
            footer_creditos: 'DISEÑO Y DESARROLLO POR MAGDALENA SOULIER',
        },
        en: {
            diseno_web: 'WEB DESIGN',
            direccion_de_arte: 'ART DIRECTION',
            ilustracion: 'ILLUSTRATION',
            diseno_estrategia: 'STRATEGY DESIGN',
            detalle_anio: '[2025]',
            detalle_universidad: '[UDELAR]',
            detalle_equipo: 'Completed as a team with Iara Rodriguez and Emilia Fripp',
            cs_descripcion: '<p>The neighborhood market ecosystem in Montevideo presents a critical gap for the young segment. The project\'s goal was to digitize a traditionally analog experience, eliminating the complexity of information fragmentation.</p><p>The aim was to create an intuitive solution that centralized real-time data, giving users control over their consumption and time at their fingertips.</p>',
            sec_tecnologias: 'Technologies used',
            cat_diseno: 'Design',
            cat_implementacion: 'Implementation',
            sec_propuesta: 'Strategic proposal',
            propuesta_texto: '<p>Neighborhood markets hold a significant place in the fabric of local communities, functioning as hubs where economic exchanges, social interactions, and community identities intersect.</p><p>This project does not seek to modify the dynamics of the markets, but to reactivate them: the proposal operates as a gateway to territorial consumption.</p><p class="cs-bold">The challenge: Information fragmentation and the lack of a cohesive user experience.</p><p>While retail competitors offer seamless digital experiences, the market lacked a unified interface, generating a perception of obsolescence.</p><p>The challenge was to structure a design language capable of coexisting with the identity of Municipio B, prioritizing a clear information architecture that resolved previous visual inconsistencies and communication issues in the territory.</p>',
            sec_publicos: 'Audiences',
            publicos_intro: '<p>The project targets young people aged 18 to 34 who are responsible for food shopping.</p><p>Based on their relationship with the context, 3 profiles are identified.</p>',
            card_desvinculado: 'Disconnected',
            body_desvinculado: '<p><strong>Behavior:</strong> Has no or little relationship with the physical environment of the market and the neighborhood.</p><p><strong>Need:</strong> Overcome the barrier of unfamiliarity.</p><p><strong>Design Opportunity:</strong> Generate interest through an interface that presents the market as a relevant, modern, and worthwhile event to explore.</p>',
            card_practico: 'Practical',
            body_practico: '<p><strong>Behavior:</strong> Prioritizes speed and accessibility over emotional connection. Their purchase decision is purely functional. They seek to optimize time and demand immediate access to information.</p><p><strong>Pain Point:</strong> The perception that the market is "difficult" or "slow" compared to a supermarket.</p><p><strong>Design Opportunity:</strong> Mobile-first approach. The UI should highlight proximity (geolocation) and price competitiveness, positioning the market as the most efficient and simple option in their daily routine.</p>',
            card_consciente: 'Conscious',
            body_consciente: '<p><strong>Behavior:</strong> User with ethical values and responsible consumption aligned with food sovereignty. Already has a connection with the territory.</p><p><strong>Need:</strong> Deepen the connection and sense of belonging.</p><p><strong>Design Opportunity:</strong> Retention and Community. The design should offer value-added content (product history, social impact) that reinforces their commitment and turns them into an active promoter of the market system.</p>',
            sec_sistema: 'Visual System and Design Language',
            sistema_intro: '<p>A clear and captivating visual system was designed with a flexible structure that allows coherent application across both digital interfaces and territorial devices of varying complexity. The technical approach consisted of balancing the institutional identity of Municipio B with contemporary graphic resources that respond to the visual consumption patterns of young audiences.</p>',
            cat_impacto_visual: 'Visual Impact',
            impacto_texto: '<p>From a palette that is striking and colorful, yet also organic and earthy, geometric pattern overlays are generated. These elements, in motion, allow for visually powerful pieces that capture attention in saturated digital environments.</p><p>They also introduce a visual reading of collective movement, reinforcing the idea of a dynamic neighborhood space in constant transformation.</p>',
            cat_ilustraciones_sistema: 'Illustrations',
            ilustraciones_texto: '<p>An illustration style was developed that brings a human dimension to the system, balancing vector construction with the warmth of hand-drawn strokes. These resources allow for the representation of scenes, gestures, and dynamics typical of the market, humanizing the interface.</p><p>The interaction components (buttons) have also been illustrated, simulating the appearance of a sticker, reinforcing the tactile and approachable nature of the digital proposal.</p>',
            cat_fidelizacion: 'Consumer loyalty pieces',
            footer_inicio: 'HOME',
            footer_siguiente: 'NEXT PROJECT',
            footer_creditos: 'DESIGN AND DEVELOPMENT BY MAGDALENA SOULIER',
        }
    };

    const lang = new URLSearchParams(window.location.search).get('lang')
              || localStorage.getItem('preferredLang')
              || 'es';

    const t = T[lang] || T.es;
    document.querySelectorAll('[data-key]').forEach(function (el) {
        const key = el.getAttribute('data-key');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
}());

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

// ── Carousel ──────────────────────────────────────────────
(function () {
    const track = document.getElementById('csCarouselTrack');
    if (!track) return;

    const originals = Array.from(track.querySelectorAll('img'));
    const N = originals.length;

    // Surround real slides with one clone on each side:
    //   [clone-of-last] [0..N-1] [clone-of-first]
    // This allows seamless wrapping in both directions.
    track.insertBefore(originals[N - 1].cloneNode(true), originals[0]);
    track.appendChild(originals[0].cloneNode(true));

    const allSlides = Array.from(track.querySelectorAll('img'));
    let current = 1; // index 1 = real first slide
    let busy    = false;
    let timer;

    function updateActive(index) {
        allSlides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    }

    // Instant reposition — no transition
    function jump(index) {
        track.style.transition = 'none';
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
        track.getBoundingClientRect(); // force reflow
        track.style.transition = '';
        updateActive(index);
    }

    // Animated slide
    function slide(index) {
        if (busy) return;
        busy = true;
        updateActive(index);
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
    }

    // After the transform transition ends, correct position if on a clone
    track.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        busy = false;
        if (current === N + 1) jump(1); // slid past last clone → real first
        if (current === 0)     jump(N); // slid past first clone → real last
    });

    function next() { slide(current + 1); }
    function prev() { slide(current - 1); }

    function startAuto() { timer = setInterval(next, 3500); }
    function resetAuto()  { clearInterval(timer); startAuto(); }

    document.querySelector('.cs-carousel-prev').addEventListener('click', () => { prev(); resetAuto(); });
    document.querySelector('.cs-carousel-next').addEventListener('click', () => { next(); resetAuto(); });

    document.querySelectorAll('.cs-carousel-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => cursor.classList.add('cursor-pointer'));
        btn.addEventListener('mouseleave', () => cursor.classList.remove('cursor-pointer'));
    });

    jump(1); // set initial position without animation
    startAuto();
}());

// ── Footer links: scramble + cursor-pointer ────────────────
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz';
        this.update = this.update.bind(this);
        this.targetText = '';
        this.isAnimating = false;
    }
    setText(newText) {
        if (this.isAnimating && this.targetText === newText) return;
        if (this.isAnimating) this.completeImmediately();
        this.targetText = newText;
        this.isAnimating = true;
        const oldText = this.el.innerText || '';
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => (this.resolve = resolve));
        this.queue = [];
        this.maxEnd = 0;
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to   = newText[i] || '';
            const start = Math.floor(Math.random() * 10);
            const end   = start + Math.floor(Math.random() * 12);
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
        this.el.innerText = this.targetText;
        this.isAnimating = false;
        if (this.resolve) this.resolve();
    }
    update() {
        if (!this.isAnimating) return;
        let output = '', complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) { complete++; output += to; }
            else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) { char = this.randomChar(); this.queue[i].char = char; }
                output += `<span>${char}</span>`;
            } else { output += from; }
        }
        this.el.innerHTML = output;
        if (this.frame >= this.maxEnd && complete === this.queue.length) {
            this.el.innerText = this.targetText;
            this.isAnimating = false;
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
}

// Inicio link — scramble on text span, hover on full <a>
const inicioLink = document.querySelector('.text-inicio');
const inicioSpan = document.querySelector('.cs-footer-inicio-text');
if (inicioLink && inicioSpan) {
    const fxInicio = new TextScramble(inicioSpan);
    const inicioOriginal = inicioSpan.innerText;
    inicioLink.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-pointer');
        fxInicio.setText(inicioOriginal);
    });
    inicioLink.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-pointer');
    });
}

// Siguiente proyecto — scramble on text span, hover on full <a>
const nextLink = document.querySelector('.cs-footer-next');
const nextSpan = document.querySelector('.cs-footer-next-text');
if (nextLink && nextSpan) {
    const fxNext = new TextScramble(nextSpan);
    const nextOriginal = nextSpan.innerText;
    nextLink.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-pointer');
        fxNext.setText(nextOriginal);
    });
    nextLink.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-pointer');
    });
}
