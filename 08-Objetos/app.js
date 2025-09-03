let a = new String('Hola');
console.log(a);

const b = {};
console.log(b);

const c = new Object();
console.log(c);

// Este es un objeto literal
const fede = {
	nombre: "Federico",
	apellido: "Lazarte",
	edad: 30,
	pasatiempos: ["Jugar videojuegos", "Jugar con gatitos"],
	soltero: true,
	contacto: {
		email: "fedelazarte2015@gmail.com",
		movil: "1123949138"
	},
	saludar: function() {
		console.log("hola");
	},
	decirMiNombre() {
		console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
	}
};
console.log(fede);

// Imprimo lo que hay en la propiedad fede["propiedad"]
console.log(fede["nombre"]); // Federico
console.log(fede["apellido"]); // Lazarte

// Obtengo el valor de una propiedad con la notación de punto
console.log(fede.nombre); // Federico
console.log(fede.edad); // 30
console.log(fede.soltero); // true
console.log(fede.pasatiempos[1]); // Jugar con gatitos
console.log(fede.contacto); // {email: 'fedelazarte2015@gmail.com', movil: '1123949138'}
console.log(fede.contacto.email); // fedelazarte2015@gmail.com

// Llamo a los métodos que tiene el objeto
fede.saludar();
fede.decirMiNombre();

// Lista todas las llaves del objeto
console.log(Object.keys(fede)); // ['nombre', 'apellido', 'edad', 'pasatiempos', 'soltero', 'contacto', 'saludar', 'decirMiNombre']

// Me lista todos los valores
console.log(Object.values(fede)); // ['Federico', 'Lazarte', 30, Array(2), true, {…}, ƒ, ƒ]

// Consulta si existe una propiedad en específica en el objeto
console.log(fede.hasOwnProperty("nombre")); // true
console.log(fede.hasOwnProperty("nacimiento")); // false