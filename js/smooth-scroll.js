// ==========================================
// SMOOTH SCROLL (GSAP ScrollSmoother)
// Wraps native scroll in an eased "catch up" lag for a fluid feel.
// Falls back to native smooth-scroll (see base.css) if GSAP fails to load.
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollSmoother === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        smoothTouch: 0.1,
        ignoreMobileResize: true
    });

    window.pageSmoother = smoother;

    const headerOffset = 70; // matches --header-h in css/tokens.css

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        const targetId = link.getAttribute('href');

        link.addEventListener('click', (e) => {
            if (!targetId || targetId === '#') {
                e.preventDefault();
                smoother.scrollTo(0, true);
                return;
            }

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                smoother.scrollTo(target, true, `top ${headerOffset}px`);
            }
        });
    });
});
