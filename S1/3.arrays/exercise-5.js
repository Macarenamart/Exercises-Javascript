//Elimina el último elemento del array y muestra el primero y el último por consola.

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// Eliminamos el ultimo elemento con pop (nos devolverá el elemento eliminado)

console.log(RickAndMortyCharacters.pop());
console.log(RickAndMortyCharacters);

//Mostramos el primero y el ultimo elemento

console.log(RickAndMortyCharacters[0], RickAndMortyCharacters[4]);