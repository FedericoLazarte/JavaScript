let numeros = [1, 2, 3];

// Sin desestructuración
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno, dos, tres);

// con desestructuración
const [one, two, three] = numeros;
console.log(one, two, three);

// Con objetos
const persona = {
	nombre: "Federico",
	apellido: "Lazarte",
	edad: 30
}

// El orden no importa
// deben tener el mismo nombre q los atributos, si no lanzará error
let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);