// Solo pueden almacenar referencias débiles, osea sus llaves deben ser objetos

// No podemos iterar sobre las claves o valores

// No se pueden borrar todos los elementos de una vez, solo de uno en uno

// Tampoco podemos saber su tamaño


// si las referencias son null o undefined, el recolector de basura los elimita automáticamente

const ws = new WeakSet() // No puede recibir parámetros

// ws.add(1); NO se puede,solo reciben objetos

let valor1 = {'valor1': 1};
let valor2 = {'valor1': 2};
let valor3 = {'valor1': 3};

ws.add(valor1);
ws.add(valor2);

console.log(ws);

console.log(ws.has(valor1)); // true
console.log(ws.has(valor3)); // flse

ws.delete(valor2);

console.log(ws);

ws.add(valor2);
ws.add(valor3);

console.log(ws);

setInterval(() => console.log(ws), 1000);

setTimeout(() => {
	valor1 = null;
	valor2 = null;
	valor3 = null;
}, 5000);

const wm = new WeakMap(); // No puede recibir parámetros, tienen que estar referencaidas en variables

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

console.log(wm.has(llave1)); // true
console.log(wm.has(llave3)); // false

console.log(wm);

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);
console.log(wm);

wm.set(llave2, 2);
wm.set(llave3, 3);

setInterval(() => console.log(wm), 1000);

setTimeout(() => {
	llave1= null;
	llave2 = null;
	llave3 = null;
}, 5000);