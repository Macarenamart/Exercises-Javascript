
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


// Variable que seleccione el body en html

const bodyHtml$$ = document.querySelector("body");

//Creo el div

const myDiv$$ = document.createElement("div");


//Creo ul

const ulHtml$$ = document.createElement("ul")

//Añadimos un elemento "li" por cada elemento del array apps
//creamos "li"
//asignamos texto a li que corresponderá con el elemento del array

for(let i=0;i<apps.length;i++){
    const list$$ = document.createElement("li");
    list$$.textContent = apps[i];
    //Asignamos "li" a la ul que creamos antes

    ulHtml$$.appendChild(list$$);

    //Meto ul dentro de div 

    myDiv$$.appendChild(ulHtml$$);

    //Meto el div dedntro de body
    
    bodyHtml$$.appendChild(myDiv$$);

}