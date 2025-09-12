/*
let identificadorTiempoEspera;

const temporizadorDeRetraso = () => {
	identificadorTiempoEspera = setTimeout(funcionConRetraso, 3000);
}

const funcionConRetraso = () => {
	alert("Han pasado 3 segundos");
}

temporizadorDeRetraso();

let idIntervaloDeTiempo;

const repetirCadaSegundo = () => {
	idIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
}

const mandarMensaje = () => {
	console.log("Ha pasada un segundo.");
}

repetirCadaSegundo();
*/

let idDeTemporizador;

const temporizadorDeRetraso = () => {
	idDeTemporizador = setTimeout(funcionConRetraso, 3000);
}

const funcionConRetraso = () => {
	alert("Three seconds have elapsed.");
}

const borrarAlerta = () => {
	clearTimeout(idDeTemporizador);
}

temporizadorDeRetraso();
borrarAlerta();