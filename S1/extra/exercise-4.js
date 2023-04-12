//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

 //1º creamos la variable donde vamos a ir sumando los elementos y la inicializamos a 0
 
 let totalVentas =0;

 //Recorremos el array con for y vamos metiendo en la variable totalVentas cada sellCount con el operador de asignación para que vaya sumando cada elemento

 for(i=0; i<products.length; i++){
    totalVentas += products[i].sellCount;
    
 }

 console.log("Total de ventas", totalVentas);