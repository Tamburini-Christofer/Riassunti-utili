// ============================
// Regex JavaScript - Mini Cheatsheet
// ============================

// Creazione di un RegExp
const re1 = /abc/; // literal
const re2 = new RegExp("abc", "i"); // con modificatore i (case-insensitive)

// Modificatori principali
// i -> case-insensitive
// g -> globale (tutte le occorrenze)
// m -> multilinea

// ============================
// Metodi stringa con RegExp
// ============================
const str = "abc abc";

// match() -> array dei match
console.log(str.match(/abc/g)); // ["abc","abc"]

// search() -> indice del primo match
console.log(str.search(/b/)); // 1

// replace() -> sostituzione
console.log(str.replace(/abc/g, "x")); // "x x"

// split() -> divide la stringa in array
console.log("uno,due,tre".split(/,/)); // ["uno","due","tre"]

// ============================
// Metodi RegExp
// ============================
const re = /abc/;

// test() -> true/false
console.log(re.test("abcdef")); // true

// exec() -> dettagli match
console.log(re.exec("abcdef")); // ["abc", index:0, input:"abcdef"]

// ============================
// Simboli principali
// ============================
// . -> qualsiasi carattere tranne newline
// ^ -> inizio stringa
// $ -> fine stringa
// \d -> qualsiasi cifra [0-9]
// \D -> non cifra
// \w -> alfanumerico [A-Za-z0-9_]
// \W -> non alfanumerico
// \s -> spazio, tab, newline
// \S -> non spazio
// [abc] -> uno dei caratteri a,b,c
// [^abc] -> qualsiasi carattere tranne a,b,c
// (abc) -> gruppo
// a|b -> a oppure b
// ? -> zero o uno
// * -> zero o più
// + -> uno o più
// {n} -> esattamente n volte
// {n,} -> almeno n volte
// {n,m} -> tra n e m volte

// ============================
// Esempi pratici
// ============================

// Controllare email semplice
console.log(/^\w+@\w+\.\w+$/.test("test@example.com")); // true

// Numero di telefono (10 cifre)
console.log(/^\d{10}$/.test("1234567890")); // true

// Sostituire spazi con underscore
console.log("ciao mondo".replace(/\s/g,"_")); // "ciao_mondo"

// Estrarre tutte le parole
console.log("ciao mondo!".match(/\w+/g)); // ["ciao","mondo"]