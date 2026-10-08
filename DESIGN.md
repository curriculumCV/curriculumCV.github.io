---
name: Currículum de Carlos Santos Jiménez
description: CV web de desarrollador, sobrio y tipográfico, con un único acento teal, modo claro/oscuro y la terminal como única superficie oscura.
colors:
  bg: "#f7f8fa"
  bg-2: "#ffffff"
  bg-3: "#eef1f5"
  fg: "#0f172a"
  fg-2: "#3f4b5e"
  fg-3: "#5b6778"
  linea: "#dfe4ea"
  linea-fuerte: "#c5ccd6"
  acento: "#0e7a6f"
  acento-fuerte: "#0a5f57"
  acento-suave: "rgb(14 122 111 / .10)"
  acento-contraste: "#ffffff"
  seleccion: "rgb(14 122 111 / .22)"
  peligro: "#b42318"
  peligro-suave: "rgb(180 35 24 / .10)"
  aviso: "#9a5b00"
  aviso-suave: "rgb(154 91 0 / .12)"
  ok: "#0e7a6f"
  term-bg: "#0d1322"
  term-fg: "#d6e2f0"
  term-fg-2: "#8fa3bd"
  term-acento: "#5eead4"
  term-ruta: "#93c5fd"
  term-aviso: "#fbbf24"
  term-error: "#fb7185"
typography:
  display:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 2vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
  subtitle:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "normal"
  title:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontFeature: "\"ss01\", \"cv11\""
  body-prose:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  caption:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.12em"
  label-datos:
    fontFamily: "Onest, Onest Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.06em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Code, Menlo, Consolas, monospace"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
rounded:
  code: "4px"
  s: "6px"
  m: "10px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "0.35rem"
  s: "0.5rem"
  m: "0.9rem"
  l: "1.5rem"
  xl: "2.5rem"
  xxl: "3.5rem"
  seccion: "clamp(3.5rem, 7vw, 6rem)"
  columna: "clamp(3rem, 6vw, 6rem)"
  gutter: "1.25rem"
  gutter-md: "2.5rem"
  medida: "68ch"
components:
  button-primary:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.acento-contraste}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.1rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.acento-fuerte}"
    textColor: "{colors.acento-contraste}"
  button-secondary:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.1rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.bg-3}"
    textColor: "{colors.fg}"
  button-icon:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "0"
    width: "2.75rem"
    height: "2.75rem"
  skip-link:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.acento-contraste}"
    rounded: "{rounded.s}"
    padding: "0.6rem 1rem"
  chip:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.8rem"
    height: "2.1rem"
  chip-foco:
    backgroundColor: "{colors.acento-suave}"
    textColor: "{colors.acento}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 1rem"
    height: "2.5rem"
  chip-boton:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.fg-2}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.8rem"
    height: "2.5rem"
  chip-boton-hover:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.acento}"
  etiqueta:
    backgroundColor: "{colors.acento-suave}"
    textColor: "{colors.acento}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.55rem"
  nav-link:
    textColor: "{colors.fg-3}"
    typography: "{typography.label}"
    padding: "0.25rem 0"
    height: "1.6rem"
  nav-link-active:
    textColor: "{colors.fg}"
    typography: "{typography.label}"
  item:
    textColor: "{colors.fg-2}"
    rounded: "{rounded.s}"
    padding: "1.4rem 0.75rem"
  item-hover:
    backgroundColor: "{colors.bg-3}"
    textColor: "{colors.fg-2}"
  terminal:
    backgroundColor: "{colors.term-bg}"
    textColor: "{colors.term-fg}"
    typography: "{typography.mono}"
    rounded: "{rounded.m}"
    padding: "0.9rem 1rem 0.5rem"
  lab-card:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.fg}"
    rounded: "{rounded.m}"
    padding: "1.4rem"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.fg}"
    rounded: "{rounded.s}"
    padding: "0.5rem 0.8rem"
    height: "2.75rem"
  hash:
    backgroundColor: "{colors.bg-3}"
    textColor: "{colors.fg}"
    typography: "{typography.mono}"
    rounded: "{rounded.s}"
    padding: "0.7rem 0.8rem"
  estado-open:
    backgroundColor: "{colors.acento-suave}"
    textColor: "{colors.acento}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.5rem"
  estado-closed:
    backgroundColor: "{colors.bg-3}"
    textColor: "{colors.fg-3}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.5rem"
  estado-riesgo:
    backgroundColor: "{colors.peligro-suave}"
    textColor: "{colors.peligro}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.5rem"
