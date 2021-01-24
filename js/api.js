import * as UI from './interfaz.js';

class Api {
    constructor(artist, title){
        this.artist = artist;
        this.title = title;
    }

    apiQuery(){
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.title}`;
        this.showSpinner();
        fetch(url)
            .then(response => response.json())
            .then( data => {
                console.log(data);
                const { lyrics } = data;

                if (lyrics){
                    document.querySelector('.sk-chase').remove();
                    UI.resultadoTitle.textContent = this.title;
                    UI.resultado.textContent = lyrics;
                } else {
                    document.querySelector('.sk-chase').remove();
                    UI.divMensajes.insertAdjacentHTML('beforeend', `<div class="error">La canión no existe, prueba de nuevo</div>`);
                    setTimeout(() => {
                        UI.divMensajes.querySelector('.error').remove();
                    }, 5000);
                }
            })
    }

    showSpinner(){
        UI.divResultado.insertAdjacentHTML('beforeend', `<div class="sk-chase"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div></div>`);
    }
}

export default Api;