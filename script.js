// ==========================================
// 1. CLASE TEXTSCRAMBLE
// ==========================================


class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz';
    this.update = this.update.bind(this);
    this.targetText = '';
  }
  
  setText(newText) {
    this.targetText = newText;
    const oldText = this.el.innerText || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    this.maxEnd = 0;

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 10);
      const end = start + Math.floor(Math.random() * 12);
      if (end > this.maxEnd) this.maxEnd = end;
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (this.frame >= this.maxEnd && complete === this.queue.length) {
      this.el.innerText = this.targetText;
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
}

// ==========================================
// 2. CONFIGURACIÓN Y TRADUCCIONES
// ==========================================
const translations = {
  es: {
    tagline: "SOY UNA DISEÑADORA VISUAL ESPECIALIZADA EN",
    connect: "CONECTEMOS",
    navwork: "TRABAJOS",
    navabout: "SOBRE MÍ",
    email_tag: "E-MAIL",
    email_copy: "COPIAR E-MAIL",
    email_copied: "COPIADO",
    location_line: "UBICADA EN ",
    selected_projects: "PROYECTOS SELECCIONADOS",
    about_me:"SOBRE MÍ",
    diseno_web:"DISEÑO WEB",
    direccion_de_arte:"DIRECCIÓN DE ARTE",
    codigo_creativo:"CÓDIGO CREATIVO",
    ilustracion: "ILUSTRACIÓN",
    identidad_de_marca: "IDENTIDAD DE MARCA",
    redes_sociales:"REDES SOCIALES",
  },
  en: {
    tagline: "I’M A VISUAL DESIGNER SPECIALIZED IN",
    connect: "LET'S CONNECT",
    navwork: "WORK",
    navabout: "ABOUT ME",
    email_tag: "E-MAIL",
    email_copy: "COPY E-MAIL",
    email_copied: "COPIED",
    location_line: "BASED IN ",
    selected_projects: "SELECTED PROJECTS",
    about_me:"ABOUT ME",
    diseno_web:"WEB DESIGN",
    direccion_de_arte:"ART DIRECTION",
    codigo_creativo:"CREATIVE CODING",
    ilustracion: "ILUSTRATION",
    identidad_de_marca: "BRANDING",
    redes_sociales:"SOCIAL MEDIA",
  }
};

const badgeWords = {
  en: ["BRANDING", "UX/UI DESIGN", "WEB DEVELOPMENT"],
  es: ["IDENTIDADES VISUALES", "DISEÑO UX/UI", "DESARROLLO WEB"]
};

let currentBadgeIndex = 0;
let badgeInterval = null;
let currentLang = 'es';

// ==========================================
// 3. FUNCIONES DE IDIOMA Y UI
// ==========================================
function changeLanguage(lang, updateURL = true) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  if (updateURL) {
    const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + lang;
    window.history.pushState({ path: newurl }, '', newurl);
  }
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang][key]) element.innerText = translations[lang][key];
  });
  
  const contactTag = document.querySelector('.contact-tag');
  if (contactTag) contactTag.innerText = translations[lang].email_tag;

  startBadgeRotation();
  const mainName = document.querySelector('.main-name');
  if (mainName && mainName.scrambler) setTimeout(() => mainName.scrambler.setText(mainName.innerText), 50);
  updateActiveButton(lang);
}

function startBadgeRotation() {
  const badgeEl = document.getElementById('rotating-badge');
  if (!badgeEl || !badgeEl.scrambler) return;
  if (badgeInterval) clearInterval(badgeInterval);
  currentBadgeIndex = 0;
  badgeEl.scrambler.setText(badgeWords[currentLang][currentBadgeIndex]);
  badgeInterval = setInterval(() => {
    currentBadgeIndex = (currentBadgeIndex + 1) % badgeWords[currentLang].length;
    badgeEl.scrambler.setText(badgeWords[currentLang][currentBadgeIndex]);
  }, 2000); 
}

function updateActiveButton(lang) {
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  if (btnEs) btnEs.classList.toggle('active', lang === 'es');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
}