---

# Design System: Currículum de Carlos Santos Jiménez

## Overview

**Creative North Star: "El folio con terminal"**

Un folio limpio, frío y casi blanco sobre el que hay una sola ventana oscura: la terminal. Todo lo demás es tipografía y aire. El sistema sigue el canon del CV web de desarrollador (brittanychiang.com, leerob.com) ejecutado sin adorno: columna lateral fija con identidad y navegación, columna principal con secciones separadas por espacio y reglas de 1 px, un único acento verde-azulado que marca lo que se puede tocar y los dos focos de interés (inteligencia artificial y ciberseguridad), y un modo oscuro que invierte el folio a azul-negro sin cambiar la gramática.

La densidad es la de un documento, no la de un panel: medida de lectura de 68 caracteres, tamaño raíz que crece de 16 a 21 px con la pantalla para leerse en una tele o un proyector, listas con dos columnas (etiqueta a la izquierda, cuerpo a la derecha) y chips uniformes para las habilidades. La prueba sustituye a la afirmación: no hay barras de porcentaje ni tarjetas decorativas; las únicas superficies con borde propio son la terminal y las tres tarjetas del laboratorio, porque contienen controles.

Rechazos confirmados en la construcción: sin degradados, sin tarjetas con sombra como recurso compositivo, sin iconos de glifo (todos los iconos son SVG inline de trazo 1.75 px), sin texto en degradado y sin fuentes de terceros (Onest y JetBrains Mono autoalojadas en `fonts/`).

**Key Characteristics:**
- Fondo neutro frío y texto casi negro; en oscuro, azul-negro profundo y texto casi blanco.
- Un solo acento teal (`acento`), reservado a enlaces, foco, estado activo, focos de interés y estado «ok».
- Onest para todo lo que se lee; JetBrains Mono solo donde hay código, comandos o datos.
- Separación por espacio y reglas de 1 px; la sombra en reposo existe solo en la terminal y en la foto.
- Formas: píldoras para botones y chips, 10 px para superficies, 6 px para campos y filas.
- Movimiento corto y con una sola curva (`cubic-bezier(.2, .7, .2, 1)`), con alternativa estática bajo `prefers-reduced-motion`.

## Colors

Paleta de dos tonos neutros fríos (papel y azul-negro) con un único acento teal y un semáforo contenido (peligro, aviso, ok) que solo aparece como respuesta a datos en el laboratorio y la terminal.

### Primary
- **Teal profundo** (`acento`): color de enlace, contorno de foco (3 px), relleno del botón primario, texto de los chips de especialización, línea de progreso del escáner y resaltado de diferencias en el hash. Es el único color con intención en toda la página.
- **Teal hondo** (`acento-fuerte`): estado hover de enlaces y del botón primario; nunca aparece en reposo.
- **Teal al 10 %** (`acento-suave`): relleno de chips de foco, etiquetas de tecnologías y el estado «open»; también el anillo de foco de 3 px de campos y terminal.
- **Blanco sobre teal** (`acento-contraste`): texto de botón primario y del enlace «Saltar al contenido».
- **Selección teal** (`seleccion`): fondo de `::selection` (teal al 22 %).

### Neutral
- **Papel** (`bg`): fondo de página y de los campos de formulario.
- **Blanco** (`bg-2`): superficie elevada por tono: botones, chips, tarjetas del laboratorio, borde de la foto.
- **Papel hundido** (`bg-3`): hover y `focus-within` de filas, fondo del medidor, del hash, del código inline y del estado «closed».
- **Tinta** (`fg`): títulos, nombres de ítem, dato de los `<dd>`, enlaces de contacto y texto de botón secundario.
- **Tinta media** (`fg-2`): cuerpo de texto, prosa, chips, etiquetas de campo, titular de rol.
- **Tinta gris** (`fg-3`): subtítulos de ítem, navegación en reposo, encabezados de tabla y de datos, pie, títulos de grupo.
- **Regla** (`linea`): bordes de 1 px entre ítems, borde de chips y tarjetas, separadores de tabla.
- **Regla fuerte** (`linea-fuerte`): borde de botones, campos y terminal; indicador de navegación en reposo; subrayado de contacto; pulgar de la barra de desplazamiento.

