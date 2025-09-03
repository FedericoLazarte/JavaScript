// spread

// copiar arrays, superficial
const original = [1, 2];
const copia = [...original];
console.log(original); // [1, 2]
console.log(copia); // [1, 2]
original[0] = 0;
console.log(original); // [0, 2]
console.log(copia); // [1, 2]

// Concatenar array
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = [...arr1, ...arr2];
console.log(combinado); // [1, 2, 3, 4]

// Pasar elementos de un array como argumentos
function sumar(a, b, c) {
	return a + b + c;
}
const numeros = [1, 2, 3];
console.log(sumar(...numeros)); // 6

// Copiar objetos, superficial
const persona = {
	nombre: "Juan",
	edad: 25
}
const copiaObj = { ...persona };
console.log(copiaObj);

// Combinar objetos
const ob1 = { a: 1, b: 2 };
const ob2 = { c: 3, d: 4 };
const combinadoObj = { ...ob1, ...ob2 };
console.log(combinadoObj); // { a: 1, b: 2, c: 3, d: 4 }

// Agregr elementos a un array u objeto

const nums = [1, 2, 3];
const nuevosNums = [...nums, 4, 5];
console.log(nuevosNums); // [1, 2, 3, 4, 5]

// Rest

// Capturar argumentos en funciones
function sumar2(...numeros) {
	return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar2(1, 2, 3, 4)); // 10

// Capturar el resto de elementos en arrays

const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]


// Capturar el resto de proiedades en objetos
const {nombre2, ...resto2 } = {
	nombre2: "Adrián",
	edad: 25,
	ciudad: "Madrid"
};
console.log(nombre2); // Adrián
console.log(resto); // { edad: 25, ciudad: "Madrid"}