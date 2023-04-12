//Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
//intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
//resultante.





//Función que se llame "swap" con un array y 2 parámetros
//Asignacion multiple [a,b] = [b,a]

function swap (arr,a,b){
    [arr[a], arr[b]] = [arr[b], arr[a]];
    return arr;
}



let arr = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
swap(arr,1,3);
console.log(arr);