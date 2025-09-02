const numeros = [1, 2, 3, 4, 5]; // usando corchetes
const colores = new Array("rojo", "verde", "azul"); // Usando construtor

console.log(numeros);
console.log(colores);

console.log(colores[0]); // rojo
console.log(colores[1]); // verde
console.log(colores[2]); // azul

colores[2] = "violeta";
console.log(colores);

console.log(colores.length); // 3

// agregar al final
colores.push("azul");
console.log(colores);

// elimina el último elemento, devuelve el elemento eliminado
colores.pop();
console.log(colores);

// shift() Elimina y devuelve el primer elemento del array
colores.shift();
console.log(colores);

// añade uno o más elementos al inicio del array
colores.unshift("rojo", "azul");
console.log(colores);

// slice() Devuelve una copia de una parte del array
const colores2 = colores.slice(1, 3);
console.log(colores2);
console.log(colores);

// splice() cambia el contenido del array eliminandos, reemplazando o añadiendo elementos
colores.splice(1, 1, "negro");
console.log(colores);

// concat(): combina dos o mas arrays, devolviendo una nueva lista
const colores3 = ["gris", "anaranjado", "rosa"];
const colores4 = colores.concat(colores3); // 
console.log(colores4);

// forEach, ejecuta una función para cada elemento del array
const nums = [1, 2, 3];
nums.forEach((numero) => {
	console.log(numero * 2); // 2, 4, 6
});

// map(): crea un nuevo array aplicndo una función a cada elemento
const dobles = nums.map((numero) => numero * 2);
console.log(dobles);

// filter() crea un nuevo array con los elementos que cumplen una condición
const pares = nums.filter((numero) => numero % 2 == 0);
console.log(pares);

// reduce() reduce el array a u único valor aplicanco una función acumuladora
const suma = nums.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);
console.log(nums);

// Array muuldi dimensional
const matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
console.log(matriz);

// spread operator, permite "expandir" un array en elementos individuales
const fruta = ["Manzana", "banana"];
const nuevasFrutas = [...fruta, "naranja"];
console.log(fruta);
console.log(nuevasFrutas);

// recorrer array
for (let i = 0; i < fruta.length; i++) {
	console.log(fruta[i]);
}

// buscar elemento
const indice = fruta.indexOf("banana");
console.log(indice); // 1

// ordenar un array
const numeros2 = [3, 1, 4, 1, 5, 9];
numeros2.sort((a, b) => a - b);
console.log(numeros2);