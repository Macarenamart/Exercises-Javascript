
//Creo el elemento boton
const boton$$ = document.createElement('button');

//Texto interno del boton
boton$$.innerHTML = 'Click';

//Le añado el evento click al boton
boton$$.addEventListener('click', (evento) => {
    console.log(evento);
});

//Le digo al boton que pertenece al body
document.body.appendChild(boton$$);



  