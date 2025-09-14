console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.html); // Undefined, no hay
console.log(document.documentElement); // Para ver el html
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
	console.log(document.getSelection().toString()); // sirve cuando selecciono algo de la página
}, 5000);

// Se agrega al final
document.write("<h2>Hola Mundo desde el DOM</h2>");


console.log("********** Nodos, Elementos y Selectores **********");

// Averiguar cuáles son los nodos en HTML

// métodos que ya no se utilizan
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

// fueron reemplazados por, query selector solo devuelve la primera coincidencia, para todas es con all
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
document.querySelectorAll("#menu li");

console.log(document.getElementById("menu"));



console.log("********** Atributos y Data-Attributes **********");

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

// establecer nuevo valor a los atributos
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");

console.log($linkDOM.hasAttribute("rel")); // true

$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); // fase

// Data Attributes, solo pide que inicien con data-
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); 
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-description", "Modelo de Objeto de Document");
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "Suscribite a el canal y comparte";
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id")); // true


console.log("********** Estilos y variables CSS **********");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

// Variables CSS - Custom Properties CSS
const $html = document.documentElement; // para quedarme con el html
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;


$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);

console.log("********** Clases CSS **********");

const $card = document.querySelector(".card");
console.log($card);

console.log($card.className);
console.log($card.classList); // Devuelve un DOMTokenList de todas las clases
console.log($card.classList.contains("rotate-45")); // false
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); // true 

console.log($card.className);
console.log($card.classList); // Devuelve un DOMTokenList de todas las clases

$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45")); // false 

// si tiene el elemento la quita, sino lo agrega
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); // true 

$card.classList.replace("rotate-45", "rotate-135")

// agregar y quitar varias clases, lo mismo para remove, también toggle
$card.classList.add("opacity-80", "sepia");


console.log("********** Texto y HTML **********");

const $whatIsDOM = document.getElementById("que-es");

let text = `
	<p>El modelo de Objetos del Documento (<b><i>DOM Document Object Model</i></b>) es un API para
	documentos HTML y XML</p>
	<p>
		Éste proveé una representación estructural del documento, permitiendo modificar su contenido y
		presentación visual mediante código JS.
	</p>
	<p>
		<mark>El DOM no es parte de la especificación de JavaScript, es una API para navegadores</mark>
	</p>

	`;

$whatIsDOM.innerText = text; // inner texto no reconoce elementos HTML, respeta identacíón
$whatIsDOM.textoContent = text; // lo mismo que inner pero no respeta identación
$whatIsDOM.innerHTML = text; // este agrega los elementos html, pero los 3 parrafos se agregan dentro del párrafo, mala práctica
$whatIsDOM.outerHTML = text; // usar este ya que reemplaza el párrafo original



console.log("********** Traversing: Recorriendo el DOM **********");

const $cards = document.querySelector(".cards");

console.log($cards);

console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement); // body

console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

console.log($cards.previousElementSibling); // Hermano anterior
console.log($cards.nextElementSibling); // Hermano que sigue

// Busca el ancestro, padre más cercano
console.log($cards.children[3].closest("section")); 


console.log("********** Creando Elementos y Fragmentos **********");

const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");

$img.setAttribute("src", "http://ximg.es/200x200/653/fff");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure);

// otra manera
const $figure2 = document.createElement("figure");
$figure2.innerHTML = `
	<img src="http://ximg.es/200x200/173/fff" alt="People"/>
	<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
	const $li = document.createElement("li");
	$li.textContent = el;
	$ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"];
const $ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

// Buena práctica es usar fragmentos

const meses = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre"
];

const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach(el => {
	const $li = document.createElement("li");
	$li.textContent = el;
	$fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);


console.log("********** Templates HTML **********");

const $template = document.getElementById("template-card").content;
const $fragmento = document.createDocumentFragment();
const cardContent = [
	{
		title: "Tecnología",
		img: "http://ximg.es/200x200/505/522"
	},
	{
		title: "Animales",
		img: "http://ximg.es/200x200/505/522"
	},
	{
		title: "Arquitectura",
		img: "http://ximg.es/200x200/505/522"
	},
	{
		title: "Gente",
		img: "http://ximg.es/200x200/505/522"
	},
	{
		title: "Naturaleza",
		img: "http://ximg.es/200x200/505/522"
	},
	{
		title: "Tecnología",
		img: "http://ximg.es/200x200/505/522"
	},
];

cardContent.forEach(el => {
	$template.querySelector("img").setAttribute("src", el.img);
	$template.querySelector("img").setAttribute("alt", el.title);
	$template.querySelector("figcaption").textContent = el.title;
	// clonar estructura
	let $clone = document.importNode($template, true);
	$fragmento.appendChild($clone);
});

$cards.appendChild($fragmento);

console.log("********** Modificando elementos Old Style **********");

const $newCard = document.createElement("figure");

$newCard.innerHTML = `
	<img src="http://ximg.es/200x200/505/522" alt="Any"/>
	<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

