// ==========================================
// INICIALIZACIÓN (DOMContentLoaded)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const connectBtn = document.querySelector('.connect');
    const contactPanel = document.getElementById('contactPanel');
    const emailContainer = document.querySelector('.contact-email');
    const contactTag = document.querySelector('.contact-tag');
    const mainName = document.querySelector('.main-name');
    const allLinks = document.querySelectorAll('a');
    const badgeEl = document.getElementById('rotating-badge');

    // Inicializar Scramblers
    if (mainName) mainName.scrambler = new TextScramble(mainName);
    if (badgeEl) badgeEl.scrambler = new TextScramble(badgeEl);
    if (contactTag) contactTag.scrambler = new TextScramble(contactTag);

    // Setup hover scramble for navigation links
    allLinks.forEach(link => {
      // Exclude: flower logo and contact panel links
      if (link.classList.contains('flower')) return;
      if (link.closest('.flower')) return;
      if (link.classList.contains('contact-link')) return; // Exclude contact panel links
      if (link.classList.contains('copy-email')) return; // Exclude email
      if (link.classList.contains('connect-card__link')) return; // Has an icon — scrambled separately in connect-card.js, targeting just the text span
      if (link.classList.contains('tag--link')) return; // Has an icon too — scrambling the whole <a> would wipe it via innerHTML; see .tag--link in about.css for its own hover treatment

      link.scrambler = new TextScramble(link);

      // For links with data-key, get text from current translation
      const dataKey = link.getAttribute('data-key');
      if (dataKey && translations[currentLang][dataKey]) {
        link.originalText = translations[currentLang][dataKey];
      } else {
        link.originalText = link.innerText; // Fallback to current text
      }

      link.addEventListener('mouseenter', () => link.scrambler.setText(link.originalText));
    });

// ==========================================
// CURSOR PERSONALIZADO
// ==========================================

    document.addEventListener('mousemove', (e) => {
        if(cursor) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    // .project-cta excluded — it's inside .project-item, which already
    // drives .cursor-pointer for the whole card below. If this generic
    // listener also bound to the button, moving off *just the button*
    // (while still over the rest of the card) would fire its mouseleave
    // and wrongly clear .cursor-pointer mid-hover.
    const interactiveElements = document.querySelectorAll('.nav-work, .nav-about, .nav-lang, .connect, .flower, a, button:not(.project-cta), .contact-email, .connect-card__mail');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor?.classList.add('cursor-pointer'));
        el.addEventListener('mouseleave', () => cursor?.classList.remove('cursor-pointer'));
    });

    // ==========================================
    // PROJECT CARD HOVER — image zoom + the standard orange-circle cursor
    // (same .cursor-pointer state as every other link/button), active for
    // as long as the pointer is anywhere over the card. Bound directly on
    // .project-item (not the generic interactiveElements list above) so it
    // fires once for the whole card rather than needing every descendant
    // (image, text, tags, button...) individually listed.
    // ==========================================
    const projectItems = document.querySelectorAll('.project-item');

    if (typeof gsap !== 'undefined') {
        projectItems.forEach(item => {
            const media = item.querySelector('.media-img, .media-video');

            item.addEventListener('mouseenter', () => {
                if (media) gsap.to(media, { scale: 1.06, duration: 0.6, ease: 'power3.out' });
                cursor?.classList.add('cursor-pointer');
            });

            item.addEventListener('mouseleave', () => {
                if (media) gsap.to(media, { scale: 1, duration: 0.5, ease: 'power2.inOut' });
                cursor?.classList.remove('cursor-pointer');
            });
        });
    }

    // Copiar E-mail
    if (emailContainer && contactTag) {
        let isJustCopied = false;
        emailContainer.addEventListener('mouseenter', () => {
            if (!isJustCopied) contactTag.scrambler.setText(translations[currentLang].email_copy);
        });
        emailContainer.addEventListener('mouseleave', () => {
            if (!isJustCopied) contactTag.scrambler.setText(translations[currentLang].email_tag);
        });
        emailContainer.addEventListener('click', () => {
            navigator.clipboard.writeText("MAG.SOULIER01@GMAIL.COM").then(() => {
                isJustCopied = true;
                contactTag.scrambler.setText(translations[currentLang].email_copied);
                setTimeout(() => {
                    isJustCopied = false;
                    const isHovering = emailContainer.matches(':hover');
                    contactTag.scrambler.setText(isHovering ? translations[currentLang].email_copy : translations[currentLang].email_tag);
                }, 1500);
            });
        });
    }

    // Efectos de Click
    document.addEventListener('mousedown', () => {
        cursor?.classList.add(cursor.classList.contains('cursor-pointer') ? 'click-interactive' : 'click-static');
    });
    document.addEventListener('mouseup', () => {
        cursor?.classList.remove('click-interactive', 'click-static');
    });

    // Idioma inicial
    const urlParams = new URLSearchParams(window.location.search);
    const savedLang = localStorage.getItem('preferredLang');
    const finalLang = urlParams.get('lang') || savedLang || 'es';
    document.fonts.ready.then(() => changeLanguage(finalLang, !!urlParams.get('lang')));

    // Panel de contacto
    document.addEventListener('click', function(e) {
    if (e.target.classList.contains('connect')) {
        const panel = document.getElementById('contactPanel');
        const btn = e.target;
        const footer = document.querySelector('footer');

        panel.classList.toggle('is-visible');
        btn.classList.toggle('moved');
        if (footer) footer.classList.toggle('panel-open');
    }
});
});
