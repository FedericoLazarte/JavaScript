console.log("*************** Ejercicios del 5 al 8 ***************");

/*
	5. Programa una función que invierta las palabras de una cadena de texto.
*/

export const alReves = (texto = "") => {
	if (typeof texto !== "string") throw new Error(`El dato ingresado ${texto} NO es un string.`);
	return texto.split("").reverse().join("");
}

console.log(`Palabra original: federico, al revés: ${alReves("federico")}`);

/*
	6. Programa una función para contar el número de veces que se repite una pulabra en un texto largo.
*/

const cantAparicionesPalabra = (texto = "", palabra = "") => {
	if (typeof texto !== "string") throw new Error(`El dato ingresado ${texto} NO es un string.`);
	if (typeof palabra !== "string") throw new Error(`El dato ingresado ${palabra} NO es un string.`);
	const regex = new RegExp(`\\b${palabra}\\b`, "gi"); // g buscar todas las ocurrencias, i ignorar mayus minus
	const coincidencias = texto.match(regex);
	return coincidencias ? coincidencias.length : 0;
}

let texto = "hola como estas hola, todo bien, hola que chay";
console.log(`La palabra hola en el texto: ${texto}, se repite ${cantAparicionesPalabra(texto, "hola")} vez/veces`);


/*
	7. Programa una función que valide si una palabra o frase dada, es un palíndromo
*/

const esPalindromo = (texto = "") => {
	if (typeof texto !== "string") throw new Error(`El dato ingresado ${texto} NO es un string.`);
	if (texto === "") return texto;
	let palAlReves = alReves(texto);
	return texto.toLowerCase() === palAlReves.toLowerCase();
}

console.log(esPalindromo("Menem"));
console.log(esPalindromo("Juan"));
console.log(esPalindromo("Anana"));

/*
	8. Programa una función que elimine cierto patrón de caracteres de un texto dado.
*/
const eliminarCaractres = (texto = "", patron = "") => {
  (!texto)
    ? console.warn("No ingresaste un texto")
    : (!patron)
      ? console.warn("No ingreaste un patrón de caracteres")
      : console.info(texto.replace(new RegExp(patron, "ig"), ""));
}

console.log(eliminarCaractres("federico", "e"));