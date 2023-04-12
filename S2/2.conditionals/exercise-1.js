//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados 
//y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


//1º Recorremos el array

for(i=0; i < alumns.length; i++){

    //Creamos una variable en la que iremos almacenando los aprobados

    let aprobFinal =0;

    //Paso a paso le vamos viendo si ha aprobado el trimestre y lo añadimos a aprobFinal

    if(alumns[i].T1===true){
        aprobFinal++
    }

    if(alumns[i].T2===true){
        aprobFinal++
    }
    if(alumns[i].T3===true){
        aprobFinal++
    }


    //Para tener aprobado final aprobFinal debe ser mayor o igual q 2
    if(aprobFinal>=2){
        alumns[i].isApproved = true;
    }

    //Si solo tiene aprobado un trimestre esta suspenso 
    if(aprobFinal<2){
        alumns[i].isApproved = false;
    }

}

console.log(alumns);
    