### Tertiary
- **Rojo de riesgo** (`peligro`): barra del medidor en el nivel más bajo, veredicto «mal» y texto del estado «riesgo». `peligro-suave` es su relleno al 10 %.
- **Ámbar de aviso** (`aviso`): nivel 2 del medidor y veredicto «regular». `aviso-suave` es su relleno al 12 %.
- **Ok** (`ok`): alias del acento para los niveles 3 y 4 del medidor y el veredicto «bien». Mantenerlo igual que `acento`.
- **Terminal**: `term-bg` (azul-negro, fondo), `term-fg` (texto), `term-fg-2` (líneas atenuadas y placeholder), `term-acento` (usuario del prompt, líneas «ok», enlaces y caret), `term-ruta` (ruta `~` del prompt), `term-aviso` (líneas «warn») y `term-error` (líneas «err»). Los puntos de la barra y sus separadores son blanco al 18 % y al 8 %.

### Modo oscuro
Se activa por `prefers-color-scheme: dark` (salvo `data-theme="light"`) o por `data-theme="dark"`, y redefine los mismos tokens; la terminal no cambia porque ya es oscura. Valores canónicos del tema oscuro, tal y como están en `styles.css`:

| Token | Oscuro |
| --- | --- |
| `bg` / `bg-2` / `bg-3` | `#0b1120` / `#111a2e` / `#172238` |
| `fg` / `fg-2` / `fg-3` | `#e6edf6` / `#b4c0d2` / `#8d9bb1` |
| `linea` / `linea-fuerte` | `#22304a` / `#34456a` |
| `acento` / `acento-fuerte` / `acento-contraste` | `#5eead4` / `#99f6e4` / `#06201c` |
| `acento-suave` / `seleccion` | `rgb(94 234 212 / .12)` / `rgb(94 234 212 / .25)` |
| `peligro` / `peligro-suave` | `#fda4af` / `rgb(253 164 175 / .12)` |
| `aviso` / `aviso-suave` | `#fcd34d` / `rgb(252 211 77 / .12)` |
| `ok` | `#5eead4` |

En impresión, la paleta se reduce a blanco y negro con el acento en `acento-fuerte` claro (`#0a5f57`) y bordes grises.

### Named Rules
**La regla del único acento.** El teal es el único color con intención. Marca enlaces, foco, estado activo, los dos focos de interés y el estado «ok»; nunca rellena una sección, un fondo decorativo ni un título.

**La regla del semáforo contenido.** Rojo y ámbar aparecen solo como respuesta a datos (medidor, veredicto, estado de puerto, líneas de terminal). Jamás como decoración ni fuera del laboratorio y la terminal.

**La regla de la terminal fija.** La terminal usa sus propios tokens `term-*` y no cambia entre tema claro y oscuro: es la única superficie siempre oscura.

## Typography

**Display Font:** Onest (variable, autoalojada; con «Onest Fallback», una alternativa métrica sobre Segoe UI / Roboto / Helvetica Neue / Arial)
**Body Font:** Onest (la misma familia)
**Label/Mono Font:** JetBrains Mono (variable, autoalojada; con ui-monospace, Cascadia Code, Menlo, Consolas)

**Character:** Una sola voz sans geométrica y cálida para todo lo que se lee, con `ss01` y `cv11` activados, y una voz mono reservada a lo que se ejecuta o se mide. Los títulos son pequeños y en versalitas; la jerarquía la construyen el peso, el color y el espacio, no el tamaño.

El tamaño raíz es fluido: `clamp(16px, 0.92rem + 0.22vw, 21px)`, 16 px en móvil y hasta 21 px en teles y proyectores; todo el ramo está en `rem` y crece con él.

