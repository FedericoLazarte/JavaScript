function cuadradoPromise(value) {
	if(typeof value !== 'number') return Promise.reject(`Error el valor ingresado ${value} no es un número`);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				value,
				result: value * value
			}); // return positivo
		}, 0 | Math.random() * 1000);
	});
}

cuadradoPromise(0)
	.then(obj => {
		console.log('Inicia Promise');
		console.log(`Promise: ${obj.value}, ${obj.result}`);
		return cuadradoPromise(1);
	})
	.then(obj => {
		console.log(`Promise: ${obj.value}, ${obj.result}`);
		return cuadradoPromise(2);
	})
	.then(obj => {
		console.log(`Promise: ${obj.value}, ${obj.result}`);
		return cuadradoPromise(3);
	})
	.then(obj => {
		console.log(`Promise: ${obj.value}, ${obj.result}`);
		return cuadradoPromise(4);
	})
	.then(obj => {
		console.log(`Promise: ${obj.value}, ${obj.result}`);
		return cuadradoPromise(5);
	})
	.then(obj => {
		console.log(`Promise: ${obj.value}, ${obj.result}`);
		console.log('Fin Promise');
	})
	.catch(error => console.error(error));

	// async/await

	function cuadradoPromise(value) {
	if(typeof value !== 'number') return Promise.reject(`Error el valor ingresado ${value} no es un número`);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				value,
				result: value * value
			}); // return positivo
		}, 0 | Math.random() * 1000);
	});
}

async function funcionAsincronaDeclarada() {
	try {
		console.log('Inicio de Async Function');
		 // await: Vas a esperar el resultado de la función antes de seguir, si no, 
		// devuelve undefined, debido a no espera el resultado
		let obj = await cuadradoPromise(0);
		console.log(`Async Function: ${obj.value}, ${obj.result}`);

		obj = await cuadradoPromise(1);
		console.log(`Async Function: ${obj.value}, ${obj.result}`);
	} catch(error) {
		console.error(error);
	}
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
	try {
		console.log('Inicio de Async Function');
		 // await: Vas a esperar el resultado de la función antes de seguir, si no, 
		// devuelve undefined, debido a no espera el resultado
		let obj = await cuadradoPromise(0);
		console.log(`Async Function: ${obj.value}, ${obj.result}`);

		obj = await cuadradoPromise(1);
		console.log(`Async Function: ${obj.value}, ${obj.result}`);
	} catch(error) {
		console.error(error);
	}
}