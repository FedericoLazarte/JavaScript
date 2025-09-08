// todas las variables y funciones con var son propiedades y métodos del objeto window
var nombre = "Juan";
console.log(window.nombre); // Juan

// Mostrar el título de la página, no hace falta poner window
console.log(document.title);

// información sobre la url actual y permite navegar a otras páginas
console.log(location.href);
// location.href = "https://google.com"; Reedirige a Google

// Mostrar un cuadro de ´diálogo en la página con un mensaje
alert("Hola, mundo");

// Muestra un diálogo en un cuadro con un mensaje y botones de aceptar/cancelar
const aceptado = confirm("¿Estás seguro?");
console.log(aceptado); // true o false

// muestra un diálogo para que el usuario ingrese texto, si se cancela será null
const nombre2 = prompt("¿Cuál es tú nombre?");
console.log(nombre2);

// Ejecutar una función luego de un retraso específicado
setTimeout(() => {
	console.log("Hola después de dos segundos");
}, 2000);

// Ejecuta una función repetidamente con un intervalo de tiempo
/*
setInterval(() => {
	console.log("Hola, cada segundo.");
}, 1000); */

// Abrir nueva pestaña
open("https://google.com");