### Hierarchy
- **Display** (700, `clamp(1.9rem, 1.4rem + 2vw, 2.35rem)`, 1.2, tracking -0.03em): solo el nombre en la columna lateral (`h1`).
- **Headline** (700, 0.8rem, 1.2, tracking 0.14em, MAYÚSCULAS): los títulos de sección (`h2.titulo`). En escritorio son pegajosos (`sticky`) con fondo del 88 % del papel y desenfoque de 8 px.
- **Subtitle** (500, 1.1rem, 1.35, `fg-2`): el titular de rol bajo el nombre.
- **Title** (600, 1.1rem, 1.2, tracking -0.015em): títulos de ítem (puesto, título, certificación) y de tarjeta de laboratorio.
- **Body** (400, 1rem, 1.6): texto base. **Body-prose** (400, 1.05rem, 1.6, `fg-2`) para el párrafo de perfil, la intro de sección y el texto de contacto (1.15rem en contacto). Medida máxima de 68ch.
- **Caption** (400, 0.92rem, `fg-3`): subtítulos de ítem (empresa, centro, fechas), títulos de grupo (600) y pie (0.88rem).
- **Label** (600, 0.72rem, tracking 0.12em, MAYÚSCULAS, `fg-3`): enlaces de navegación. **Label-datos** (600, 0.78rem, tracking 0.06em, MAYÚSCULAS, `fg-3`): `<dt>` de datos y `<th>` de tabla.
- **Mono** (400, 0.9rem, 1.55): terminal; 0.92em en código inline, `kbd` y `output`; 0.85rem en chips de sugerencia y en el hash; 0.78rem en etiquetas de tecnologías; 0.95rem en los `<dd>` de datos.

### Named Rules
**La regla de dos voces.** Onest para todo lo que se lee; JetBrains Mono solo donde hay código, comandos, hashes, puertos o cifras. Si un texto no se ejecuta ni se mide, no va en mono.

**La regla del título pequeño.** Las secciones se titulan con un `h2` de 0.8rem en versalitas con tracking 0.14em. No existen kickers ni eyebrows sobre los títulos: el título pequeño es el título.

**La regla de 68ch.** Toda prosa (`prosa`, `intro`, `item-cuerpo`, `contacto-texto`, `pie`) se limita a `--medida: 68ch`, con `text-wrap: pretty`; los títulos usan `text-wrap: balance`.

## Layout

Contenedor centrado de `min(100% - 2 * gutter, 80rem)` (88rem a partir de 100em), con gutter de 1.25rem en móvil y 2.5rem desde 48em, respetando `safe-area-inset`. En móvil es una sola columna: identidad, acciones, perfil, terminal y el resto de secciones apiladas, con la navegación oculta.

Desde 64em (1024 px) el `layout` pasa a rejilla de dos columnas: lateral `minmax(18rem, 26rem)` y principal `minmax(0, 1fr)`, separadas por `clamp(3rem, 6vw, 6rem)`. El lateral es pegajoso (`position: sticky; top: 0`), limitado a `100dvh` con desplazamiento propio, y contiene foto (6rem; 5rem en escritorio), nombre, rol, lema, acciones y navegación con indicador de línea. Los títulos de sección también son pegajosos en escritorio.

Ritmo vertical: las secciones se separan con `clamp(3.5rem, 7vw, 6rem)`; dentro de una sección, título a 1.5rem del contenido, grupos a 1.5rem, ítems con relleno de 1.4rem arriba y abajo. Las listas de ítems son de dos columnas a partir de 40em (`minmax(10rem, 14rem)` para la cabecera y el resto para el cuerpo). Las tarjetas del laboratorio se apilan con 1.25rem de hueco y pasan a `repeat(auto-fit, minmax(22rem, 1fr))` desde 72em. Las tablas se convierten en rejilla de pares etiqueta-valor por debajo de 40em.

Puntos de corte observados: 40em (ítems en dos columnas, tabla apilada), 48em (gutter ancho), 64em (dos columnas, lateral fijo, navegación visible), 72em (laboratorio en rejilla), 100em (contenedor de 88rem). Impresión: una columna, 11pt, sin terminal, laboratorio, navegación ni acciones; los enlaces muestran su URL.

## Elevation & Depth

