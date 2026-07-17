// ==========================================
// 1. CURSOR PERSONALIZADO
// ==========================================

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    // Usar requestAnimationFrame para un movimiento más suave
    requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

// Efecto de escala al hacer click
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});


// ==========================================
// 2. ACORDEÓN
// ==========================================
 // Accordion functionality
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const isActive = content.classList.contains('active');

                // Close all accordion items and remove active class from headers
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelectorAll('.accordion-header').forEach(item => {
                    item.classList.remove('active');
                });

                // Open clicked item if it wasn't active
                if (!isActive) {
                    content.classList.add('active');
                    this.classList.add('active');
                }
            });
        });