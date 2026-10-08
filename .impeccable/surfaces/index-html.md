---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["styles.css","scripts.js"]
---

# Surface brief: index.html (currículum de Carlos Santos Jiménez)

## Scope and mode

Persuade. Una sola página estática (index.html, styles.css, scripts.js) en GitHub Pages. El visitante es quien decide las prácticas de 2.º de DAM; el éxito es que contacte.

## Audience, job, action, proof, constraints

- Audiencia: tutor/a de prácticas, RR. HH. o responsable técnico de una pyme de software/IT, en portátil o móvil, con prisa.
- Trabajo: saber en segundos qué sabe Carlos, si es fiable y cómo contactarle.
- Acción: llamar o escribir (tel: y mailto:), visibles en el primer viewport y al final.
- Prueba: terminal interactiva con asistente (comandos y preguntas) y laboratorio de ciberseguridad (entropía de contraseñas, hashing con WebCrypto, escaneo de puertos simulado); sitio real entregado (centroopticoalhazen.com); certificados Cisco.
- Restricciones: sin backend, sin build, sin dependencias JS externas; funciona sin JS para el contenido; WCAG 2.2 AA; legible en tele/proyector; imprimible; español de España.

## Direction contract

THESIS: El CV web canónico de un desarrollador, ejecutado al nivel de los mejores portfolios personales (brittanychiang.com, leerob.com): sobrio, tipográfico, todo con teclado, claro/oscuro, cero adorno. Rechaza el degradado azul con tarjetas iguales y barras de porcentaje inventadas: la prueba sustituye a la afirmación.

OWN-WORLD: Fondo neutro frío (claro: casi blanco; oscuro: azul-negro profundo), texto casi negro / casi blanco, un único acento verde-azulado (teal) reservado para enlaces, foco, estado activo y los dos focos de interés (IA y ciberseguridad). Tipografía Onest (variable, autoalojada en fonts/) para texto y títulos y JetBrains Mono (autoalojada) solo donde hay código, comandos o datos (terminal, hashes, puertos). Se eligieron en lugar de Geist/Geist Mono porque el detector las marcó como sobreusadas y Carlos aprobó autoalojar las fuentes el 8-10-2026 para no depender de terceros. Sin tarjetas con sombra: secciones separadas por espacio y reglas de 1 px; chips de habilidad uniformes; iconos SVG inline de trazo 1.75 px.

STORY: «Este chico ya hace cosas de verdad»: entra, lee el resumen con IA y ciberseguridad en primer plano, prueba la terminal (escribe `skills` o pregunta «¿sabes Python?»), juega 20 segundos con el laboratorio, ve experiencia real y certificados, y llama o escribe.

FIRST VIEWPORT: Escritorio ≥ 1024 px: columna izquierda fija (sticky) con foto 96 px, nombre en display, titular «Técnico informático · Estudiante de 2.º DAM», una línea de posicionamiento (IA y ciberseguridad), navegación de secciones con indicador activo, acciones Llamar / Escribir y toggle de tema; columna derecha con el párrafo de perfil y, justo debajo, la terminal ya enfocable con el prompt visible. Móvil: foto + nombre + titular + dos botones de contacto apilados, perfil, terminal.

FORM: Canon de la categoría (estándar elegido por el usuario; preferencia permanente). Listón: portfolios de desarrolladores top. Posición en la lista propia: ninguna (salida canon). Seed key 7b6e043f. Signature interaction: la terminal con asistente local (comandos Linux + preguntas en lenguaje natural) y el laboratorio de ciberseguridad; motion: una sola entrada orquestada al cargar (identidad → acciones → navegación → perfil → terminal, pasos de 80 ms, ease-out), caret nativo de la terminal, barrido de progreso del escáner de puertos; todo con alternativa estática bajo prefers-reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

- Foto de origen de solo 200×200 px; si Carlos aporta una mayor, sustituir foto.webp/foto.jpg.
- URL confirmada por Carlos: https://curriculumcv.github.io/. En Contacto no se promete tiempo de respuesta (decisión de Carlos).
