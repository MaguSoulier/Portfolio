document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');

            // Animación básica de las barritas (opcional)
            menuToggle.classList.toggle('open');
        });

        // Cerrar menú al hacer click en un link
        const navLinks = navMenu.querySelectorAll('a, button');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
            });
        });

        // Cerrar al hacer click fuera del menú (ya no cubre toda la pantalla)
        document.addEventListener('click', (e) => {
            if (!navMenu.classList.contains('is-active')) return;
            if (navMenu.contains(e.target) || menuToggle.contains(e.target)) return;
            navMenu.classList.remove('is-active');
            menuToggle.classList.remove('open');
        });
    }
});
