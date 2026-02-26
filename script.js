// ==========================================
// 1. CLASE TEXTSCRAMBLE (FIXED)
// ==========================================

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz';
    this.update = this.update.bind(this);
    this.targetText = '';
    this.isAnimating = false; // NEW: Track animation state
  }
  
  setText(newText) {
    // 1. Check if we're already animating to this exact text
    if (this.isAnimating && this.targetText === newText) {
      return; // Ignore redundant request
    }
    
    // 2. If we're animating to something different, clean up first
    if (this.isAnimating) {
      this.completeImmediately();
    }
    
    // 3. NOW start the new animation from a clean state
    this.targetText = newText;
    this.isAnimating = true; // Mark as animating
    
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
  
  // NEW: Method to immediately complete current animation
  completeImmediately() {
    cancelAnimationFrame(this.frameRequest);
    this.el.innerText = this.targetText; // Set to clean target text
    this.isAnimating = false;
    if (this.resolve) this.resolve();
  }
  
  update() {
    // Defensive check: if we're no longer supposed to be animating, stop immediately
    if (!this.isAnimating) {
      return;
    }
    
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
      this.isAnimating = false; // Animation complete
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
    web_portfolio:"2026 - PORTFOLIO WEB",
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
    projet1_description: ["Estrategia multicanal desarrollada para el Municipio B con el objetivo de reconectar a las juventudes de Montevideo con las ferias barriales.", "A través de una identidad visual dinámica y una plataforma web geolocalizada, el proyecto traduce la lógica del mercado territorial a lenguajes digitales, facilitando el acceso a información en tiempo real y adaptándose a los hábitos de consumo contemporáneos."]
  },
  en: {
    tagline: "I'M A VISUAL DESIGNER SPECIALIZED IN",
    connect: "LET'S CONNECT",
    web_portfolio:"2026 - WEB PORTFOLIO",
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
    projet1_description: ["<em>Your neighborhood, your food fair</em>, is a multi-channel strategy developed for Municipio B, aimed at reconnecting Montevideo's youth with local neighborhood markets.", "Through a dynamic visual identity and a geo-located web platform, the project translates the logic of traditional street markets into digital languages, providing real-time information tailored to contemporary consumption habits."]
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
  
  // Update all elements with data-key
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (!translations[lang][key]) return;

    const value = translations[lang][key];

    if (Array.isArray(value)) {
      element.innerHTML = value.map(text => `<p>${text}</p>`).join('');
    } else {
      element.innerText = value;
    }

    // CRITICAL: Update originalText for elements with scramblers
    if (element.scrambler && !Array.isArray(value)) {
      element.originalText = value; // Use the translation value directly
    }
  });
  
  const contactTag = document.querySelector('.contact-tag');
  if (contactTag) {
    contactTag.innerText = translations[lang].email_tag;
  }

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
    
    // Setup hover scramble for navigation links
    allLinks.forEach(link => {
      // Exclude: flower logo and contact panel links
      if (link.classList.contains('flower')) return; 
      if (link.closest('.flower')) return;
      if (link.classList.contains('contact-link')) return; // Exclude contact panel links
      if (link.classList.contains('copy-email')) return; // Exclude email
      
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
// 2. CURSOR PERSONALIZADO
// ==========================================

    document.addEventListener('mousemove', (e) => {
        if(cursor) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    const interactiveElements = document.querySelectorAll('.nav-work, .nav-about, .nav-lang, .connect, .flower, a, button, .contact-email, .project-item');
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

// ==========================================
// 5. MENU ITEMS ACTIVADOS POR EL SCROLL
// ==========================================

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


// ===============
// 6. PROYECTOS
// ===============

document.addEventListener('DOMContentLoaded', () => {
    // Forzar inicio arriba
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const projectItems = document.querySelectorAll('.project-item');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer'); // Seleccionamos el footer
    
    const projectRoutes = {
        'project1': 'project1.html',
        'project2': 'project2.html',
        'project3': 'project3.html'
    };

    projectItems.forEach(item => {
        const title = item.querySelector('.scramble-title');
        if (title) {
            item.scramblerInstance = new TextScramble(title);
            item.originalText = title.innerText;
        }

        // --- LÓGICA DE CLICK: SALIDA DE UI ---
        item.addEventListener('click', () => {
            const targetUrl = projectRoutes[item.id];
            
            if (targetUrl) {
                // 1. Animamos el Header (hacia arriba)
                if (header) header.classList.add('header-out');
                
                // 2. Animamos el Footer (hacia abajo)
                if (footer) footer.classList.add('footer-out');

                // 3. Navegamos tras la animación
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 600); 
            }
        });
    });

    // --- LÓGICA DE ACTIVACIÓN ÚNICA (Misma de antes) ---
    const updateActiveProject = () => {
        let closestProject = null;
        let minDistance = Infinity;
        const viewportCenter = window.innerHeight / 2;

        projectItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - itemCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestProject = item;
            }
        });

        if (closestProject && !closestProject.classList.contains('active')) {
            projectItems.forEach(p => p.classList.remove('active'));
            closestProject.classList.add('active');
            if (closestProject.scramblerInstance) {
                closestProject.scramblerInstance.setText(closestProject.originalText);
            }
        }
    };

    window.addEventListener('scroll', updateActiveProject);
    setTimeout(updateActiveProject, 100);
});