// ==========================================
// 4. INICIALIZACIÓN (DOMContentLoaded)
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
    
    allLinks.forEach(link => {
      if (link.classList.contains('flower')) return; 
    if (link.closest('.flower')) return;
        link.scrambler = new TextScramble(link);
        link.addEventListener('mouseenter', () => link.scrambler.setText(link.innerText));
    });

    // Gestión del Cursor Personalizado
    document.addEventListener('mousemove', (e) => {
        if(cursor) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    const interactiveElements = document.querySelectorAll('.nav-work, .nav-about, .nav-lang, .connect, .flower, a, button, .contact-email');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor?.classList.add('cursor-pointer'));
        el.addEventListener('mouseleave', () => cursor?.classList.remove('cursor-pointer'));
    });

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
        console.log("CLICK EN CONNECT DETECTADO");
        const panel = document.getElementById('contactPanel');
        const btn = e.target;
        
        panel.classList.toggle('is-visible');
        btn.classList.toggle('moved');
    }
});
});

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

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
            
            // Animación básica de las barritas (opcional)
            menuToggle.classList.toggle('open');
        });

        // Cerrar menú al hacer click en un link
        const navLinks = navMenu.querySelectorAll('a, button');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Detecta cuando la sección ocupa la parte superior
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Quitar clase active de todos
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    // Buscamos el link que coincide con el ID de la sección
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Detecta si la sección está en el centro de la pantalla
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        const video = item.querySelector('.media-video');
        const title = item.querySelector('.scramble-title');
        const scrambler = new TextScramble(title);
        const originalText = title.innerText;

        // Variable para rastrear la promesa de reproducción
        let playPromise;

        item.addEventListener('mouseenter', () => {
            if (video) {
                // Intentamos reproducir y guardamos la promesa
                playPromise = video.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // Reproducción exitosa
                        video.style.opacity = "1";
                    }).catch(error => {
                        // Aquí es donde capturamos el error que mencionaste
                        console.log("Reproducción prevenida o abortada:", error);
                    });
                }
            }
            scrambler.setText(originalText);
        });

        item.addEventListener('mouseleave', () => {
            if (video) {
                // Solo pausamos si la promesa ya se cumplió (evita el error de aborto)
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        video.pause();
                    }).catch(() => {
                        // Si la promesa falló, simplemente pausamos por seguridad
                        video.pause();
                    });
                }
            }
        });
    });
});

let progress = 0;
const percentEl = document.getElementById('loader-percentage');
const iris = document.getElementById('anim-iris');
const corona = document.getElementById('anim-corona');
const centro = document.getElementById('Centro');
const ojo = document.getElementById('anim-ojo');
const parpado = document.getElementById('anim-parpado');
const overlay = document.getElementById('loader-overlay');

let isClosing = false;
let irisTimeout, blinkTimeout;

function iniciarCarga() {
    // 1. Aparece el Iris casi de inmediato
    setTimeout(() => { iris.style.opacity = "1"; }, 100);
    // 2. Se abre el ojo poco después
    setTimeout(() => { ojo.classList.add('eye-open'); }, 300);
    // 3. Comienza movimiento aleatorio
    setTimeout(moverIris, 700);
    parpadearOjo();

    const interval = setInterval(() => {
        progress++;
        if (percentEl) percentEl.innerText = progress + "%";
        if (progress >= 100) {
            clearInterval(interval);
            finalizarCarga();
        }
    }, 30); 
}

function moverIris() {
    if (isClosing) return;
    const moveX = (Math.random() - 0.5) * 170;
    const moveY = (Math.random() - 0.5) * 90;
    iris.style.transform = `translate(${moveX}px, ${moveY}px)`;
    irisTimeout = setTimeout(moverIris, Math.random() * 1600 + 400);
}

function parpadearOjo() {
    if (isClosing) return;
    parpado.classList.remove('parpadeando');
    void parpado.offsetWidth; // Force reflow
    parpado.classList.add('parpadeando');
    blinkTimeout = setTimeout(parpadearOjo, Math.random() * 3000 + 2000);
}

