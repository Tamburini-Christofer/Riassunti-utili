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

