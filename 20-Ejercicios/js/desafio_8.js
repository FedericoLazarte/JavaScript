console.log("*************** Ejercicios del 24 al 26 ***************");

/**
 * 24. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos
 * el primero tendrá los números ordenados de forma ascendente y el segundo de forma descendiente
 */

const objetoConArreglos = (arr = undefined) => {
  if (!(arr instanceof Array)) return `El dato ingresado ${arr} no es un array`;
  if (arr.length === 0) return `El array ingresado está vacío`;
  for (let n of arr) {
    if (!n) return `El array debe ser de números`;
    if (typeof n !== "number") return `El array debe ser de números`;
  }

  // Tengo que trabajar con copias del array debido a que sort me modifica el array original
  const arregloAsc = [...arr].sort();
  const arregloDes = [...arr].sort().reverse();

  return {
    arregloAsc,
    arregloDes
  };
}

console.log(objetoConArreglos([3, 4, 1, 6, 8, 5]));

/**
 * 25. Programa una función que dado un arreglo de elementos, elimine los duplicados
 */

const eliminarDuplicados = (arr = undefined) => {
  if (!(arr instanceof Array)) return `El dato ingresado ${arr} no es un array`;
  if (arr.length === 0) return `El array ingresado está vacío`;
  const conjunto = new Set(arr);
  return [...conjunto];
}

console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]));

/**
 * 26.Programa una función que dado un arreglo de números obtenga el promedio
 */

const promedio = (arr = undefined) => {
   if (!(arr instanceof Array))
     return `El dato ingresado ${arr} no es un array`;
   if (arr.length === 0) return `El array ingresado está vacío`;
   for (let n of arr) {
     if (!n) return `El array debe ser de números`;
     if (typeof n !== "number") return `El array debe ser de números`;
   }
  return arr.reduce((anterior, actual) => anterior + actual) / arr.length;
}

console.log(promedio([1, 2, 3]));
