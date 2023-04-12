

const numbers = [32, 21, 63, 95, 100, 67, 43];


//Funcion que comprueba si un numero es igual a 100

function cien (numero) {
    return numero === 100;
}

//Le pasamos la funcion al metodo find para que compruebe
//uno a uno los elementos del array

const final = numbers.find(cien);

console.log(resultado);