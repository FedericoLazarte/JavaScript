// Permite interactuar con la consola del navegador o entorno de ejecución.

console.log("Hola mundo");

console.error("Esto es un error");

console.warn("Esto es una advertencia");

console.info("Esto es información");

const usuarios = [
	{ nombre: "Juan", edad: 35 },
	{ nombre: "Ana", edad: 39 }
];
console.table(usuarios);

// console.clear(); 

// time y timeEnd

console.time("tiempo");
for (let i = 0; i < 1000000000; i++) {}
console.timeEnd("tiempo"); // muestra el tiempo transcurrido

// dir muestra una lista de propieddes de un objeto js específico
console.dir(window);
console.dir(document);
console.dir(usuarios);

// group y groupEnd
console.group('Cursos de @JonMircha en YouTube');
console.log('Curso de JavaScript');
console.log('Curso de Node.js');
console.log('Curso PWAs');
console.log('Curso Flexbox');
console.groupEnd();

// groupCollapsed y groupEnd
console.groupCollapsed('Cursos de @JonMircha en YouTube');
console.log('Curso de JavaScript');
console.log('Curso de Node.js');
console.log('Curso PWAs');
console.log('Curso Flexbox');
console.groupEnd();

// assert
let x = 1;
let y = 2;
pruebaXY = "Se espera que x siempre sea menor que y";
console.assert(x < y, { x, y, pruebaXY }); // funciona cuando no cumple, es decir, x es mayor