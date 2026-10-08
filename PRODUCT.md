# Product

## Platform

web

## Users

- **Usuario primario:** la persona que decide en una empresa (tutor/a de prácticas, responsable de RR. HH., jefe/a de equipo técnico) que recibe el enlace al currículum de Carlos y tiene que decidir en pocos minutos si lo acoge en prácticas de 2.º curso de DAM (Desarrollo de Aplicaciones Multiplataforma) y, después, si lo contrata.
- **Situación:** lo abre desde el correo o desde un portal de prácticas, en el portátil del trabajo o en el móvil, a menudo entre otras tareas. También puede proyectarse en una reunión o verse en una tele/pantalla grande.
- **Trabajo que hace:** comprobar rápido qué sabe Carlos, si encaja con la empresa, si es fiable y cómo contactarle.

## Product Purpose

Currículum web personal de Carlos Santos Jiménez. Existe para conseguir las prácticas de 2.º de DAM en una empresa en la que Carlos quiere quedarse después. Éxito = la empresa le llama o le escribe.

## Positioning

No es un CV en PDF: es una página que *demuestra* lo que Carlos sabe en vez de solo listarlo. Incluye una terminal interactiva con asistente (comandos tipo Linux y preguntas en lenguaje natural, sin servidor) y un laboratorio de ciberseguridad con mini-demostraciones. Un reclutador que lo usa dos minutos sale con la sensación de haber probado el trabajo del candidato, no de haber leído sobre él.

## Operating Context

- Alojado en GitHub Pages como sitio de usuario (repositorio `curriculumCV/curriculumCV.github.io`; URL confirmada por Carlos: https://curriculumcv.github.io/). Sin backend, sin build step; todo debe funcionar como archivos planos.
- Se consulta en móvil, tablet, portátil, PC, tele y proyector. Debe leerse a distancia y a tamaños grandes sin degradarse.
- Se puede imprimir o guardar en PDF desde el navegador.
- Idioma: español de España. Tono profesional y cercano.

## Capabilities and Constraints

**Datos reales del candidato (no inventar nada más):**
- Nombre: Carlos Santos Jiménez. Fuenlabrada (28942), Madrid. Tel. 644 061 650. Correo santosjimenezcarlos4@gmail.com.
- Formación: Grado superior DAM, IES Laguna de Joatzel, 2025–actualidad (2.º curso, busca prácticas). Grado medio SMR (Sistemas Microinformáticos y Redes), IES Laguna de Joatzel, 2023–2024. 1.º Bachillerato científico, IES Jimena Menéndez Pidal, 2022–2023. ESO, IES Jimena Menéndez Pidal, 2018–2022.
- Experiencia: Desarrollador de páginas web en Comunitega, S.L. (WordPress, responsividad, SEO, plugins y base de datos; sitio real: https://centroopticoalhazen.com). Manipulador de alimentos en Delfín Ultracongelados.
- Certificaciones Cisco Networking Academy: «Defensa de la Red» (21-02-2025) y «Introducción a la Ciberseguridad» (30-01-2025), con enlaces a los certificados.
- Habilidades técnicas confirmadas: HTML, CSS, JavaScript, Java, JavaFX, Kotlin, Flutter, Python, scripting Bash, MariaDB, MongoDB, WordPress, SEO y optimización web; montaje y desmontaje de equipos, crimpado de cables RJ45, tareas de reparación; se desenvuelve bien en Linux y Windows.
- Idiomas: español nativo, inglés B2.
- Intereses de especialización (prioritarios, deben destacar): **inteligencia artificial y ciberseguridad**.
- Cualidades a transmitir: muy trabajador, entusiasta, muy cooperativo. Además amable, extrovertido, respetuoso, responsable, perfeccionista.
- Aficiones: deporte, cine, videojuegos, tecnología.

**Decisiones confirmadas:**
- Sin pantalla de bienvenida bloqueante; el contenido se ve al instante.
- Foto de perfil servida en local (archivo optimizado dentro del repo), no desde LinkedIn.
- Funcionalidades innovadoras: (1) terminal interactiva con asistente local; (2) laboratorio de ciberseguridad interactivo. Ambas sin dependencias externas.
- Sin frameworks ni dependencias externas: fuentes autoalojadas en `fonts/`, sin CDN, sin analíticas. En Contacto no se prometen tiempos de respuesta (decisión de Carlos, 8-10-2026).

**No afirmar:** niveles de dominio en porcentaje inventados, empresas o proyectos no listados, títulos no obtenidos.

## Brand Commitments

Nombre real del candidato. Nada de marca corporativa; la identidad es la de Carlos como técnico joven orientado a IA y ciberseguridad.

Preferencia permanente (elegida por Carlos el 8-10-2026): el estándar de la categoría, el CV web de desarrollador clásico, ejecutado con el nivel de acabado de los mejores portfolios personales de desarrolladores (brittanychiang.com, leerob.com): sobrio, tipográfico, claro/oscuro, todo accesible con teclado, sin adornos.

## Evidence on Hand

- Sitio web real desarrollado: https://centroopticoalhazen.com
- Certificados Cisco (enlaces a Google Docs en el HTML actual).
- Foto de perfil (descargada al repo como `foto.webp`).
- No existen testimonios, métricas ni referencias de empresas; no fabricarlos.

## Product Principles

1. Demostrar antes que afirmar: cada habilidad que se pueda enseñar en la propia página, se enseña.
2. El contacto siempre a un toque de distancia, en cualquier dispositivo.
3. Legible a un metro de distancia (tele, proyector) y con una mano (móvil).
4. Funciona sin red, sin JavaScript (contenido) y sin ratón (teclado y lector de pantalla).
5. Honestidad: solo datos reales y verificables.

## Accessibility & Inclusion

WCAG 2.2 AA como mínimo: contraste, foco visible, navegación por teclado, `prefers-reduced-motion` respetado con alternativa, lectores de pantalla, objetivos táctiles ≥ 44 px, zoom permitido. La terminal y el laboratorio deben ser accesibles por teclado y anunciar sus resultados.
