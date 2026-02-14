// ============================
// JavaScript Domande Colloquio
// ============================

// 1. Cos’è JavaScript e a cosa serve?
// JS è un linguaggio di scripting lato client (ma anche lato server con Node.js) 
// che permette di rendere dinamiche le pagine web.

// 2. Differenza tra var, let e const
// var → ambito funzione, hoisting, ridefinibile
// let → ambito blocco, non ridefinibile nello stesso scope
// const → ambito blocco, non riassegnabile (ma oggetti/array interni modificabili)

// 3. Cos’è il “hoisting”?
// Le dichiarazioni di variabili e funzioni vengono spostate all’inizio dello scope 
// durante la compilazione.

// 4. Differenza tra forEach, map, filter, reduce
// forEach → cicla senza restituire array
// map → trasforma elementi → nuovo array
// filter → filtra elementi → nuovo array
// reduce → riduce a un singolo valore accumulato

// 5. Differenza tra slice e splice
// slice → non muta l’array, copia porzione
// splice → muta l’array, aggiunge/rimuove elementi

// 6. Come verificare se un array contiene un elemento?
// arr.includes(x)
// arr.indexOf(x) !== -1

// 7. Differenza tra Object.freeze e Object.seal
// freeze → blocca modifiche e struttura dell’oggetto
// seal → blocca struttura, ma permette modifiche ai valori esistenti

// 8. Come iterare chiavi e valori di un oggetto?
// Object.keys(obj) → array di chiavi
// Object.values(obj) → array di valori
// Object.entries(obj) → array di coppie [chiave, valore]
// for (const [key, value] of Object.entries(obj)) { ... }

// 9. Differenza tra function declaration e function expression
// Declaration → può essere usata prima della definizione (hoisting)
// Expression → assegnata a variabile, non hoisting

// 10. Cos’è una closure?
// Funzione che ricorda il contesto in cui è stata creata, 
// permettendo di accedere a variabili esterne anche dopo che la funzione esterna è terminata

// 11. Differenza tra callback, promise e async/await
// Callback → funzione passata ad un’altra funzione
// Promise → oggetto che rappresenta un’operazione futura, può essere risolta o rigettata
// Async/await → sintassi leggibile per gestire Promise

// 12. Cos’è Promise.all e Promise.race?
// Promise.all → risolve quando tutte le Promise sono risolte
// Promise.race → risolve o rigetta alla prima Promise completata

// 13. Differenza tra == e ===
// == → confronto con coercizione dei tipi
// === → confronto rigoroso, tipi identici

// 14. Cos’è NaN e come verificarlo?
// NaN → risultato di un’operazione numerica non valida
// isNaN(x) → true se non numero
// Number.isNaN(x) → più preciso

// 15. Come verificare se un numero è intero?
// Number.isInteger(x)

// 16. Come ottenere anno, mese, giorno da una data?
// const d = new Date();
// d.getFullYear() → anno
// d.getMonth() → mese (0–11)
// d.getDate() → giorno del mese

// 17. Come generare un numero casuale tra min e max?
// Math.floor(Math.random() * (max - min + 1)) + min

// 18. Differenza tra JSON.stringify e JSON.parse
// JSON.stringify(obj) → oggetto → stringa JSON
// JSON.parse(str) → stringa JSON → oggetto

// 19. Come verificare se una stringa contiene un pattern con regex?
// const re = /abc/;
// re.test("abcdef") → true

// 20. Cos’è il “this” in JavaScript?
// Riferimento al contesto di esecuzione corrente, dipende da come viene chiamata la funzione

// 21. Differenza tra function e arrow function per il this
// Arrow function → non ha this, prende quello del contesto esterno
// Function normale → this dipende da come viene chiamata

// 22. Differenza tra var/let/const nello scope e hoisting
// var → globale o funzione, hoisting
// let/const → blocco, non hoisting

// 23. Cos’è il “event loop” e come funziona?
// Meccanismo che gestisce la coda di esecuzione: prima codice sincrono, 
// poi callback asincrone, microtask (Promise), ecc.

// ============================
// JavaScript - Domande Base Colloquio
// ============================

// ============================
// Array
// ============================
const arr = [10, 20, 30];

// 1. Come trovare il primo elemento di un array?
const first = arr[0]; // 10

// 2. Come trovare l’ultimo elemento di un array?
const last = arr[arr.length - 1]; // 30

// 3. Come verificare se un array contiene un valore?
arr.includes(20); // true
arr.indexOf(50) !== -1; // false

// 4. Come aggiungere un elemento alla fine dell’array?
arr.push(40); // arr = [10,20,30,40]

// 5. Come rimuovere l’ultimo elemento dell’array?
arr.pop(); // rimuove 40, arr = [10,20,30]

// 6. Come aggiungere un elemento all’inizio dell’array?
arr.unshift(5); // arr = [5,10,20,30]

// 7. Come rimuovere il primo elemento dell’array?
arr.shift(); // rimuove 5, arr = [10,20,30]

// 8. Come copiare una porzione di array?
arr.slice(1,3); // [20,30], non muta arr

// 9. Come trasformare un array in stringa?
arr.join(", "); // "10, 20, 30"

// 10. Come filtrare valori in un array?
arr.filter(n => n > 15); // [20,30]

// 11. Come sommare tutti i valori di un array?
arr.reduce((sum,n) => sum+n, 0); // 60

// 12. Come trovare un elemento che soddisfa una condizione?
arr.find(n => n > 15); // 20

// 13. Come trovare l’indice del primo elemento che soddisfa una condizione?
arr.findIndex(n => n > 15); // 1

// 14. Come invertire l’array?
arr.reverse(); // arr = [30,20,10]

// 15. Come ordinare numeri in ordine crescente?
arr.sort((a,b)=>a-b); // arr = [10,20,30]

// 16. Come clonare un array?
const clone = [...arr]; // copia superficiale

// 17. Come iterare su ogni elemento di un array?
arr.forEach(n => console.log(n)); // stampa 10 20 30

// 18. Come trasformare tutti gli elementi di un array?
arr.map(n => n*2); // [20,40,60]

// 19. Come unire due array?
const arr2 = [40,50];
const combined = arr.concat(arr2); // [10,20,30,40,50]

// 20. Come rimuovere duplicati da un array?
const unique = [...new Set([10,20,10,30])]; // [10,20,30]

// ============================
// Object
// ============================
const obj = {a:1, b:2, c:3};

// 21. Come accedere a una proprietà di un oggetto?
obj.a; // 1
obj["b"]; // 2

// 22. Come aggiungere una nuova proprietà?
obj.d = 4; // obj = {a:1,b:2,c:3,d:4}

// 23. Come rimuovere una proprietà?
delete obj.c; // obj = {a:1,b:2,d:4}

// 24. Come verificare se una proprietà esiste?
"a" in obj; // true
obj.hasOwnProperty("c"); // false

// 25. Come ottenere tutte le chiavi di un oggetto?
Object.keys(obj); // ["a","b","d"]

// 26. Come ottenere tutti i valori di un oggetto?
Object.values(obj); // [1,2,4]

// 27. Come ottenere tutte le coppie chiave-valore?
Object.entries(obj); // [["a",1],["b",2],["d",4]]

// 28. Come clonare un oggetto?
const cloneObj = {...obj}; // copia superficiale

// 29. Come unire due oggetti?
const obj2 = {e:5, f:6};
const merged = {...obj, ...obj2}; // {a:1,b:2,d:4,e:5,f:6}

// 30. Come rendere un oggetto immutabile?
Object.freeze(obj); // non si possono aggiungere o modificare proprietà