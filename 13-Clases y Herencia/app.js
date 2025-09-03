class Animal {
	constructor(nombre, genero) {
		this.nombre = nombre;
		this.genero = genero;
	}
	
	sonar() {
		console.log("Hago sonidos por que estoy vivo.");
	}
	
	saludar() {
		console.log(`Hola me llamo ${this.nombre}`);
	}
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Animal("Scooby", "Macho");

console.log(mimi);
console.log(scooby);
mimi.saludar();
mimi.sonar();
scooby.saludar();
scooby.sonar();

class Perro extends Animal{
	constructor(nombre, genero, tamanio) {
		/*
			Con el método super() se manda a llamar el 
			constructor de la clase padre
		*/
		super(nombre, genero);
		this.tamanio = tamanio;
		this.raza = null;
	}

	sonar() {
		console.log('Soy un perro y mi sonido es un ladrido');
	}

	ladrar() {
		console.log('Guaaau guauuuu');
	}
	
	// Un método estático se puede ejecutar sin necesidad de instanciar
	// la clase
	static queEres() {
		console.log("Hola soy un método estático.");
	}
	
	// Los setters y getters son métodos especiales que
	// nos permiten establecer y otener los valores de atributos
	// de nuestra clase
	get getRaza() {
		return this.raza;
	}
	
	set setRaza(raza) {
		this.raza = raza;
	}
}

const p = new Perro('Male', 'Macho', 'Grande');
console.log(p);
p.saludar();
p.sonar();
p.ladrar();

// getter y setter se usa como atributos, sino lanza error
p.setRaza = "Callejero";
console.log(p.getRaza);