const json = {
	cadena: "Jon",
	numero: 35,
	booleano: true,
	arreglo: ["correr", "programar", "cocinar"],
	objeto: {
		twitter: "@jonmircha",
		email: "jonmircha@gmail.com"
	},
	nulo: null
}

console.log(json);
console.log(JSON);

console.log("*** JSON.parse ***");
console.log(JSON.parse("{}")); // {}
console.log(JSON.parse("[1,2,3]")); // [1, 2, 3]
console.log(JSON.parse("true")); // true
console.log(JSON.parse("19")); // 19
console.log(JSON.parse('"Hola mundo"')); // Hola mundo
console.log(JSON.parse("null")); // null
// console.log(JSON.parse("undefined")); // SyntaxError, undefined no valido para JSOn
console.log(JSON.parse('{ "x": 2, "y": 3 }')); // {x:2, y: 3}


console.log("*** JSON.stringify ***"); // Todos se convierten en string
console.log(JSON.stringify("{}")); 
console.log(JSON.stringify("[1,2,3]")); 
console.log(JSON.stringify("true"));
console.log(JSON.stringify("19")); 
console.log(JSON.stringify('"Hola mundo"')); 
console.log(JSON.stringify("null")); 
console.log(JSON.stringify("undefined")); 
console.log(JSON.stringify('{ "x": 2, "y": 3 }')); 

console.log("*** Ejemplo JSON ***");
console.log(JSON.stringify(json));
console.log(JSON.parse('{"cadena": "Jon","numero": 35, "booleano": true,"arreglo": ["correr","programar","cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}'));
