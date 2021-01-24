import * as UI from "./interfaz.js";
import Api from "./api.js"

document.addEventListener('DOMContentLoaded', () => {
    UI.formulario.addEventListener('submit', buscarCancion);
});

function buscarCancion(e){
    e.preventDefault();
    const artist = document.querySelector('#artista').value;
    const title = document.querySelector('#cancion').value;

    if (artist === '' || title === ''){
        UI.divBuscar.insertAdjacentHTML('beforeend', `<div class="error">Los campos no pueden estar vacíos</div>`);
        setTimeout(() => {
            UI.divBuscar.querySelector('.error').remove();
        }, 3000);

    }
    const busqueda = new Api(artist, title);
    busqueda.apiQuery();
}
