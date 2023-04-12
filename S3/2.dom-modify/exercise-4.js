

//Selecciono el body

const bodyHtml$$ = document.querySelector("body");

//Creo p

const myP$$ = document.createElement("p");

//Inserto texto

const text$$  = document.createTextNode("Soy dinámico");

//Texto dentro de p

myP$$.appendChild(text$$);

//p dentro de body

bodyHtml$$.appendChild(myP$$);