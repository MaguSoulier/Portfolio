# Graph Report - .  (2026-07-24)

## Corpus Check
- 23 files · ~6,374,448 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 173 nodes · 174 edges · 33 communities (21 shown, 12 thin omitted)
- Extraction: 93% EXTRACTED · 6% INFERRED · 1% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.67)
- Token cost: 105,566 input · 0 output

## Community Hubs (Navigation)
- Site Pages & Content
- Package Metadata
- Project1 Page Script
- Tu Barrio Tu Feria Case Study
- Loader Animation
- Project2 Page Script
- Text Scramble Effect
- Fabrika de Gigantes Case Study
- i18n / Language Switching
- Screenshot Tool
- Logo Interaction
- Dev Server
- Legacy Projects Script
- Coming Soon Page Script
- CLAUDE.md: Brand Assets Rule
- CLAUDE.md: Frontend Design Skill Rule
- CLAUDE.md: Hard Rules
- CLAUDE.md: Local Server Rule
- CLAUDE.md: Reference Image Rule
- CLAUDE.md: Screenshot Workflow Rule
- Legacy Accordion Layout
- Legacy Gallery Layout
- Legacy Layout Title

## God Nodes (most connected - your core abstractions)
1. `Tu Barrio, Tu Feria (project)` - 15 edges
2. `Index — Magdalena Soulier Portfolio Homepage` - 12 edges
3. `Magdalena Soulier (visual designer)` - 9 edges
4. `Project1 — Tu Barrio, Tu Feria case study page` - 7 edges
5. `Project2 — Fabrika de Gigantes case study page` - 7 edges
6. `Fabrika de Gigantes (project — web game)` - 7 edges
7. `TextScramble` - 6 edges
8. `Project3 — coming soon placeholder page` - 6 edges
9. `SlowTextScramble` - 5 edges
10. `iniciarCarga()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Tu Barrio, Tu Feria (project)` --semantically_similar_to--> `Comisión Derecho a la Ciudad (Ciudad Vieja, Montevideo)`  [INFERRED] [semantically similar]
  project1.html → index.html
- `_legacy/layout.html — early two-column prototype for Tu Barrio, Tu Feria` --semantically_similar_to--> `Project1 — Tu Barrio, Tu Feria case study page`  [INFERRED] [semantically similar]
  _legacy/layout.html → project1.html
- `Rule: Output defaults — single index.html, Tailwind CDN, placeholder images, mobile-first` --conceptually_related_to--> `Index — Magdalena Soulier Portfolio Homepage`  [AMBIGUOUS]
  CLAUDE.md → index.html
- `Media Resma (design cooperative)` --semantically_similar_to--> `User-Generated Content (UGC) model`  [INFERRED] [semantically similar]
  index.html → project2.html
- `Persona: Práctico` --semantically_similar_to--> `Limitaciones técnicas (low-end hardware optimization)`  [INFERRED] [semantically similar]
  project1.html → project2.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Site-wide Connect Card Component Pattern** — index_connect_card, project1_connect_card, project2_connect_card, project3_connect_card [INFERRED 0.85]
- **Shared Header Flower/Eye Logo & Nav Pattern** — index_header_logo, project1_header_logo, project2_header_logo, project3_header_logo [INFERRED 0.85]
- **Site-wide GSAP/ScrollTrigger/ScrollSmoother Animation Stack** — index_gsap, index_page, project1_page, project2_page, project3_page [INFERRED 0.75]

## Communities (33 total, 12 thin omitted)

### Community 0 - "Site Pages & Content"
Cohesion: 0.09
Nodes (30): Anti-Generic Guardrails (custom colors, layered shadows, font pairing, gradients, transform/opacity-only animation, interactive states, depth layering), Rule: Output defaults — single index.html, Tailwind CDN, placeholder images, mobile-first, Ceibal — Jóvenes a Programar, Comisión Derecho a la Ciudad (Ciudad Vieja, Montevideo), Connect Card widget (index.html), GSAP + ScrollTrigger + ScrollSmoother animation stack, Header flower/eye SVG logo (index.html), Magdalena Soulier (visual designer) (+22 more)

