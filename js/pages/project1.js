// ── Language: apply saved preference, expose changeLanguage() for the
//    header's ES/EN switcher ─────────────────────
// Not js/i18n.js (used by index.html) — that dictionary is keyed for the
// hero/work-section elements this page doesn't have (.main-name,
// #rotating-badge, etc.) and only partially overlaps this page's own
// data-key vocabulary, so loading it instead of this local one would risk
// silently mismatched translations rather than a clean switch.
const T = {
        es: {
            navwork: 'TRABAJOS',
            navabout: 'SOBRE MÍ',
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
            sec_contexto: 'Contexto y problemática',
            contexto_texto: '<p>Las ferias vecinales ocupan un lugar significativo en la vida de los barrios, funcionando como espacios de encuentro donde se cruzan intercambios económicos, interacciones sociales e identidades comunitarias.</p><p>Sin embargo, según el informe de la Cámara de Industrias del Uruguay e INEFOP (2020) se evidencia que <strong>la feria ha dejado de ocupar un lugar cotidiano</strong> en la rutina de las personas uruguayas, desplazada por otras formas de compra, siendo los <strong>jóvenes de 18 a 34 años</strong> el grupo que <strong>menos acude a la feria</strong> como primer punto de compra.</p><p>Actualmente, la única forma de conocer la ubicación, horarios y oferta de las ferias es encontrándote una en la calle. Esto genera una <strong>percepción de obsolescencia</strong> frente a las plataformas de retail modernas, cuyas <strong>experiencias digitales son fluidas e inmediatas.</strong></p><p>El proyecto nace con el objetivo de reactivar el consumo en territorio y atraer a poblaciones jóvenes mediante el desarrollo de una <strong>identidad digital contemporánea</strong> que formalice el <strong>acceso a la información</strong> y brinde certeza a los usuarios antes de su visita. Reafirmando la idea de que fortalecer la feria es fortalecer la vida barrial.</p>',
            video1_subtext: '<p>Animación desarrollada en JavaScript para la pantalla de inicio de la web. Los patrones geométricos se inspiran en el apilamiento hexagonal de las frutas y verduras, trasmitiendo el concepto de flujo, intercambio y abundancia de las ferias barriales.</p>',
            sec_propuesta: 'Propuesta estratégica',
            propuesta_texto: '<p>La feria es efímera por naturaleza, pero la necesidad de información del usuario es constante. Su presencia debe circular simbólicamente en el barrio, y permanecer en la memoria visual de quienes la habitan.</p><p>La estrategia combina presencia en redes sociales, cartelería y objetos de fidelización, todos nucleados por una plataforma web que actúa como punto de contacto. Formalizando el acceso a la información e instalando a las ferias como una experiencia de compra ordenada y accesible, se activa el deseo de consumo.</p>',
            sec_publicos: 'Públicos',
            publicos_intro: '<p>El proyecto se dirige al grupo de jóvenes de 18 a 34 años, que se ocupan de la compra de alimentos.</p><p>En función de su relación con el contexto se detectan 3 perfiles.</p>',
            card_desvinculado: 'Desvinculado',
            body_desvinculado: '<p><strong>Comportamiento:</strong> Posee una relación nula o escasa con el entorno físico de la feria y el barrio.</p><p><strong>Necesidad:</strong> Superar la barrera del desconocimiento.</p><p><strong>Oportunidad de Diseño:</strong> Generar interés mediante una interfaz que presente la feria como un evento relevante, moderno y digno de ser explorado.</p>',
            card_practico: 'Práctico',
            body_practico: '<p><strong>Comportamiento:</strong> Prioriza la rapidez y la accesibilidad sobre el vínculo emocional. Su decisión de compra es puramente funcional. Buscan optimizar el tiempo y demandan acceso inmediato a la información.</p><p><strong>Punto de Dolor:</strong> La percepción de que la feria es "difícil" o "lenta" comparada con un supermercado.</p><p><strong>Oportunidad de diseño:</strong> Enfoque mobile-first. La UI debe destacar la cercanía (geolocalización) y la competitividad de precios, posicionando a la feria como la opción más eficiente y sencilla en su rutina diaria.</p>',
            card_consciente: 'Consciente',
            body_consciente: '<p><strong>Comportamiento:</strong> Usuario con valores éticos y de consumo responsable alineados con la soberanía alimentaria. Ya posee un vínculo con el territorio.</p><p><strong>Necesidad:</strong> Profundizar la conexión y pertenencia.</p><p><strong>Oportunidad de Diseño:</strong> Retención y Comunidad. El diseño debe ofrecer contenido de valor agregado (historia de los productos, impacto social) que refuerce su compromiso y lo convierta en un promotor activo del sistema de ferias.</p>',
            sec_flujo: 'Flujo de usuario',
            flujo_intro: '<p>Al ser un sitio pensado para acceder desde códigos QR en la vía pública, se proyectó un sistema sin scroll, desde el enfoque mobile-first. Esta organización prioriza una navegación sencilla y orientada a la acción.</p>',
            flujo_pantalla_inicio: 'Pantalla de inicio',
            flujo_mas_info: 'Más información',
            flujo_mapa: 'Mapa geolocalizado',
            flujo_texto_mas_info: '<p>A través de textos breves, se explica cómo consumir en ferias aporta a la economía solidaria, beneficiando tanto a la sociedad como al bolsillo.</p><p>Esta sección busca construir sentido alrededor de la decisión de comprar en la feria.</p>',
            flujo_texto_mapa: '<p>El usuario puede filtrar por día y por cercanía, acceder a instrucciones de uso y visualizar las ferias dentro de un barrio.</p><p>Al seleccionar una feria, se despliega su información específica, incluyendo ubicación, horario y tipos de puestos.</p><p>Al hacer clic en un tipo de puesto, el sitio muestra datos del vendedor o categoría e información complementaria según corresponda.</p>',
            video2_subtext: '<p>Las tramas geométricas conviven de manera integrada con ilustraciones manuales que operan como los botones de acción.</p>',
            sec_sistema: 'Sistema Visual y Lenguaje de Diseño',
            sistema_intro: '<p>Se proyectó un sistema visual claro y cautivante, diseñado con una estructura flexible que permite una aplicación coherente tanto en interfaces digitales como en dispositivos territoriales de diversa complejidad. El enfoque técnico consistió en equilibrar la identidad Institucional del Municipio B con recursos gráficos contemporáneos que responden a los patrones de consumo visual de las audiencias jóvenes.</p>',
            cat_impacto_visual: 'Impacto Visual',
            impacto_texto: '<p>A partir de una paleta que es llamativa y colorida, pero también orgánica y terrenal, se generan superposiciones de tramas geométricas. Estos elementos, en movimiento, permiten construir piezas visualmente potentes que captan la atención en entornos digitales saturados.</p><p>Además, introducen una lectura visual de movimiento colectivo, reforzando la idea de un espacio barrial dinámico y en constante transformación.</p>',
            cat_ilustraciones_sistema: 'Ilustraciones',
            ilustraciones_texto: '<p>Se desarrolló un estilo de ilustraciones que aporta una arista humana al sistema, equilibrando la construcción vectorial con la calidez del trazo manual. Estos recursos permiten representar escenas, gestos y dinámicas propias de la feria, humanizando la interfaz.</p><p>Los componentes de interacción (botones) también han sido ilustrados, simulando la apariencia de un sticker, reforzando el carácter táctil y cercano de la propuesta digital.</p>',
            cat_fidelizacion: 'Piezas para fidelización de conusmidores',
            tote_subtext: 'Tote bag que utiliza las ilustraciones del sistema visual.',
            stickers_subtext: 'Stickers que nacen de los botones de la web, referencian a cada feria vecinal del municipio B.',
            footer_inicio: 'INICIO',
            footer_siguiente: 'SIGUIENTE PROYECTO',
            footer_creditos: 'Diseñado y desarrollado por Magdalena soulier | © 2026',
        },
        en: {
            navwork: 'WORK',
            navabout: 'ABOUT ME',
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
            sec_contexto: 'Context and problem',
            contexto_texto: '<p>Neighborhood markets hold a significant place in the life of the barrios, functioning as spaces of encounter where economic exchange, social interaction, and community identity intersect.</p><p>However, according to a report by the Chamber of Industries of Uruguay and INEFOP (2020), <strong>the market has stopped being part of Uruguayans\' daily routine</strong>, displaced by other ways of shopping — with <strong>young people aged 18 to 34</strong> being the group that <strong>visits the market least</strong> as their first choice for purchases.</p><p>Currently, the only way to find out a market\'s location, hours, and offerings is to come across one on the street. This creates a <strong>perception of obsolescence</strong> compared to modern retail platforms, whose <strong>digital experiences are fluid and immediate</strong>.</p><p>The project was born with the goal of reactivating local consumption and attracting younger audiences through a <strong>contemporary digital identity</strong> that formalizes <strong>access to information</strong> and gives users certainty before their visit — reaffirming the idea that strengthening the market means strengthening neighborhood life.</p>',
            video1_subtext: '<p>Animation developed in JavaScript for the site\'s home screen. The geometric patterns are inspired by the hexagonal stacking of fruits and vegetables, conveying the concept of flow, exchange, and abundance found in neighborhood markets.</p>',
            sec_propuesta: 'Strategic proposal',
            propuesta_texto: '<p>The market is ephemeral by nature, but the user\'s need for information is constant. Its presence must circulate symbolically through the neighborhood, and remain in the visual memory of those who live there.</p><p>The strategy combines a presence on social media, signage, and loyalty items, all centered around a web platform that acts as the point of contact. By formalizing access to information and establishing the markets as an orderly, accessible shopping experience, consumer desire is activated.</p>',
            sec_publicos: 'Audiences',
            publicos_intro: '<p>The project targets young people aged 18 to 34 who are responsible for food shopping.</p><p>Based on their relationship with the context, 3 profiles are identified.</p>',
            card_desvinculado: 'Disconnected',
            body_desvinculado: '<p><strong>Behavior:</strong> Has no or little relationship with the physical environment of the market and the neighborhood.</p><p><strong>Need:</strong> Overcome the barrier of unfamiliarity.</p><p><strong>Design Opportunity:</strong> Generate interest through an interface that presents the market as a relevant, modern, and worthwhile event to explore.</p>',
            card_practico: 'Practical',
            body_practico: '<p><strong>Behavior:</strong> Prioritizes speed and accessibility over emotional connection. Their purchase decision is purely functional. They seek to optimize time and demand immediate access to information.</p><p><strong>Pain Point:</strong> The perception that the market is "difficult" or "slow" compared to a supermarket.</p><p><strong>Design Opportunity:</strong> Mobile-first approach. The UI should highlight proximity (geolocation) and price competitiveness, positioning the market as the most efficient and simple option in their daily routine.</p>',
            card_consciente: 'Conscious',
            body_consciente: '<p><strong>Behavior:</strong> User with ethical values and responsible consumption aligned with food sovereignty. Already has a connection with the territory.</p><p><strong>Need:</strong> Deepen the connection and sense of belonging.</p><p><strong>Design Opportunity:</strong> Retention and Community. The design should offer value-added content (product history, social impact) that reinforces their commitment and turns them into an active promoter of the market system.</p>',
            sec_flujo: 'User flow',
            flujo_intro: '<p>Since the site is meant to be accessed via QR codes in public spaces, it was designed as a scroll-free, mobile-first system. This structure prioritizes simple, action-oriented navigation.</p>',
            flujo_pantalla_inicio: 'Home screen',
            flujo_mas_info: 'More information',
            flujo_mapa: 'Geolocated map',
            flujo_texto_mas_info: '<p>Through short texts, it\'s explained how shopping at markets contributes to the solidarity economy, benefiting both society and your wallet.</p><p>This section aims to build meaning around the decision to buy at the market.</p>',
            flujo_texto_mapa: '<p>Users can filter by day and by proximity, access usage instructions, and view the markets within a neighborhood.</p><p>Selecting a market reveals its specific information, including location, hours, and stall types.</p><p>Clicking on a stall type shows vendor or category details and complementary information as relevant.</p>',
            video2_subtext: '<p>The geometric patterns integrate seamlessly with hand-drawn illustrations that function as the action buttons.</p>',
            sec_sistema: 'Visual System and Design Language',
            sistema_intro: '<p>A clear and captivating visual system was designed with a flexible structure that allows coherent application across both digital interfaces and territorial devices of varying complexity. The technical approach consisted of balancing the institutional identity of Municipio B with contemporary graphic resources that respond to the visual consumption patterns of young audiences.</p>',
            cat_impacto_visual: 'Visual Impact',
            impacto_texto: '<p>From a palette that is striking and colorful, yet also organic and earthy, geometric pattern overlays are generated. These elements, in motion, allow for visually powerful pieces that capture attention in saturated digital environments.</p><p>They also introduce a visual reading of collective movement, reinforcing the idea of a dynamic neighborhood space in constant transformation.</p>',
            cat_ilustraciones_sistema: 'Illustrations',
            ilustraciones_texto: '<p>An illustration style was developed that brings a human dimension to the system, balancing vector construction with the warmth of hand-drawn strokes. These resources allow for the representation of scenes, gestures, and dynamics typical of the market, humanizing the interface.</p><p>The interaction components (buttons) have also been illustrated, simulating the appearance of a sticker, reinforcing the tactile and approachable nature of the digital proposal.</p>',
            cat_fidelizacion: 'Consumer loyalty pieces',
            tote_subtext: 'Tote bag featuring the visual system\'s illustrations.',
            stickers_subtext: 'Stickers derived from the site\'s buttons, each referencing a neighborhood market in Municipio B.',
            footer_inicio: 'HOME',
            footer_siguiente: 'NEXT PROJECT',
            footer_creditos: 'Design and developed by Magdalena soulier | © 2026',
        }
    };

function applyLanguage(lang) {
    const t = T[lang] || T.es;
    document.querySelectorAll('[data-key]').forEach(function (el) {
        const key = el.getAttribute('data-key');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    if (btnEs) btnEs.classList.toggle('active', lang === 'es');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
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
