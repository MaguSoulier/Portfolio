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
            item.scramblerInstance = new TextScramble(title);
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
    });

    // --- LÓGICA DE ACTIVACIÓN ÚNICA (Misma de antes) ---
    const updateActiveProject = () => {
        let closestProject = null;
        let minDistance = Infinity;
        const viewportCenter = window.innerHeight / 2;

        projectItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - itemCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestProject = item;
            }
        });

        if (closestProject && !closestProject.classList.contains('active')) {
            projectItems.forEach(p => p.classList.remove('active'));
            closestProject.classList.add('active');
            if (closestProject.scramblerInstance) {
                closestProject.scramblerInstance.setText(closestProject.originalText);
            }
        }
    };

    window.addEventListener('scroll', updateActiveProject);
    setTimeout(updateActiveProject, 100);
});