function finalizarCarga() {
    isClosing = true;
    clearTimeout(irisTimeout);
    clearTimeout(blinkTimeout);

    if (percentEl) percentEl.style.opacity = "0";

    // 1. Animación de salida del loader (ojo cierra, luego escala)
    ojo.classList.remove('eye-open');
    ojo.classList.add('eye-close');

    setTimeout(() => {
        iris.style.transform = `translate(0px, 0px)`;
        corona.classList.add('out-scale');
        iris.classList.add('out-scale');

        setTimeout(() => {
            centro.classList.add('out-fade');
            
            // 2. Desvanecer el fondo gris
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
            document.body.style.overflow = "auto";

            // --- 3. INICIO DE LA APERTURA DE PÁGINA ---
            iniciarAnimacionesEntrada();

        }, 400);
    }, 200);
}

// --- CLASE PARA TEXTOS LENTOS Y CON SALTOS DE LÍNEA ---
class SlowTextScramble extends TextScramble {
  setText(newText) {
    this.targetText = newText;
    // Usamos innerHTML para capturar los <br>
    const oldText = this.el.innerHTML || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    this.maxEnd = 0;

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      
      // AUMENTO DE DURACIÓN: start 0-60 y end hasta 120 frames
      const start = Math.floor(Math.random() * 10);
      const end = start + Math.floor(Math.random() * 40);
      
      if (end > this.maxEnd) this.maxEnd = end;
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        // Si el destino es parte de un <br>, no ponemos caracteres aleatorios
        if (to === '<' || to === 'b' || to === 'r' || to === '>') {
           output += to;
        } else {
           output += `<span class="d">${char}</span>`;
        }
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output; // Usar innerHTML para procesar los <br>
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

// --- FUNCIÓN DE INICIO ACTUALIZADA ---
function iniciarAnimacionesEntrada() {
    // 1. Logo del Header
    const headerLogo = document.querySelector('.header-logo');
    if (headerLogo) headerLogo.classList.add('header-active');

    // 2. Scramble LENTO para el Nombre (Respeta <br>)
    const nameEl = document.getElementById('main-name');
    if (nameEl) {
        nameEl.style.visibility = 'visible';
        const fxName = new SlowTextScramble(nameEl);
        // Enviamos el texto con el <br> incluido
        fxName.setText("MAGDALENA<br>SOULIER");
    }

    // 3. Scramble LENTO para el botón Connect
    const connectEl = document.querySelector('[data-key="connect"]');
    if (connectEl) {
        connectEl.style.visibility = 'visible';
        const fxConnect = new SlowTextScramble(connectEl);
        fxConnect.setText("LET'S CONNECT");
    }
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.style.animationPlayState = 'paused'; // Asegura que estén quietos
        setTimeout(() => {
            badge.style.animationPlayState = 'running';
        }, 2000); // 2 segundos de espera tras el loader
        });
}

// Disparar al cargar
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = "hidden";
    iniciarCarga();
});


const logoInicio = document.getElementById('logo-inicio');
const headerCorona = document.getElementById('HeaderCorona');
const headerOjo = document.getElementById('HeaderOjo');

if (logoInicio) {
    logoInicio.addEventListener('click', (e) => {
        // 1. Evitar que el link recargue la página si solo quieres scroll
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 2. Añadir clases de animación
        headerCorona.classList.add('animar-corona-click');
        headerOjo.classList.add('animar-ojo-click');

        // 3. Quitar las clases después de que termine la animación (0.6s)
        // Esto permite que la animación se repita en el próximo click
        setTimeout(() => {
            headerCorona.classList.remove('animar-corona-click');
            headerOjo.classList.remove('animar-ojo-click');
        }, 600);
    });
}

// --- ACTIVACIÓN DE PROYECTOS POR SCROLL ---

const observarProyectos = () => {
    const proyectos = document.querySelectorAll('.project-item');

    const opciones = {
        root: null, // usa el viewport del navegador
        threshold: 0.8, // 0.5 significa que se activa cuando el 50% del div es visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el proyecto entra en vista
                entry.target.classList.add('active');
            } else {
                // Opcional: Quitar la clase al salir (para que se "apague" al pasar)
                entry.target.classList.remove('active');
            }
        });
    }, opciones);

    proyectos.forEach(proyecto => {
        observer.observe(proyecto);
    });
};

// Disparar la función tras la carga
window.addEventListener('DOMContentLoaded', observarProyectos);
