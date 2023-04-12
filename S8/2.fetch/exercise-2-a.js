

//Definimos la base que tiene la url de la API
const baseUrl = 'https://api.nationalize.io?name=';

//Selecciono los elementos del DOM 

        const button = document.querySelector('#consultar');
        const input = document.querySelector('#name');
        const resultado = document.querySelector('#resultado');
//Añado el evento click
     button.addEventListener('click', () => {
            const name = input.value;
            const url = baseUrl + name;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resultado.textContent = JSON.stringify(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });