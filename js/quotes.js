/**
 * Iglesia El Remanente - Madison, WI
 * Generador de Cita Bíblica Semanal (Quote of the Week)
 *
 * Selecciona automáticamente una cita bíblica según la semana del año (1-52),
 * garantizando que todos los visitantes vean el mismo mensaje cada semana.
 */

(function () {
  'use strict';

  const BIBLE_QUOTES = [
    { text: "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.", ref: "Mateo 18:20" },
    { text: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", ref: "Salmos 119:105" },
    { text: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" },
    { text: "El Señor es mi pastor; nada me faltará.", ref: "Salmos 23:1" },
    { text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo.", ref: "Josué 1:9" },
    { text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", ref: "Mateo 11:28" },
    { text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.", ref: "Romanos 8:28" },
    { text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.", ref: "Jeremías 29:11" },
    { text: "Confía en Jehová con todo tu corazón, y no te apoyes en tu propia prudencia.", ref: "Proverbios 3:5" },
    { text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", ref: "Salmos 46:1" },
    { text: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón.", ref: "Juan 14:27" },
    { text: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego.", ref: "Filipenses 4:6" },
    { text: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.", ref: "Jeremías 33:3" },
    { text: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida.", ref: "Salmos 27:1" },
    { text: "Mas los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas.", ref: "Isaías 40:31" },
    { text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda.", ref: "Juan 3:16" },
    { text: "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.", ref: "Juan 14:6" },
    { text: "Buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.", ref: "Mateo 6:33" },
    { text: "He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él.", ref: "Apocalipsis 3:20" },
    { text: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece.", ref: "1 Corintios 13:4" },
    { text: "Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.", ref: "Salmos 34:18" },
    { text: "Grande es su fidelidad; nuevas son cada mañana sus misericordias.", ref: "Lamentaciones 3:23" },
    { text: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.", ref: "Proverbios 22:6" },
    { text: "Si Dios es por nosotros, ¿quién contra nosotros?", ref: "Romanos 8:31" },
    { text: "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene de Jehová, que hizo los cielos y la tierra.", ref: "Salmos 121:1-2" },
    { text: "Bienaventurados los de limpio corazón, porque ellos verán a Dios.", ref: "Mateo 5:8" },
    { text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", ref: "Salmos 91:1" },
    { text: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.", ref: "Gálatas 6:9" },
    { text: "La gracia de nuestro Señor Jesucristo sea con todos vosotros. Amén.", ref: "Apocalipsis 22:21" },
    { text: "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.", ref: "Salmos 37:4" },
    { text: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.", ref: "Hebreos 11:1" },
    { text: "Torre fuerte es el nombre de Jehová; a él correrá el justo, y será levantado.", ref: "Proverbios 18:10" },
    { text: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.", ref: "1 Tesalonicenses 5:18" },
    { text: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.", ref: "Juan 1:1" },
    { text: "Gustad, y ved que es bueno Jehová; dichoso el hombre que confía en él.", ref: "Salmos 34:8" },
    { text: "Ninguna arma forjada contra ti prosperará.", ref: "Isaías 54:17" },
    { text: "Sean gratos los dichos de mi boca y la meditación de mi corazón delante de ti, oh Jehová.", ref: "Salmos 19:14" },
    { text: "Por la fe andamos, no por vista.", ref: "2 Corintios 5:7" },
    { text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.", ref: "Salmos 51:10" },
    { text: "El gozo de Jehová es vuestra fuerza.", ref: "Nehemías 8:10" },
    { text: "Bendeciré a Jehová en todo tiempo; su alabanza estará de continuo en mi boca.", ref: "Salmos 34:1" },
    { text: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.", ref: "Proverbios 4:23" },
    { text: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.", ref: "Mateo 7:7" },
    { text: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús.", ref: "Filipenses 4:19" },
    { text: "La paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos.", ref: "Filipenses 4:7" },
    { text: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados y limpiarnos.", ref: "1 Juan 1:9" },
    { text: "En Dios solamente está acallada mi alma; de él viene mi salvación.", ref: "Salmos 62:1" },
    { text: "Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras y glorifiquen a vuestro Padre.", ref: "Mateo 5:16" },
    { text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.", ref: "Isaías 41:10" },
    { text: "Cantad a Jehová cántico nuevo; cantad a Jehová, toda la tierra.", ref: "Salmos 96:1" },
    { text: "El da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.", ref: "Isaías 40:29" },
    { text: "Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro sobre ti.", ref: "Números 6:24-25" }
  ];

  /**
   * Calcula el número de semana ISO (1 a 53) para la fecha actual
   */
  function getWeekOfYear(d) {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  }

  function displayWeeklyQuote() {
    const quoteTextEl = document.getElementById("quote-text");
    const quoteRefEl = document.getElementById("quote-ref");

    if (!quoteTextEl) return;

    const weekNumber = getWeekOfYear(new Date());
    const quoteIndex = (weekNumber - 1) % BIBLE_QUOTES.length;
    const currentQuote = BIBLE_QUOTES[quoteIndex];

    quoteTextEl.textContent = `"${currentQuote.text}"`;
    if (quoteRefEl) {
      quoteRefEl.textContent = `— ${currentQuote.ref}`;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", displayWeeklyQuote);
  } else {
    displayWeeklyQuote();
  }
})();