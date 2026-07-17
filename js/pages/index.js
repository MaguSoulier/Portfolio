(function () {
    const footer = document.querySelector('footer');
    const contactPanel = document.getElementById('contactPanel');
    let lastY = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentY = window.scrollY;
        if (currentY > lastY && currentY > 60) {
            if (footer) footer.classList.add('footer--hidden');
            if (contactPanel && contactPanel.classList.contains('is-visible')) {
                contactPanel.classList.add('panel--scroll-hidden');
            }
        } else {
            if (footer) footer.classList.remove('footer--hidden');
            if (contactPanel) contactPanel.classList.remove('panel--scroll-hidden');
        }
        lastY = currentY;
    }, { passive: true });
})();
