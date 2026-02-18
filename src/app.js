import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


//Arrays para generar las excusas

let who = ['My neighbor\'s parrot', 'A marathon runner', 'The pizza delivery guy', 'A time traveler'];
let action = ['deleted', 'accidentally threw away', 'spilled coffee on', 'took a selfie with'];
let what = ['my final project', 'the internet router', 'my birth certificate', 'my collection of rare coins'];
let when = ['just two minutes ago', 'at the crack of dawn', 'while I was in the shower', 'exactly at midnight'];
let why = ['because he thought it was trash', 'to save the world', 'to win a bet', 'by mistake'];

//Función para generar las excusas
const excuseGenerator = () => {
  const getRandomValue = (array) => array[Math.floor(Math.random() * array.length)]
  //Construcción de la frase de excusas, haciendo referencia al array que toque en cada lugar
  return `${getRandomValue(who)} ${getRandomValue(action)} ${getRandomValue(what)} ${getRandomValue(when)} ${getRandomValue(why)}`;
};

//Ejecutar en la consola
console.log(excuseGenerator())

window.onload = function () {
  // Referencias a los elementos del DOM
  const excuseElement = document.getElementById('excusa');
  const btnElement = document.getElementById('btn-generar');
  

  // Generar la primera excusa al cargar la página
  excuseElement.innerHTML = excuseGenerator();

  // ESCUCHADOR DEL BOTÓN: Aquí ocurre la magia sin recargar
  btnElement.addEventListener("click", () => {
    excuseElement.innerHTML = excuseGenerator();
  });
};

document.addEventListener('DOMContentLoaded', excusas);