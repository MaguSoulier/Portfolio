// ===============
// PROYECTOS
// ===============

document.addEventListener('DOMContentLoaded', () => {
    // Forzar inicio arriba
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const projectItems = document.querySelectorAll('.project-item');
    const footer = document.querySelector('footer'); // Seleccionamos el footer

    const projectRoutes = {
        'project1': 'project1.html',
        'project2': 'project2.html',
        'project3': 'project3.html'
    };

    projectItems.forEach(item => {
        const title = item.querySelector('.scramble-title');
        if (title) {
            // SlowTextScramble (text-scramble.js) — same effect as the hero
            // name's load-in reveal. The base TextScramble's faster pace
            // reads as noisy on a long multi-word title.
            item.scramblerInstance = new SlowTextScramble(title);
            item.originalText = title.innerText;
        }

        // --- LÓGICA DE CLICK: SALIDA DE UI ---
        item.addEventListener('click', () => {
            const targetUrl = projectRoutes[item.id];

            if (targetUrl) {
                // 1. Animamos el Footer (hacia abajo)
                if (footer) footer.classList.add('footer-out');

                // 2. Navegamos tras la animación
                setTimeout(() => {
                    window.location.href = targetUrl + (currentLang !== 'es' ? '?lang=' + currentLang : '');
                }, 600);
            }
        });

        // Title scramble now plays on hover instead of on scroll-activation
        // — cards no longer have a scroll-driven "active" card, so this is
        // the replacement trigger (also see cursor-and-init.js for the
        // rest of the hover treatment: image zoom + custom cursor).
        item.addEventListener('mouseenter', () => {
            if (item.scramblerInstance) item.scramblerInstance.setText(item.originalText);
        });

        // --- KEYBOARD ACTIVATION ---
        // The whole card is the tab stop (role="link", tabindex="0" in
        // index.html) instead of the nested "VER PROYECTO" pill, but a
        // non-native interactive element doesn't fire a click on Enter/Space
        // on its own the way a real <a>/<button> would — dispatch one
        // manually so it reuses the exact same navigation logic above.
        item.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            e.preventDefault();
            item.click();
        });

        // --- SCROLL-INTO-VIEW ON FOCUS (keyboard only) ---
        // GSAP ScrollSmoother re-implements scrolling as an eased transform
        // on #smooth-content instead of native document scroll, so the
        // browser's own focus-triggered scrollIntoView (which only knows
        // about the real, un-eased scroll position) can end up racing the
        // smoother mid-catch-up and settle short of actually bringing a
        // tabbed-to card into view. Driving it through the smoother
        // explicitly — same API smooth-scroll.js already uses for anchor
        // links — makes it land reliably regardless of how far the card is
        // from the previous scroll position.
        //
        // A mouse/touch click also focuses this element (tabindex="0"), which
        // would otherwise re-center the card under the cursor on every click.
        // Track whether the focus was preceded by a pointerdown on this same
        // card and skip the re-center in that case — only real keyboard
        // (Tab) focus should scroll.
        let focusFromPointer = false;
        item.addEventListener('pointerdown', () => {
            focusFromPointer = true;
        });
        item.addEventListener('focus', () => {
            if (focusFromPointer) {
                focusFromPointer = false;
                return;
            }
            if (window.pageSmoother) {
                window.pageSmoother.scrollTo(item, true, 'center center');
            } else {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});
