// ==========================================
// CONFIGURACIÓN Y TRADUCCIONES
// ==========================================
const translations = {
  es: {
    logo_home: "Inicio",
    tagline: "Soy una diseñadora visual especializada en",
    connect: "Conenctar",
    connect_card_title: "Conectar",
    web_portfolio:"2026 - portfolio web",
    navwork: "Trabajos",
    navabout: "Sobre mí",
    email_tag: "E-mail",
    email_copy: "Copiar E-mail",
    email_copied: "Copiado",
    location_line: "Ubicada en ",
    selected_projects: "Proyectos seleccionados",
    ver_proyecto: "Ver proyecto",
    about_me:"Sobre mí",
    diseno_web:"Diseño web",
    direccion_de_arte:"Dirección de arte",
    codigo_creativo:"Código creativo",
    ilustracion: "Ilustración",
    identidad_de_marca: "Identidad de marca",
    redes_sociales:"Redes sociales",
    diseno_estrategia: "Diseño de estrategia",
    diseno_ux_ui: "Diseño UX/UI",
    modelado_3d: "Modelado 3d",
    diseno_videojuegos: "Diseño de videojuegos",
    diseno_editorial: "Diseño editorial",
    fotografia: "Fotografía",
    projet1_description: ["Estrategia multicanal desarrollada con el objetivo de reconectar a las juventudes de Montevideo con las ferias barriales.", "A través de una identidad visual dinámica y una plataforma web geolocalizada, el proyecto traduce la lógica del mercado territorial a lenguajes digitales, facilitando el acceso a información en tiempo real y adaptándose a los hábitos de consumo contemporáneos."],
    project2_description: ["Diseñado para Revista Gigantes (LaDiaria) con el objetivo de transformar el consumo pasivo de contenido en una experiencia participativa de User-Generated Content (UGC).", "El proyecto funciona como puente para derivar tráfico calificado hacia la plataforma digital de la revista, incrementando los niveles de engagement y retención en el público infantil."],
    project3_description: ["Diseño editorial realizado para la tesis de Valentina Ibarlucea.", "El texto investiga los alcances del arte y diseño participativo en colectivos de base territorial, tomando como caso de estudio la Comisión Derecho a la Ciudad en Ciudad Vieja, Montevideo."],
    formacion_titulo: "Formación",
    formacion_intro: "En la búsqueda académica de encontrar mi vocación, descubrí que mi valor está en la intersección de las disciplinas que fui cruzando en el camino. Sin saberlo en su momento, fui forjando un perfil híbrido y estratégico.",
    edu1_titulo: "Posgrado en Diseño de Experiencia de Usuario",
    edu1_tag1: "Actualidad",
    edu1_tag2: "Universidad ORT",
    edu1_texto: "Especialización en UX Writing, UX Research, arquitectura de la información y liderazgo estratégico. Aplico estas herramientas para mitigar la incertidumbre, validar hipótesis con usuarios y optimizar flujos de interacción reduciendo la fricción cognitiva.",
    edu2_titulo: "Licenciatura en Diseño de Comunicación Visual",
    edu2_tag1: "2022 - 2025",
    edu2_tag2: "UDELAR",
    edu2_texto: "Mi formación de grado me capacitó para transformar conceptos abstractos en sistemas visuales sólidos, que no sólo tienen en cuenta el contexto, sino que lo utilizan a su favor.",
    edu3_titulo: "Desarrollo web",
    edu3_tag1: "2021",
    edu3_tag2: "Jóvenes a Programar",
    edu3_texto: "A través de este programa incorporé fundamentos de lógica y desarrollo frontend. Esto me permite colaborar de forma directa con equipos de ingeniería, optimizar la transición del diseño a producción y empujar los límites visuales sin romper el rendimiento técnico.",
    docencia_titulo: "Docencia",
    docencia_texto: ["Soy docente en el Taller de Diseño 1 de la Universidad de la República. Trabajar con estudiantes de primer año implica saber deconstruir procesos complejos y explicarlos de forma simple, guiandolos para que aprendan a tomar decisiones proyectuales fundamentadas.", "Estar en el aula me exige mantener un ejercicio constante de resolución de problemas, un diálogo abierto y una actualización metodológica continua que traslado de forma directa a mi práctica profesional."],
    media_resma_titulo: "Media resma",
    media_resma_texto: ["Integro una cooperativa de diseño llamada media resma. A través de la autogestión y la toma de decisiones colectivas, buscamos generar un impacto positivo en la comunidad, trabajando codo a codo con colectivos sociales, organizaciones y asociaciones.", "Esta experiencia me da una gran capacidad de adaptación para diseñar en equipo y de forma eficiente bajo restricciones de presupuesto y tiempo."],
    footer_credit: "Diseñado y desarrollado por Magdalena Soulier | © 2026"
  },
  en: {
    logo_home: "Home",
    tagline: "I'm a visual designer specialized in",
    connect: "Connect",
    connect_card_title: "CONTACT",
    web_portfolio:"2026 - WEB PORTFOLIO",
    navwork: "WORK",
    navabout: "ABOUT ME",
    email_tag: "E-mail",
    email_copy: "Copy e-mail",
    email_copied: "Copied",
    location_line: "BASED IN ",
    selected_projects: "SELECTED PROJECTS",
    ver_proyecto: "VIEW PROJECT",
    about_me:"ABOUT ME",
    diseno_web:"WEB DESIGN",
    direccion_de_arte:"ART DIRECTION",
    codigo_creativo:"CREATIVE CODING",
    ilustracion: "ILUSTRATION",
    identidad_de_marca: "BRANDING",
    redes_sociales:"SOCIAL MEDIA",
    diseno_estrategia: "STRATEGY DESIGN",
    diseno_ux_ui: "UX/UI DESIGN",
    modelado_3d: "3D MODELING",
    diseno_videojuegos: "GAME DESIGN",
    diseno_editorial: "EDITORIAL DESIGN",
    fotografia: "PHOTOGRAPHY",
    projet1_description: ["Cross-channel strategy developed with the objective of reconnecting the youth of Montevideo with local neighborhood markets.", "Through a dynamic visual identity and a geolocated web platform, the project translates the logic of the local physical market into digital languages, facilitating real-time access to information and adapting to contemporary consumption habits."],
    project2_description: ["Designed for Revista Gigantes (LaDiaria), aimed at turning passive content consumption into a participatory User-Generated Content (UGC) experience.", "The project acts as a bridge, driving qualified traffic to the magazine's digital platform and increasing engagement and retention among young readers."],
    project3_description: ["Editorial design created for Valentina Ibarlucea's thesis.", "The text explores the reach of participatory art and design within grassroots community groups, using the Comisión Derecho a la Ciudad in Ciudad Vieja, Montevideo as its case study."],
    formacion_titulo: "Education",
    formacion_intro: "In my academic search to find my calling, I discovered that my value lies at the intersection of the disciplines I crossed along the way. Without realizing it at the time, I was shaping a hybrid, strategic profile.",
    edu1_titulo: "Postgraduate Degree in User Experience Design",
    edu1_tag1: "Ongoing",
    edu1_tag2: "Universidad ORT",
    edu1_texto: "Specialization in UX Writing, UX Research, information architecture, and strategic leadership. I apply these tools to mitigate uncertainty, validate hypotheses with users, and optimize interaction flows by reducing cognitive friction.",
    edu2_titulo: "Bachelor's Degree in Visual Communication Design",
    edu2_tag1: "2022 - 2025",
    edu2_tag2: "UDELAR",
    edu2_texto: "My undergraduate training equipped me to turn abstract concepts into solid visual systems — ones that don't just account for context, but use it to their advantage.",
    edu3_titulo: "Web Development",
    edu3_tag1: "2021",
    edu3_tag2: "Jóvenes a Programar",
    edu3_texto: "Through this program I picked up the fundamentals of logic and frontend development. It lets me collaborate directly with engineering teams, streamline the handoff from design to production, and push visual boundaries without breaking technical performance.",
    docencia_titulo: "Teaching",
    docencia_texto: ["I teach Design Workshop 1 at Universidad de la República. Working with first-year students means knowing how to break down complex processes and explain them simply, guiding them to make well-grounded design decisions.", "Being in the classroom keeps me in constant practice: solving problems, keeping an open dialogue, and continuously updating my methods — all of which I carry directly into my professional practice."],
    media_resma_titulo: "Media resma",
    media_resma_texto: ["I'm part of a design cooperative called media resma. Through self-management and collective decision-making, we aim to generate a positive impact in the community, working hand in hand with social groups, organizations, and associations.", "This experience gives me a strong ability to adapt, designing collaboratively and efficiently under budget and time constraints."],
    footer_credit: "Designed and developed by Magdalena Soulier | © 2026"
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
// FUNCIONES DE IDIOMA Y UI
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

  // Same, but for aria-label — visual text on these elements is driven by
  // hover/focus (e.g. the connect card's mail button), so their accessible
  // name needs its own translation pass instead of piggybacking on data-key.
  document.querySelectorAll('[data-aria-key]').forEach(element => {
    const key = element.getAttribute('data-aria-key');
    if (translations[lang][key]) element.setAttribute('aria-label', translations[lang][key]);
  });

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
  document.documentElement.lang = lang;

  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  if (btnEs) {
    btnEs.classList.toggle('active', lang === 'es');
    btnEs.setAttribute('aria-pressed', lang === 'es');
    if (lang === 'es') btnEs.setAttribute('aria-current', 'true');
    else btnEs.removeAttribute('aria-current');
  }
  if (btnEn) {
    btnEn.classList.toggle('active', lang === 'en');
    btnEn.setAttribute('aria-pressed', lang === 'en');
    if (lang === 'en') btnEn.setAttribute('aria-current', 'true');
    else btnEn.removeAttribute('aria-current');
  }
}
