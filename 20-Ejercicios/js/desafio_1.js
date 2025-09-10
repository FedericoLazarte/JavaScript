console.log("*************** Ejercicios del 1 al 4 ***************");

/*
	1. Programa una función que cuente el número de caracteres de una cadena de texto
*/

const cantCaracters = (texto = "") => {
	if (typeof texto !== "string") throw new Error(`El dato ingresado ${texto} NO es un string.`);
	return `El texto ${texto} tiene ${texto.length}`;
}

let texto = undefined;
console.log(cantCaracters(texto));

/*
	2. Programa una función que te devuelve el texto
	recortado según el número de caracteres indicados.
*/
const recortarString = (texto = "", posInicial = 0, posFinal = 0) => {
	if (typeof texto !== "string") throw new Error(`El dato ingresdo ${texto} NO es un string`);
	if (texto === "") return "Texto ingresado vacío";
	if (posInicial >= cantCaracters(texto)) throw new Error("La posición inicial debe ser menor al largo del texto");
	if (posFinal < posInicial) throw new Error("La posición final no debe ser menor a la posición inicial");
	return texto.slice(posInicial, posFinal);
}

console.log(`La palabra original programación, palabra recortada ${recortarString("programación", 0, 4)}`);

/*
	3. Programa una función que dado un string te devuelva un array separados por un caracter
*/

const convertirEnArrayUnString = (texto = "", caracter = " ") => {
	if (typeof texto !== "string") throw new Error(`El dato ingresdo ${texto} NO es un string`);
	if (typeof caracter !== "string") throw new Error(`El dato caracter ${caracter} NO es un string`);
	return texto.split(caracter);
}

console.log(`Texto original: Hola a todo el mundo, convertido en Array: ${convertirEnArrayUnString("Hola a todo el mundo", " ")}`);


/*
	4. Programa una función que repita un texto X veces
*/
const repetirString = (texto = "", repetir = 0) => {
	if (typeof texto !== "string") throw new Error(`El dato ingresdo ${texto} NO es un string`);
	if (texto === "") return texto;
	if (repetir < 0) return texto;
	if (repetir === 0 || repetir === 1) return texto;
	let index = 1;
	let nuevaPal = "";
	while (index <= repetir) {
		if (index === repetir) nuevaPal += texto;
		else nuevaPal += texto + " ";
		index++;
	}
	return nuevaPal;
}

console.log(repetirString("hola", 3));
