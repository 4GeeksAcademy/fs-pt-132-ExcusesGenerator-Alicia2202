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
  
  const excuseElement = document.getElementById('excusa');
  const btnElement = document.getElementById('btn-generar');
  //Selecciona imagen
  const imgElement = document.getElementById('imagen-excusa');

  // Generar la primera excusa al cargar la página
  const updateAll = () => {
    // Cambia el texto de la excusa
    excuseElement.innerHTML = excuseGenerator();

    // Cambia la imagen (añadimos un número aleatorio para que no se repita)
    const randomNumber = Math.floor(Math.random() * 1000);
    imgElement.src = `https://picsum.photos/400/300?random=${randomNumber}`;
  };
  updateAll();

  // Botón para cambiar de excusa
  btnElement.addEventListener("click", updateAll);
};

