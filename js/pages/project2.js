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

document.querySelector('.cs-footer-inicio').addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-pointer');
});
document.querySelector('.cs-footer-inicio').addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-pointer');
});
