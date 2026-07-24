// ==========================================
// PROJECTS PARALLAX
// Drifts each project preview image within its cropped frame as the card
// scrolls through the viewport (GSAP ScrollTrigger, scrubbed to scroll).
// Disabled below 769px, where css/responsive.css resets the image back to
// a plain 100%-height fill with no room to travel.
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.matchMedia().add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
        document.querySelectorAll('.project-media img, .project-media video').forEach((media) => {
            gsap.fromTo(media, { yPercent: -10 }, {
                yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: media.closest('.project-media'),
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });

        // Docencia / Media resma photos (about.css: .sobre-mi-feature-media-img)
        // — same drift technique, wider range since these are single large
        // photos rather than cropped cards, so the "faster than the text
        // beside it" parallax reads clearly.
        document.querySelectorAll('.sobre-mi-feature-media-img').forEach((media) => {
            gsap.fromTo(media, { yPercent: -15 }, {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: media.closest('.sobre-mi-feature-media-frame'),
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });

        // Vertical eyebrow labels ("SELECTED PROJECTS", "SOBRE MÍ", the hero's
        // "2026 - WEB PORTFOLIO" and location/time) — opposite idea from the
        // drifts above: a small scrubbed offset that undershoots the page's
        // own scroll, so each label lags behind the rest of the content
        // instead of scrolling at the normal 1:1 rate. Each label is its own
        // trigger (not its section) so the lag plays out over just the
        // label's own crossing of the viewport, not the whole (often much
        // taller) section beneath it.
        document.querySelectorAll('.trabajos-label, .sobre-mi-label, .web-portfolio, .secondary-text-block').forEach((label) => {
            gsap.to(label, {
                y: 150,
                ease: 'none',
                scrollTrigger: {
                    trigger: label,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    });
});
