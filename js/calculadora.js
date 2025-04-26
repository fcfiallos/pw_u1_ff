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

    /** Clase 25 / 04 / 2025
     * Objeto con atributo objeto */
    const ciudadano = {
        nombre: 'Fatima',
        apellido: 'Fiallos',
        direccion: {
            callePrincipal: 'Av. America',
            calleSecundaria: 'Av. La Gasca',
            numeracion: '5620',
            barrio: {
                referencia: 'frente al dilipa'
            }
        }
    }

    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);
    ciudadano.direccion.callePrincipal = 'Av. Amazonas'; //setea 
    console.log(ciudadano);

    const est1 = {
        nombre: 'Fatima'
    }

    const est2 = {
        nombre: 'Cristina'
    }

    const arregloEstudiantes = [est1, est2];
    console.log(arregloEstudiantes);

    const arregloEstudiantes2 = [
        {
            nombre: 'Carla',
            apellido: 'Castillo'
        },
        {
            nombre: 'Vivian',
            apellido: 'Perez'
        }
    ]
    console.log(arregloEstudiantes2);

    console.log(arregloEstudiantes2[1].apellido);

    /**Desestructura de Arreglos*/
    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    const [c1, c2, c3, c4, c5] = colores; // se referencia al arreglo
    //Se desestructura declarando alias a cada elemnto del arreglo
    console.log(c1);
    console.log(c5);

    const [cUno, cDos] = colores;
    console.log(cUno);
    console.log(cDos);

    const [, , cTres] = colores; //Si lo que se quiere desestructurar es solo un especifico que esta fuera del 1ro y 2do se dejan los espacios en blanco 
    console.log(cTres);

    //de manera directa, con el array y los corchetes al inicio que muestre que la referencia de la desestructura
    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    desestructuracionArreglo(colores);

    const [, p2, p3, p4, p5, p6, p7, p8, p9, p10] = desestructuracionArreglo2();
    console.log(p2);
    console.log(p3);
    console.log(p10);
    //la desestructura de objeto se realiza a traves de sus posiciones

    /**Desestructuracion por operador rest 
     * desdestrucutra por posicion, despues pone el resto del arreglo 
    */
    console.log('Desestructuracion por operador rest')
    const[p1,...resto]=desestructuracionArreglo2();
    console.log(p1);
    console.log(resto);

    /**Desestructuracion de objetos*/
    const auto1 = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020, //Solo si la variable tiene el potencial de operacion se sugiere usar numeros
        color: 'Amarillo'
    }
    //el criterio desestructuracion es el nombre del atributo 
    const { marca, color, anio } = auto1;
    console.log(color);

    const { anio1 } = {
        marca1: 'Toyota',
        modelo1: 'prius',
        anio1: 2020, //Solo si la variable tiene el potencial de operacion se sugiere usar numeros
        color1: 'Amarillo'
    }
    console.log(anio1);

    desestructuracionObjeto(auto1);

    const universidad = {
        nombre: 'UCE',
        direccion: 'America',
        rector: {
            nombre: 'Daniel',
            apellido: 'Teran'
        }
    }
    //1era forma proceso largo
    const { rector } = universidad;
    console.log(rector);
    const { apellido } = rector; //poner el mismo nombre de atributo
    console.log(apellido);

    //2da forma en la misma linea, usando el nombre del subojeto:{}
    const universidad2 = {
        nombre2: 'UCE',
        direccion2: 'America',
        rector2: {
            nombreR2: 'Daniel',
            apellido2: 'Teran'
        }
    }

    const { nombre2, rector2: { nombreR2 } } = universidad2;
    console.log(nombreR2);

    /**desestructuracion por operador rest
     * se puede en cierto escenario parte de mi obejot y el resto se mantenga igual
     */
    const autoR= {
        marcaR: 'Toyota',
        modeloR: 'prius',
        anioR: 2020,
        colorR: 'Amarillo'
    }

    const{marcaR,...restoR} = autoR;
    console.log(marcaR);
    console.log(restoR);
}

//se puede desestructura en cualquier parte del codigo del JS
function desestructuracionArreglo([c1, c2, c3]) {
    //siempre que se arrglo se puede aplicar si es una variable, retorno de metodo, argumento
    console.log(c1);
    console.log(c2);
    console.log(c3);
}

function desestructuracionArreglo2() {
    const colores = ['Rosado', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    return colores;
}

//donde se tiene un objeto como un variable, retorno y parametro
function desestructuracionObjeto({ marca, color }) {
    console.log(marca);
    console.log(color);
}