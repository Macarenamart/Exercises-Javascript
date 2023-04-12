//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
//posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

const array =['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

//Función con 2 parámetros --- array y texto
function findArrayIndex(array, text) {
    for(let i=0; i<array.lenght;i++)
        if(array[i]===text){
            return i;
        }
          
}


console.log(findArrayIndex)


