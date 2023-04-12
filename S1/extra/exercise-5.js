//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];




let totalVentas =0;



for(i=0; i<products.length; i++){
    totalVentas += products[i].sellCount;

}

//Una vez que tenemos el total creamos una variable que divida ese total entre el número de productos.
//Para el numero de productos vemos cuantos elementos tiene el array con .length

let mediaVentas = totalVentas/products.length;

console.log("Total de ventas", totalVentas);
console.log("Media de ventas", mediaVentas);
