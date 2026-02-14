//* Math

// Math.abs(x) → valore assoluto
Math.abs(-10) // 10


// Math.round(x) → arrotonda al più vicino
Math.round(4.6) // 5
Math.round(4.4) // 4


// Math.floor(x) → arrotonda per difetto
Math.floor(4.9) // 4


// Math.ceil(x) → arrotonda per eccesso
Math.ceil(4.1) // 5


// Math.max(...nums) → massimo
Math.max(2, 7, 4) // 7


// Math.min(...nums) → minimo
Math.min(2, 7, 4) // 2


// Math.random() → numero casuale 0–1
Math.random() // 0.2345 (esempio)


// Math.sqrt(x) → radice quadrata
Math.sqrt(16) // 4


// Math.pow(a, b) → potenza
Math.pow(2, 3) // 8

//* Array

Modifica (mutanti)

// push() → aggiunge elementi in fondo
let arr = [1,2]; arr.push(3) // [1,2,3]


// pop() → rimuove ultimo elemento
arr.pop() // 3, arr = [1,2]


// shift() → rimuove primo
// 
arr.shift() // 1, arr = [2]


// unshift() → aggiunge all’inizio
arr.unshift(0) // arr = [0,2]


// splice(start, deleteCount, ...items) → modifica in posizione
arr.splice(1, 1, 5) // arr = [0,5]


// fill(value, start, end) → riempie
arr.fill(1, 0, 2) // arr = [1,1]


// reverse() → inverte
arr.reverse() // arr = [1,1]

// Iterazione (non mutanti)

// forEach(cb) → cicla senza restituire
arr.forEach(n => console.log(n))


// map(cb) → trasforma → nuovo array
arr.map(n => n*2) // [2,2]


// filter(cb) → filtra
arr.filter(n => n>0) // [1,1]


// reduce(cb, init) → riduce a singolo valore
arr.reduce((acc,n)=>acc+n,0) // 2


// some(cb) → almeno uno vero
arr.some(n=>n>0) // true


// every(cb) → tutti veri
arr.every(n=>n>0) // true


// find(cb) → primo elemento che matcha
arr.find(n=>n>0) // 1


// findIndex(cb) → indice del primo match
arr.findIndex(n=>n>0) // 0

//* Utility

// includes(value) → contiene?
arr.includes(1) // true


// indexOf(value) → primo indice
arr.indexOf(1) // 0

// 
// lastIndexOf(value) → ultimo indice
arr.lastIndexOf(1) // 1


// join(separator) → array → stringa
arr.join(",") // "1,1"


// slice(start,end) → copia porzione
arr.slice(0,1) // [1]


// concat(arr2) → unisce
arr.concat([3,4]) // [1,1,3,4]


// sort(cb) → ordina
[3,1,2].sort((a,b)=>a-b) // [1,2,3]


// flat(depth) → appiattisce array annidati
[1,[2,[3]]].flat(2) // [1,2,3]

//* String

// length → numero di caratteri
"hello".length // 5


// toUpperCase() / toLowerCase() → maiuscolo / minuscolo
"hello".toUpperCase() // "HELLO"


// trim() → rimuove spazi iniziali/finali
" hello ".trim() // "hello"


// includes(substr) → contiene sottostringa
"hello".includes("ll") // true


// startsWith(substr) / endsWith(substr) → inizio/fine
"hello".startsWith("he") // true


// slice(start,end) → porzione stringa
"hello".slice(1,4) // "ell"


// substring(start,end) → simile a slice
// split(separator) → stringa → array
"hi there".split(" ") // ["hi","there"]


// replace(a,b) → sostituisce primo match
// replaceAll(a,b) → sostituisce tutte le occorrenze
"hello".replace("l","x") // "hexlo"
"hello".replaceAll("l","x") // "hexxo"


// charAt(index) → carattere
"hello".charAt(1) // "e"


// indexOf(substr) → primo indice
"hello".indexOf("l") // 2

//* Object
// Object.keys(obj) → restituisce un array con tutte le chiavi enumerabili

