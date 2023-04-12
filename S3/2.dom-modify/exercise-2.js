// 1º Creamos  div y p

let myDiv$$ = document.createElement("div");
let myP$$ = document.createElement("p");

//2ºLe decimos que p es hijo de div

myDiv$$.appendChild(myP$$);

//3º Selecciono el body

let bodyHtml$$ = document.querySelector("body");

//Meto el div dentro del body

bodyHtml$$.appendChild(myDiv$$);

//Creamos un texto

let text$$ = document.createTextNode("Hola mundo");

//Le decimos que texto es hijo de p

myP$$.appendChild(text$$);


