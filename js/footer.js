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
        link.addEventListener('focus', () => scrambler.setText(originalText));
    });

    // Email — hovering the mail block scrambles the "E-MAIL" label into
    // "COPY"; clicking copies the address and scrambles it into "COPIED"
    // for 1.5s. Mirrors .connect-card__mail in js/connect-card.js.
    const mailBlock = document.getElementById('footerMail');
    const mailLabelText = footer.querySelector('.site-footer__mail-label [data-key="email_tag"]');
    const mailAddress = footer.querySelector('.site-footer__mail-address');
    const mailStatus = document.getElementById('footerMailCopyStatus');
    if (!mailBlock || !mailLabelText || !mailAddress) return;

    const labelScrambler = new TextScramble(mailLabelText);
    let isJustCopied = false;

    mailBlock.addEventListener('mouseenter', () => {
        if (!isJustCopied) labelScrambler.setText(translations[currentLang].email_copy);
    });
    mailBlock.addEventListener('mouseleave', () => {
        if (!isJustCopied) labelScrambler.setText(translations[currentLang].email_tag);
    });
    // focus/blur mirror mouseenter/mouseleave so keyboard users get the same
    // visual "Copy" cue mouse users get on hover.
    mailBlock.addEventListener('focus', () => {
        if (!isJustCopied) labelScrambler.setText(translations[currentLang].email_copy);
    });
    mailBlock.addEventListener('blur', () => {
        if (!isJustCopied) labelScrambler.setText(translations[currentLang].email_tag);
    });
    mailBlock.addEventListener('click', () => {
        const address = mailAddress.textContent.trim();
        navigator.clipboard.writeText(address).then(() => {
            isJustCopied = true;
            labelScrambler.setText(translations[currentLang].email_copied);
            // The visual scramble is decorative and silent to screen readers;
            // this is the one thing that actually announces the copy.
            if (mailStatus) mailStatus.textContent = translations[currentLang].email_copied;
            setTimeout(() => {
                isJustCopied = false;
                const isActive = mailBlock.matches(':hover, :focus-visible');
                labelScrambler.setText(isActive ? translations[currentLang].email_copy : translations[currentLang].email_tag);
                if (mailStatus) mailStatus.textContent = '';
            }, 1500);
        });
    });
});
