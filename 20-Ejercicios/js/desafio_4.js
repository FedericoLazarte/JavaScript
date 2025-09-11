console.log("*************** Ejercicios del 12 al 14 ***************");

/**
 * 12. Programa una función que determine si un número es primo
 */

const esPrimo = (numero) => {
  if (typeof numero !== "number" || isNaN(numero)) return `El dato ingresado ${numero} no es un número`;
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

console.log(`Èl número -1 es primo? ${esPrimo(-1)}`);
console.log(`Èl número 0 es primo? ${esPrimo(0)}`);
console.log(`Èl número 1 es primo? ${esPrimo(1)}`);
console.log(`Èl número 2 es primo? ${esPrimo(2)}`);
console.log(`Èl número 3 es primo? ${esPrimo(3)}`);
console.log(`Èl número 4 es primo? ${esPrimo(4)}`);
console.log(`Èl número 5 es primo? ${esPrimo(5)}`);
console.log(`Èl número 9 es primo? ${esPrimo(9)}`);
console.log(`Èl número "3" es primo? ${esPrimo("3")}`);

/**
 * 13. Programa una función que determine si un número
 */

const parImpar = (numero) => {
  if (typeof numero !== "number" || isNaN(numero)) return `El dato ingresado ${numero} no es un número`;
  return numero % 2 === 0
    ? `El valor ingresado ${numero} es par!!`
    : `El valor ingresado ${numero} NO es par!!`;
}

console.log(parImpar(0));
console.log(parImpar(1));
console.log(parImpar(2));
console.log(parImpar(3));
console.log(parImpar(4));

/**
 * 14. Program una función para convertir grados Celsius a Fahrenheit y viceversa
 */

const convertirACelsius = (grado) => {
  if (typeof grado !== "number" || isNaN(grado)) return `Temperatura ingresada ${grado} incorrecta`;
  let celcius = (grado - 32) * 0.555;
  return celcius;
}

const convertirAFahrenheit = (grado) => {
  if (typeof grado !== "number" || isNaN(grado))
    return `Temperatura ingresada ${grado} incorrecta`;
  let fahrenheit = (grado * (9 / 5)) + 32;
  return fahrenheit;
}

console.log(`20° Fahrenheit a celcius es: ${convertirACelsius(20)}`);
console.log(`20° celcius a fahrenheit es: ${convertirAFahrenheit(20)}`);