# Graph Report - .  (2026-07-21)

## Corpus Check
- Large corpus: 76 files · ~6,008,112 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 115 nodes · 104 edges · 39 communities (17 shown, 22 thin omitted)
- Extraction: 87% EXTRACTED · 11% INFERRED · 3% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.75)
- Token cost: 92,181 input · 0 output

## Community Hubs (Navigation)
- Project1 Carousel & Language Nav
- Loader Eye Animation
- Project Cards & Case Studies
- Text Scramble Effect
- i18n / Language System
- TextScramble (Project Page)
- Slow Text Scramble Variant
- Logo Hover Interaction
- Target Audience Personas
- Tools & Tech Stack
- Problem Context & Legacy Accordion
- Legacy Accordion Script
- Design Guardrails & Brand Logo
- Output Defaults & Landing Page
- Connect Card Component
- Project2 Page Script
- Visual System & Legacy Gallery
- Tu Barrio Tu Feria Hero
- Brand Assets Rule
- Hard Rules (No Extras)
- Local Server Rule
- Reference Image Fidelity Rule
- Screenshot Comparison Workflow
- Contact Panel Component
- Custom Cursor Component
- Hero Section (#inicio)
- Nav Menu & Language Switch
- About Me Placeholder
- User Flow Diagram
- Strategic Proposal Section

## God Nodes (most connected - your core abstractions)
1. `TextScramble` - 6 edges
2. `TextScramble` - 6 edges
3. `SlowTextScramble` - 5 edges
4. `project2.html — 'Próximo Proyecto' coming-soon placeholder (linked as Fabrika de Gigantes)` - 5 edges
5. `iniciarCarga()` - 4 edges
6. `slide()` - 4 edges
7. `project1.html — Tu Barrio, Tu Feria case study page` - 4 edges
8. `changeLanguage()` - 3 edges
9. `finalizarCarga()` - 3 edges
10. `iniciarAnimacionesEntrada()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `_legacy/layout.html — early two-column prototype for Tu Barrio, Tu Feria` --semantically_similar_to--> `project1.html — Tu Barrio, Tu Feria case study page`  [INFERRED] [semantically similar]
  _legacy/layout.html → project1.html
- `Legacy accordion component (SÍNTESIS, DESCUBRIMIENTOS, EL DESAFÍO, SISTEMA DE DISEÑO, EXPERIENCIA DE USUARIO)` --semantically_similar_to--> `Contexto y problemática section`  [INFERRED] [semantically similar]
  _legacy/layout.html → project1.html
- `Legacy scrollable image gallery grid` --semantically_similar_to--> `Sistema Visual y Lenguaje de Diseño section (Impacto Visual, Ilustraciones, carousel)`  [INFERRED] [semantically similar]
  _legacy/layout.html → project1.html
- `'TU BARRIO, TU FERIA' project title/brand concept` --semantically_similar_to--> `Case study hero: title, tags (diseño web, ilustración, diseño de estrategia, dirección de arte), description`  [INFERRED] [semantically similar]
  _legacy/layout.html → project1.html
- `Project card: FABRIKA DE GIGANTES (id=project2)` --shares_data_with--> `project2.html — 'Próximo Proyecto' coming-soon placeholder (linked as Fabrika de Gigantes)`  [AMBIGUOUS]
  index.html → project2.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Tu Barrio, Tu Feria — same project represented across site iterations** — legacy_layout_page, project1_page, index_project1_entry [INFERRED 0.80]
- **Sequential prev/next footer navigation chain across case study pages** — project1_page, project2_page, project3_page [EXTRACTED 1.00]
- **UX audience segmentation: three personas forming the Públicos framework** — project1_publicos_section, project1_persona_desvinculado, project1_persona_practico, project1_persona_consciente [EXTRACTED 1.00]

## Communities (39 total, 22 thin omitted)

### Community 0 - "Project1 Carousel & Language Nav"
Cohesion: 0.18
Nodes (15): applyLanguage(), changeLanguage(), cursor, inicioLink, inicioSpan, jump(), next(), nextLink (+7 more)

### Community 1 - "Loader Eye Animation"
Cohesion: 0.21
Nodes (12): centro, corona, finalizarCarga(), iniciarAnimacionesEntrada(), iniciarCarga(), iris, moverIris(), ojo (+4 more)

### Community 2 - "Project Cards & Case Studies"
Cohesion: 0.25
Nodes (11): Project card: TU BARRIO, TU FERIA (id=project1), Project card: FABRIKA DE GIGANTES (id=project2), Project card: DISEÑAR LOS SUEÑOS CON LOS PIES EN EL BARRIO (id=project3), Trabajos (#trabajos) — selected projects section, _legacy/layout.html — early two-column prototype for Tu Barrio, Tu Feria, Footer 'SIGUIENTE PROYECTO' link component, project1.html — Tu Barrio, Tu Feria case study page, Footer back link '← TU BARRIO, TU FERIA' to project1.html (+3 more)

### Community 4 - "i18n / Language System"
Cohesion: 0.47
Nodes (5): badgeWords, changeLanguage(), startBadgeRotation(), translations, updateActiveButton()

### Community 7 - "Logo Hover Interaction"
Cohesion: 0.50
Nodes (3): headerCorona, headerOjo, logoInicio

### Community 8 - "Target Audience Personas"
Cohesion: 0.50
Nodes (4): Persona: Consciente (ethical/conscious consumer, seeks community retention), Persona: Desvinculado (disconnected from feria/barrio), Persona: Práctico (values speed/accessibility, mobile-first UI opportunity), Públicos section — target audience segmentation (18-34 age group)

### Community 9 - "Tools & Tech Stack"
Cohesion: 0.67
Nodes (3): Rule: Invoke frontend-design skill before writing frontend code, ClaudeCode listed as implementation tool used to build the project, Tecnologías utilizadas section (Figma, Adobe Suite, Procreate, ClaudeCode, p5.js)

### Community 10 - "Problem Context & Legacy Accordion"
Cohesion: 0.67
Nodes (3): Legacy accordion component (SÍNTESIS, DESCUBRIMIENTOS, EL DESAFÍO, SISTEMA DE DISEÑO, EXPERIENCIA DE USUARIO), Contexto y problemática section, Cited report: Cámara de Industrias del Uruguay / INEFOP (2020) on feria attendance decline

## Ambiguous Edges - Review These
- `Rule: Output defaults — single index.html, Tailwind CDN, placeholder images, mobile-first` → `index.html — Magdalena Soulier portfolio landing page`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to
- `Project card: FABRIKA DE GIGANTES (id=project2)` → `project2.html — 'Próximo Proyecto' coming-soon placeholder (linked as Fabrika de Gigantes)`  [AMBIGUOUS]
  index.html · relation: shares_data_with
- `Project card: DISEÑAR LOS SUEÑOS CON LOS PIES EN EL BARRIO (id=project3)` → `project3.html — 'Diseñar los Sueños...' coming-soon placeholder`  [AMBIGUOUS]
  index.html · relation: shares_data_with

## Knowledge Gaps
- **43 isolated node(s):** `cursor`, `accordionHeaders`, `translations`, `badgeWords`, `percentEl` (+38 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Rule: Output defaults — single index.html, Tailwind CDN, placeholder images, mobile-first` and `index.html — Magdalena Soulier portfolio landing page`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Project card: FABRIKA DE GIGANTES (id=project2)` and `project2.html — 'Próximo Proyecto' coming-soon placeholder (linked as Fabrika de Gigantes)`?**
  _Edge tagged AMBIGUOUS (relation: shares_data_with) - confidence is low._
- **What is the exact relationship between `Project card: DISEÑAR LOS SUEÑOS CON LOS PIES EN EL BARRIO (id=project3)` and `project3.html — 'Diseñar los Sueños...' coming-soon placeholder`?**
  _Edge tagged AMBIGUOUS (relation: shares_data_with) - confidence is low._
- **Why does `TextScramble` connect `TextScramble (Project Page)` to `Project1 Carousel & Language Nav`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `SlowTextScramble` connect `Slow Text Scramble Variant` to `Loader Eye Animation`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `cursor`, `accordionHeaders`, `translations` to the rest of the system?**
  _43 weakly-connected nodes found - possible documentation gaps or missing edges._