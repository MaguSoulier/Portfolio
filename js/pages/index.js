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
    const revealOptions = { threshold: 0, rootMargin: '0px 0px -25% 0px' };

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

    // Docencia / Media resma text — each block's [data-reveal] (about.css)
    // picks the slide direction (right for Docencia, left for Media resma);
    // this just toggles .is-visible the same way as the cards above. Own,
    // deeper rootMargin trim than revealOptions (-40% vs -15%) — these
    // blocks sit closer to their photos than the cards do to each other,
    // so the shared trim fired while they were still low in the viewport.
    const featureRevealOptions = { threshold: 0, rootMargin: '0px 0px -25% 0px' };
    const featureTexts = document.querySelectorAll('.sobre-mi-feature-text');
    if (featureTexts.length) {
        const featureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('is-visible', entry.isIntersecting);
            });
        }, featureRevealOptions);
        featureTexts.forEach(el => featureObserver.observe(el));
    }

    // Docencia / Media resma TITLES — same SlowTextScramble treatment as
    // "Formación" above, but on its own observer with a deeper rootMargin
    // trim than featureRevealOptions so it fires at a later scroll position
    // than the surrounding text block's slide-in (featureObserver above) —
    // the title scrambles in a beat after the paragraph has already
    // appeared, instead of both landing at once.
    const featureTitles = document.querySelectorAll('.sobre-mi-feature-title');
    if (featureTitles.length && typeof SlowTextScramble !== 'undefined') {
        featureTitles.forEach(title => {
            title.scrambler = new SlowTextScramble(title);
            title.originalText = title.innerText;
        });

        const titleRevealOptions = { threshold: 0, rootMargin: '0px 0px -55% 0px' };
        const featureTitleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.scrambler.setText(entry.target.originalText);
            });
        }, titleRevealOptions);
        featureTitles.forEach(title => featureTitleObserver.observe(title));
    }

    // Project cards (#trabajos) — .is-visible goes on .project-item, but
    // css/work.css only animates .project-info off it, so the media column
    // (already owned by js/parallax.js's scrub) is untouched. Slide
    // direction is baked into .project-info/.project-item.reverse
    // .project-info in CSS, not decided here.
    const projectItems = document.querySelectorAll('.project-item');
    if (projectItems.length) {
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('is-visible', entry.isIntersecting);
            });
        }, revealOptions);
        projectItems.forEach(el => projectObserver.observe(el));
    }
})();
