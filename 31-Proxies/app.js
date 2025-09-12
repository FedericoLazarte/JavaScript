// Proxie, te permite crear un objeto con un objeto literal

const persona = {
	nombre: '',
	apellido: '',
	edad: 0
}

const manejador = {
	set(obj, prop, valor) {
		if(Object.keys(obj).indexOf(prop) === -1) { // Para evitar que le agregue nuevas propiedad
			return console.error(`La propiedad ${prop}, no existe en el objeto persona`);
		}

		if (
          (prop === "nombre" || prop === "apellido") &&
          !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        ) {
          return console.error(`La propiedad "${prop}"" sólo acepta letras y espacios en blanco`);
        }
		obj[prop] = valor;

	}
}

const fede = new Proxy(persona, manejador);

console.log(fede);

fede.nombre = 'Federico';
fede.apellido = 'Lazarte';
fede.edad = 30;

fede.email = 'fedelazarte2015@gmail.com'; // si no se pone una valicación en el manejador
// vincula esto con el objeto persona

console.log(fede);
console.log(persona);