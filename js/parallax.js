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
    });
});
