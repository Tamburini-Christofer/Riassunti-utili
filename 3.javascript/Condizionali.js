// ============================
// JavaScript - Condizionali
// ============================

// 1. if
const x = 10;
if (x > 5) {
  console.log("x è maggiore di 5"); // x è maggiore di 5
}

// 2. if...else
if (x % 2 === 0) {
  console.log("x è pari"); // x è pari
} else {
  console.log("x è dispari");
}

// 3. if...else if...else
const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B"); // B
} else {
  console.log("C");
}

// 4. switch
const fruit = "banana";
switch(fruit) {
  case "apple":
    console.log("Mela");
    break;
  case "banana":
    console.log("Banana"); // Banana
    break;
  case "orange":
    console.log("Arancia");
    break;
  default:
    console.log("Frutto sconosciuto");
}

// 5. operatore ternario
const age = 18;
const status = age >= 18 ? "maggiorenne" : "minorenne";
console.log(status); // maggiorenne