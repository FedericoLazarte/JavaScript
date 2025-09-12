const mapa = new Map();

mapa.set('nombre', 'federico');
mapa.set('apellido', 'lazarte');
mapa.set('edad', 30);

console.log(mapa);
console.log(mapa.size);

console.log(mapa.has('correo')); // false
console.log(mapa.has('nombre')); // true
console.log(mapa.get('nombre'));
mapa.set('nombre', 'malen');
console.log(mapa.get('nombre'));
mapa.delete('apellido');

// También se puede hacer esto
mapa.set(19, 'deicinueve');
mapa.set(false, 'falso');
mapa.set({}, {});

console.log(mapa);

for(let [key, value] of mapa) { // Estoy usando desestructuración
	console.log(`LLave: ${key}, Valor ${value}`);
}

const mapa2 = new Map([
		['nombre', 'flopy'],
		['edad', 7],
		[null, 'nulo']
	]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);