//Global
const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/'; //especificar el tipo de valor que deb trabajr para evitar errores de interpretacion (ERRORES DE CAST) del lenguaje 

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

//Sentencias de control
function evaluarOperacion(tipo) {
    /**
     * para igualar es mas optimo usar 3 igual -> ===*/
    let numero1 = parseFloat(document.getElementById('id_numero_1').value);
    let numero2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;
    //local const suma = '+'
    if (tipo === SUMA) {
        resultado = sumar(numero1, numero2);
    }
    if (tipo === RESTA) {
        resultado = restar(numero1, numero2);
    }
    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(numero1, numero2);
    }
    if (tipo === DIVISION) {
        resultado = dividir(numero1, numero2);
    }
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString(); //esta forma genera concatenar los 2 nuemros


}

const fundamentos = () => {
    console.log('Fundamentos JS');
    let nombre = '10';
    let numero = 10;
    let arreglo = [1, 2, 3, 4, 5];

    const nombreConst = '10';
    console.log(arreglo);
    console.log('texto de prueba');

    /** Arreglos */
    const diasLaborables = ['Lunes', 'Martes', 'Miercoles', 'jueves', 'viernes'];
    console.log(diasLaborables);
    console.log(diasLaborables[0]);
    console.log(diasLaborables[10]);

    let valor = '';
    console.log(valor);

    diasLaborables.push('sabado'); //Añadir al final
    diasLaborables.unshift('Dias: '); //Añadir al inicio
    console.log(diasLaborables);

    const arregloNumeroImpares = [1, 3, 5, 7, 9];
    const arregloNumeroPares = [0, 2, 4, 6, 8];
    const numeros = arregloNumeroImpares.concat(arregloNumeroPares);

    console.log(numeros);

    /**Sentencias de control */
    for (const dia of diasLaborables) {
        console.log(dia);
        if (dia === 'viernes') { //igualdad
            console.log('Por fin viernes');
        } else {
            console.log('Aun no es viernes');
        }

        if (dia !== 'viernes') { //diferencia
            console.log('Dia normal');
        } else {
            console.log('Dia de salida');
        }
    }

    /**Manejo de objetos en JS */
    const miProfesor = {
        nombre: 'Fatima',
        apellido: 'Fiallos',
        edad: 22,
        genero: 'Femenino',
        ciudad: 'Quito'
    }

    console.log(miProfesor);
    console.log(miProfesor.nombre);

    //setteo de atributos
    miProfesor.apellido = 'Teran';

    console.log(miProfesor);

    if (miProfesor.ciudad === 'Quito') {
        console.log('Es de la capital')
    }

    const estudiantes = [
        {
            nombre: 'Fatima',
            apellido: 'Fiallos',
            edad: 22,
            genero: 'Femenino',
            ciudad: 'Quito'
        },
        {
            nombre: 'Maria',
            apellido: 'Fernandez',
            edad: 19,
            genero: 'Femenino',
            ciudad: 'Quito'
        },
        {
            nombre: 'Jorge',
            apellido: 'Perez',
            edad: 25,
            genero: 'Masculino',
            ciudad: 'Quito'
        }
    ]

    console.table(estudiantes);
}