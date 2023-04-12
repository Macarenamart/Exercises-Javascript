



const cities = [
    {isVisited:true, name: 'Tokyo'}, 
    {isVisited:false, name: 'Madagascar'},
    {isVisited:true, name: 'Amsterdam'}, 
    {isVisited:false, name: 'Seul'}
];


const visited = cities.map(city => {
    if (city.isvisited){
        return `${city.name} (visitado)`;
    }else{
        return {city.name};
})

console.log(cities);