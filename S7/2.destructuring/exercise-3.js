
//Es una función con un objeto con 2 propiedades
const animalFunction = () => {
    return {name: 'Bengal Tiger', 
    race: 'Tiger'}


const {name,race} = animalFunction();


console.log(name);
console.log(race);