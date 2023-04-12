//Cambia el primer elemento de cars a "Ford"


const cars = ['Saab', 'Volvo', 'BMW'];

//Forma 1 --- Método unshift --- Agregando uno varios elementos al principio del array.

//cars.unshift("Ford");

//console.log(cars);

//Forma2 --- Método splice --- Cambiando el primer elemento del array por ford.
//Estructura --- Donde empieza, donde acaba, elemento/s que ponemos en su lugar.

cars.splice(0, 1, "Ford");
console.log(cars);