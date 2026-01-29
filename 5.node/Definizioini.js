//! Runtime system

// Un sistema di runtime si riferisce alla raccolta di risorse software e hardware che consentono
// l'esecuzione di un programma software su un sistema informatico. 
// Il sistema di runtime è un meccanismo composito progettato per fornire servizi di esecuzione
// del programma, indipendentemente dal linguaggio di
// programmazione utilizzato.

//! Motore Javascript V8

// Il motore JavaScript V8 di Chrome è il componente del
// browser Chrome responsabile dell'esecuzione del
// codice JavaScript. È un motore di esecuzione ad alte
// prestazioni che interpreta e esegue il codice JavaScript
// in modo efficiente. Il motore V8 è scritto in C++ ed è
// stato progettato per essere veloce e ottimizzato,
// consentendo una rapida esecuzione delle istruzioni
// JavaScript.

//! Nel lontano 2009, la grande competizione per la
// supremazia dei browser ha visto un competitor
// tra tutti (chrome) fare un notevole balzo in avanti
// di prestazioni. In quello stesso periodo a
// qualcuno venne in mente di usare lo stesso
// motore che montava chrome per interpretare il
// codice JavaScript (il V8 appunto), separarlo dal
// browser e crearci un ambiente di sviluppo
// attorno. Nacque così il progetto Node.js.
// Questo di fatto permise a JavaScript di fare un
// grende salto, diventando a tutti gli effetti non più
// solo un linguaggio front-end, ma anche back-
// end, potendo girare, grazie a node.js, anche su
// un server.

//! Ryan Dahl 
// è un Ingegnere informatico americano
// noto per aver creato il runtime JavaScript Node.js
// e il runtime JavaScript/TypeScript Deno. È nato nel
// 1981 a San Diego, in California. Ha studiato
// presso l'Università della California a San Diego,
// l'Università di Rochester e il Palomar College.
// Oltre a Node.js e Deno. Ryan Dahl ha contribuito
// allo sviluppo di altri progetti software. È
// considerato una figura di spicco nel campo dello
// sviluppo web e dei runtime JavaScript.

//! CommonJS
//! Node.js

// In JavaScript possiamo importare ed esportare pezzi di codice usando un meccanismo che si chiama
// CommonJS o CJS. Questi pezzi di codice vengono detti "moduli" e vengono definiti in file separati che
// è poi possibile importare e utilizzare in altri file. Il modulo può a sua volta può esportare variabili,
// funzioni o oggetti!

// Nota: recentemente è stato implementato il supporto a ES6 Modules o ECMAScript modules
// o ESM (per gli amici) ed è il sistema ufficiale di JS per la gestione dei moduli. Si basa su import ed
// export con una sintassi differente e qualche specificità.

//! Il package.json 
// è un file chiave utilizzato in un
// progetto Node.js per descrivere le informazioni sul
// progetto stesso, le sue dipendenze, i comandi di
// script personalizzati e altre configurazioni. È un
// elemento fondamentale per la gestione dei
// pacchetti e la configurazione dei progetti Node.js.
// Quando si installano anche delle librerie, verrà creata anche
// la cartella node_modules ed il file package-lock.json
// I pacchetti scaricati nella cartella node_modules vengono
// dette "dipendenze" e vengono anche riportate nel file
// package.json

//! dependencies: 
// lista di librerie necessarie al
// funzionamento dell'applicazione, come axios,
// bootstrap, ecc.

//! devDependencies: 
// Librerie necessarie solo in
// fase di sviluppo, che non servono all'applicazione
// una volta che è pronta e avremo finito di
// lavorarci.

//! Live Reload

// Il codice che scriviamo in Node.js viene letto ed eseguito quando inviamo il nostro
// comando per avviare il server: node server.js

// Se durante l'esecuzione facciamo delle modifiche al codice, dovremo spegnere il server
// con CTRL + C e rilanciare il comando da capo affinchè vengano applicate
// Questo è perfetto dal punto di vista delle performance, ma scomodo mentre
// programmiamo.

// Per far sì che il codice si aggiorni automaticamente, possiamo utilizzare il flag --watch:
// node --watch server.js

//! Express Js - Che cos'è?

// Come ogni linguaggio che si rispetti,
// Node.js ha un grande potenziale e permette
// di gestire ed avviare un server. Questo però
// non sempre è facile, sopratutto se
// l'applicazione è un po' più complessa.
// Node.js

// Per questo motivo qualcuno ha pensato
// bene di creare un framework che
// semplificasse le operazioni più comuni.
// E così è nato Express Js o semplicemente
// Express.

// Framework backend minimalista e veloce che offre
// funzionalità e strumenti solidi per lo sviluppo di
// applicazioni di backend scalabili.
// Offre un sistema di routing e funzioni semplificate per
// estendere il framework sviluppando componenti e
// parti più potenti in base ai casi d’uso dell’applicazione.

