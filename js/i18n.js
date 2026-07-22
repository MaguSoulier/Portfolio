// ==========================================
// CONFIGURACIÓN Y TRADUCCIONES
// ==========================================
const translations = {
  es: {
    tagline: "SOY UNA DISEÑADORA VISUAL ESPECIALIZADA EN",
    connect: "CONECTEMOS",
    connect_card_title: "CONTACTAR",
    web_portfolio:"2026 - PORTFOLIO WEB",
    navwork: "TRABAJOS",
    navabout: "SOBRE MÍ",
    email_tag: "E-mail",
    email_copy: "Copiar E-mail",
    email_copied: "Copiado",
    location_line: "UBICADA EN ",
    selected_projects: "PROYECTOS SELECCIONADOS",
    ver_proyecto: "VER PROYECTO",
    about_me:"SOBRE MÍ",
    diseno_web:"DISEÑO WEB",
    direccion_de_arte:"DIRECCIÓN DE ARTE",
    codigo_creativo:"CÓDIGO CREATIVO",
    ilustracion: "ILUSTRACIÓN",
    identidad_de_marca: "IDENTIDAD DE MARCA",
    redes_sociales:"REDES SOCIALES",
    diseno_estrategia: "DISEÑO DE ESTRATEGIA",
    diseno_ux_ui: "DISEÑO UX/UI",
    modelado_3d: "MODELADO 3D",
    diseno_videojuegos: "DISEÑO DE VIDEOJUEGOS",
    diseno_editorial: "DISEÑO EDITORIAL",
    fotografia: "FOTOGRAFÍA",
    projet1_description: ["Estrategia multicanal desarrollada para el Municipio B con el objetivo de reconectar a las juventudes de Montevideo con las ferias barriales.", "A través de una identidad visual dinámica y una plataforma web geolocalizada, el proyecto traduce la lógica del mercado territorial a lenguajes digitales, facilitando el acceso a información en tiempo real y adaptándose a los hábitos de consumo contemporáneos."],
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
    edu3_texto: "A través de este programa incorporé fundamentos de lógica y desarrollo frontend. Esto me permite colaborar de forma directa con equipos de ingeniería, optimizar la transición del diseño a producción y empujar los límites visuales sin romper el rendimiento técnico."
  },
  en: {
    tagline: "I'M A VISUAL DESIGNER SPECIALIZED IN",
    connect: "LET'S CONNECT",
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
    projet1_description: ["<em>Your neighborhood, your food fair</em>, is a multi-channel strategy developed for Municipio B, aimed at reconnecting Montevideo's youth with local neighborhood markets.", "Through a dynamic visual identity and a geo-located web platform, the project translates the logic of traditional street markets into digital languages, providing real-time information tailored to contemporary consumption habits."],
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
    edu3_texto: "Through this program I picked up the fundamentals of logic and frontend development. It lets me collaborate directly with engineering teams, streamline the handoff from design to production, and push visual boundaries without breaking technical performance."
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
