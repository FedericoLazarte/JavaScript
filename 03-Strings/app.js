let a = "Hola";
let b = 'Mundo';
let c = `Hola Mundo`;
let d = new String('Hola mundo');

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let saludo = "Hola";
saludo[0] = "M"; // No cambia nada, debido a los string son inmutables
console.log(saludo); // Hola

let vacio = "";
console.log(vacio);

let texto = "JavaScript";
console.log(texto.length); // 10

let palabra = "Hola";
console.log(palabra[0]); // H

console.log("hola".toUpperCase()); // HOLA
console.log("HOLA".toLowerCase()); // hola

console.log("JavaScript".includes("Script")); // true
console.log("JavaScript".startsWith("Java")); // true
console.log("JavaScript".endsWith("Script")); // true

let str = "JavaScript";
console.log(str.slice(0, 4)); // Java
console.log(str.substring(4)); // Script

console.log("Hola Mundo".replace("Mundo", "JS")); // Hola JS

console.log("ha".repeat(3)); // hahaha

console.log("   hola   ".trim()); // hola

console.log("a,b,c".split(",")); // ["a", "b", "c"]

let nombre = "Federico";
let apellido = "Lazarte";
console.log(`Hola mi nombre es ${nombre} ${apellido}`);

let num1 = 5;
let num2 = 10;
console.log(`La suma de ${num1} + ${num2} es ${num1 + num2}`);

function etiqueta(strings, ...valores) {
	console.log(strings); // ["Hola, ", "!"] 
	console.log(valores); // ["Juan"]
	return "Mensaje procesado";
}

let nom = "Juan";
let mensaje = etiqueta`Hola, ${nom}!`;
console.log(mensaje); // Mensaje procesado

let ul = `
	<ul>
		<li>Primeravera</li>
		<li>Verano</li>
		<li>Otoño</li>
		<li>Invierno</li>
	</ul>
	`;
console.log(ul);