Sistema esencialmente plano con capas tonales: `bg` (papel), `bg-2` (superficie) y `bg-3` (hundido para hover y contenedores de datos), más reglas de 1 px (`linea`, `linea-fuerte`). La profundidad se transmite por tono y borde, no por sombra. Existe una sola sombra de reposo, `--sombra`, y la llevan únicamente la terminal (que además tiene borde de 1 px: es una superficie real, no una tarjeta decorativa) y el aro de la foto.

### Shadow Vocabulary
- **Sombra de superficie** (`box-shadow: 0 1px 2px rgb(15 23 42 / .06), 0 8px 24px -12px rgb(15 23 42 / .18)`; en oscuro `0 1px 2px rgb(0 0 0 / .4), 0 12px 32px -12px rgb(0 0 0 / .6)`): terminal y foto. No se aplica a tarjetas del laboratorio ni a ítems.
- **Aro de la foto** (`box-shadow: 0 0 0 1px var(--linea), var(--sombra)`) con borde de 2 px en `bg-2`.
- **Anillo de foco de superficie** (`box-shadow: 0 0 0 3px var(--acento-suave), var(--sombra)`): terminal en `:focus-within`, junto a `border-color: var(--acento)`.
- **Anillo de foco de campo** (`box-shadow: 0 0 0 3px var(--acento-suave)` + borde teal): inputs y selects en `:focus-visible`.
- **Contorno de foco global** (`outline: 3px solid var(--acento); outline-offset: 3px; border-radius: 6px`): todo elemento enfocable por teclado; dentro de la terminal el contorno pasa a `term-acento` con offset -3px.

### Named Rules
**La regla de la línea de 1 px.** Las secciones y los ítems se separan con espacio y reglas de 1 px, nunca con cajas sombreadas. La sombra en reposo existe solo en la terminal y la foto.

**La regla del aro de foco.** El foco es siempre visible y siempre teal: contorno de 3 px con 3 px de separación, o anillo de 3 px en `acento-suave` cuando el elemento ya tiene borde.

## Shapes

Tres radios y una píldora. Las superficies grandes (terminal, tarjetas del laboratorio) usan 10 px (`m`); los campos, las filas de ítem al hacer hover, el hash, el enlace «saltar» y el botón-icono dentro de un campo usan 6 px (`s`); el código inline usa 4 px. Botones, chips, etiquetas, estados y el medidor son píldoras (999px); la foto es un círculo. Los bordes son siempre de 1 px (`linea` para lo pasivo, `linea-fuerte` para lo interactivo). Los iconos son SVG inline de 1.1em con trazo de 1.75 px, extremos y uniones redondeados, sin relleno, y heredan `currentColor`; el icono de enlace externo es de 0.85em.

## Components

Carácter general: contenidos y tactiles. Todo lo interactivo tiene borde de 1 px, mínimo 2.75rem de alto (44 px), reacciona en 140 ms con la curva `--facil` y se encoge al 97 % al pulsar. Los estados hover solo se definen bajo `(hover: hover) and (pointer: fine)`.

### Buttons
- **Shape:** píldora (999px), altura mínima 2.75rem, relleno 0.55rem 1.1rem, peso 600, icono opcional de 1.1em con hueco de 0.5rem.
- **Primario** (`button-primary`): fondo y borde `acento`, texto `acento-contraste`. Usos: «Llamar» y «Escanear».
- **Secundario** (`button-secondary`): fondo `bg-2`, borde `linea-fuerte`, texto `fg`. Usos: «Escribir», «Imprimir o guardar en PDF».
- **Icono** (`button-icon`): secundario cuadrado de 2.75rem sin relleno, icono de 1.2em. Usos: cambio de tema (muestra el icono del tema al que se cambiará), mostrar/ocultar contraseña (6 px de radio cuando va pegado a un campo).
- **Hover / Active:** secundario → borde `fg-3` y fondo `bg-3`; primario → `acento-fuerte`. Pulsado: `scale(.97)`. Transiciones de fondo, borde, color y transform en 140 ms.

