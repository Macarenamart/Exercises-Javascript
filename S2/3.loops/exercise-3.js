//Usa un bucle for para recorrer todos los destinos del array y
// elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
];


//Recorremos el array

for(i=0; i<placesToTravel.length; i++){

    //Seleccionamos los elementos que tengan o el valos 1 1o el 40
    //No ponemos && porque el elemento debería tener los 2 valores a la vez

    if(placesToTravel[i].id===11 || placesToTravel[i].id===40){

    //Usamos el método splice para eliminar los elementos del array.
    //Ponemos 1 en segundo lugar para indicar que sólo queremos eliminar 1 elemento del índice i

        placesToTravel.splice(i,1);
       
    }
   

}

console.log(placesToTravel);

