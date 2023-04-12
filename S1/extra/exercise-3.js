//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
//Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. 
//Imprime cada array en por consola.

const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}
];

//Paso 1:Creamos 3 arrays vacíos

const peliculaPequeña =[ ];
const peliculaMediana = [];
const peliculaGrande = [];


//Paso2:Luego recorremos el array
//Paso 3: Si la duración de la película es inferior a 100
//Paso 4: Metemos el elemento seleccionado del array movies con .push en el array vacío


for(i=0; i<movies.length; i++){                                //Paso 2
    if(movies[i].durationInMinutes<100){                       //Paso 3
       peliculaPequeña.push (movies[i]);                       //Paso 4    
    } 

    //Deben cumplirse las 2 condiciones, que sea mayor o igual que 100min pero menor de 200
    else if(movies[i].durationInMinutes>=100 && movies[i].durationInMinutes<200){
        peliculaMediana.push (movies[i]);
       
    }else{
        peliculaGrande.push (movies[i])
       
    }

}


console.log("Este es el array de Películas pequeñas",peliculaPequeña);
console.log("Este es el array de Películas medianas",peliculaMediana);
console.log("Este es el array de Películas grandes",peliculaGrande);