import { alReves } from "./desafio_2.js";
console.log("*************** Ejercicios del 9 al 11 ***************");


/**
 * 9. Programa una funcion que obtenga un número aleatorio entre 501 y 600.
 */

const numRandom = () => Math.floor(Math.random() * 100) + 501;

console.log(`Número random generado: ${numRandom()}`);

/**
 * 10. Programa una función que reciba un número y evalúe si es capicúa o no.
 */

const esCapicua = (val = 0) => {
	if (isNaN(val)) throw new Error(`El valor específicado ${val} NO es específicamente un número`);
	let numAlReves;
	if (typeof val === "string") {
		numAlReves = alReves(val);
	} else {
		let valString = val.toString(); // o String()
		numAlReves = alReves(valString);
	}
	return String(val) === numAlReves;
}

console.log(`Valor 1000: es capicúa? ${esCapicua(1000)}`);
console.log(`Valor "1000": es capicúa? ${esCapicua("1000")}`);
console.log(`Valor 101: es capicúa? ${esCapicua(101)}`);
console.log(`Valor "101": es capicúa? ${esCapicua("101")}`);
//console.log(`Valor "293jd": es capicúa? ${esCapicua("293jd")}`);

const calcularFactorial = (numero) => {
  if (typeof numero !== "number") return `El valor ingresado ${numero} no es un número`;
  if (numero < 0) return `El valor ingresado ${numero} no puede ser negativo`
  if (numero === 0) return 1;
  if (numero === 1) return 1;
  if (numero === 2) return 2;
  let i = 2;
  let fac = 1;
  while (i <= numero) {
    fac *= i;
    i++;
  }
  return fac;
}

console.log(`El factorial de 0 es: ${calcularFactorial(0)}`);
console.log(`El factorial de 1 es: ${calcularFactorial(1)}`);
console.log(`El factorial de 2 es: ${calcularFactorial(2)}`);
console.log(`El factorial de 3 es: ${calcularFactorial(3)}`);
console.log(`El factorial de 4 es: ${calcularFactorial(4)}`);
console.log(`El factorial de 5 es: ${calcularFactorial(5)}`);
console.log(`El factorial de -10 es: ${calcularFactorial(-10)}`);
console.log(`El factorial de hola es: ${calcularFactorial("hola")}`);