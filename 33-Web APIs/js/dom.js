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