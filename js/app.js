//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const tweets = [];

//eventos

eventListener();
function eventListener(){
    formulario.addEventListener('submit', agregarTweets);
}



//funciones

function agregarTweets(e){
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;//lee el tweet
    
    if(tweet === ''){
        mostrarError('No se puede enviar un mensaje vacio');

        return;
    }
}


function mostrarError(error){

    const mensaje = document.createElement('p');
    mensaje.textContent = error;
    mensaje.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensaje);
}