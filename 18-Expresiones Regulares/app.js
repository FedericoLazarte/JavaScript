// Declaración

// Usando una literal de expresión regular
const regex = /patrón/;

// Usando constructor
// útil cuando el patrón se construye dinámicamente
const regex2 = new RegExp("patrón");

// Caracteres literales: coinciden con el texto exacto
const regex3 = /hola/;
console.log(regex3.test("hola mundo")); // true

// verifica si una cadena coincide con el patrón, devuelve true o false
const r6 = /\d+/;
console.log(r6.test("123"));

// exec() Busca una coincidencia en una cadena
// devuelve un array con la coincidencia y los grupos capturados, o null si no hay coincidencia
const r7 = /(\d{2})-(\d{2})-(\d{4})/;
const res = r7.exec("15-10-2023");
console.log(res); // (4) ['15-10-2023', '15', '10', '2023', index: 0, input: '15-10-2023', groups: undefined]

// Métodos string

// busca coincidencias en una cadena
const cadena = "Hola 123 mundo";
const r8 = /\d+/;
console.log(cadena.match(r8)); // ['123', index: 5, input: 'Hola 123 mundo', groups: undefined]

// reemplaza coincidencias con otro texto.
const cad2 = "Hola 123 mundo";
const r9 = /\d+/;
console.log(cad2.replace(r9, "456"));

// Devuelve el índice de la primera coincidencia
const cad3 = "Hola 123 mundo";
const r10 = /\d+/;
console.log(cad3.search(r10));

// Divide una cadena en un array usando una expresión regular como separados
const cad4 = "Hola, 123, mundo";
const r11 = /,/;
console.log(cad4.split(r11)); // ['Hola', ' 123', ' mundo']

// Validar un correo
const regex12 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(regex12.test("usuario@example.com")); // true

// Extraer números de una cadena
const cadena5 = "El precio es 100 y el descuento es 20";
const regex13 = /\d+/g;
console.log(cadena5.match(regex13)); // ["100", "20"]

// Reemplazar texto
const cadena6 = "Hola Juan, ¿cómo estás Juan?";
const regex14 = /Juan/g;
console.log(cadena6.replace(regex14, "Ana")); // "Hola Ana, ¿cómo estás Ana?"

// Validar contraseña: al menos 8 caracteres, una mayúscula, una minúscula y un número
const regex15 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
console.log(regex15.test("Passw0rd")); // true

// Capturar grupos
const regex16 = /(\d{2})-(\d{2})-(\d{4})/;
const resultado2 = regex16.exec("15-10-2023");
console.log(resultado2[1]); // "15" (día)
console.log(resultado2[2]); // "10" (mes)
console.log(resultado2[3]); // "2023" (año)