function* iterable() {
	yield 'hola';
	console.log('Hola consola');
	yield 'hola2';
	console.log('Seguimos con más instrucciones de nuestro código');
	yield 'hola3';
	yield 'hola4';
}

let iterador = iterable();


console.log(iterador.next()); // {value: 'hola', done: false}
console.log(iterador.next()); // Hola consola
console.log(iterador.next()); // {value: 'hola2', done: false}
console.log(iterador.next()); // Seguimos con más instrucciones de nuestro código

for(let y of iterador) {
	console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(valor) {
	setTimeout(() => {
		//console.log({valor, resultado: valor*valor});
	}, Math.random() * 1000);
	return {
		valor,
		resultado: valor*valor
	}
}

function* generador() {
	console.log('Inicia Generator');
	yield cuadrado(0); // con yield espera a que de el valor
	yield cuadrado(1);
	yield cuadrado(2);
	yield cuadrado(3);
	yield cuadrado(4);
	yield cuadrado(5);

	console.log('Termina Generator');
}

const gen = generador();

for(let y of gen) {
	console.log(y);
}