$cards.replaceChild($newCard, $cards.children[2]);

// insertar antes de ...
$cards.insertBefore($newCard, $cards.firstElementChild);

// eliminar
$cards.removeChild($cards.lastElementChild);

const $cloneCards = $cards.cloneNode(true);

document.body.appendChild($cloneCards);

console.log("********** Modificando elementos Cool Style **********");

//$cards.insertAdjacentElement("beforebegin", $newCard);
//$cards.insertAdjacentElement("afterbegin", $newCard);
//$cards.insertAdjacentElement("beforeend", $newCard);
$cards.insertAdjacentElement("afterend", $newCard);

let $contenCard = `
	<img src="http://ximg.es/200x200/505/522" alt="Any"/>
	<figcaption></figcaption>
`;

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "NONO");
$newCard.insertAdjacentHTML("beforeend", $contenCard);


//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);

console.log("********** Manejadores de Eventos **********");

// Event handler
function holaMundo() {
	alert("Hola Mundo");
	console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");

// los eventos semánticos solo pueden usar una función
$eventoSemantico.onclick = holaMundo; // Sin paréntesis la función
$eventoSemantico.onclick = function(e) {
	alert("Hola mundo Manejador de Eventos Semántico");
	console.log(e);
	console.log(event);
}



const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
	alert("Hola Mundo Manejador de Eventos Múltple");
	console.log(e);
	console.log(e.type);
	console.log(e.target);
	console.log(event);
});

console.log("********** Eventos con Parámetros y Remover Eventos **********");

function saludar(nombre = "Desconocido/a") {
	alert(`Hola ${nombre}`);
}

// Los eventos no deen tener parámetros que no sea event, me sale Hola [object PointerEvent]
$eventoMultiple.addEventListener("click", saludar);

// De esta manera sale Hola desconocido/a
$eventoMultiple.addEventListener("click", () => {
	saludar();
	saludar("Federico");
});

// Elimar evento, solo con manejadores múltiples
const $eventoRemover = document.getElementById("evento-remover");

// Para remover no puede ser una función flecha o anónima

const removerDobleClick = (e) => {
	alert(`Removiendo el evento de tipo ${e.type}`);
	console.log(e);
	$eventoRemover.removeEventListener("dblclick", removerDobleClick);
}
$eventoRemover.addEventListener("dblclick",removerDobleClick);

console.log("********** Flujo de Eventos (Burbuja y Captura) **********");

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e) {
	console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}

$divsEventos.forEach(div => {
	// false estamos en burbuja o sin especificar, con true es el modo captura
	div.addEventListener("click", flujoEventos, false);
});

console.log("********** stopPropagation & preventDefault **********");

// usar e.stoPropagation() en flujoEventos(e)

const $linkEventos = document.querySelector(".eventos-flujo a");

$linkEventos.addEventListener("click", e => {
	alert("Hola baboso");
	e.preventDefault();
	e.stopPropagation();
});

console.log("********** Delegación de Eventos **********");

// Al delegar ya no necesitamos propagación
document.addEventListener("click", (e) => {
	console.log("Click en, ", e.target);

	if (e.target.matches(".eventos-flujo div")) {
		flujoEventos(e);
	}

	if (e.target.matches(".eventos-flujo a")) {
		alert("Hola waaachum");
		e.preventDefault();
	}
});

console.log("********** BOM Propiedad y Eventos **********");

window.addEventListener("resize", e => {
	console.log("Evento resize");
	console.log(window.innerWidth); // Tamaño ancho ventaja
	console.log(window.innerHeight);
	console.log(window.outerWidth);
	console.log(window.outerHeight);
});


window.addEventListener("scroll", e => {
	console.log("Evento Scroll");
	console.log(window.scrollX);
	console.log(window.scrollY);
});

window.addEventListener("load", e => {
	console.log("Evento load");
	console.log(window.screenX);
	console.log(window.screenY);
});

// Este es más eficiente? pra peticiones asincrónas
document.addEventListener("DOMContentLoaded", e => {
	console.log("Evento DOMContentLoaded");
	console.log(window.screenX);
	console.log(window.screenY);
});

console.log("********** BOM Métodos **********");
