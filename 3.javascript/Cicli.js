// ============================
// JavaScript - Tutti i cicli
// ============================

// 1. for
// Ciclo tradizionale con indice
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// 2. for...of
// Ciclo su array o oggetti iterabili, restituisce i valori
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // 10 20 30
}

// 3. for...in
// Ciclo sulle proprietà enumerabili di un oggetto, restituisce le chiavi
const obj = {a:1, b:2, c:3};
for (const key in obj) {
  console.log(key, obj[key]); // a 1, b 2, c 3
}

// 4. while
// Ciclo finché la condizione è vera
let n = 0;
while (n < 5) {
  console.log(n); // 0 1 2 3 4
  n++;
}

// 5. do...while
// Esegue almeno una volta, poi verifica condizione
let m = 0;
do {
  console.log(m); // 0 1 2 3 4
  m++;
} while (m < 5);

// 6. forEach (metodo array)
// Itera su ogni elemento dell'array (non esce con break)
arr.forEach(value => console.log(value)); // 10 20 30

// 7. map (metodo array)
// Trasforma elementi e restituisce un nuovo array
const doubled = arr.map(value => value*2);
console.log(doubled); // [20, 40, 60]

// 8. filter (metodo array)
// Filtra elementi secondo una condizione
const filtered = arr.filter(value => value > 15);
console.log(filtered); // [20, 30]

// 9. some (metodo array)
// Controlla se almeno un elemento soddisfa la condizione
console.log(arr.some(v => v > 25)); // true

// 10. every (metodo array)
// Controlla se tutti gli elementi soddisfano la condizione
console.log(arr.every(v => v > 5)); // true

// 11. reduce (metodo array)
// Riduce array a un singolo valore
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 60