// Express.js è stato fondato da TJ Holowaychuk.
// La prima versione, secondo il repository di
// Express.js su GitHub, risale al 22 maggio 2010,
// versione 0.12.
// Nel giugno 2014, i diritti per gestire il progetto
// sono stati acquisiti da StrongLoop. Questa è
// stato poi acquisito da IBM nel settembre 2015.
// Nel gennaio 2016, IBM ha annunciato che
// avrebbe posto Express.js sotto la supervisione
// dell'incubatore Node.js Foundation.

//! Rotte

// In Express JS, le rotte sono come indirizzi per
// indicare al server cosa fare quando riceve una
// richiesta su un certo percorso (URL).

// Immagina un sito come una casa con diverse
// stanze: le rotte sono come le porte che portano a
// quelle stanze.

// Ogni rotta è associata a un’azione specifica che il
// server deve compiere, ad esempio mostrare una
// pagina o inviare dei dati.

app.get('/', (req, res) => {
res.send('Hello World!')
})

// Tramite Express possiamo definire tutti gli
// indirizzi (detti rotte) di cui abbiamo bisogno
// per la nostra applicazione. Tramite l'oggetto
// app, per ogni rotta possiamo specificare 3
// elementi:

//* 1. metodo HTTP che dovrà essere usato per
//* accedere alla rotta (per il momento get)
//* 2. path ossia l'URL della rotta
//* 3. funzione che ha lo scopo di rispondere
//* quando viene richiamata la rotta

//! HTTP Request

// Chiamata che il client/browser effettua al server
// web. E' composta dai seguenti elementi:
// Method (GET, POST, PUT, PATCH, DELETE, ecc)
// URL (comprensiva di eventuale query string)
// Request Headers
// Request Body (dati inviati al server)

//! HTTP Response

// Risposta che il server invia al client/browser a
// seguito di ciascuna request. E’ composta dai
// seguenti elementi:
// Status Code (es. 200 - OK, oppure 404 - Page Not Found, etc)
// Response Headers
// Response Body (dati inviati al client/browser)

// In Express, la request e la response, vengono
// fornite automaticamente come parametri alla
// funzione che gestisce una rotta:

//* req: 
// (request) oggetto che rappresenta la richiesta e
// contiene delle proprietà per accedere alle query
// string, parametri dinamici, dati ricevuti e molto altro.
//* res: 
// (response) oggetto che rappresenta la risposta
// che l'applicazione Express invia a seguito di una
// richiesta. Permette di specificare i dati da inviare, la
// loro tipologia o altre operazioni.

// Come ogni server che si rispetti dobbiamo essere in grado di rispondere in diversi modi e di inviare
// dati o pagine html.

// Tramite l'oggetto res che ogni funzione di ogni rotta riceve, possiamo invocare vari metodi:
//* res.send() - invia un contenuto testuale/ html
//* res.json() - invia i dati sotto forma di json
//* res.redirect() - esegue un redirect verso un altra pagina
//* res.download() - invia un file e ne effettua il download tramite il browser
//* res.sendFile() - invia un file che verrà aperto direttamente nel browser

//! Express Js - Asset Statici

// Un server non si limita soltanto a restituire e
// manipolare testi e dati.

// Spesso dobbiamo poter leggere interi file statici
// (immagini, file css, js o altro)

// Express di default non attiva questo servizio,
// pertanto lo dobbiamo attivare noi.

// Tramite la funzione app.use() possiamo richiedere
// ad Express di "abilitare" alcune funzionalità extra!

// A questa funzione passiamo come argomento
// il middleware nativo di express invocando la
// funzione express.static().

// Alla funzione static indichiamo come
// argomento il nome della cartella che conterrà
// i nostri file statici.

//! Express Js - Routing

// Il termine Routing o instradamento è il processo di selezione del percorso che una
// Richiesta HTTP deve prendere.
// In altre parole è l'operazione che permette di determinare come l'applicazione deve
// rispondere a seguito di una Request del client ad un determinato URI (o path) fatta
// con uno specifico metodo HTTP (GET, POST, ecc...)

// Come tutti i framework, anche Express ha un sistema di routing integrato che facilita
// questa operazione.

//! Express Js - Routing

// Tramite Express possiamo definire tutti gli
// indirizzi (detti rotte) di cui abbiamo bisogno
// per la nostra applicazione. Tramite l'oggetto
// app, per ogni rotta possiamo specificare 3
// elementi:

app.get('/', (req, res) => {
res.send('Hello World!')
})

// 1. metodo HTTP che dovrà essere usato per
// accedere alla rotta (per il momento get)
// 2. path ossia l'URL della rotta
// 3. funzione che ha lo scopo di rispondere
// quando viene richiamata la rotta

//! Operazioni CRUD

// Per avere il controllo totale della nostra applicazione, dobbiamo avere la capacità di manipolare i nostri
// dati, eseguendo una lista di operazioni di base, definite C.R.U.D.

//* CREATE => L'abilità di creare una risorsa (es: inserire una nuova pizza)

//* READ => L'abilità di accedere alle risorse (es: visualizzare la lista delle pizze o una singola pizza)

