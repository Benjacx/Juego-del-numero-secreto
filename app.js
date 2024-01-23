let numerosecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoDeElemento(elemento , texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

console.log(numerosecreto)
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numerosecreto) {
        asignarTextoDeElemento ('p',`Acertaste el numero en: ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numerosecreto) {
            asignarTextoDeElemento('p', 'el numero secreto es menor');
        } else {
            asignarTextoDeElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarnumerosecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoDeElemento('p','ya se sortearon todos los numeros posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarnumerosecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}
}

function intentodeusuario() {
    alert('clik desde el boton');
    return;
}

function condicionesIniciales() {
    asignarTextoDeElemento('h1', 'Juego del numero secreto');
    asignarTextoDeElemento('p',`escoge un numero entre 1 y ${numeroMaximo}`);
    numerosecreto = generarnumerosecreto();
    intentos = 1;
}

function reiniciarJuego() {

    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();

