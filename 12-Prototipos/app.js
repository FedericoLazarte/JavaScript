// Función constructora

/*
function Animal(nombre, genero) {
	// atributos
	this.nombre = nombre;
	this.genero = genero;
	
	this.sonar = function() {
		console.log("Hago sonidos porque estoy vivo");
	}
}

const momo = new Animal("Momo", "Hembra");
console.log(momo);

const polar = new Animal("Polar", "Macho");
console.log(polar);
*/

// prototype

/*
	Función constructora donde asignamos los métodos
	al prototipo, no la función como tal
*/

/*
function Animal(nombre, genero) {
	this.nombre = nombre;
	this.genero = genero;
}

// Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function() {
	console.log("Hago sonidos porque estoy vivo");
}

const snoopy = new Animal("Snoopy", "Macho");
const lola = new Animal("Lola Bunny", "Hembra");
console.log(snoopy);
console.log(lola);
snoopy.sonar();
*/

// Herencia con prototipos

function Animal(nombre, genero) {
	this.nombre = nombre;
	this.genero = genero;
}

Animal.prototype.sonar = function() {
	console.log("Hago sonidos porque estoy vivo");
}

const an = new Animal("Coco", "Macho");
console.log(an);

// Herencia prototipica
function Perro(nombre, genero, tamanio) {
	this.super = Animal;
	this.super(nombre, genero);
	this.tamanio = tamanio;
}

// Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobre escritura de métodos del prototipo padre en el hijo
Perro.prototype.sonar = function() {
	console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function() {
	console.log("Guau guau");
}

const snoop = new Perro("Snoopy", "Macho", "Mediano");
console.log(snoop);
snoop.sonar();
snoop.ladrar();