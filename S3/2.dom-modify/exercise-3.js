// Variable que seleccione el body en html

const bodyHtml$$ = document.querySelector("body");
//Creo el div

const myDiv$$ = document.createElement("div");

//Creamos los 6 p con un bucle for
//bucle for --- incremento hasta que sea mayor o igual que 6

for(let i=1; i<=6;i++){
    const myP$$ = document.createElement("p");

    let text$$ = document.createTextNode("Hola mundo");
  
//Meto p dentro de div y el texto dentro del parrafo

    myDiv$$.appendChild(myP$$);

    myP$$.appendChild(text$$);  

//Meto el div dedntro de body
    bodyHtml$$.appendChild(myDiv$$);
}







