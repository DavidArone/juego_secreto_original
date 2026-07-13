// Variables globales
let numeroMaximo = 30; // Coincide con el max="50" de tu HTML
let numeroSecreto;
let intentos;

// Función genérica para asignar texto a elementos HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para generar el número aleatorio entre 1 y numeroMaximo
function generarNumeroSecreto() {
    return Math.floor(Math.random() * numeroMaximo) + 1;
}

// Función para limpiar la caja de texto después de cada intento
function limpiarCaja() {
    document.querySelector('.container__input').value = '';
}

// Función que se ejecuta al presionar el botón "Intentar"
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.querySelector('.container__input').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('.texto__parrafo', `¡Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}!`);
        // Activa el botón de "Nuevo juego" cuando el usuario gana
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('.texto__parrafo', 'El número secreto es menor');
        } else {
            asignarTextoElemento('.texto__parrafo', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

// Función para restablecer los valores del juego
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto); // Para pruebas en consola
}

// Función que se ejecuta al presionar el botón "Nuevo juego"
function reiniciarJuego() {
    limpiarCaja(); // Limpia la entrada de texto
    condicionesIniciales(); // Restablece textos, número e intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); // Deshabilita el botón reiniciar
}

// Inicializa el juego por primera vez al cargar la página
condicionesIniciales();
