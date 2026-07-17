const logoInicio = document.getElementById('logo-inicio');
const headerCorona = document.getElementById('HeaderCorona');
const headerOjo = document.getElementById('HeaderOjo');

if (logoInicio) {
    logoInicio.addEventListener('click', (e) => {
        // 1. Evitar que el link recargue la página si solo quieres scroll
        e.preventDefault();
        if (window.pageSmoother) {
            window.pageSmoother.scrollTo(0, true);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 2. Añadir clases de animación
        headerCorona.classList.add('animar-corona-click');
        headerOjo.classList.add('animar-ojo-click');

        // 3. Quitar las clases después de que termine la animación (0.6s)
        // Esto permite que la animación se repita en el próximo click
        setTimeout(() => {
            headerCorona.classList.remove('animar-corona-click');
            headerOjo.classList.remove('animar-ojo-click');
        }, 600);
    });
}
