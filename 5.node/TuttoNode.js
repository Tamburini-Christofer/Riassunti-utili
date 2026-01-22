//todo Node.js
//* Runtime JavaScript lato server basato su V8 di Chrome. Permette di eseguire JS fuori dal browser.
//! Non è un framework, ma una piattaforma per creare applicazioni server-side.
//? Ideale per applicazioni real-time, API REST, microservizi, e strumenti CLI.

//todo Moduli
//* Permettono di separare il codice in file e riutilizzarlo con `require()` o `import`.
//! Node ha moduli core (fs, path, http) e puoi installarne di esterni con NPM.

const fs = require('fs'); // modulo core per file system
const path = require('path'); // modulo core per gestione percorsi

//todo NPM / package.json
//* NPM è il package manager di Node. Gestisce pacchetti e dipendenze.
//! package.json descrive il progetto e le dipendenze.

const packageExample = {
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
};

//todo Event Loop
//* Meccanismo che gestisce operazioni asincrone senza bloccare il thread principale.
//! Node è single-threaded ma grazie all’event loop può gestire migliaia di connessioni contemporaneamente.

//todo File System (fs)
const content = fs.readFileSync('file.txt', 'utf-8'); //* Legge un file in modo sincrono
fs.writeFileSync('output.txt', 'Ciao Node!'); //* Scrive su un file

fs.readFile('file.txt', 'utf-8', (err, data) => { //* Lettura asincrona
  if(err) throw err;
  console.log(data);
});

//todo Path
//* Gestisce percorsi di file in modo cross-platform
console.log(path.join(__dirname, 'file.txt')); //* Unisce directory e file

//todo HTTP / Server
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello Node.js!');
});
server.listen(3000, () => console.log('Server avviato su http://localhost:3000'));

//todo Express
//* Framework per creare server più velocemente con routing e middleware
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => console.log('Server Express su http://localhost:3000'));

//todo Middleware
//* Funzioni che processano richieste prima di arrivare al route handler
app.use((req, res, next) => {
  console.log(req.url);
  next(); // passa al prossimo middleware
});

//todo Routing
app.get('/users', (req, res) => {
  res.json([{id:1, name:'Alice'}, {id:2, name:'Bob'}]);
});

//todo Asynchronous Programming
//* Node usa callback, Promises e async/await per gestire operazioni non bloccanti

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('Start');
  await wait(1000);
  console.log('End after 1 second');
}
run();

//todo Streams
//* Gestione di dati in blocchi invece di caricare tutto in memoria
const readable = fs.createReadStream('bigfile.txt', 'utf-8');
readable.on('data', chunk => console.log(chunk));
readable.on('end', () => console.log('Fine file'));

//todo Buffers
//* Rappresentano dati binari in Node
const buffer = Buffer.from('Hello Node');
console.log(buffer.toString()); // converte in stringa

//todo Process
//* Oggetto globale con info sul processo Node
console.log(process.argv); //* Array degli argomenti passati da CLI
console.log(process.env.NODE_ENV); //* Variabili d'ambiente

//todo EventEmitter
//* Meccanismo di eventi custom in Node
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message', data => console.log('Ricevuto:', data));
emitter.emit('message', 'Ciao Evento!');

//todo Child Processes
//* Permettono di eseguire comandi shell o altri processi
const { exec } = require('child_process');
exec('ls', (err, stdout, stderr) => {
  if(err) console.error(err);
  console.log(stdout);
});

//todo Error Handling
//* In Node è fondamentale gestire errori asincroni
fs.readFile('nofile.txt', 'utf-8', (err, data) => {
  if(err) {
    console.error('File non trovato!');
    return;
  }
});

//todo Debugging
//* Node permette il debug con console.log, debugger; e strumenti come VSCode o Node Inspector
console.log('Debug point');

//todo REPL
//* Console interattiva per provare comandi Node
//? Basta scrivere `node` nel terminale e digitare JS direttamente

//todo Clusters
//* Permette di usare più core della CPU creando processi figli
const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster) {
  const cpuCount = os.cpus().length;
  for(let i=0;i<cpuCount;i++) cluster.fork();
} else {
  http.createServer((req, res) => res.end('Hello Cluster')).listen(3000);
}

//todo Performance Tips
//* Usare stream, async/await, caching, limitare operazioni CPU-bound
