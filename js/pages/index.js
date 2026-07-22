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

// ==========================================
// SOBRE MÍ / FORMACIÓN — scroll-triggered reveal
// (css/about.css has the actual .sobre-mi-card transition + stagger delays)
// Both observers replay every time the section re-enters the viewport
// (no unobserve — toggle instead of fire-once), and rootMargin trims 15%
// off the bottom of the intersection root so the trigger point sits a bit
// further up the viewport instead of the moment the element's edge peeks
// into view.
// ==========================================
(function () {
    const revealOptions = { threshold: 0, rootMargin: '0px 0px -15% 0px' };

    // "Formación" title — same SlowTextScramble class/timing as the hero
    // name and project card titles, just triggered on scroll-into-view
    // instead of on load or hover. Re-scrambles every time it comes back
    // into view, not just the first time.
    const title = document.getElementById('formacion-title');
    if (title && typeof SlowTextScramble !== 'undefined') {
        title.scrambler = new SlowTextScramble(title);
        title.originalText = title.innerText;

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                title.scrambler.setText(title.originalText);
            });
        }, revealOptions);
        titleObserver.observe(title);
    }

    // Education cards — one shared observer on the row toggles .is-visible
    // on enter/leave; each card's own transition-delay (about.css) staggers
    // the fade/slide-up so they appear one after another, not all at once,
    // and replays the same way every time the row scrolls back into view.
    const cardsRow = document.querySelector('.sobre-mi-cards');
    if (cardsRow) {
        const cardsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                cardsRow.classList.toggle('is-visible', entry.isIntersecting);
            });
        }, revealOptions);
        cardsObserver.observe(cardsRow);
    }
})();
