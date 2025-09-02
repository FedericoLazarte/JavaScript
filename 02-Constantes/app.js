const PI = 3.1416;
console.log(PI);

// No puedo reasignar un valor a un tipo primitivo
// const NUEVE; SyntaxError
// PI = 3.15; TypeError

// Pero si puedo cambiar valores de tipos compuestos

const objeto = {
	nombre: "Jon",
	edad: 35
}

const colores = ["blanco", "negro", "azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "fedelazarte2015@gmail.com";

colores.push("anaranjado");

console.log(objeto);
console.log(colores);