### Community 1 - "Package Metadata"
Cohesion: 0.10
Nodes (19): author, bugs, url, dependencies, puppeteer, description, homepage, keywords (+11 more)

### Community 2 - "Project1 Page Script"
Cohesion: 0.18
Nodes (15): applyLanguage(), changeLanguage(), cursor, inicioLink, inicioSpan, jump(), next(), nextLink (+7 more)

### Community 3 - "Tu Barrio Tu Feria Case Study"
Cohesion: 0.12
Nodes (16): Adobe Suite (tool), Cámara de Industrias del Uruguay e INEFOP, informe (2020), ClaudeCode (tool), Persona: Consciente, Persona: Desvinculado, Emilia Fripp (team member), Figma (tool), Flujo de usuario (mobile-first, no-scroll) (+8 more)

### Community 4 - "Loader Animation"
Cohesion: 0.21
Nodes (12): centro, corona, finalizarCarga(), iniciarAnimacionesEntrada(), iniciarCarga(), iris, moverIris(), ojo (+4 more)

### Community 5 - "Project2 Page Script"
Cohesion: 0.20
Nodes (10): applyLanguage(), changeLanguage(), cursor, inicioLink, inicioSpan, nextLink, nextSpan, onMove() (+2 more)

### Community 7 - "Fabrika de Gigantes Case Study"
Cohesion: 0.22
Nodes (9): Persona: Práctico, Blender (tool), Rationale: pixelated texturing + high-contrast cel-shading to cut GPU memory use, Fabrika de Gigantes (project — web game), Figma (tool), Limitaciones técnicas (low-end hardware optimization), Mucho Games (rights holder), Revista Gigantes / LaDiaria (client) (+1 more)

### Community 8 - "i18n / Language Switching"
Cohesion: 0.47
Nodes (5): badgeWords, changeLanguage(), startBadgeRotation(), translations, updateActiveButton()

### Community 9 - "Screenshot Tool"
Cohesion: 0.33
Nodes (4): n, OUT_DIR, outPath, ROOT

### Community 10 - "Logo Interaction"
Cohesion: 0.50
Nodes (3): headerCorona, headerOjo, logoInicio

### Community 11 - "Dev Server"
Cohesion: 0.50
Nodes (3): MIME_TYPES, ROOT, server

## Ambiguous Edges - Review These
- `Rule: Output defaults — single index.html, Tailwind CDN, placeholder images, mobile-first` → `Index — Magdalena Soulier Portfolio Homepage`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to
- `Project card: Diseñar los Sueños con los Pies en el Barrio` → `Project3 — coming soon placeholder page`  [AMBIGUOUS]
  index.html · relation: references

## Knowledge Gaps
- **80 isolated node(s):** `cursor`, `accordionHeaders`, `logoInicio`, `headerCorona`, `headerOjo` (+75 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Rule: Output defaults — single index.html, Tailwind CDN, placeholder images, mobile-first` and `Index — Magdalena Soulier Portfolio Homepage`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Project card: Diseñar los Sueños con los Pies en el Barrio` and `Project3 — coming soon placeholder page`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `Tu Barrio, Tu Feria (project)` connect `Tu Barrio Tu Feria Case Study` to `Site Pages & Content`, `Fabrika de Gigantes Case Study`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Project1 — Tu Barrio, Tu Feria case study page` (e.g. with `Project card: Tu Barrio, Tu Feria` and `_legacy/layout.html — early two-column prototype for Tu Barrio, Tu Feria`) actually correct?**
  _`Project1 — Tu Barrio, Tu Feria case study page` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `cursor`, `accordionHeaders`, `logoInicio` to the rest of the system?**
  _80 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Site Pages & Content` be split into smaller, more focused modules?**
  _Cohesion score 0.08735632183908046 - nodes in this community are weakly interconnected._
- **Should `Package Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._