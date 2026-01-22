//todo Riassunto dei principali tag HTML con indicazione se sono semantici o no

//!Come leggere questo file?
//Nome del tag //* Descrizione del tag //? Bisogna chiuderlo? //!Semantico
//todo html
// <html> //* Contenitore principale di tutta la pagina //? sì //! semantico
// <head> //* Contiene metadati, link a CSS/JS, titolo //? sì //! semantico
// <body> //* Contenuto visibile della pagina //? sì //! semantico

//todo testo e titoli
// <h1>…<h6> //* Titoli da 1 (più importante) a 6 (meno importante) //? sì //! semantico
// <p> //* Paragrafo di testo //? sì //! semantico
// <span> //* Contenitore inline generico //? sì
// <strong> //* Testo in grassetto con significato semantico //? sì //! semantico
// <em> //* Testo enfatizzato (corsivo) //? sì //! semantico
// <br> //* Interruzione di riga //? no
// <hr> //* Linea orizzontale/separatore //? no //! semantico

//todo link e media
// <a> //* Link ipertestuale //? sì //! semantico
// <img> //* Immagine //? no
// <video> //* Video //? sì
// <audio> //* Audio //? sì
// <source> //* Fonte di video/audio //? no
// <picture> //* Contenitore di immagini responsive //? sì
// <iframe> //* Contenitore di un’altra pagina web //? sì

//todo liste
// <ul> //* Lista non ordinata //? sì //! semantico
// <ol> //* Lista ordinata //? sì //! semantico
// <li> //* Elemento di lista //? sì //! semantico
// <dl> //* Lista di definizione //? sì //! semantico
// <dt> //* Termine di definizione //? sì //! semantico
// <dd> //* Descrizione del termine //? sì //! semantico

//todo tabelle
// <table> //* Tabella //? sì //! semantico
// <tr> //* Riga della tabella //? sì //! semantico
// <td> //* Cella della tabella //? sì //! semantico
// <th> //* Cella intestazione tabella //? sì //! semantico
// <thead> //* Intestazione tabella //? sì //! semantico
// <tbody> //* Corpo tabella //? sì //! semantico
// <tfoot> //* Piede tabella //? sì //! semantico

//todo form
// <form> //* Formulario //? sì //! semantico
// <input> //* Campo di input //? no
// <textarea> //* Area di testo //? sì //! semantico
// <button> //* Pulsante //? sì //! semantico
// <select> //* Lista a discesa //? sì //! semantico
// <option> //* Opzione selezionabile //? sì //! semantico
// <label> //* Etichetta campo form //? sì //! semantico
// <fieldset> //* Raggruppa campi form //? sì //! semantico
// <legend> //* Titolo del fieldset //? sì //! semantico

//todo sezioni e struttura
// <header> //* Intestazione pagina/sezione //? sì //! semantico
// <footer> //* Piè di pagina //? sì //! semantico
// <main> //* Contenuto principale //? sì //! semantico
// <section> //* Sezione generica di contenuto //? sì //! semantico
// <article> //* Contenuto indipendente //? sì //! semantico
// <nav> //* Navigazione //? sì //! semantico
// <aside> //* Contenuto secondario //? sì //! semantico
// <div> //* Contenitore generico //? sì

//todo Tag semantici

//* Un tag HTML è semantico quando il suo nome indica il significato del contenuto che contiene. In altre parole, comunica lo scopo o la funzione del contenuto sia agli sviluppatori sia agli strumenti esterni (browser, motori di ricerca, screen reader).

// Vantaggi:

//* Migliora accessibilità (screen reader capiscono meglio la struttura)

//* Migliora SEO (motori di ricerca capiscono il significato del contenuto)

//* Codice più leggibile e mantenibile

//? Serve chiuderli?

//* Sì, la maggior parte dei tag semantici richiede apertura e chiusura (<section>...</section>).

// todo Tag non semantici

//* Un tag è non semantico quando non fornisce informazioni sul significato del contenuto, ma solo sulla struttura o sul layout. Serve principalmente per raggruppare o stilizzare elementi, senza comunicare nulla sul loro ruolo.

// Vantaggi:

//* Massima flessibilità per layout e styling

//*  Può essere combinato con classi e id per CSS/JS

//! Limiti:

//! Non migliora SEO

//! Non aiuta gli screen reader

//! Codice meno chiaro senza commenti o nomi di classi esplicativi

//* Serve chiuderli?

//* Sì, i tag non semantici come <div> e <span> si chiudono (</div>, </span>), mentre altri come <b> e <i> sì (anche se <b>/<i> sono meno usati oggi in favore di <strong>/<em>).
