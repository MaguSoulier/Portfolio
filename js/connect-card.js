document.addEventListener('DOMContentLoaded', () => {
    // Hide the fixed connect-card once the page's footer scrolls into view
    // — otherwise the two overlap at the bottom of the page. .site-footer
    // on index.html repeats the same links/mail; project pages (project1.html
    // etc.) use .cs-footer (case-study nav footer) instead — whichever is
    // present is what we watch.
    const wrap = document.querySelector('.connect-card-wrap');
    const footer = document.querySelector('.site-footer, .cs-footer');
    if (wrap && footer) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => wrap.classList.toggle('is-hidden', entry.isIntersecting));
        }, { threshold: 0 });
        footerObserver.observe(footer);
    }

    const card = document.getElementById('connectCard');
    const toggle = document.getElementById('connectCardToggle');
    if (!card || !toggle) return;

    toggle.addEventListener('click', () => {
        const expanded = card.classList.toggle('is-expanded');
        toggle.setAttribute('aria-expanded', String(expanded));
    });

    // Click anywhere outside the card collapses it if it's open.
    document.addEventListener('click', (e) => {
        if (!card.classList.contains('is-expanded')) return;
        if (card.contains(e.target)) return;
        card.classList.remove('is-expanded');
        toggle.setAttribute('aria-expanded', 'false');
    });

    // Behance / LinkedIn — same scramble-on-hover as the header nav links,
    // but targeting just the text span (not the whole <a>) so the icon
    // isn't wiped out by innerHTML being overwritten mid-animation.
    card.querySelectorAll('.connect-card__link').forEach(link => {
        const textEl = link.querySelector('span');
        if (!textEl) return;
        const scrambler = new TextScramble(textEl);
        const originalText = textEl.textContent;
        link.addEventListener('mouseenter', () => scrambler.setText(originalText));
    });

    // Email — hovering the mail block scrambles the "E-MAIL" label (icon
    // untouched, same reasoning) into "COPY"; clicking copies the address
    // and scrambles it into "COPIED" for 1.5s.
    const mailBlock = card.querySelector('.connect-card__mail');
    const mailLabelText = card.querySelector('.connect-card__mail-label [data-key="email_tag"]');
    const mailAddress = card.querySelector('.connect-card__mail-address');
    if (!mailBlock || !mailLabelText || !mailAddress) return;

    const labelScrambler = new TextScramble(mailLabelText);
    let isJustCopied = false;

    mailBlock.addEventListener('mouseenter', () => {
        if (!isJustCopied) labelScrambler.setText(translations[currentLang].email_copy);
    });
    mailBlock.addEventListener('mouseleave', () => {
        if (!isJustCopied) labelScrambler.setText(translations[currentLang].email_tag);
    });
    mailBlock.addEventListener('click', () => {
        const address = mailAddress.textContent.trim();
        navigator.clipboard.writeText(address).then(() => {
            isJustCopied = true;
            labelScrambler.setText(translations[currentLang].email_copied);
            setTimeout(() => {
                isJustCopied = false;
                const isHovering = mailBlock.matches(':hover');
                labelScrambler.setText(isHovering ? translations[currentLang].email_copy : translations[currentLang].email_tag);
            }, 1500);
        });
    });
});
