console.log("*************** Ejercicios del 21 al 23 ***************");

/**
 * 21. Programa una función que dado un array numérico devuelve otro array con los números elevados
 * al cuadrado
 */

const devolverArrayAlCuadrado = (arr = []) => {
  if (!(arr instanceof Array)) return(`El dato ingresado ${arr} no es un Array!!`);
  if (arr.length === 0) return (`El array ingresado está vacío`);
  for (let elemento of arr) {
    if (!elemento) return `El arreglo debe ser de solo números`
    if (typeof elemento !== "number") return `El arreglo debe ser de solo números`;
  }
  return arr.map(el => el * el);
}

console.log(devolverArrayAlCuadrado("hola"));
console.log(devolverArrayAlCuadrado([]));
console.log(devolverArrayAlCuadrado([1, "2", 3]));
console.log(devolverArrayAlCuadrado([1, 2, 3, NaN]));
console.log(devolverArrayAlCuadrado([1, 2, 3]));

/**
 * 22. Programa una función que dado un array devuelva el número más alto y el más bajo
 */

const elementoMaximoElementoMinimo = (arr = undefined) => {
  if (!(arr instanceof Array))
    return `El dato ingresado ${arr} no es un Array!!`;
  if (arr.length === 0) return `El array ingresado está vacío`;
  for (let elemento of arr) {
    if (!elemento) return `El arreglo debe ser de solo números`;
    if (typeof elemento !== "number")
      return `El arreglo debe ser de solo números`;
  }

  return `El valor menor del array es ${Math.min(...arr)} y el valor mayor es ${Math.max(...arr)}`;
}

console.log(elementoMaximoElementoMinimo("Hola wachin"));
console.log(elementoMaximoElementoMinimo([]));
console.log(elementoMaximoElementoMinimo([10, 3, 4, 2, 7, 9]));

/**
 * 23. Programa una función que dado un array de números devuelva un objeto con 2 arreglos
 * el el primero almacena los números pares y en el segundo los impares
 */

const arregloDeParesImpartes = (arr = undefined) => {
   if (!(arr instanceof Array))
     return `El dato ingresado ${arr} no es un Array!!`;
  if (arr.length === 0) return `El array ingresado está vacío`;
  for (let elemento of arr) {
    if (!elemento) return `El arreglo debe ser de solo números`;
    if (typeof elemento !== "number")
      return `El arreglo debe ser de solo números`;
  }
  
  const arrPares = arr.filter(e => e % 2 === 0);
  const arrImpares = arr.filter(e => e % 2 !== 0);

  return `Arreglos pares ${arrPares}, arreglos impares: ${arrImpares}`;
}

console.log(arregloDeParesImpartes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


