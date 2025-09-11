console.log("*************** Ejercicios del 18 al 20 ***************");

/**
 * 18. Programa una función que dada una cadena cuente el número de vocales y consonantes
 */

const cantidadVocales = (palabra = undefined) => {
  if (typeof palabra !== "string")
    return `El dato ingresado ${palabra} no es un string`;

  let vocales = /[aeiouáéíóíúü]/g;
  // Me devuelve un array con los elementos del patrón
  const vocalesEncontradas = palabra.toLowerCase().match(vocales);
  return vocalesEncontradas.length;
}

const cantidadConsonantes = (palabra = undefined) => {
  if (typeof palabra !== "string") return `El dato ingresado ${palabra} no es un string`;
  return palabra.length - cantidadVocales(palabra);
}

console.log(`Cantidad de vocales de Federico ${cantidadVocales("Federico")}`);
console.log(`Cantidad de consonantes de Federico ${cantidadConsonantes("Federico")}`);

/**
 * 19. Programa una función que valide que un texto sea un nombre válido
 */

const validarNombre = (nombre = undefined) => {
  if (typeof nombre !== "string") {
    return console.warn(`El nombre ingresado ${nombre} no es un string`);
  }

  if (!nombre) {
    return console.warn(`No ingreso un valor`);
  }
  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóöÚúü\s]+$/g.test(nombre);
  return expReg
    ? console.log(`El nombre ingresado ${nombre} es válido`)
    : console.log(`El nombre ingresado ${nombre} NO es válido`);
}

validarNombre();
validarNombre(3);
validarNombre("");
validarNombre("Federico Lazarte");
validarNombre("Fede, 38");

/**
 * 20. Programa una función que válide que un texto sea un mail válido
 */

const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste un email");
  if (typeof email !== "string")
    return console.error(`El valor ingresado "${email}" no es un string`);

  // Expresión regular mejorada para validar emails
  const expReg = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  if (expReg.test(email)) {
    console.info(`${email}, es un email válido`);
  } else {
    console.warn(`${email}, no es un email válido`);
  }
};

validarEmail(123);
validarEmail("fede piola@Gmaul.com");
validarEmail("fede, rico@gmail.com");
validarEmail("fedelazarte2015@gmail.com");