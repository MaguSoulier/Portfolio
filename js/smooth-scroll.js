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

    // Arriving via a link to a specific section (e.g. project1.html's
    // header linking to index.html#trabajos) — jump there once every
    // image has actually finished loading. loader.js makes an earlier
    // attempt as soon as its (fake, time-based — not tied to real asset
    // loading) progress bar completes, which covers the common case, but
    // on a slow connection images can still be arriving after that,
    // growing the page's height and making ScrollSmoother/ScrollTrigger
    // recalculate and snap back to the top. window's load event only
    // fires once every image is truly in, so refreshing ScrollTrigger and
    // re-scrolling here is what actually guarantees landing in the right
    // place regardless of connection speed.
    window.addEventListener('load', () => {
        if (!window.location.hash) return;
        const target = document.querySelector(window.location.hash);
        if (!target) return;
        ScrollTrigger.refresh();
        smoother.scrollTo(target, false, `top ${headerOffset}px`);
    });
});
