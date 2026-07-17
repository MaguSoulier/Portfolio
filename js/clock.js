function updateMontevideoTime() {
    const timeElement = document.getElementById('current-time');
    if (!timeElement) return;

    const options = {
        timeZone: 'America/Montevideo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const now = new Date();
    const timeString = new Intl.DateTimeFormat('es-UY', options).format(now);

    timeElement.innerText = timeString;
}

// Actualizar cada segundo
setInterval(updateMontevideoTime, 1000);
// Llamar inmediatamente para que no empiece en 00:00
updateMontevideoTime();
