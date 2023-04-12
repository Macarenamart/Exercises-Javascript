

//Selecciono el elemento input

const input$$ = document.querySelector('input');

//Le añado el evento focus

input$$.addEventListener('focus', (evento)=>{
    console.log(evento.target.value)
})