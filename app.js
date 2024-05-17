let numGenerados = [];
let numeroSecreto = 0;
let numeroIntentos = 0;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p',`Acertaste el número en ${numeroIntentos} ${numeroIntentos > 1 ? 'veces': 'vez'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if(numeroSecreto > numeroUsuario){
            asignarTextoElemento('p',"El numero es mayor");
        } else {
            asignarTextoElemento('p',"El numero es menor");
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    console.log(numGenerados);
    numeroIntentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    
    if(numGenerados.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se sortearon todos los numeros posibles");
        return;
    } else {
        if(numGenerados.includes(numGenerado)){
            return generarNumeroSecreto();
        } else {
            numGenerados.push(numGenerado);
            return numGenerado;
        }
    }
}

condicionesIniciales();