### Chips
- **Style** (`chip`): píldora con borde `linea`, fondo `bg-2`, texto `fg-2`, 0.9rem/500, altura 2.1rem, relleno 0.3rem 0.8rem. Son informativos, no filtran.
- **Foco** (`chip-foco`): sin borde visible, fondo `acento-suave`, texto `acento` 600, con icono; en el grupo de especialización crecen a 1rem y 2.5rem de alto. Solo para los dos focos de interés.
- **Botón de sugerencia** (`chip-boton`): chip en JetBrains Mono 0.85rem, 2.5rem de alto, que escribe un comando en la terminal; hover → borde y texto `acento`.
- **Etiqueta** (`etiqueta`): píldora mínima en mono 0.78rem, fondo `acento-suave`, texto `acento`, para tecnologías dentro de un ítem.
- **Estado** (`estado-open` / `estado-closed` / `estado-riesgo`): píldora de 0.8rem/600 en la tabla del escáner: teal, gris y rojo respectivamente.

### Cards / Containers
- **Ítem de lista** (`item`): fila con regla superior de 1 px (y última con regla inferior), rejilla de dos columnas desde 40em, relleno 1.4rem 0.75rem con margen negativo de 0.75rem para que el hover sangre fuera del texto. Hover o `focus-within` → fondo `bg-3` con 6 px de radio; al pasar el ratón por la lista, los demás ítems bajan a 55 % de opacidad en 260 ms.
- **Tarjeta de laboratorio** (`lab-card`): borde 1 px `linea`, radio 10 px, fondo `bg-2`, relleno 1.4rem, hueco interno 0.9rem, sin sombra. Contiene título, descripción, formulario y un bloque de resultado separado por regla de 1 px.
- **Hash** (`hash`): bloque mono 0.85rem sobre `bg-3` con 6 px de radio; los caracteres que cambian se marcan en `acento` con peso 500.

### Inputs / Fields
- **Style** (`input`): borde 1 px `linea-fuerte`, radio 6 px, fondo `bg` (el papel, un tono por debajo de la tarjeta), texto `fg`, altura 2.75rem, relleno 0.5rem 0.8rem, tamaño `max(16px, 1rem)` para evitar el zoom en iOS. Etiqueta encima en 0.88rem/600 `fg-2`.
- **Focus:** borde `acento` y anillo `0 0 0 3px var(--acento-suave)` en 140 ms; sin `outline`.
- **Campo con botón** (`campo-con-boton`): input flexible más botón-icono de 6 px de radio, hueco 0.5rem. `campo-corto` limita a 16rem.

### Navigation
- **Style:** lista vertical en el lateral, solo desde 64em. Cada enlace es `label` (0.72rem/600, tracking 0.12em, mayúsculas) en `fg-3`, con una línea indicadora de 4rem x 1px en `linea-fuerte` a su izquierda, escalada al 50 % en reposo.
- **Hover / Activo:** texto `fg`; la línea se extiende al 100 % en 260 ms y se tiñe de `fg`. El activo (`aria-current="true"`) se fija con `IntersectionObserver`.
- **Móvil:** la navegación se oculta; en su lugar aparece la línea de ubicación («Fuenlabrada, Madrid · Disponible para prácticas») en 0.9rem `fg-3`.
- **Enlaces de contacto** (`contacto-enlace`): texto `fg` 1.05rem/600 con icono teal de 1.25em, subrayado fino de 1 px en `linea-fuerte` que pasa a `acento` al hacer hover.
- **Saltar al contenido** (`skip-link`): botón teal de 6 px de radio que aparece arriba a la izquierda solo al recibir foco.

### Terminal
La firma del sistema. Caja con borde 1 px `linea-fuerte`, radio 10 px, fondo `term-bg`, texto `term-fg`, sombra de superficie, mono 0.9rem/1.55. Barra superior con tres puntos de 0.7rem en blanco al 18 % y título «carlos@cv: ~» en 0.8rem `term-fg-2` sobre blanco al 4 % con regla inferior al 8 %. Salida de `clamp(16rem, 42vh, 26rem)` con `pre-wrap`, barra de desplazamiento fina y `role="log"`. Prompt con usuario en `term-acento` y ruta en `term-ruta`; líneas de respuesta en `term-fg`, atenuadas en `term-fg-2`, «ok» en `term-acento`, «warn» en `term-aviso`, «err» en `term-error`. Input sin borde con caret `term-acento` y tamaño `max(16px, 1em)`. Al enfocar cualquier parte, el borde pasa a `acento` y aparece el anillo de 3 px.

