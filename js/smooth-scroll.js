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

    // Not just --header-h (70px) — section labels sit above the section's
    // own top via negative margin (.trabajos-label: -60px, .sobre-mi-label:
    // -40px), so landing the section's top flush under the header still hid
    // the label underneath it. 140 clears the worse case (trabajos) with
    // ~10px to spare.
    const headerOffset = 140;

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
                // Refresh first — if a still-loading image (hero photo,
                // docencia/media-resma, project media) has shifted the
                // page's layout since ScrollTrigger last measured it, the
                // eased scrollTo would ease toward a now-stale target
                // position and land short of it.
                ScrollTrigger.refresh();
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
