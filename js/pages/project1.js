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
            cs_descripcion: '<p>Mi rol consistió en la ideación visual del sistema y producción del producto digital web, mis tareas fueron:</p>',
            cs_tareas: '<li><strong>Creación del sistema de diseño:</strong> Incluyendo paleta cromática, texturas, tipografía y el sistema de ilustraciones que acompañan al producto.</li><li><strong>Arquitectura de interfaz:</strong> Diseño del flujo de navegación y jerarquía de la información.</li><li><strong>Prototipado:</strong> Programación de la animación generativa en JavaScript y desarrollo del prototipo de alta fidelidad que simula la navegación del mapa y la aplicación de filtros.</li>',
            sec_tecnologias: 'Tecnologías utilizadas',
            cat_diseno: 'Diseño',
            cat_implementacion: 'Implementación',
            sec_contexto: 'Contexto y problemática',
            contexto_texto: '<p>Las ferias vecinales ocupan un lugar significativo en la vida de los barrios, funcionando como espacios de encuentro donde se cruzan intercambios económicos, interacciones sociales e identidades comunitarias.</p><p>Sin embargo, según el informe de la Cámara de Industrias del Uruguay e INEFOP (2020) se evidencia que la feria ha dejado de ocupar un lugar cotidiano en la rutina de las personas uruguayas, desplazada por otras formas de compra, siendo los <strong>jóvenes de 18 a 34 años</strong> el grupo que menos acude a la feria como primer punto de compra.</p><p>Actualmente, la ubicación, horarios y oferta de las ferias dependen exclusivamente de la memoria o del hallazgo fortuito en la calle. Esto genera <strong>incertidumbre</strong> frente a las plataformas de retail modernas, cuyas experiencias digitales son fluidas e inmediatas.</p><p>El proyecto nace con el objetivo de reactivar el consumo en territorio y atraer a poblaciones jóvenes mediante el <strong>desarrollo de una identidad digital</strong> que formalice el acceso a la información y <strong>brinde certeza</strong> a los usuarios antes de su visita.</p>',
            video1_subtext: '<p>Animación desarrollada en JavaScript para la pantalla de inicio de la web. Los patrones geométricos se inspiran en el apilamiento hexagonal de las frutas y verduras, trasmitiendo el concepto de flujo, intercambio y abundancia de las ferias barriales.</p>',
            sec_propuesta: 'Propuesta estratégica',
            propuesta_texto: '<p>La feria es efímera por naturaleza, pero la necesidad de información del usuario es constante. Su presencia debe circular simbólicamente en el barrio, y permanecer en la memoria visual de quienes la habitan.</p><p>La estrategia combina presencia en redes sociales, cartelería y objetos de fidelización, todos nucleados por una plataforma web geolocalizada que actúa como punto de contacto. <strong>Formalizando el acceso a la información e instalando a las ferias como una experiencia de compra ordenada y accesible, se activa el deseo de consumo.</strong></p>',
            sec_publicos: 'Públicos',
            publicos_intro: '<p>El proyecto se dirige al grupo de jóvenes de 18 a 34 años, que se ocupan de la compra de alimentos.</p><p>En función de su relación con el contexto se detectan 3 perfiles.</p>',
            card_desvinculado: 'Desvinculado',
            body_desvinculado: '<p><strong>Comportamiento:</strong> Posee una relación nula o escasa con el entorno físico de la feria y el barrio.</p><p><strong>Necesidad:</strong> Superar la barrera del desconocimiento.</p><p><strong>Oportunidad de Diseño:</strong> Generar interés mediante una identidad visual que presente la feria como un evento relevante, moderno y digno de ser explorado.</p>',
            card_practico: 'Práctico',
            body_practico: '<p><strong>Comportamiento:</strong> Prioriza la rapidez y la accesibilidad sobre el vínculo emocional. Busca optimizar tiempo y exige inmediatez. Compara la feria con la conveniencia del supermercado.</p><p><strong>Necesidad:</strong> Cambiar la percepción de que la feria es "difícil" o "lenta" comparada con un supermercado.</p><p><strong>Oportunidad de diseño:</strong> Priorización del mapa geolocalizado para responder en menos de 2 clics: ¿Dónde hay feria hoy cerca de mí?</p>',
            card_consciente: 'Consciente',
            body_consciente: '<p><strong>Comportamiento:</strong> Usuario con valores éticos y de consumo alineados con la soberanía alimentaria. Ya posee un vínculo con el territorio.</p><p><strong>Necesidad:</strong> Profundizar la conexión y pertenencia.</p><p><strong>Oportunidad de Diseño:</strong> Retención y comunidad a través de objetos de fidelización. El diseño debe ofrecer contenido de valor agregado (historia de las ferias, impacto social) que refuerce su compromiso.</p>',
            sec_flujo: 'Flujo de usuario',
            flujo_intro: '<p>Al tratarse de una experiencia pensada para ser escaneada mediante códigos QR en la vía pública, la arquitectura se diseñó bajo un esquema sin scroll. Esto elimina la fatiga de navegación y orienta al usuario directamente a la acción.</p>',
            flujo_pantalla_inicio: 'Pantalla de inicio',
            flujo_mas_info: 'Más información',
            flujo_mapa: 'Mapa geolocalizado',
            flujo_texto_mas_info: '<p>A través de textos breves, se explica cómo consumir en ferias aporta a la economía solidaria, beneficiando tanto a la sociedad como al bolsillo.</p>',
            flujo_texto_mapa: '<p>Módulo principal con filtros combinados por día, cercanía y barrio. Al seleccionar una feria, se despliega su información específica, incluyendo ubicación precisa, horarios, categorías de puestos e información de los vendedores.</p>',
            video2_subtext: '<p>Las tramas geométricas conviven de manera integrada con ilustraciones manuales que operan como los botones de acción.</p>',
            sec_sistema: 'Sistema y lenguaje visual',
            sistema_intro: '<p>El lenguaje gráfico equilibra la institucionalidad del Municipio B con una estética contemporánea adaptada para captar la atención de audiencias jóvenes en entornos digitales saturados.</p>',
            cat_impacto_visual: 'Generación de tramas',
            impacto_texto: '<p>A partir de una paleta que es llamativa y colorida, pero también orgánica y terrenal, se generan superposiciones de tramas geométricas, inspiradas en el apilamiento hexagonal de frutas y verduras.</p><p>Remiten al movimiento colectivo, reforzando la idea de un espacio barrial dinámico y en constante transformación.</p>',
            cat_ilustraciones_sistema: 'Ilustraciones',
            ilustraciones_texto: '<p>Se desarrolló un estilo de ilustraciones que aporta una arista humana al sistema, equilibrando la construcción vectorial con la calidez del trazo manual. Estos recursos permiten representar escenas, gestos y dinámicas propias de la feria.</p><p>Estas además se integran directamente en la interfaz, operando como botones de acción que imitan la visualidad de un sticker.</p>',
            sistema_quote: 'Actualizar la experiencia de la feria no es solo optimizar una compra, es fortalecer la vida barrial.',
            sec_iteraciones: 'Próximas iteraciones',
            iteraciones_texto: '<p>Aunque la propuesta visual se diseñó respondiendo a un público joven y con alta alfabetización digital, un servicio para un comitente estatal exige <strong>accesibilidad universal</strong>, como navegación por teclado y compatibilidad con lectores de pantalla, además de un modo de "alta legibilidad" que desactive las tramas de fondo para usuarios con sensibilidad visual.</p><p>El flujo actual resuelve la necesidad puntual de localización, pero no fomenta el retorno frecuente a la plataforma. Incorporando un <strong>calendario de frutas y verduras de estación</strong> con indicadores de precios y soberanía alimentaria, la herramienta evolucionaría de un mapa estático a un asistente de compra consciente.</p><p>Implementación de un flujo simple de <strong>puestos y ferias favoritas</strong> que permita personalizar la pantalla de inicio con los días y accesos directos del usuario, sin requerir un registro complejo que genere fricción.</p>',
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
            cs_descripcion: '<p>My role consisted of the ideation and production of the web digital product; my tasks were:</p>',
            cs_tareas: '<li><strong>Design system creation:</strong> Including the color palette, textures, typography, and the illustration system that accompanies the product.</li><li><strong>Interface architecture:</strong> Design of the navigation flow and information hierarchy.</li><li><strong>Prototyping:</strong> Programming of the generative animation in JavaScript and development of the high-fidelity prototype that simulates map navigation and filter application.</li>',
            sec_tecnologias: 'Technologies used',
            cat_diseno: 'Design',
            cat_implementacion: 'Implementation',
            sec_contexto: 'Context and problem',
            contexto_texto: '<p>Neighborhood markets occupy a significant place in the life of the barrios, functioning as meeting spaces where economic exchanges, social interactions, and community identities cross.</p><p>However, according to the report by the Chamber of Industries of Uruguay and INEFOP (2020), evidence shows that the market has ceased to occupy an everyday place in the routine of Uruguayan people, displaced by other forms of purchase, with <strong>young people aged 18 to 34</strong> being the group that least attends the market as a first point of purchase.</p><p>Currently, the location, schedule, and offerings of markets depend exclusively on memory or chance encounters on the street. This creates <strong>uncertainty</strong> compared to modern retail platforms, whose digital experiences are seamless and immediate.</p><p>The project was born with the objective of reactivating consumption in the territory and attracting young populations through the <strong>development of a digital identity</strong> that formalizes access to information and <strong>provides certainty</strong> to users before their visit.</p>',
            video1_subtext: '<p>Animation developed in JavaScript for the site\'s home screen. The geometric patterns are inspired by the hexagonal stacking of fruits and vegetables, conveying the concept of flow, exchange, and abundance found in neighborhood markets.</p>',
            sec_propuesta: 'Strategic proposal',
            propuesta_texto: '<p>The market is ephemeral by nature, but the user\'s need for information is constant. Its presence must circulate symbolically through the neighborhood, and remain in the visual memory of those who live there.</p><p>The strategy combines a presence on social media, signage, and loyalty objects, all centered around a web platform that acts as a touchpoint. <strong>By formalizing access to information and establishing markets as an organized and accessible shopping experience, consumer desire is activated.</strong></p>',
            sec_publicos: 'Audiences',
            publicos_intro: '<p>The project targets the group of young people aged 18 to 34 who take care of grocery shopping.</p><p>Based on their relationship with the context, 3 profiles are detected.</p>',
            card_desvinculado: 'Disconnected',
            body_desvinculado: '<p><strong>Behavior:</strong> Has zero or little relationship with the physical environment of the market and the neighborhood.</p><p><strong>Need:</strong> Overcome the barrier of unfamiliarity.</p><p><strong>Design Opportunity:</strong> Generate interest through a visual identity that presents the market as a relevant, modern event worth exploring.</p>',
            card_practico: 'Pragmatic',
            body_practico: '<p><strong>Behavior:</strong> Prioritizes speed and accessibility over emotional connection. Seeks to optimize time and demands immediacy. Compares the market with the convenience of the supermarket.</p><p><strong>Need:</strong> Shift the perception that the market is "difficult" or "slow" compared to a supermarket.</p><p><strong>Design Opportunity:</strong> Prioritization of the geolocated map to answer in less than 2 clicks: "Where is there a market near me today?"</p>',
            card_consciente: 'Mindful',
            body_consciente: '<p><strong>Behavior:</strong> User with ethical and consumption values aligned with food sovereignty. Already has a connection with the territory.</p><p><strong>Need:</strong> Deepen connection and belonging.</p><p><strong>Design Opportunity:</strong> Retention and community through loyalty objects. The design must offer value-added content (market history, social impact) that reinforces their commitment.</p>',
            sec_flujo: 'User flow',
            flujo_intro: '<p>As this is an experience designed to be scanned via QR codes in public space, the architecture was designed under a zero-scroll scheme. This eliminates navigation fatigue and directs the user straight to action.</p>',
            flujo_pantalla_inicio: 'Initial welcome',
            flujo_mas_info: 'More information',
            flujo_mapa: 'Geolocated map',
            flujo_texto_mas_info: '<p>Through short texts, it explains how consuming in local markets contributes to the solidarity economy, benefiting both society and the pocket.</p>',
            flujo_texto_mapa: '<p>Main module with combined filters by day, proximity, and neighborhood. When selecting a market, its specific information is displayed, including precise location, hours, stall categories, and vendor information.</p>',
            video2_subtext: '<p>The geometric patterns integrate seamlessly with hand-drawn illustrations that function as the action buttons.</p>',
            sec_sistema: 'Visual system and design language',
            sistema_intro: '<p>The graphic language balances the institutional identity of Municipio B with a contemporary aesthetic adapted to capture the attention of young audiences in saturated digital environments.</p>',
            cat_impacto_visual: 'Pattern generation',
            impacto_texto: '<p>Using a palette that is striking and colorful, yet organic and earthy, overlaps of geometric patterns are generated, inspired by the hexagonal stacking of fruits and vegetables.</p><p>They evoke collective movement, reinforcing the idea of a dynamic and constantly transforming neighborhood space.</p>',
            cat_ilustraciones_sistema: 'Illustrations',
            ilustraciones_texto: '<p>An illustration style was developed to bring a human touch to the system, balancing vector construction with the warmth of a manual stroke. These assets allow for the representation of scenes, gestures, and dynamics typical of the market.</p><p>Additionally, they integrate directly into the interface, operating as action buttons that mimic the visual appeal of a sticker.</p>',
            sistema_quote: 'Updating the market experience is not just about optimizing a purchase, it is about strengthening neighborhood life.',
            sec_iteraciones: 'Next iterations',
            iteraciones_texto: '<p>Although the visual proposal was designed responding to a young audience with high digital literacy, a service for a state client demands <strong>universal accessibility</strong>, such as keyboard navigation and screen reader compatibility, in addition to a "high legibility" mode that disables background patterns for users with visual sensitivity.</p><p>The current flow resolves the specific need for location, but does not encourage frequent return to the platform. By incorporating a <strong>seasonal fruit and vegetable calendar</strong> with price indicators and food sovereignty insights, the tool would evolve from a static map into a conscious shopping assistant.</p><p>Implementation of a simple <strong>favorite markets and stalls</strong> flow that allows personalizing the home screen with the user\'s specific days and shortcuts, without requiring a complex sign-up process that creates friction.</p>',
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

// ── Header nav links (TRABAJOS / SOBRE MÍ): scramble on hover, same
//    TextScramble class/timing as index.html's header. Wired up locally
//    here (not shared cursor-and-init.js) since this page already runs its
//    own cursor system above and its own T/applyLanguage translation
//    system (see the top of this file) — loading the shared file would
//    double up both. Reads link.innerText fresh on every hover instead of
//    caching it once, so it stays correct after an ES/EN switch without
//    needing to hook into applyLanguage(). ──
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
// SlowTextScramble (text-scramble.js) — same class/duration/space-preserving
// fix used for the hero name and the project card titles, so the footer
// nav links scramble at the same calmer pace instead of their own faster,
// unpatched local copy.

// Inicio link — scramble on text span, hover on full <a>
const inicioLink = document.querySelector('.text-inicio');
const inicioSpan = document.querySelector('.cs-footer-inicio-text');
if (inicioLink && inicioSpan) {
    const fxInicio = new SlowTextScramble(inicioSpan);
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
    const fxNext = new SlowTextScramble(nextSpan);
    const nextOriginal = nextSpan.innerText;
    nextLink.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-pointer');
        fxNext.setText(nextOriginal);
    });
    nextLink.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-pointer');
    });
}
