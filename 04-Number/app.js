let entero = 42;
let decimales = 3.14;

console.log(entero);
console.log(decimales);

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(Number.isNaN(NaN)); // true


console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false

console.log(Number.parseInt("10")); // 10
console.log(Number.parseFloat("3.14")); // 3.14

let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"

let num2 = 42;
console.log(num2.toString()); // "42"

let resultado = "10" * 2; // 20 (coversión implícita)
console.log(resultado);

let cadena = "42";
let numero = Number(cadena); // 42
console.log(numero);