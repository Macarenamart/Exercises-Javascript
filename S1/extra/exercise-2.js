//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];

const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, 
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false}, 
    {name: "Rice", isVegan: true}, 
    {name: "Pasta", isVegan: true}
];

let j = 0; // array fruits


//Paso 1: Primero creamos un bucle que recorre por completo el objeto
for (let i=0; i<foodSchedule.length; i++ ){

    //Paso 2: Si del objeto "foodSchedule" vegano es igual a false o diferente a true
    //Paso 3: Reemplazamos el alimento que no es vegano con una fruta del array fruits
    //Paso 4: Actualizamos la propiedad del elemento a true

    if(foodSchedule[i].isVegan !== true){            //Paso 2
        foodSchedule[i].name = fruits[j];            //Paso 3
        foodSchedule[i].isVegan = true;              //paso 4
        j++;

    }

}

//Vemos el nuevo array por consola

console.log(foodSchedule);

