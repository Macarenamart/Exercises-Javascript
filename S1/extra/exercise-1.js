//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuario menor de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuario mayor de edad:".

const users = [
    { name: "Abel", years: 43 },  
    { name: "Maria", years: 18 },
    { name: "Pedro", years: 14 },
    { name: "Samantha", years: 32 },
    { name: "Raquel", years: 16 }
];


//Bucle que empieza en el elemento cero y recorre toda la longitud del objeto --- Bucle for (inicio + condición + incremento)

for (let i = 0; i < users.length; i++) {

    // Seleccionamos el objeto y el atributo (users[i].years)
    
    if (users[i].years < 18) {
        console.log("Usuario menor de edad:" + users[i].name);
    } else {
        console.log("Usuario mayor de edad:" + users[i].name);
    }
}