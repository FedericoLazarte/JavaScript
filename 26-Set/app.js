const set = new Set([1,2,3,3,4,5,false,false,{},{}, 'hola','Hola']);
console.log(set);
console.log(set.size); // Longidut

const set2 = new Set();

set2.add(1);
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(false);
set2.add({});

console.log(set2);

// Recorrer set
for(let elemento of set) {
	console.log(elemento);
}

// Recorrer set2
set2.forEach(elemento => console.log(elemento));

let arr = Array.from(set);// Vuelve a un objeto como un iterable
console.log(arr[0]); 

// eliminar valores
set.delete('Hola');
console.log(set);

console.log(set.has('hola')); // true, verificar si hay un elemento
console.log(set.has(19)); // false

set2.clear(); // limpiar set
console.log(set2);