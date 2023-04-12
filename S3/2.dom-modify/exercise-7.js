

//Selecciono los nodos que tengan la clase .fn-remove-me
//Seleccionamos todos y ponemos entre paréntesis el nombre de la clase

const remove$$ = document.querySelectorAll(".fn-remove-me");

//Recorro todos los elementos con un bucle for

for(let i=0; i<remove$$.length;i++){

//Llamamos al método remove para eliminarlo del docu.
    remove$$[i].remove();
}