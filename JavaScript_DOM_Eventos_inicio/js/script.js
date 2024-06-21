// querySelector
const heading = document.querySelector('.header__texto h2'); // retorna  de 0 a 1 elemento
heading.textContent = 'Nuevo heading';
console.log(heading);


// querySelectorALL
const enlaces = document.querySelectorAll('.navegacion a');

//console.log(enlaces);
enlaces[0].textContent = 'Nuevo textp para enlace';

// getElementById
// Ya no se usa

//Generar nuevo enlace
const nuevoEnlace = document.createElement('A');


//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//console.log(nuevoEnlace)
//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos

