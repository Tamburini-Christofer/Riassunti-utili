//todo Metodi e loro valori di ritorno in JavaScript

//todo Array

//todo Array di partenza
const arr = [1, 2, 3, 4, 5];

// map() //* nuovo array trasformato
const mapped = arr.map(x => x * 2); //! ritorna: [2, 4, 6, 8, 10]

// filter() //* nuovo array filtrato
const filtered = arr.filter(x => x > 2); //! ritorna: [3, 4, 5]

// reduce() //* un singolo valore
const reduced = arr.reduce((acc, x) => acc + x, 0); //! ritorna: 15

// forEach() //* undefined
arr.forEach(x => console.log(x)); //! ritorna: undefined (usa side-effect)

// find() //* primo elemento trovato o undefined
const found = arr.find(x => x === 3); //! ritorna: 3

// findIndex() //* indice o -1
const foundIndex = arr.findIndex(x => x === 3); //! ritorna: 2

// some() //* boolean
const hasSome = arr.some(x => x > 4); //! ritorna: true

// every() //* boolean
const allEvery = arr.every(x => x > 0); //! ritorna: true   
// includes() //* boolean
const includesThree = arr.includes(3); //! ritorna: true

// push() //* nuova lunghezza array
const pushLength = arr.push(6); //! ritorna: 6 (nuova lunghezza; arr diventa [1,2,3,4,5,6])

// pop() //* elemento rimosso
const popped = arr.pop(); //! ritorna: 6 (elemento rimosso; arr torna [1,2,3,4,5])

// shift() //* elemento rimosso
const shifted = arr.shift(); //! ritorna: 1 (elemento rimosso; arr diventa [2,3,4,5])   
// unshift() //* nuova lunghezza array
const unshiftLength = arr.unshift(0); //! ritorna: 5 (nuova lunghezza; arr diventa [0,2,3,4,5])

// slice() //* nuovo array
const sliced = arr.slice(1, 3); //! ritorna: [2, 3] (non muta arr)

// splice() //* array degli elementi rimossi
const spliced = arr.splice(1, 2); //! ritorna: [2, 3] (elementi rimossi; arr diventa [0,4,5])

// sort() //* array ordinato (stesso array)
const sorted = arr.sort((a, b) => b - a); //! ritorna: [5, 4, 0] (ordina in-place)
// join() //* stringa
const joined = arr.join(", "); //! ritorna: "5, 4, 0"

//todo String

//todo Stringa di partenza
const str = "Hello World";

// toUpperCase() / toLowerCase() //* stringa
const upper = str.toUpperCase(); //! ritorna: "HELLO WORLD"
const lower = str.toLowerCase(); //! ritorna: "hello world"

// split() //* array
const splitArr = str.split(" "); //! ritorna: ["Hello", "World"]

// join() //* stringa
const joinedStr = splitArr.join("-"); //! ritorna: "Hello-World"

// includes() //* boolean
const includesHello = str.includes("Hello"); //! ritorna: true
// replace() //* nuova stringa
const replaced = str.replace("World", "JS"); //! ritorna: "Hello JS"

// trim() //* stringa
const trimmed = "   Hello   ".trim(); //! ritorna: "Hello"

// substring() / slice() //* stringa
const sub = str.substring(0, 5); //! ritorna: "Hello"

// startsWith() / endsWith() //* boolean
const starts = str.startsWith("Hello"); //! ritorna: true
const ends = str.endsWith("World"); //! ritorna: true

// charAt() //* carattere
const char = str.charAt(0); //! ritorna: "H"

//todo Object

//todo Oggetto di partenza
const obj = { a: 1, b: 2, c: 3 };

// Object.keys() //* array di chiavi
const keys = Object.keys(obj); //! ritorna: ["a", "b", "c"]

// Object.values() //* array di valori
const values = Object.values(obj); //! ritorna: [1, 2, 3]

// Object.entries() //* array di coppie
const entries = Object.entries(obj); //! ritorna: [["a",1],["b",2],["c",3]]

// Object.assign() //* oggetto
const assigned = Object.assign({}, obj, { d: 4 }); //! ritorna: { a:1, b:2, c:3, d:4 }
// hasOwnProperty() //* boolean
const hasA = obj.hasOwnProperty("a"); //! ritorna: true

//todo Math

// Math.random() //* numero
const random = Math.random(); //! ritorna: numero decimale in [0,1)

// Math.floor() / ceil() / round() //* numero
const floored = Math.floor(4.7); //! ritorna: 4
const ceiled = Math.ceil(4.2); //! ritorna: 5
const rounded = Math.round(4.5); //! ritorna: 5

// Math.max() / min() //* numero
const max = Math.max(1, 5, 3); //! ritorna: 5
const min = Math.min(1, 5, 3); //! ritorna: 1

// Math.abs() //* numero
const absVal = Math.abs(-10); //! ritorna: 10

//todo Number

// parseInt() / parseFloat() //* numero
const int = parseInt("123"); //! ritorna: 123
const float = parseFloat("123.45"); //! ritorna: 123.45
// toFixed() //* stringa
const fixed = (123.456).toFixed(2); //! ritorna: "123.46"

// isNaN() //* boolean
const notANumber = isNaN("abc"); //! ritorna: true

//todo Date

// new Date() //* oggetto Date
const now = new Date(); //! ritorna: oggetto Date (data/ora correnti)

// getFullYear() //* numero
const year = now.getFullYear(); //! ritorna: numero (anno corrente)

// getMonth() //* numero
const month = now.getMonth(); //! ritorna: numero (0-11)

// getTime() //* numero (timestamp)
const timestamp = now.getTime(); // ritorna: numero (ms dall'epoch)

//todo Promise / Async

// then() //* Promise
const promise = new Promise((resolve, reject) => resolve("Done")); //! ritorna: Promise (risolta con "Done")

// catch() //* Promise
// finally() //* Promise
promise
	.then(res => console.log(res))
	.catch(err => console.log(err))
	.finally(() => console.log("Finished"));

// Promise.all() //* Promise //* array risultati 
Promise.all([Promise.resolve(1), Promise.resolve(2)])
	.then(res => console.log(res));

// async/await //* valore risolto
async function fetchData() {
	const result = await Promise.resolve("Data");
	return result; //! la funzione ritorna: Promise risolta con "Data"
}

//todo JSON

// JSON.stringify() //* stringa
const jsonString = JSON.stringify({ a: 1, b: 2 }); //! ritorna: '{"a":1,"b":2}'

// JSON.parse() //* oggetto
const jsonObj = JSON.parse(jsonString); //! ritorna: { a:1, b:2 }