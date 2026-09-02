// ── Language: apply saved preference on load (js/i18n.js's global
// changeLanguage/translations — this page has no page-specific dictionary
// to override it with, same as index.html's own init in cursor-and-init.js).
const urlParams = new URLSearchParams(window.location.search);
const savedLang = localStorage.getItem('preferredLang');
const finalLang = urlParams.get('lang') || savedLang || 'es';
changeLanguage(finalLang, !!urlParams.get('lang'));

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    });
});
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
});
document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Nav links (TRABAJOS / SOBRE MÍ) — same TextScramble treatment as the
// other case-study pages (js/pages/project1.js). Reads link.innerText fresh
// on every hover instead of caching it, so it stays correct after an ES/EN
// switch without needing to hook into changeLanguage().
document.querySelectorAll('.nav-work, .nav-about').forEach(link => {
    const scrambler = new TextScramble(link);
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-pointer');
        scrambler.setText(link.innerText);
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-pointer');
    });
});

// Footer "volver" link — same SlowTextScramble treatment as the inicio/
// siguiente-proyecto links on the other case-study pages (js/pages/project1.js).
const inicioLink = document.querySelector('.cs-footer-inicio');
const inicioSpan = document.querySelector('.cs-footer-inicio-text');
if (inicioLink && inicioSpan) {
    const fxInicio = new SlowTextScramble(inicioSpan);
    inicioLink.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-pointer');
        fxInicio.setText(inicioSpan.innerText);
    });
    inicioLink.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-pointer');
    });
}