### Medidor y tabla del laboratorio
- **Medidor** (`medidor`): píldora de 0.5rem de alto sobre `bg-3`; la barra escala en X en 260 ms y cambia de color por nivel: `peligro` (1), `aviso` (2), `ok` (3 y 4). Siempre acompañado de `role="meter"` y un veredicto textual en el mismo color.
- **Datos** (`datos`): rejilla de dos columnas de pares `dt` (`label-datos`) / `dd` (mono 0.95rem `fg`).
- **Progreso del escáner** (`lab-progreso`): línea de 2 px en `bg-3` cuya barra teal barre de izquierda a derecha con transición lineal de `--duracion-escaneo`; estática bajo `prefers-reduced-motion`.
- **Tabla** (`tabla`): 0.9rem con `tabular-nums`, cabeceras en `label-datos`, filas separadas por regla de 1 px, primera columna en mono; cada fila nueva aparece con `aparecer-fila` (opacidad y 4 px de desplazamiento en 260 ms). Bajo 40em se apila en pares.

### Motion
Una sola curva, `--facil: cubic-bezier(.2, .7, .2, 1)`, y dos duraciones: `--rapido` 140 ms (color, borde, fondo, transform de botones) y `--normal` 260 ms (opacidad de ítems, línea de navegación, medidor, filas). Una única entrada orquestada al cargar: los bloques `.entrada` suben 10 px y aparecen en 0.7 s con escalonado de 80 ms (`--i`), solo si hay JS y `prefers-reduced-motion: no-preference`. `scroll-behavior: smooth` también queda condicionado a esa preferencia.

## Do's and Don'ts

### Do:
- **Do** usar `acento` solo para enlaces, foco, estado activo, los dos chips de especialización y el estado «ok»; el resto de la página es neutra.
- **Do** separar secciones con `clamp(3.5rem, 7vw, 6rem)` e ítems con reglas de 1 px en `linea`; la jerarquía la hacen el espacio y el peso.
- **Do** titular cada sección con un `h2.titulo` de 0.8rem en versalitas con tracking 0.14em, pegajoso en escritorio.
- **Do** mantener toda prosa dentro de 68ch con `text-wrap: pretty` y los títulos con `text-wrap: balance`.
- **Do** usar JetBrains Mono únicamente para comandos, código, hashes, puertos y cifras.
- **Do** dar a todo control una altura mínima de 2.75rem, borde de 1 px, píldora o 6 px de radio, y foco teal visible (contorno de 3 px o anillo de 3 px en `acento-suave`).
- **Do** definir los estados hover solo bajo `(hover: hover) and (pointer: fine)` y encoger a `scale(.97)` al pulsar.
- **Do** redefinir los mismos tokens para el tema oscuro (`data-theme="dark"` y `prefers-color-scheme`) y dejar la terminal con sus tokens `term-*` sin cambios.
- **Do** dibujar iconos como SVG inline del sprite, 1.1em, trazo 1.75 px, extremos redondeados, `currentColor`.
- **Do** condicionar toda animación a `prefers-reduced-motion: no-preference` y usar solo `--facil`, 140 ms o 260 ms.

### Don't:
- **Don't** añadir sombras a tarjetas, ítems o chips; la única sombra en reposo es la de la terminal y la foto.
- **Don't** usar degradados, texto en degradado, fondos de sección de color ni más de un acento.
- **Don't** mostrar rojo o ámbar fuera del laboratorio y la terminal, ni como decoración.
- **Don't** poner kickers o eyebrows sobre los títulos, ni subir el `h2` de sección por encima de 0.8rem.
- **Don't** cargar fuentes, scripts o iconos de terceros: Onest y JetBrains Mono viven en `fonts/` y los iconos en el sprite.
- **Don't** representar habilidades con barras o porcentajes; los chips son uniformes y sin nivel.
- **Don't** usar un radio distinto de 4, 6 o 10 px o la píldora, ni bordes de más de 1 px (salvo el aro de 2 px de la foto).
