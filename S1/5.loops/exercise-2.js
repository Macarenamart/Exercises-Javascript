//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.


//Bucle que va de 0 a 9 (inicio + condición + incremento)
for (let i = 0; i < 10; i++) {

    // Cuando el resto de i entre 2 sea 0
    /*"continue" permite utilizar el bucle for para filtrar los resultados en funcion de algunas condiciones 
    o cuando el valor de alguna variable coincide con un valor determinado.*/

    if (i % 2 == 0) continue;

    console.log(i);
}