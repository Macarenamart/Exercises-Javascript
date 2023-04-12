// Seleccionar el segundo div
const segundo$$ = document.querySelector('div:nth-child(2)');

// Crear un nuevo elemento p
const myP$$ = document.createElement('p');
myP$$.textContent = 'Voy en medio!';

// Insertar el nuevo párrafo antes del segundo div
segundo$$.parentNode.insertBefore(myP$$, segundo$$);