//* UPDATE => L'abilità di modificare una risorsa (es: cambiare il nome, la foto o gli ingredienti di una pizza)

//* DELETE => L'abilità di eliminare una risorsa (es: rimuovere una pizza dal menù)

//! REST: REpresentational State Transfer

// REST introduce il concetto di risorse: all'interno di ogni applicazione, abbiamo alcune entità centrali che
// giocano un ruolo fondamentale nel nostro progetto, che vengono definite risorse.

// Per esempio:
// se creo un e-commerce, i prodotti sono una risorsa centrale.
// se creo un menù per la pizzeria, le pizze sono una risorsa centrale.
// se creo un blog, i post sono una risorsa.

// Nell'e-commerce saranno risorse anche gli utenti, i pagamenti e tanto altro!

// Un'architettura chiara, organizzata e condivisa
// REST: REpresentational State Transfer

// Nell'architettura REST le risorse sono in fin dei conti fonti di informazioni a
// cui si può accedere tramite un identificatore globale (un URI).

// Per utilizzare le risorse , client e server comunicano attraverso una interfaccia
// standard (HTTP) e si scambiano rappresentazioni di queste risorse.

// Come funziona?
// REST: REpresentational State Transfer

// 1. Un nome da assegnare alle rotte per ciascuna operazione
// 2. una struttura degli URL ben definita e univoca per ogni risorsa (più precisamente la parte finale, detta endpoint)
// 3. l'utilizzo dei metodi HTTP per azioni specifiche sulle risorse:
//* GET per il recupero dei dati
//* POST per la creazione di nuovi dati
//* PUT/PATCH per l'aggiornamento dei dati esistenti
//* DELETE per la cancellazione di dati

//todo [GET] /pizzas (index)
//todo [GET] /pizzas/:id (show)
//todo [POST] /pizzas (store)
//todo [PUT] /pizzas/:id (update)
//todo [PATCH] /pizzas/:id (modify)
//todo [DELETE] /pizzas/:id (destroy)

//! Express Js - Router

// Tramite la classe express.Router possiamo
// creare un file dedicato ad un gruppo di rotte

// In questo file, andremo ad indicare tutte le
// rotte che riguardano una determinata entità,
// lasciando più asciutto app.js e organizzando
// meglio il nostro codice:

// Da quel momento in poi, sappiamo che tutte le
// rotte delle pizze sono nel loro bel file dedicato!

// Dati in ingresso

// Tra i compiti di un server c'è la gestione di varie
// tipologie di dati in entrata (lettura,
// manipolazione e salvataggio).

// Con Express possiamo ricevere 3 tipologie di
// dati che arrivano nella Request:
//* 1. query string
//* 2. parametri dinamici
//* 3. request body

//* 200 - OK. Il server ha fornito correttamente il contenuto nella sezione body.
//* 301 - Moved Permanently. La risorsa che abbiamo richiesto non è raggiungibile perché è
//* stata spostata in modo permanente.
//* 400 - Bad Request. La risorsa richiesta non è comprensibile al server.
//* 404 - Not Found. La risorsa richiesta non è stata trovata.
//* 500 - Internal Server Error. Il server non è in grado di rispondere alla richiesta per un suo
//* problema interno.

// Più in generale:
//* 1xx - Informational (messaggi informativi)
//* 2xx - Successful (la richiesta è stata soddisfatta)
//* 3xx - Redirection (non c'è risposta immediata, ma la richiesta è sensata e
//* viene detto come ottenere la risposta)
//* 4xx - Client error (la richiesta non può essere soddisfatta perché sbagliata)
//* 5xx - Server error (la richiesta non può essere soddisfatta per un problema
//* interno del server)

// Express ci permette di gestire la struttura
// della nostra app liberamente, quindi possiamo organizzare i
// nostri file e cartelle come più riteniamo comodo.
// Una pratica molto diffusa per organizzare le rotte è quella di
// utilizzare i Controller.

// Questi non sono altro che semplici file in cui inserire il codice
// che vogliamo far eseguire alle diverse rotte, liberando così il
// file dedicato alle rotte!

// Possono esserci uno o più controller, di solito se ne crea uno per
// ciascuna entità.

//! Cosa sono i middleware?
// Sono funzioni che vengono eseguite prima che
// una richiesta HTTP raggiunga il gestore del
// percorso o prima che un client riceva una risposta,
// dando al framework la possibilità di eseguire uno
// script prima o dopo la richiesta del client.

// Grazie a questi possiamo intercettare il flusso
// dell’applicazione. Possiamo ad esempio
// verificare se un utente è loggato o se ha i
// permessi per eseguire una determinata
// azione o accedere ad una pagina.

//! Come si creano?

// I middleware sono delle semplici funzioni
// (nominate o anonime) che ricevono 3
// argomenti:

function checkTime(req, res, next) {
}

// req e res rapprensentano
// rispettivamente la Richiesta e Risposta
// HTTP
// next rappresenta la prossima funzione
// che dovrà essere eseguita nel flusso della
// richiesta

