// la fecha y hora actuales
const fechaActual = new Date();
console.log(fechaActual);

// Fecha específica
const fechaEspecifica = new Date(2023, 9, 15, 14, 30, 0);
console.log(fechaEspecifica); // Sun Oct 15 2023 14:30:00 GMT-0300 (Argentina Standard Time)

// Fecha a partir de una cadena
const fechaString = new Date("2023-10-15T18:30:00");
console.log(fechaString); // Sun Oct 15 2023 18:30:00 GMT-0300 (Argentina Standard Time)

// Fecha a partir de un timestamp
// un timestap es e número de milisegundos transcurridos desde el 1 de enero de 1979
// conocido como época Unix.
const fechaTimestamp = new Date(1697380200000);
console.log(fechaTimestamp);

// Devuelve el año (4 dígitos)
const anio = new Date().getFullYear();
console.log(anio); // 2025

// devuelve el mes (0-11)
const mes = new Date().getMonth();
console.log(mes);

// Devuelve el día del mes (1-31)
const dia = new Date().getDate();
console.log(dia);

// devuelv el día de la semana (0 para domingo 6 para sábado)
const diaSemana = new Date().getDay();
console.log(diaSemana);
 
// devuelven las horas, minutos segundos y milisegundos
const horas = new Date().getHours();
const minutos = new Date().getMinutes();
const segundos = new Date().getSeconds();
const milisegundos = new Date().getMilliseconds();
console.log(horas, minutos, segundos, milisegundos);

// Establecer partes de las fechas
// setFullYear(), setMonth(), setDate(), setHours()
const fecha = new Date();
fecha.setFullYear(2024);
console.log(fecha); // Sun Sep 08 2024 19:43:01 GMT-0300 (Argentina Standard Time)

// Formateo de fechas combinando métodos, JS no tiene métodos nativos para formatear fechas
const f = new Date();
console.log(f.toLocaleDateString()); // Formato local (ej: 15/10/2023)
console.log(f.toLocaleTimeString()); // Hora local (ej: 14:30:00)

// Obtener el timestamp
// devuelve el número de milisegundos desde el 1 de enero de 1970
const ts = new Date().getTime();
console.log(ts);

// Comparar fechas, usando (<, >, ==, etc)
const f1 = new Date(2023, 9, 15);
const f2 = new Date(2023, 10, 1);
console.log(f1 < f2); // true

// Calcular diferencias entre fechas
// Restar dos objetos Date para obtener la diferencia en milisegundos
const f3 = new Date(2023, 9, 15);
const f4 = new Date(2023, 10, 1);
const diferencia = f3 - f4;
console.log(diferencia / (1000 * 60 * 60 * 24));



