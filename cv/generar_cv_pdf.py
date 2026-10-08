# -*- coding: utf-8 -*-
"""Genera el currículum de una página en PDF (cv/Carlos_Santos_Jimenez_CV.pdf).

Uso:  python cv/generar_cv_pdf.py
Requisitos: pip install reportlab pillow
Los datos están aquí mismo para que sea fácil actualizarlos; la web (index.html) es la versión extendida.
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(AQUI)
SALIDA = os.path.join(AQUI, "Carlos_Santos_Jimenez_CV.pdf")
FOTO = os.path.join(RAIZ, "foto.jpg")
QR = os.path.join(AQUI, "qr.png")

# Paleta del CV web
TEXTO = HexColor("#0f172a")
TEXTO2 = HexColor("#3f4b5e")
TEXTO3 = HexColor("#5b6778")
ACENTO = HexColor("#0e7a6f")
ACENTO_SUAVE = HexColor("#e7f2f0")
LINEA = HexColor("#dfe4ea")

# ---------- Datos ----------
NOMBRE = "Carlos Santos Jiménez"
TITULO = "Técnico informático en SMR · Estudiante de 2.º de DAM"
LEMA = ("Busco <b>prácticas en una empresa donde quedarme</b>. "
        "Me estoy especializando en <b><font color='#0e7a6f'>inteligencia artificial</font></b> "
        "y <b><font color='#0e7a6f'>ciberseguridad</font></b>.")
CONTACTO = [("Teléfono", "644 061 650"), ("Correo", "santosjimenezcarlos4@gmail.com"),
            ("Ubicación", "Fuenlabrada (28942), Madrid"), ("Web", "curriculumcv.github.io")]

PERFIL = [
    "Técnico en Sistemas Microinformáticos y Redes y estudiante de segundo curso de Desarrollo de "
    "Aplicaciones Multiplataforma. Busco una empresa donde hacer las prácticas del ciclo y quedarme a crecer después.",
    "Lo que más me interesa es la <b>inteligencia artificial</b> y la <b>ciberseguridad</b>, los dos campos en los que "
    "quiero especializarme; por eso me he certificado con Cisco en defensa de la red y ciberseguridad.",
    "Vengo del hardware y las redes (montar equipos, crimpar cables, reparar lo que se rompe) y he pasado al desarrollo: "
    "Java, Kotlin, Flutter, Python, web y bases de datos. Me muevo igual de bien en Linux que en Windows.",
    "Soy <b>muy trabajador, entusiasta y muy cooperativo</b>: aprendo rápido, pregunto cuando hace falta y "
    "me gusta que el equipo acabe el día mejor de lo que lo empezó.",
]

EXPERIENCIA = [
    ("Desarrollador de páginas web", "Comunitega, S.L.",
     "Sitios web en WordPress para clientes reales: maquetación responsiva, optimización de rendimiento y SEO, "
     "integración de plugins y base de datos. Proyecto entregado: centroopticoalhazen.com"),
    ("Manipulador de alimentos", "Delfín Ultracongelados",
     "Cadena de producción con ritmo y normas estrictas de higiene y seguridad: corte y preparación de producto, "
     "aprovechamiento de materia prima y manejo de palés con transpaleta."),
]

FORMACION = [
    ("Grado superior en Desarrollo de Aplicaciones Multiplataforma", "IES Laguna de Joatzel · 2025 – actualidad (2.º curso)",
     "Java y Kotlin, Flutter, JavaFX, bases de datos relacionales y documentales, sistemas y despliegue."),
    ("Grado medio en Sistemas Microinformáticos y Redes", "IES Laguna de Joatzel · 2023 – 2024",
     "Montaje y mantenimiento de equipos, redes locales, Linux y Windows, seguridad informática y servicios en red."),
    ("1.º de Bachillerato científico", "IES Jimena Menéndez Pidal · 2022 – 2023", ""),
    ("Educación Secundaria Obligatoria", "IES Jimena Menéndez Pidal · 2018 – 2022", ""),
]

CERTIFICACIONES = [
    ("Defensa de la Red", "Cisco Networking Academy · feb 2025"),
    ("Introducción a la Ciberseguridad", "Cisco Networking Academy · ene 2025"),
]

HABILIDADES = [
    ("Especialización", ["Inteligencia artificial", "Ciberseguridad"]),
    ("Desarrollo", ["Java", "JavaFX", "Kotlin", "Flutter", "Python", "JavaScript", "HTML", "CSS", "Scripting Bash"]),
    ("Datos", ["MariaDB", "MongoDB"]),
    ("Sistemas y redes", ["Linux", "Windows", "Redes y Cisco", "WordPress", "SEO"]),
    ("Hardware", ["Montaje y desmontaje de equipos", "Crimpado de cables RJ45", "Diagnóstico y reparación"]),
]
IDIOMAS = ["Español · nativo", "Inglés · B1"]
CUALIDADES = ["Muy trabajador", "Entusiasta", "Muy cooperativo", "Responsable", "Perfeccionista", "Respetuoso"]

# ---------- Estilos ----------
F = "Helvetica"
FB = "Helvetica-Bold"
st_body = ParagraphStyle("body", fontName=F, fontSize=9.6, leading=13, textColor=TEXTO2, alignment=TA_LEFT)
st_lema = ParagraphStyle("lema", fontName=F, fontSize=9.8, leading=13, textColor=TEXTO2)
st_item_t = ParagraphStyle("it", fontName=FB, fontSize=10.2, leading=12.5, textColor=TEXTO)
st_item_s = ParagraphStyle("is", fontName=F, fontSize=8.6, leading=11, textColor=TEXTO3)
st_chip = ParagraphStyle("chip", fontName=F, fontSize=7.8, leading=9.5, textColor=TEXTO2)


def parrafo(c, texto, estilo, x, y_top, ancho):
    """Dibuja un párrafo con su borde superior en y_top; devuelve la y inferior."""
    p = Paragraph(texto, estilo)
    w, h = p.wrap(ancho, 1000)
    p.drawOn(c, x, y_top - h)
    return y_top - h


def titulo_seccion(c, texto, x, y, ancho):
    c.setFillColor(TEXTO)
    c.setFont(FB, 8.2)
    c.drawString(x, y, texto.upper())
    c.setStrokeColor(LINEA)
    c.setLineWidth(0.6)
    c.line(x, y - 5, x + ancho, y - 5)
    return y - 16


def chips(c, items, x, y_top, ancho, destacado=False):
    """Fila de píldoras que salta de línea. Devuelve la y inferior."""
    alto = 14
    gap = 3.5
    cx, cy = x, y_top - alto
    fuente = FB if destacado else F
    for it in items:
        w = c.stringWidth(it, fuente, 8.2) + 12
        if cx + w > x + ancho and cx > x:
            cx = x
            cy -= alto + gap
        c.setFillColor(ACENTO_SUAVE if destacado else white)
        c.setStrokeColor(ACENTO if destacado else LINEA)
        c.setLineWidth(0.6)
        c.roundRect(cx, cy, w, alto, alto / 2, stroke=1, fill=1)
        c.setFillColor(ACENTO if destacado else TEXTO2)
        c.setFont(fuente, 8.2)
        c.drawString(cx + 6, cy + 4, it)
        cx += w + gap
    return cy - 2


def construir():
    c = canvas.Canvas(SALIDA, pagesize=A4)
    c.setTitle("Currículum · Carlos Santos Jiménez")
    c.setAuthor(NOMBRE)
    c.setSubject("Técnico informático · Estudiante de DAM · Prácticas")
    W, H = A4
    M = 14 * mm
    y = H - M

    # ---- Cabecera ----
    foto = 26 * mm
    c.saveState()
    p = c.beginPath()
    p.circle(M + foto / 2, y - foto / 2, foto / 2)
    c.clipPath(p, stroke=0)
    c.drawImage(FOTO, M, y - foto, foto, foto, preserveAspectRatio=True, mask="auto")
    c.restoreState()
    c.setStrokeColor(LINEA); c.setLineWidth(0.8)
    c.circle(M + foto / 2, y - foto / 2, foto / 2, stroke=1, fill=0)

    # QR (pequeño, arriba a la derecha) con pie
    qr = 27 * mm
    qx = W - M - qr
    c.drawImage(QR, qx, y - qr, qr, qr, mask="auto")
    c.linkURL("https://curriculumcv.github.io/", (qx, y - qr - 18, qx + qr, y), relative=0)
    c.setFont(F, 6.4); c.setFillColor(TEXTO3)
    c.drawCentredString(qx + qr / 2, y - qr - 8, "Versión web interactiva")
    c.drawCentredString(qx + qr / 2, y - qr - 15, "curriculumcv.github.io")

    tx = M + foto + 7 * mm
    tw = qx - tx - 6 * mm
    c.setFillColor(TEXTO); c.setFont(FB, 22)
    c.drawString(tx, y - 18, NOMBRE)
    c.setFont(F, 10.5); c.setFillColor(TEXTO2)
    c.drawString(tx, y - 33, TITULO)
    yl = parrafo(c, LEMA, st_lema, tx, y - 41, tw)

    # Línea de contacto
    cy = yl - 12
    c.setFont(F, 8.6)
    cx = tx
    for i, (k, v) in enumerate(CONTACTO):
        c.setFillColor(TEXTO3); c.drawString(cx, cy, k + ":")
        cx += c.stringWidth(k + ":", F, 8.6) + 3
        c.setFillColor(TEXTO); c.setFont(FB, 8.6); c.drawString(cx, cy, v)
        cx += c.stringWidth(v, FB, 8.6) + 9
        c.setFont(F, 8.6)
        if i == 1:  # salto a segunda línea tras el correo
            cx = tx; cy -= 11

    y = min(cy, y - qr - 18) - 12
    c.setStrokeColor(ACENTO); c.setLineWidth(1.2)
    c.line(M, y, W - M, y)
    y -= 16

    # ---- Columnas ----
    gap = 8 * mm
    col_izq = 60 * mm
    col_der = W - 2 * M - col_izq - gap
    xi, xd = M, M + col_izq + gap
    yi = yd = y

    # Columna izquierda
    yi = titulo_seccion(c, "Habilidades", xi, yi, col_izq)
    for grupo, items in HABILIDADES:
        c.setFont(FB, 8.2); c.setFillColor(TEXTO3)
        c.drawString(xi, yi - 8, grupo)
        yi = chips(c, items, xi, yi - 12, col_izq, destacado=(grupo == "Especialización")) - 6

    yi -= 14
    yi = titulo_seccion(c, "Idiomas", xi, yi, col_izq)
    yi = chips(c, IDIOMAS, xi, yi + 2, col_izq)

    yi -= 18
    yi = titulo_seccion(c, "Cómo trabajo", xi, yi, col_izq)
    yi = chips(c, CUALIDADES, xi, yi + 2, col_izq)

    yi -= 18
    yi = titulo_seccion(c, "Certificaciones", xi, yi, col_izq)
    for nombre, ent in CERTIFICACIONES:
        yi = parrafo(c, nombre, st_item_t, xi, yi + 2, col_izq)
        yi = parrafo(c, ent, st_item_s, xi, yi, col_izq) - 8

    # Columna derecha
    yd = titulo_seccion(c, "Perfil", xd, yd, col_der)
    for t in PERFIL:
        yd = parrafo(c, t, st_body, xd, yd + 1, col_der) - 5

    yd -= 14
    yd = titulo_seccion(c, "Experiencia", xd, yd, col_der)
    for puesto, empresa, det in EXPERIENCIA:
        yd = parrafo(c, puesto, st_item_t, xd, yd + 2, col_der)
        yd = parrafo(c, empresa, st_item_s, xd, yd, col_der)
        yd = parrafo(c, det, st_body, xd, yd - 1, col_der) - 8

    yd -= 12
    yd = titulo_seccion(c, "Formación", xd, yd, col_der)
    for tit, centro, det in FORMACION:
        yd = parrafo(c, tit, st_item_t, xd, yd + 2, col_der)
        yd = parrafo(c, centro, st_item_s, xd, yd, col_der)
        if det:
            yd = parrafo(c, det, st_body, xd, yd - 1, col_der)
        yd -= 7

    # Pie
    c.setFont(F, 7.4); c.setFillColor(TEXTO3)
    c.drawString(M, M - 6, "Escanea el código QR para la versión web: terminal interactiva, laboratorio de ciberseguridad y enlaces a los certificados.")
    assert yi > M and yd > M, ("No cabe en una página", yi, yd)
    c.showPage()
    c.save()
    print("PDF generado:", SALIDA)


if __name__ == "__main__":
    construir()
