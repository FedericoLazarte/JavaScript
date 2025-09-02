// Conversión implícita

if ("hola") {
	console.log("Es verdadero"); // Se ejecuta, porque "hola" es truthy
}

if (0) {
	console.log("Es verdadero"); // No se ejecuta, porque 0 es falsy
}

// Conversión explícita

console.log(Boolean("Hola")); // true
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false

// Operaciones lógicas

console.log(true && true); // true
console.log(true && false); // false

console.log(true || false); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(5 != '5'); // false
console.log(5 !== '5'); // true
console.log(10 > 5); // true
console.log(10 <= 10); // true

let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad"); // Se ejecuta.
} else {
  console.log("Eres menor de edad");
}