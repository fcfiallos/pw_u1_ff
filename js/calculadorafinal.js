let num1=0;
let mum2=0;
function mostrarEnDisplay(valor){
    let elementoDisplay=document.getElementById('id_display');
    elementoDisplay.innerText= elementoDisplay.innerText+valor;
    if(valor !== "+"){
        concatenarNumero(valor);
    }
    else{
        operacionSumar();
    }
}
function calcularResultado() {
    let elementoDisplay = document.getElementById('id_display');
    try {
        let resultado = eval(elementoDisplay.innerText); // Usa eval para operaciones simples
        elementoDisplay.innerText = resultado;
    } catch (e) {
        elementoDisplay.innerText = 'Error';
    }
}
function operacionSumar(){
    esSengundoDigito="1"
}

function concatenarNumero(numero){
    if(esSengundoDigito ==="0"){
        num1= num1+numero;
    }else{
        mum2= num1+numero;
    }
}

function sumar(){
    let numPRimero= parseInt(num1);
    let numSegundo= parseInt(mum2);
    let elementoDisplay = document.getElementById('id_display');
    elementoDisplay.innerText = numPRimero + numSegundo;
}