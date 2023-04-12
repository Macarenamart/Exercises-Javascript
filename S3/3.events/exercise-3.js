


//Selecciono el elemento input del html

const input$$ = document.querySelector('input');

//Le añado el evento input

input$$.addEventListener('input', evento => {
    console.log(evento.target.value);
})
