(function () {
  'use strict';

  var CV = {
    nombre: 'Carlos Santos Jiménez',
    rol: 'Técnico informático en SMR y estudiante de 2.º de DAM',
    ubicacion: 'Fuenlabrada (28942), Madrid',
    telefono: '644 061 650',
    telefonoHref: 'tel:+34644061650',
    email: 'santosjimenezcarlos4@gmail.com',
    objetivo: 'Prácticas de 2.º curso de Desarrollo de Aplicaciones Multiplataforma en una empresa donde quedarme después.',
    intereses: ['Inteligencia artificial', 'Ciberseguridad'],
    cualidades: ['Muy trabajador', 'Entusiasta', 'Muy cooperativo', 'Responsable', 'Perfeccionista', 'Amable', 'Extrovertido', 'Respetuoso'],
    idiomas: ['Español (nativo)', 'Inglés (B1)'],
    habilidades: {
      'Desarrollo': ['Java', 'JavaFX', 'Kotlin', 'Flutter', 'Python', 'JavaScript', 'HTML', 'CSS', 'Scripting Bash'],
      'Datos': ['MariaDB', 'MongoDB'],
      'Sistemas y redes': ['Linux', 'Windows', 'Redes y Cisco', 'WordPress', 'SEO y rendimiento web'],
      'Hardware': ['Montaje y desmontaje de equipos', 'Crimpado de cables RJ45', 'Diagnóstico y reparación']
    },
    experiencia: [
      { puesto: 'Desarrollador de páginas web', empresa: 'Comunitega, S.L.', detalle: 'Sitios en WordPress: responsividad, SEO, plugins y base de datos. Proyecto entregado: https://centroopticoalhazen.com' },
      { puesto: 'Manipulador de alimentos', empresa: 'Delfín Ultracongelados', detalle: 'Cadena de producción con normas estrictas de higiene y seguridad.' }
    ],
    formacion: [
      { titulo: 'Grado superior en Desarrollo de Aplicaciones Multiplataforma', centro: 'IES Laguna de Joatzel', fechas: '2025 – actualidad (2.º curso)' },
      { titulo: 'Grado medio en Sistemas Microinformáticos y Redes', centro: 'IES Laguna de Joatzel', fechas: '2023 – 2024' },
      { titulo: '1.º de Bachillerato científico', centro: 'IES Jimena Menéndez Pidal', fechas: '2022 – 2023' },
      { titulo: 'ESO', centro: 'IES Jimena Menéndez Pidal', fechas: '2018 – 2022' }
    ],
    certificaciones: [
      { nombre: 'Defensa de la Red', entidad: 'Cisco Networking Academy', fecha: '21-02-2025' },
      { nombre: 'Introducción a la Ciberseguridad', entidad: 'Cisco Networking Academy', fecha: '30-01-2025' }
    ],
    aficiones: ['Deporte', 'Cine', 'Videojuegos', 'Tecnología']
  };

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)');

  function normalizar(texto) {
    return String(texto).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[¿?¡!.,;:]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function contiene(texto, claves) {
    for (var i = 0; i < claves.length; i++) if (texto.indexOf(claves[i]) !== -1) return true;
    return false;
  }
  function lista(arr, sep) { return arr.join(sep || ', '); }

  var raiz = document.documentElement;
  var botonTema = $('#tema');

  function temaActual() {
    var fijado = raiz.getAttribute('data-theme');
    if (fijado === 'dark' || fijado === 'light') return fijado;
    return prefiereOscuro.matches ? 'dark' : 'light';
  }
  function aplicarTema(tema, guardar) {
    if (guardar) {
      raiz.setAttribute('data-theme', tema);
      try { localStorage.setItem('tema', tema); } catch (e) { }
    }
    var color = tema === 'dark' ? '#0b1120' : '#f7f8fa';
    $$('meta[name="theme-color"]').forEach(function (m) { m.setAttribute('content', color); });
    if (botonTema) {
      var siguiente = tema === 'dark' ? 'claro' : 'oscuro';
      botonTema.setAttribute('aria-label', 'Cambiar a tema ' + siguiente);
      botonTema.title = 'Cambiar a tema ' + siguiente;
    }
  }
  if (botonTema) {
    botonTema.hidden = false;
    aplicarTema(temaActual(), false);
    botonTema.addEventListener('click', function () {
      aplicarTema(temaActual() === 'dark' ? 'light' : 'dark', true);
    });
    prefiereOscuro.addEventListener('change', function () {
      if (!raiz.hasAttribute('data-theme')) aplicarTema(temaActual(), false);
    });
  }


  var enlacesNav = $$('.nav a');
  var secciones = enlacesNav.map(function (a) { return $(a.getAttribute('href')); }).filter(Boolean);

  function marcarActiva(id) {
    enlacesNav.forEach(function (a) {
      if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window && secciones.length) {
    var visibles = {};
    var espia = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { visibles[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
      var mejor = null, max = 0;
      secciones.forEach(function (s) { if ((visibles[s.id] || 0) > max) { max = visibles[s.id]; mejor = s.id; } });
      if (mejor) marcarActiva(mejor);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .25, .5, .75, 1] });
    secciones.forEach(function (s) { espia.observe(s); });
  }

  var botonImprimir = $('#imprimir');
  if (botonImprimir) { botonImprimir.hidden = false; botonImprimir.addEventListener('click', function () { window.print(); }); }
  var anio = $('#anio');
  if (anio) anio.textContent = String(new Date().getFullYear());

  var salida = $('#term-salida');
  var formTerm = $('#term-form');
  var inputTerm = $('#term-input');
  var historial = [];
  var posHistorial = -1;

  function linea(texto, clase) {
    var p = document.createElement('p');
    p.className = 'term-linea-texto ' + (clase || 'term-res');
    p.textContent = texto;
    salida.appendChild(p);
    return p;
  }
  function lineaHTML(nodos, clase) {
    var p = document.createElement('p');
    p.className = 'term-linea-texto ' + (clase || 'term-res');
    nodos.forEach(function (n) { p.appendChild(typeof n === 'string' ? document.createTextNode(n) : n); });
    salida.appendChild(p);
    return p;
  }
  function enlace(href, texto) {
    var a = document.createElement('a');
    a.href = href; a.textContent = texto;
    if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
    return a;
  }
  function imprimirBloque(lineas, clase) {
    lineas.forEach(function (l) { linea(l, clase); });
  }
  function ecoComando(cmd) {
    var p = document.createElement('p');
    p.className = 'term-linea-texto term-cmd';
    var u = document.createElement('span'); u.className = 'term-usuario'; u.textContent = 'carlos@cv';
    var r = document.createElement('span'); r.className = 'term-ruta'; r.textContent = '~';
    p.appendChild(u); p.appendChild(document.createTextNode(':')); p.appendChild(r); p.appendChild(document.createTextNode('$ ' + cmd));
    salida.appendChild(p);
  }
  function bajar() { salida.scrollTop = salida.scrollHeight; }

  var comandos = {
    help: function () {
      imprimirBloque([
        'Comandos disponibles:',
        '  whoami          quién soy, en una línea',
        '  skills          habilidades por áreas',
        '  experiencia     dónde he trabajado',
        '  formacion       estudios',
        '  certs           certificaciones',
        '  intereses       en qué quiero especializarme',
        '  contacto        teléfono y correo',
        '  neofetch        resumen con estilo',
        '  nmap            escaneo de puertos (simulado)',
        '  ls / cat <f>    explorar los archivos del CV',
        '  theme           cambiar claro / oscuro',
        '  clear           limpiar la pantalla',
        '',
        'También puedes escribir una pregunta normal, por ejemplo:',
        '  ¿Sabes Python?   ¿Qué buscas?   ¿Por qué debería contratarte?'
      ]);
    },
    whoami: function () { linea(CV.nombre + ' · ' + CV.rol + '. ' + CV.objetivo); },
    skills: function () {
      Object.keys(CV.habilidades).forEach(function (grupo) {
        linea(grupo + ':', 'term-ok');
        linea('  ' + lista(CV.habilidades[grupo]));
      });
      linea('Especialización: ' + lista(CV.intereses), 'term-warn');
    },
    experiencia: function () {
      CV.experiencia.forEach(function (e) {
        linea(e.puesto + ' — ' + e.empresa, 'term-ok');
        linea('  ' + e.detalle);
      });
    },
    formacion: function () {
      CV.formacion.forEach(function (f) { linea(f.titulo, 'term-ok'); linea('  ' + f.centro + ' · ' + f.fechas); });
    },
    certs: function () {
      CV.certificaciones.forEach(function (c) { linea('✔ ' + c.nombre + ' · ' + c.entidad + ' · ' + c.fecha, 'term-ok'); });
      linea('Los certificados están enlazados en la sección Certificaciones.', 'term-dim');
    },
    intereses: function () {
      linea('Quiero especializarme en ' + lista(CV.intereses, ' y ') + '.', 'term-warn');
      linea('Es lo que más me interesa de la informática: por eso tengo las certificaciones de Cisco y por eso este CV tiene un laboratorio de ciberseguridad (sección Laboratorio).');
    },
    contacto: function () {
      lineaHTML(['Teléfono: ', enlace(CV.telefonoHref, CV.telefono)]);
      lineaHTML(['Correo:   ', enlace('mailto:' + CV.email, CV.email)]);
      linea('Ubicación: ' + CV.ubicacion);
    },
    neofetch: function () {
      imprimirBloque([
        '   ______  _____    ' + CV.nombre,
        '  / ____/ / ___/    ----------------------------',
        ' / /      \\__ \\     Rol: ' + CV.rol,
        '/ /___   ___/ /     OS: Linux y Windows, sin preferencias',
        '\\____/  /____/      Shell: bash',
        '                    Lenguajes: Java, Kotlin, Python, JS, Dart',
        '                    BD: MariaDB, MongoDB',
        '                    Foco: ' + lista(CV.intereses, ' + '),
        '                    Uptime: desde 2023 en la informática',
        '                    Estado: disponible para prácticas'
      ]);
    },
    nmap: function () {
      imprimirBloque([
        'Starting Nmap (simulación) at ' + new Date().toLocaleString('es-ES'),
        'Nmap scan report for carlos.cv (127.0.0.1)',
        'Host is up (0.00042s latency).',
        '',
        'PORT      STATE  SERVICE     VERSION',
        '22/tcp    open   ssh         Aprende rápido 2.0',
        '80/tcp    open   http        HTML, CSS y JavaScript',
        '443/tcp   open   https       Ciberseguridad (Cisco)',
        '3306/tcp  open   mariadb     MariaDB',
        '27017/tcp open   mongodb     MongoDB',
        '5000/tcp  open   python      Python',
        '8080/tcp  open   java        Java, JavaFX, Kotlin, Flutter',
        '',
        'Nmap done: 1 host up, 7 puertos abiertos. Ningún equipo real ha sido escaneado.'
      ]);
    },
    ls: function () { linea('perfil.txt  habilidades.txt  experiencia.txt  formacion.txt  certificaciones.txt  intereses.txt  contacto.txt'); },
    cat: function (args) {
      var mapa = { 'perfil.txt': 'whoami', 'habilidades.txt': 'skills', 'experiencia.txt': 'experiencia', 'formacion.txt': 'formacion', 'certificaciones.txt': 'certs', 'intereses.txt': 'intereses', 'contacto.txt': 'contacto' };
      var f = args[0];
      if (!f) return linea('cat: indica un archivo. Prueba: ls', 'term-err');
      if (!mapa[f]) return linea('cat: ' + f + ': No existe el archivo', 'term-err');
      comandos[mapa[f]]([]);
    },
    pwd: function () { linea('/home/carlos/curriculum'); },
    uname: function () { linea('Linux carlos-cv 6.x #1 SMP · también arranca en Windows'); },
    date: function () { linea(new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' })); },
    echo: function (args) { linea(args.join(' ')); },
    history: function () { historial.forEach(function (h, i) { linea('  ' + (i + 1) + '  ' + h, 'term-dim'); }); },
    theme: function () { if (botonTema) botonTema.click(); linea('Tema cambiado a ' + (temaActual() === 'dark' ? 'oscuro' : 'claro') + '.', 'term-dim'); },
    clear: function () { salida.textContent = ''; },
    sudo: function () { linea('carlos no está en el archivo sudoers... todavía. Dale las prácticas y lo hablamos.', 'term-warn'); },
    exit: function () { linea('No hay escape: el CV sigue aquí. Pero gracias por probarlo.', 'term-dim'); },
    man: function () { linea('¿Manual? Pregunta en lenguaje natural, que para eso está el asistente. O usa help.', 'term-dim'); },
    hola: function () { linea('¡Hola! Soy el asistente del CV de Carlos. Pregúntame lo que quieras o escribe help.'); }
  };
  comandos.habilidades = comandos.skills;
  comandos.experience = comandos.experiencia;
  comandos.education = comandos.formacion;
  comandos.contact = comandos.contacto;
  comandos.certificaciones = comandos.certs;
  comandos['?'] = comandos.help;

  /* Asistente: reglas por palabras clave (sin red, sin modelos externos). */
  var reglas = [
    {
      claves: ['por que', 'contratar', 'contratarte', 'elegirte', 'por qué'], respuesta: function () {
        linea('Tres razones: ', 'term-ok');
        linea('1. Vengo del hardware y las redes y he pasado al desarrollo, así que entiendo el sistema entero, del cable al código.');
        linea('2. Soy muy trabajador, entusiasta y muy cooperativo: aprendo rápido y no dejo al equipo colgado.');
        linea('3. Busco quedarme: no quiero unas prácticas de paso, quiero una empresa en la que crecer.');
      }
    },
    { claves: ['python'], respuesta: 'Sí. Python es uno de mis lenguajes y el que más uso para scripts y para acercarme a la inteligencia artificial.' },
    { claves: ['java', 'javafx'], respuesta: 'Sí. Java es el lenguaje principal del ciclo de DAM; también hago interfaces de escritorio con JavaFX.' },
    { claves: ['kotlin', 'android'], respuesta: 'Sí. Programo en Kotlin, sobre todo orientado a desarrollo Android.' },
    { claves: ['flutter', 'dart', 'movil', 'móvil', 'app'], respuesta: 'Sí. Desarrollo apps multiplataforma con Flutter (Dart), además de Kotlin para Android.' },
    { claves: ['javascript', 'js', 'html', 'css', 'web', 'frontend', 'front-end'], respuesta: 'Sí. HTML, CSS y JavaScript: he desarrollado sitios reales en Comunitega (por ejemplo, centroopticoalhazen.com) y este CV está hecho a mano con ellos.' },
    { claves: ['wordpress', 'seo'], respuesta: 'Sí. En Comunitega desarrollé sitios en WordPress con optimización de rendimiento y SEO, plugins y base de datos.' },
    { claves: ['bash', 'script', 'shell', 'terminal', 'consola'], respuesta: 'Sí. Hago scripting en Bash para automatizar tareas en Linux. Esta terminal es un guiño a eso.' },
    { claves: ['mariadb', 'mysql', 'sql', 'base de datos', 'bases de datos', 'bbdd'], respuesta: 'Sí. Trabajo con MariaDB (relacional) y MongoDB (documental).' },
    { claves: ['mongo', 'nosql'], respuesta: 'Sí. Uso MongoDB como base de datos documental, además de MariaDB.' },
    { claves: ['linux', 'ubuntu', 'debian'], respuesta: 'Sí. Me desenvuelvo bien en Linux (y en Windows). Uso la terminal a diario y hago scripting en Bash.' },
    { claves: ['windows', 'microsoft'], respuesta: 'Sí. Me manejo igual de bien en Windows que en Linux: instalación, administración y resolución de problemas.' },
    { claves: ['ia', 'inteligencia artificial', 'machine learning', 'ml', 'deep learning', 'llm', 'chatgpt'], respuesta: 'La inteligencia artificial es uno de los dos campos en los que quiero especializarme (el otro es la ciberseguridad). Si vuestra empresa trabaja con IA, es justo donde más me gustaría aprender.' },
    { claves: ['ciberseguridad', 'seguridad', 'hacking', 'pentest', 'cyber', 'cisco'], respuesta: 'La ciberseguridad es uno de mis dos focos (con la IA). Tengo las certificaciones de Cisco «Defensa de la Red» e «Introducción a la Ciberseguridad», y en la sección Laboratorio puedes probar demos que he programado.' },
    { claves: ['red', 'redes', 'rj45', 'crimpar', 'cable', 'router', 'switch'], respuesta: 'Sí. Soy técnico en Sistemas Microinformáticos y Redes: redes locales, configuración de equipos y crimpado de cables RJ45.' },
    { claves: ['hardware', 'montar', 'desmontar', 'reparar', 'reparacion', 'equipos', 'ordenador', 'pc'], respuesta: 'Sí. Monto y desmonto equipos, diagnostico averías y hago tareas de reparación. Es de donde vengo antes de pasar al desarrollo.' },
    { claves: ['experiencia', 'trabajado', 'trabajo', 'empresa'], respuesta: function () { comandos.experiencia([]); } },
    { claves: ['estudias', 'estudios', 'formacion', 'ciclo', 'dam', 'smr', 'grado', 'instituto'], respuesta: function () { comandos.formacion([]); } },
    { claves: ['certific', 'titulo', 'títulos'], respuesta: function () { comandos.certs([]); } },
    { claves: ['practicas', 'buscas', 'objetivo', 'quieres', 'disponib', 'cuando', 'incorpor'], respuesta: 'Busco prácticas de 2.º curso de DAM, con la intención de quedarme en la empresa después. Disponibilidad inmediata para hablar.' },
    { claves: ['ingles', 'english', 'idioma'], respuesta: 'Español nativo e inglés nivel B1: leo documentación técnica sin problema.' },
    { claves: ['donde vives', 'donde estas', 'ubicacion', 'ciudad', 'madrid', 'fuenlabrada', 'presencial', 'remoto'], respuesta: 'Vivo en Fuenlabrada (Madrid). Presencial en la Comunidad de Madrid o remoto, sin problema.' },
    { claves: ['telefono', 'correo', 'email', 'contacto', 'llamar', 'escribir', 'hablar'], respuesta: function () { comandos.contacto([]); } },
    { claves: ['como eres', 'cualidades', 'defectos', 'virtudes', 'personalidad', 'equipo'], respuesta: 'Muy trabajador, entusiasta y muy cooperativo. También responsable, perfeccionista, amable, extrovertido y respetuoso. Me gusta trabajar en equipo y preguntar cuando hace falta.' },
    { claves: ['aficion', 'hobby', 'tiempo libre', 'gusta'], respuesta: 'Fuera del trabajo: deporte, cine, videojuegos y, cómo no, tecnología.' },
    { claves: ['quien eres', 'quien es', 'presentate', 'preséntate', 'nombre'], respuesta: function () { comandos.whoami([]); } },
    { claves: ['gracias'], respuesta: 'A ti por probar el CV. Si te encaja, llámame o escríbeme: comando contacto.' },
    { claves: ['hola', 'buenas', 'hey'], respuesta: function () { comandos.hola([]); } }
  ];

  function responder(pregunta) {
    var q = normalizar(pregunta);
    for (var i = 0; i < reglas.length; i++) {
      if (contiene(' ' + q + ' ', reglas[i].claves.map(function (c) { return c.length > 3 ? c : ' ' + c + ' '; }))) {
        var r = reglas[i].respuesta;
        if (typeof r === 'function') r(); else linea(r);
        return;
      }
    }
    lineaHTML(['No tengo una respuesta preparada para eso. Prueba ', enlaceCmd('help'), ' o pregúntaselo a Carlos: ', enlace('mailto:' + CV.email, CV.email), '.'], 'term-dim');
  }
  function enlaceCmd(cmd) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'term-enlace-cmd'; b.textContent = cmd;
    b.addEventListener('click', function () { ejecutar(cmd); });
    return b;
  }

  function ejecutar(entrada) {
    var texto = String(entrada).trim();
    if (!texto) return;
    ecoComando(texto);
    historial.push(texto); posHistorial = historial.length;
    var partes = texto.split(/\s+/);
    var nombre = normalizar(partes[0]);
    if (Object.prototype.hasOwnProperty.call(comandos, nombre) && !/\?/.test(texto)) {
      comandos[nombre](partes.slice(1));
    } else {
      responder(texto);
    }
    bajar();
  }

  if (salida && formTerm && inputTerm) {
    salida.textContent = '';
    linea('Bienvenido al CV interactivo de Carlos Santos Jiménez.', 'term-ok');
    lineaHTML(['Escribe ', enlaceCmd('help'), ' para ver los comandos o hazme una pregunta como en una entrevista.'], 'term-dim');
    linea('', 'term-dim');

    formTerm.addEventListener('submit', function (ev) {
      ev.preventDefault();
      ejecutar(inputTerm.value);
      inputTerm.value = '';
    });
    inputTerm.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowUp') {
        if (!historial.length) return;
        ev.preventDefault();
        posHistorial = Math.max(0, posHistorial - 1);
        inputTerm.value = historial[posHistorial] || '';
      } else if (ev.key === 'ArrowDown') {
        if (!historial.length) return;
        ev.preventDefault();
        posHistorial = Math.min(historial.length, posHistorial + 1);
        inputTerm.value = historial[posHistorial] || '';
      } else if (ev.key === 'Tab' && inputTerm.value) {
        var pref = normalizar(inputTerm.value);
        var cands = Object.keys(comandos).filter(function (c) { return c.indexOf(pref) === 0; });
        if (cands.length === 1) { ev.preventDefault(); inputTerm.value = cands[0] + ' '; }
        else if (cands.length > 1) { ev.preventDefault(); linea(cands.join('  '), 'term-dim'); bajar(); }
      } else if (ev.key === 'l' && ev.ctrlKey) {
        ev.preventDefault(); comandos.clear();
      }
    });
    $$('.chip-boton[data-cmd]').forEach(function (b) {
      b.addEventListener('click', function () {
        ejecutar(b.getAttribute('data-cmd'));
        inputTerm.focus({ preventScroll: true });
      });
    });
    // Un toque en cualquier parte de la terminal lleva el foco al prompt.
    $('#term').addEventListener('click', function (ev) {
      if (ev.target.closest('a, button')) return;
      if (window.getSelection && String(window.getSelection())) return;
      inputTerm.focus({ preventScroll: true });
    });
  }

  /* 6. Laboratorio de ciberseguridad --------------------------------------- */

  /* 6a. Fortaleza de contraseñas */
  var passIn = $('#lab-pass');
  if (passIn) {
    var passVer = $('#lab-pass-ver');
    var comunes = ['123456', '123456789', '12345678', 'password', 'contraseña', 'contrasena', 'qwerty', '111111', '12345', 'abc123', 'iloveyou', 'admin', 'welcome', 'password1', '000000', '1234567', 'letmein', 'hola123', 'carlos', 'madrid', 'barcelona', 'realmadrid'];
    var TASA = 1e10; // intentos por segundo (GPU moderna contra un hash rápido)

    function fmtTiempo(seg) {
      if (seg < 1) return 'instantáneo';
      var u = [['siglos', 3153600000], ['años', 31536000], ['días', 86400], ['horas', 3600], ['minutos', 60], ['segundos', 1]];
      if (seg > 4.3e17) return 'más que la edad del universo';
      for (var i = 0; i < u.length; i++) if (seg >= u[i][1]) { var v = seg / u[i][1]; return (v >= 100 ? Math.round(v).toLocaleString('es-ES') : v.toFixed(1).replace('.', ',')) + ' ' + u[i][0]; }
      return 'instantáneo';
    }
    var sugerencia = $('#lab-pass-sug');
    var sugValor = $('#lab-pass-sug-valor');
    var requisitos = $$('#lab-pass-req li');

    // Genera una contraseña aleatoria de 16 caracteres con los cuatro tipos garantizados.
    function generarPass() {
      var grupos = ['abcdefghijkmnopqrstuvwxyz', 'ABCDEFGHJKLMNPQRSTUVWXYZ', '23456789', '!#$%&*+-=?@_'];
      var todos = grupos.join('');
      var azar = function (n) {
        if (window.crypto && crypto.getRandomValues) { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; }
        return Math.floor(Math.random() * n);
      };
      var chars = grupos.map(function (g) { return g[azar(g.length)]; });
      while (chars.length < 16) chars.push(todos[azar(todos.length)]);
      for (var i = chars.length - 1; i > 0; i--) { var k = azar(i + 1); var t = chars[i]; chars[i] = chars[k]; chars[k] = t; }
      return chars.join('');
    }
    function mostrarSugerencia(mostrar) {
      if (!sugerencia) return;
      if (mostrar && sugerencia.hidden) sugValor.textContent = generarPass();
      sugerencia.hidden = !mostrar;
    }
    function analizarPass() {
      var v = passIn.value;
      var len = v.length;
      var conj = [];
      var tam = 0;
      var cumple = { minus: /[a-z]/.test(v), mayus: /[A-Z]/.test(v), num: /[0-9]/.test(v), simb: /[^a-zA-Z0-9]/.test(v), len: len >= 12 };
      requisitos.forEach(function (li) { li.setAttribute('data-ok', String(!!cumple[li.getAttribute('data-req')])); });
      if (cumple.minus) { tam += 26; conj.push('minúsculas'); }
      if (cumple.mayus) { tam += 26; conj.push('mayúsculas'); }
      if (cumple.num) { tam += 10; conj.push('dígitos'); }
      if (cumple.simb) { tam += 33; conj.push('símbolos'); }
      var bits = len ? len * Math.log2(tam || 1) : 0;
      var esComun = comunes.indexOf(normalizar(v)) !== -1;
      var repetida = len >= 4 && /^(.)\1+$/.test(v);
      var secuencia = /^(0123|1234|2345|3456|4567|5678|6789|abcd|qwer|asdf)/i.test(v);
      if (esComun || repetida || secuencia) bits = Math.min(bits, 10);
      var segundos = Math.pow(2, bits) / 2 / TASA;
      var nivel = bits < 28 ? 1 : bits < 50 ? 2 : bits < 80 ? 3 : 4;
      if (!len) nivel = 0;

      $('#lab-pass-len').textContent = String(len);
      $('#lab-pass-set').textContent = conj.length ? conj.join(' + ') + ' (' + tam + ')' : '—';
      $('#lab-pass-bits').textContent = Math.round(bits) + ' bits';
      $('#lab-pass-tiempo').textContent = len ? fmtTiempo(segundos) : '—';
      var medidor = $('#lab-pass-out .medidor');
      medidor.setAttribute('aria-valuenow', String(Math.min(128, Math.round(bits))));
      medidor.setAttribute('aria-valuetext', Math.round(bits) + ' bits');
      medidor.setAttribute('data-nivel', String(nivel));
      $('#lab-pass-barra').style.transform = 'scaleX(' + Math.min(1, bits / 128) + ')';

      var ver = $('#lab-pass-veredicto');
      var textos = {
        0: ['', 'Escribe algo para ver el análisis.'],
        1: ['mal', esComun ? 'Está en todas las listas de contraseñas filtradas: se rompe al instante.' : 'Muy débil: un ataque de fuerza bruta la rompe casi al instante.'],
        2: ['regular', 'Mejorable: añade longitud y mezcla tipos de caracteres. La longitud pesa más que los símbolos.'],
        3: ['bien', 'Buena: resiste fuerza bruta razonablemente. Úsala solo en un sitio y con un gestor de contraseñas.'],
        4: ['bien', 'Excelente: a este ritmo de ataque no se rompe en una vida humana. Una frase larga es la mejor contraseña.']
      };
      ver.setAttribute('data-tono', textos[nivel][0]);
      ver.textContent = textos[nivel][1];
      mostrarSugerencia(nivel === 1 || nivel === 2);
    }
    if (sugerencia) {
      $('#lab-pass-usar').addEventListener('click', function () {
        passIn.value = sugValor.textContent;
        if (passIn.type === 'password') passVer.click();
        analizarPass();
        passIn.focus({ preventScroll: true });
      });
      $('#lab-pass-otra').addEventListener('click', function () { sugValor.textContent = generarPass(); });
      $('#lab-pass-copiar').addEventListener('click', function () {
        var b = this, texto = sugValor.textContent;
        var hecho = function () { b.textContent = 'Copiada'; setTimeout(function () { b.textContent = 'Copiar'; }, 1500); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(hecho, function () { b.textContent = 'No se pudo copiar'; });
        else { var sel = window.getSelection(), r = document.createRange(); r.selectNodeContents(sugValor); sel.removeAllRanges(); sel.addRange(r); b.textContent = 'Seleccionada: Ctrl+C'; }
      });
    }
    passIn.addEventListener('input', analizarPass);
    $('#lab-pass-form').addEventListener('submit', function (ev) { ev.preventDefault(); });
    passVer.addEventListener('click', function () {
      var mostrar = passIn.type === 'password';
      passIn.type = mostrar ? 'text' : 'password';
      passVer.setAttribute('aria-pressed', String(mostrar));
      passVer.setAttribute('aria-label', mostrar ? 'Ocultar contraseña' : 'Mostrar contraseña');
    });
  }

  /* 6b. Hash y efecto avalancha (Web Crypto) */
  var hashIn = $('#lab-hash-in');
  if (hashIn) {
    var hashAlg = $('#lab-hash-alg');
    var hashOut = $('#lab-hash-out');
    var hashNota = $('#lab-hash-nota');
    var anterior = { alg: null, hex: null, texto: null };
    var temporizador = null;

    function aHex(buf) {
      var bytes = new Uint8Array(buf), s = '';
      for (var i = 0; i < bytes.length; i++) s += (bytes[i] < 16 ? '0' : '') + bytes[i].toString(16);
      return s;
    }
    function bitsDistintos(a, b) {
      var n = 0;
      for (var i = 0; i < a.length; i++) {
        var x = parseInt(a[i], 16) ^ parseInt(b[i], 16);
        while (x) { n += x & 1; x >>= 1; }
      }
      return n;
    }
    function pintarHash(hex, previo) {
      hashOut.textContent = '';
      if (!previo || previo.length !== hex.length) { hashOut.textContent = hex; return; }
      var frag = document.createDocumentFragment(), buf = '', dif = false;
      for (var i = 0; i <= hex.length; i++) {
        var esDif = i < hex.length && hex[i] !== previo[i];
        if (i === hex.length || esDif !== dif) {
          if (buf) { if (dif) { var s = document.createElement('span'); s.className = 'dif'; s.textContent = buf; frag.appendChild(s); } else frag.appendChild(document.createTextNode(buf)); }
          buf = ''; dif = esDif;
        }
        if (i < hex.length) buf += hex[i];
      }
      hashOut.appendChild(frag);
    }
    function calcularHash() {
      var texto = hashIn.value, alg = hashAlg.value;
      if (!(window.crypto && crypto.subtle)) { hashOut.textContent = 'Tu navegador no expone Web Crypto (hace falta HTTPS).'; return; }
      crypto.subtle.digest(alg, new TextEncoder().encode(texto)).then(function (buf) {
        var hex = aHex(buf);
        var mismoAlg = anterior.alg === alg && anterior.hex;
        pintarHash(hex, mismoAlg ? anterior.hex : null);
        var nota = alg + ' · ' + (hex.length * 4) + ' bits · ' + hex.length + ' caracteres hexadecimales.';
        if (mismoAlg && anterior.texto !== texto) {
          var cambiados = bitsDistintos(hex, anterior.hex);
          nota += ' Respecto al texto anterior han cambiado ' + cambiados + ' de ' + (hex.length * 4) + ' bits (' + Math.round(cambiados / (hex.length * 4) * 100) + ' %): eso es el efecto avalancha.';
        }
        if (alg === 'SHA-1') nota += ' SHA-1 está roto desde 2017 (colisiones demostradas): no debe usarse para firmas ni contraseñas.';
        hashNota.textContent = nota;
        anterior = { alg: alg, hex: hex, texto: texto };
      }).catch(function () { hashOut.textContent = 'No se ha podido calcular el hash.'; });
    }
    hashIn.addEventListener('input', function () { clearTimeout(temporizador); temporizador = setTimeout(calcularHash, 120); });
    hashAlg.addEventListener('change', function () { anterior = { alg: null, hex: null, texto: null }; calcularHash(); });
    $('#lab-hash-form').addEventListener('submit', function (ev) { ev.preventDefault(); calcularHash(); });
    calcularHash();
  }

  /* 6c. Escaneo de puertos simulado */
  var scanBtn = $('#lab-scan-btn');
  if (scanBtn) {
    var tabla = $('#lab-scan-tabla');
    var cuerpo = tabla.querySelector('tbody');
    var scanNota = $('#lab-scan-nota');
    var progreso = $('#lab-scan-progreso');
    var puertos = [
      { p: 21, s: 'ftp', e: 'closed', n: 'Cerrado. Bien: FTP va en texto plano.' },
      { p: 22, s: 'ssh', e: 'open', n: 'Correcto. Limitar a claves y desactivar el acceso de root.' },
      { p: 23, s: 'telnet', e: 'open', r: true, n: 'Riesgo: credenciales en texto plano. Sustituir por SSH.' },
      { p: 80, s: 'http', e: 'open', n: 'Redirigir todo a 443.' },
      { p: 443, s: 'https', e: 'open', n: 'Correcto. Comprobar TLS 1.2+ y certificado vigente.' },
      { p: 445, s: 'smb', e: 'closed', n: 'Cerrado. Bien: no exponer SMB a Internet.' },
      { p: 3306, s: 'mariadb', e: 'open', r: true, n: 'Riesgo: base de datos expuesta. Restringir a localhost o VPN.' },
      { p: 3389, s: 'rdp', e: 'filtered', n: 'Filtrado por el cortafuegos.' },
      { p: 8080, s: 'http-alt', e: 'closed', n: 'Cerrado.' },
      { p: 27017, s: 'mongodb', e: 'open', r: true, n: 'Riesgo: MongoDB sin autenticación por defecto. Activar auth y cerrar al exterior.' }
    ];
    var etiquetaEstado = { open: 'abierto', closed: 'cerrado', filtered: 'filtrado' };
    var escaneando = false;

    function fila(d) {
      var tr = document.createElement('tr');
      tr.className = 'fila-nueva';
      var c1 = document.createElement('td'); c1.textContent = d.p + '/tcp';
      var c2 = document.createElement('td'); c2.textContent = d.s;
      var c3 = document.createElement('td');
      var est = document.createElement('span'); est.className = 'estado ' + (d.r ? 'estado-riesgo' : d.e === 'open' ? 'estado-open' : 'estado-closed'); est.textContent = etiquetaEstado[d.e] + (d.r ? ' · riesgo' : '');
      c3.appendChild(est);
      var c4 = document.createElement('td'); c4.textContent = d.n;
      tr.appendChild(c1); tr.appendChild(c2); tr.appendChild(c3); tr.appendChild(c4);
      return tr;
    }
    scanBtn.addEventListener('click', function () {
      if (escaneando) return;
      escaneando = true;
      scanBtn.disabled = true;
      scanBtn.setAttribute('aria-busy', 'true');
      cuerpo.textContent = '';
      tabla.hidden = false;
      scanNota.removeAttribute('data-tono');
      scanNota.textContent = 'Escaneando lab.carlos.local (simulación: no se contacta con ningún equipo real)…';
      var paso = reduceMotion.matches ? 0 : 170;
      progreso.style.setProperty('--duracion-escaneo', (paso * puertos.length) + 'ms');
      progreso.removeAttribute('data-activo');
      void progreso.offsetWidth; // reinicia la transicion del barrido
      progreso.setAttribute('data-activo', '');
      puertos.forEach(function (d, i) {
        setTimeout(function () {
          cuerpo.appendChild(fila(d));
          if (i === puertos.length - 1) {
            var abiertos = puertos.filter(function (x) { return x.e === 'open'; }).length;
            var riesgos = puertos.filter(function (x) { return x.r; });
            scanNota.setAttribute('data-tono', 'mal');
            scanNota.textContent = puertos.length + ' puertos analizados: ' + abiertos + ' abiertos, ' + riesgos.length + ' con riesgo. Recomendación: cerrar 23/telnet, y restringir 3306 y 27017 a la red interna con autenticación. Simulación sin tráfico real.';
            scanBtn.disabled = false;
            scanBtn.removeAttribute('aria-busy');
            escaneando = false;
            setTimeout(function () { progreso.removeAttribute('data-activo'); }, 600);
          }
        }, paso * i);
      });
    });
  }
})();
