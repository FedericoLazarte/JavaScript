// Variable Global
var hola = "Hola mundo"

console.log(hola); // Hola mundo

function saludar() {
	var hola = "Chau mundo"; // Variable local
	console.log(hola); 
}

saludar() // Chau mundo
console.log(hola); // Hola mundo

function saludar2() {
	hola = "Chau mundo"; // Reasigno valor a la variable global
	console.log(hola);
}

saludar2(); // Chau mundo
console.log(hola); // Chau mundo

// Hoisting con var
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// Hoisting con let
// console.log(y); ReferenceError
let y = 20;

// Las variables declaradas con var se guardan en el objeto window
console.log(window);

// Otro ejemplo de alcance de una variable

// var

var musica = "Rock";
console.log("Variable Música antes del Bloque", musica); // Rock

{
	var musica = "pop";
	console.log("Variable Música dentro del Bloque", musica); // Pop
}

console.log("Variable Música después del Bloque", musica); // Pop

// let

let musica2 = "Rock";
console.log("Variable Música antes del Bloque", musica2); // Rock

{
	let musica2 = "pop";
	console.log("Variable Música dentro del Bloque", musica2); // Pop
}

console.log("Variable Música después del Bloque", musica2); // Pop
