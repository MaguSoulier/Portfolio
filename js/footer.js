document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;

    // Behance / LinkedIn — same scramble-on-hover as the header nav links,
    // targeting just the text span (not the whole <a>) so the icon isn't
    // wiped out by innerHTML being overwritten mid-animation. Mirrors
    // .connect-card__link in js/connect-card.js.
    footer.querySelectorAll('.site-footer__link').forEach(link => {
        const textEl = link.querySelector('span');
        if (!textEl) return;
        const scrambler = new TextScramble(textEl);
        const originalText = textEl.textContent;
        link.addEventListener('mouseenter', () => scrambler.setText(originalText));
    });

    // Email — hovering the mail block scrambles the "E-MAIL" label into
    // "COPY"; clicking copies the address and scrambles it into "COPIED"
    // for 1.5s. Mirrors .connect-card__mail in js/connect-card.js.
    const mailBlock = document.getElementById('footerMail');
    const mailLabelText = footer.querySelector('.site-footer__mail-label [data-key="email_tag"]');
    const mailAddress = footer.querySelector('.site-footer__mail-address');
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