// const obj = {a:1, b:2};
Object.keys(obj) // ["a","b"]

// 
// Object.values(obj) → restituisce un array con tutti i valori
Object.values(obj) // [1,2]


// Object.entries(obj) → restituisce un array di coppie [chiave, valore]
Object.entries(obj) // [["a",1],["b",2]]


// Object.assign(target, ...sources) → copia proprietà da oggetti sorgente all’oggetto target
const target = {a:1};
const source = {b:2};
Object.assign(target, source) // target = {a:1, b:2}


// Object.freeze(obj) → blocca modifiche all’oggetto (non si possono aggiungere, rimuovere o modificare proprietà)
// const obj = {a:1};
Object.freeze(obj);
obj.a = 2; // ignorato, rimane 1


// Object.seal(obj) → impedisce aggiunta/rimozione proprietà, ma permette modifiche ai valori esistenti
const obj = {a:1};
Object.seal(obj);
obj.a = 2; // valido, obj.a = 2
obj.b = 3; // ignorato, non si può aggiungere


// hasOwnProperty(prop) → verifica se la proprietà appartiene direttamente all’oggetto
obj.hasOwnProperty("a") // true
obj.hasOwnProperty("toString") // false

//* Number

// Number(x) → converte un valore in numero
Number("123") // 123


// parseInt(str) → converte stringa in intero
parseInt("123px") // 123


// parseFloat(str) → converte stringa in numero decimale
parseFloat("12.34px") // 12.34


// toFixed(n) → restituisce stringa con n decimali
(3.14159).toFixed(2) // "3.14"


// isNaN(x) → verifica se non è un numero
isNaN("abc") // true


// isInteger(x) → verifica se è intero
Number.isInteger(5.0) // true
Number.isInteger(5.1) // false

//* Date

// new Date() → crea una nuova data
const d = new Date() // data corrente


// getFullYear() → anno
d.getFullYear() // 2026


// getMonth() → mese 0–11
d.getMonth() // 1 = Febbraio


// getDate() → giorno del mese
d.getDate() // 14


// getDay() → giorno settimana 0–6 (0 = Domenica)
d.getDay() // 2 = Martedì


// getTime() → millisecondi dal 1 gennaio 1970
d.getTime() // 1760000000000


// toISOString() → stringa ISO standard
d.toISOString() // "2026-02-14T12:34:56.789Z"

//*Promise / Async

// then(cb) → gestisce valore risolto
Promise.resolve(5).then(value => console.log(value)) // 5


// catch(cb) → gestisce errore
Promise.reject("errore").catch(err => console.log(err)) // "errore"

// finally(cb) → sempre eseguito
Promise.resolve(1).finally(() => console.log("finito"))


// Promise.all([promises]) → tutte le promise devono risolversi
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(values => console.log(values)) // [1,2]


// Promise.race([promises]) → si risolve/rifiuta alla prima completata
Promise.race([Promise.resolve(1), new Promise(r=>setTimeout(()=>r(2),100))])
  .then(value => console.log(value)) // 1


// async/await → scrittura asincrona leggibile
async function fetchData() {
  const result = await Promise.resolve(10);
  console.log(result); // 10
}

//*JSON

// JSON.stringify(obj) → oggetto → stringa JSON
JSON.stringify({a:1, b:2}) // '{"a":1,"b":2}'


// JSON.parse(str) → stringa JSON → oggetto
JSON.parse('{"a":1,"b":2}') // {a:1, b:2}

//*RegExp

// test(str) → verifica se pattern matcha
const re = /abc/;
re.test("abcdef") // true


// exec(str) → restituisce dettagli match
re.exec("abcdef") // ["abc", index:0, input:"abcdef"]


// match(pattern) → array dei match
"abc abc".match(/abc/g) // ["abc","abc"]


// search(pattern) → indice primo match
"abcdef".search(/c/) // 2


// replace(pattern, repl) → sostituisce pattern
"abc abc".replace(/abc/g, "x") // "x x"

//*