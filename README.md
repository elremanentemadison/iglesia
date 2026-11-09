# Iglesia El Remanente — Sitio Web Oficial

Sitio web oficial para la **Iglesia El Remanente** en Madison, Wisconsin (5701 Raymond Rd).
Desarrollado con HTML5 semántico, CSS3 moderno (vanilla, sin frameworks pesados ni dependencias externas innecesarias) y JavaScript puro para el versículo semanal.

---

## 📁 Estructura del Proyecto

```
el-remanente-madison/
├── index.html              # Página principal (Inicio, Horarios, En vivo, Ubicación, Pastores, Contacto)
├── galeria.html            # Galería de fotos con efecto B&W -> Color en hover
├── index.css               # Hoja de estilo global unificada
├── js/
│   └── quotes.js           # Generador automático del versículo semanal (52 semanas)
└── sources/
    ├── favicon.png         # Ícono del sitio
    ├── El Remanente_ Emblema Dorado de Oración.png # Logo de la iglesia
    ├── grupo-de-adoracion.jpg # Imagen de cabecera / fondo
    └── galeria/            # Carpeta para colocar tus fotografías de la iglesia
        ├── foto-1.jpg
        ├── foto-2.jpg
        └── ...
```

---

## ✨ Características Implementadas

1. **Efecto de Galería Fotográfica**:
   - **En escritorio**: Las imágenes inician con filtro en escala de grises (blanco y negro). Al pasar el cursor por encima (`hover`), cobran vida con una suave transición a sus colores originales y un sutil zoom (`scale(1.03)`).
   - **Márgenes mínimos**: Separación visual limpia (`gap: 8px` en desktop, `gap: 6px` en móvil) optimizada para una presentación profesional tipo mosaico.
   - **Compatibilidad móvil**: En dispositivos táctiles, las imágenes se adaptan automáticamente a dos columnas sin desbordamiento.

2. **Generador de Versículo Semanal (`js/quotes.js`)**:
   - 52 citas bíblicas inspiradoras organizadas por la semana del año (ISO Week).
   - Todos los visitantes ven la misma cita durante la misma semana sin necesidad de bases de datos.
   - Completamente editable en texto plano dentro de `js/quotes.js`.

3. **Optimización y Limpieza de Código**:
   - Código 100% semántico (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<figure>`, `<footer>`).
   - Contenedor responsivo con relación de aspecto 16:9 para la transmisión de Facebook, evitando que se desborde o cause scroll horizontal en pantallas móviles.
   - Enlace `mailto:` corregido y visible para contacto directo.
   - Meta etiquetas consolidadas y datos estructurados Schema.org (`Church`) para SEO local en Madison, WI.

---

## 📷 Cómo agregar nuevas fotos a la Galería

1. Guarda tus fotos en la carpeta `sources/galeria/` (por ejemplo: `foto-1.jpg`, `evento-bautismo.jpg`).
2. Abre `galeria.html` y dentro de `<div class="gallery-grid">` agrega:
   ```html
   <figure class="gallery-item">
     <img src="sources/galeria/tu-foto.jpg" alt="Descripción de la foto" loading="lazy" />
     <figcaption class="gallery-caption">Título o Fecha</figcaption>
   </figure>
   ```
