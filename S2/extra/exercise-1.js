//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
//de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
//Para filtrar las categorías puedes ayudarte de la función `.includes()`.


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

//Creamos un array vacío donde meteremos las categorias

const moviesCat=[];

//Recorremos el bucle con forof
//Recorremos las categorías de cada elemento movie con otro for of??????
//Para que no se repitan las categorías comprobamos con un if si ya estan en moviesCat con includes y 
//si no estan incluidos, es decir es false las meto en moviesCat


for (const movie of movies) {
  for (const category of movie.categories) {
    if (moviesCat.includes(category) === false) {
      moviesCat.push(category);
    }
  }
}

console.log(moviesCat);
