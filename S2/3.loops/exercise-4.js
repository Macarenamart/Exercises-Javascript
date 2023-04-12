//Usa un bucle forof para recorrer todos los juguetes y 
//elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'},
     {id: 40, name: 'El gato con Guantes'},
     {id: 42, name: 'El gato felix'}
    ];

    for(const toy of toys){
        if(toy.name.includes("gato")){

    //Ahora debemos saber el índice de los juguetes que contienen la palabra gato para eliminarlos

    const index = toys.indexOf(toy);

    //Eliminamos con splice los elementos que corresponden a los index anteriores

    toys.splice(index,1);

        }
    }

   
    console.log(toys);
  

    //No me funciona solo me elimina "el gato con guantes"




