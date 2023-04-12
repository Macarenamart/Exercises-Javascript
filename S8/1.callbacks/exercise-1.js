


//Declaramos el array vacio
const numbersList = [];

//Funcion que devuelve la suma de 2 parametros
function sum(a, b) {
  return a + b;
}

//Funcion que devuelve la resta de 2 parametros
function subtract(a, b) {
  return a - b;
}

//Funcion con 3 parametros

function father(a, b, callback) {
  const result = callback(a, b);
  numbersList.push(result);
}

father(10, 5, sum);
father(20, 7, subtract);
father(15, 6, sum);

console.log(numbersList); 
