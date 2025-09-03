try {
	// código que podría generar un error
	const resultado = 10 / 0;
	if (!isFinite(resultado)) {
		throw new Error("Divisón por cero no permitida");
	}
	console.log(resultado);
} catch(error) {
	// Manejo del error
	console.log("Ocurrió un error: ", error.message);
}

function dividir(a, b) {
	if (b === 0) {
		throw new Error("División por cero no permitida.");
	}
	return a / b;
}

try {
	console.log(dividir(10, 0));
} catch(error) {
	console.log(error.message); // Divisón por cero no permitida
}

try {
  console.log("Intentando ejecutar código");
  throw new Error("Error similuado")
} catch (error) {
  console.error("Error capturado:", error.message);
} finally {
  console.log("Este bloque siempre se ejecuta");
}

// Error personalizado
class MiError extends Error {
	constructor(mensaje) {
		super(mensaje);
		this.name = "MiError";
	}
}

try {
	throw new MiError("Este es un error personalizado");
} catch(error) {
	console.log(error.name); // MiError
	console.log(error.message); // Este es un error personalizado
}

// Errores asíncronos
async function obtenerDatos() {
	try {
		const respuesta = await fetch("https://api.example.com/data");
		const datos = await respuesta.json();
		console.log(datos);
	} catch(error) {
		console.error("El error al obtener datos: ", error.message);
	}
}

obtenerDatos();

// Errores promises
fetch("https://api.example.com/data")
.then((respuesta) => respuesta.json())
.then((datos) => console.log(datos))
.catch((error) => console.error("Error al obtener datos: ", error.message));

// Errores no capturados
window.onerror = function(mensaje, url, linea) {
	console.error(`Error no capturador: ${mensaje} en ${ulr}:${linea}`);
	return true; // evita que el error se propague
}