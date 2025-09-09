// Funciones declaradas
function estoEsUnaFuncion() {
	console.log('Uno');
	console.log('Dos');
	console.log('Tres');
}

function unaFuncionQueDevuelveValor() {
	return 'La función ha retornado una Cadena de texto';
}

function saludar(nombre='desconocido', edad=0) {
	console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

estoEsUnaFuncion();

console.log(unaFuncionQueDevuelveValor());

saludar('Federico', 30);
saludar();  // Hola mi nombre es desconocido y tengo 0 años.

// Hoisting funcion declara

funcionDeclarada();

function funcionDeclarada() {
	console.log("Esto es una función declarada y puede invocarse en cualquier parte de nuestro código, incluso antes" +
		"de que la función sea declarada");
}

// Expresadas

// funcionExpresada(); const dice que no puedo acceder antes de la inicialización de la función
// con var, dice que no es una función

var funcionExpresada = function() {
	console.log('Esto es una función expresada, es decir, una función que se la ha asignado como valor a una variable, si invocamos esta función antes de su definición, JS nos dirá..')
}

funcionExpresada();

// Funciones flecha

const sumar = (a, b) => a + b;

// Si la función tiene un solo parámetro, los paréntesis son opcinales
const cuadrado = x => x * x;

// Si la función no tiene argumentos, se usan paréntesis vacíos
const saludarFlecha = () => "Hola";

// Si la función tiene varios parámetros, se usan paréntesis
const sumar2 = (a, b) => a + b;

// Si a función tiene varias líneas, se usan llaves y se necesita un return explícita
const sumar3 = (a, b) => {
	const res = a + b;
	return res;
}

// Funciones más compactas
const nums = [1, 2, 3];
const dobles = nums.map(num => num * 2);
console.log(dobles); // [2, 4, 6]

const persona = {
	nombre: "Juan",
	saludar: function() {
		setTimeout(() => {
			console.log(`Hola, soy ${this.nombre}`);
		}, 1000);
	}
};
persona.saludar(); // "Hola, soy Juan" (el this se refiere a persona)

const mostrarArgumentos = (...args) => {
	console.log(args);
};
mostrarArgumentos(1, 2, 3); // [1, 2, 3]

// No tienen prototype
const funcionTradicional = function() {};
const arrowFunction = () => {};

console.log(funcionTradicional.prototype); // { constructor: f }
console.log(arrowFunction.prototype); // undefined

// Función anónima Autoejecutable
// Siempre que tengamos una función anónima cerrarla con ;

// Clásica
(function(){
	console.log('Mi primer IIFE');
})();

(function(){
	console.log('Mi segunda IIFE');
})();

(function(d, w, c){
	console.log('Mi primer IIFE');
	console.log(d);
	console.log(w);
	console.log(c);
	c.log('Este es un console.log');
})(document, window, console);


// La Crockford (JavaScript The Good Parts)
((function () {
	console.log('Versión Crockfor');
})());

// Unaria

+function() {
	console.log('Versión Unaria');
}();

// Facebook
!function() {
	console.log('Versión Facebook');
}();