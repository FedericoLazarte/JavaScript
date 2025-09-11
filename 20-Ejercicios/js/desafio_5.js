console.log("*************** Ejercicios del 15 al 17 ***************");

/**
 * 15. Programa una función para convertir de base 
 * binaria a decimal y viceversa (100, 2) devolverá
 * 4 en basee 10
 */

const convertirBase = (numero = undefined, base = undefined) => {
  if (typeof numero !== "number") return `El valor ingresado ${numero} no es un número`;
  if (typeof base !== "number" ) return `La base ingresada ${base} es incorrecta`;
  
  if (base === 2) {
    return parseInt(numero.toString(2));
  } else {
    return parseInt(numero, 2);
  }
}

console.log(convertirBase(4, 2));
console.log(convertirBase(1000, 10));

/**
 * 16. Programa una función que devuelva el monto
 * final después de aplicar un descuento a una
 * cantidad dada (1000, 20) 800
 */

const aplicarDescuento = (montoFinal = undefined, descuento = undefined) => {
  if (typeof montoFinal !== "number")
    return `El valor ingresado ${montoFinal} no es un número`;
  if (typeof descuento !== "number")
    return `El valor ingresado ${descuento} no es un número`;
  if (descuento < 0)
    return `El descuento ingresado ${descuento} no puede ser negativo`;
  if (montoFinal < 1)
    return `El monto final ingresado ${montoFinal} debe ser mayor a 0`;
  if (descuento === 0) return montoFinal;

  let descontarAlMontoFinal = montoFinal - montoFinal * (descuento / 100);
  return descontarAlMontoFinal;
};

console.log(`Aplicar descuento del 20% a $1000 ${aplicarDescuento(1000, 20)}`);
console.log(`Aplicar descuento del 0% a $1000 ${aplicarDescuento(1000, 0)}`);
console.log(`Aplicar descuento del 30% a $0 ${aplicarDescuento(0, 30)}`);
console.log(`Aplicar descuento del 20% a $-50 ${aplicarDescuento(-50, 20)}`);
console.log(`Aplicar descuento del -10% a $4000 ${aplicarDescuento(4000, -10)}`);

/**
 * 17. Programar una función que dada una fecha nos diga cuántos años han pasado hasta la actualidad
 */

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return "No ingresaste una fecha";
  if (!(fecha instanceof Date)) return `El valor ingresado no es una fecha válida`;
  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return (Math.sign(aniosHumanos) === -1)
    ? `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
    : Math.sign(aniosHumanos) === 1
      ? `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      : `Estamos en el año actual ${fecha.getFullYear()}.`;
}




