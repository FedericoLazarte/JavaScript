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