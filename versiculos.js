
const versiculos = [
    {
        texto: "Toda la Escritura es inspirada por Dios y útil para enseñar, para reprender, para corregir y para instruir en la justicia, a fin de que el siervo de Dios esté enteramente capacitado para toda buena obra.",
        referencia: "2 Timoteo 3:16-17",
        enlace: "https://dailyverses.net/es/2-timoteo/3/16-17"
    },

    {
        texto: "JEHOVÁ es mi pastor; nada me faltará.",
        referencia: "Salmos 23:1",
        enlace: "https://www.bible.com/es/bible/1718/PSA.23.1.RVR09"
    },

    {
        texto: "Todo lo puedo en Cristo que me fortalece.",
        referencia: "Filipenses 4:13",
        enlace: "https://www.sbp.org.pe/biblia/RVR09/PHP.4"
    },

    {
        texto: "Fíate de Jehová de todo tu corazón, y no estribes en tu prudencia.",
        referencia: "Proverbios 3:5",
        enlace: "https://bible.4disciples.com/es/Proverbs/3/5"
    }
];
function cambiarVersiculo() {
    const hoy = new Date();

    // Encontrar el lunes de esta semana
    const lunes = new Date(hoy);
    lunes.setDate(hoy.getDate() - ((hoy.getDay() + 6) % 7));

    // Calcular la semana y seleccionar un versiculo
    const semana = Math.floor(
        Date.UTC(lunes.getFullYear(), lunes.getMonth(), lunes.getDate()) / 604800000
    );

    const versiculo = versiculos[semana % versiculos.length];

    // Mostrar versiculo en HTML
    document.getElementById("versiculo").textContent = versiculo.texto;
    document.getElementById("referencia").textContent = versiculo.referencia;
    document.getElementById("referencia").href = versiculo.enlace;
}

// Ejecutar al cargar la pagina
cambiarVersiculo();

// Revisar cada minuto
setInterval(cambiarVersiculo, 60000);