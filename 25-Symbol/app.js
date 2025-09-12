let id = "hola";
let id2 = "hola";
console.log(id === id2); // true

let id3 = Symbol("id");
let id4 = Symbol("id");

console.log(id3 === id4); // false
console.log(id3, id4);
console.log(typeof id3, typeof id4);

const NAME = Symbol();
console.log(NAME);

const persona = {
	[NAME]: "Federico" // el atributo no se ve
};
console.log(persona); // este objeto tiene una propiedad symbol, {Symbol(): 'Federico'}

persona.NAME = "Anahí"; // Se cre una propiedad NAME con el valor Anahí, no afecta al Symbol anterior, {NAME: 'Anahí', Symbol(): 'Federico'}
console.log(persona);

console.log(persona.NAME); // Anahí
console.log(persona[NAME]); // Federico

const SALUDAR = Symbol(); // Si le agregamos un valor, se ve Symbol(valor)

persona[SALUDAR] = function() {
	console.log("Hola");
}

console.log(persona); // {NAME: 'Anahí', Symbol(): 'Federico', Symbol(): ƒ}

persona[SALUDAR](); // Hola

for (let propiedad in persona) {
	console.log(propiedad);
	console.log(persona[propiedad]);
}

// Listar symbol
console.log(Object.getOwnPropertySymbols(persona)); // 2) [Symbol(), Symbol()]