

// Selecciono todos los div que tengan la clase fn-insert-here
const divsInsert$$ = document.querySelectorAll('.fn-insert-here');

// Con un for recorremos todos los p
for (let i = 0; i < divsInsert$$.length; i++) {
// Creo un nuevo p y añado el texto
  const nuevoP$$ = document.createElement('p');
  //Creo el texto
  const text$$ = document.createTextNode('Voy dentro!');

//Le digo al texto que pertenece a p
   
   nuevoP$$.appendChild(text$$);


// le decimos al parrafo que pertenece al div
  divsInsert$$[i].appendChild(nuevoP$$);
}