// ==========
// 7. CARGA
// ==========

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
    }, 15); 
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

// --- CLASE PARA TEXTOS LENTOS Y CON SALTOS DE LÍNEA (FIXED) ---
class SlowTextScramble extends TextScramble {
  constructor(el) {
    super(el);
    this.isAnimating = false; // Ensure this is initialized
  }

  setText(newText) {
    // 1. Check if we're already animating to this exact text
    if (this.isAnimating && this.targetText === newText) {
      return; // Ignore redundant request
    }
    
    // 2. If we're animating to something different, clean up first
    if (this.isAnimating) {
      this.completeImmediately();
    }
    
    // 3. NOW start the new animation from a clean state
    this.targetText = newText;
    this.isAnimating = true;
    
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

  completeImmediately() {
    cancelAnimationFrame(this.frameRequest);
    this.el.innerHTML = this.targetText; // Use innerHTML for <br> tags
    this.isAnimating = false;
    if (this.resolve) this.resolve();
  }

  update() {
    // Defensive check: if we're no longer supposed to be animating, stop immediately
    if (!this.isAnimating) {
      return;
    }
    
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
      this.el.innerHTML = this.targetText; // SET FINAL CLEAN TEXT - CRITICAL FIX
      this.isAnimating = false; // Animation complete
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
    // Make ALL connect buttons visible (desktop footer + mobile nav menu)
    document.querySelectorAll('[data-key="connect"]').forEach(el => {
        el.style.visibility = 'visible';
    });
    // Apply scramble animation only to the desktop footer button
    const connectEl = document.querySelector('footer [data-key="connect"]');
    if (connectEl) {
        const fxConnect = new SlowTextScramble(connectEl);
        fxConnect.setText(translations[currentLang].connect);
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

// Sistema de activación basado en proximidad al centro del viewport
const inicializarActivacionProyectos = () => {
    const projectItems = document.querySelectorAll('.project-item');
    const projectRoutes = {
        'project1': 'project1.html',
        'project2': 'project2.html',
        'project3': 'project3.html'
    };

    // Configuración inicial de scramblers para títulos
    projectItems.forEach(item => {
        const title = item.querySelector('.scramble-title');
        if (title) {
            item.scramblerInstance = new TextScramble(title);
            item.originalText = title.innerText;
        }

        // Click handler para navegación
        item.addEventListener('click', () => {
            const targetUrl = projectRoutes[item.id];
            if (targetUrl) window.location.href = targetUrl;
        });
    });

    let lastActiveProject = null;
    let isScrolling = false;

    // Función de activación mejorada - solo activa el proyecto más cercano al centro
    const updateActiveProject = () => {
        // Evitar ejecuciones múltiples durante el mismo frame
        if (isScrolling) return;
        isScrolling = true;
        
        requestAnimationFrame(() => {
            let closestProject = null;
            let minDistance = Infinity;
            const viewportCenter = window.innerHeight / 2;

            projectItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + rect.height / 2;
                const distance = Math.abs(viewportCenter - itemCenter);

                // Encontrar el proyecto más cercano al centro del viewport
                if (distance < minDistance) {
                    minDistance = distance;
                    closestProject = item;
                }
            });

            // Solo actualizar si hay un cambio de proyecto activo
            if (closestProject && closestProject !== lastActiveProject) {
                // Remover 'active' de todos los proyectos primero
                projectItems.forEach(p => {
                    if (p !== closestProject) {
                        p.classList.remove('active');
                    }
                });

                // Activar el proyecto más cercano
                closestProject.classList.add('active');
                
                // Aplicar efecto scramble al título
                if (closestProject.scramblerInstance && closestProject.originalText) {
                    closestProject.scramblerInstance.setText(closestProject.originalText);
                }

                lastActiveProject = closestProject;
            }

            isScrolling = false;
        });
    };

    // Throttled scroll listener para mejor performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateActiveProject);
    }, { passive: true });

    // Activación inicial después de que el contenido cargue
    setTimeout(updateActiveProject, 200);
};

// Disparar la función tras la carga
window.addEventListener('DOMContentLoaded', inicializarActivacionProyectos);