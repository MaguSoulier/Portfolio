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
    });
});
