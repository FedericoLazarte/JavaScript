const iterable = [1, 2, 3, 4, 5];

// Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

console.log(iterador.next()); // Devuelve un objeto, y un boolean false en una prop done que indica si hay más elemtnos
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

let next = iterador.next();

while(!next.done) {
	console.log(next.value);
	next = iterador.next();
}