

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 


const copia = [...colors]

copia.splice(2,1);

console.log(colors);
console.log(copia);