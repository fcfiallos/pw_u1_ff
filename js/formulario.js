function guardar() {
    validarNombre();
    validarApellido();
    validarFechaNacimiento();
    validarCorreo();
    validarContrasenia();
}

function validarNombre() {
    let nombre = document.getElementById("id_nombre").value;
    let regex = /^[A-Z][a-zA-Z]*$/;
    if (nombre === "") {
        console.log("ERROR: No ha ingresado el nombre");
    }
    if (!regex.test(nombre)) {
        console.log("ERROR: El nombre no es valido, debe comenzar con mayuscula y no contener caracteres especiales");
    }
    else {
        console.log("Paso validacion del nombre");
    }
}

function validarApellido() {
    let regex = /^[A-Z][a-zA-Z]*$/;
    let apellido = document.getElementById("id_apellido").value;
    if (apellido === "") {
        console.log("ERROR: No ha ingresado el apellido");
    }
    if (!regex.test(apellido)) {
        console.log("ERROR: El apellido no es valido, debe comenzar con mayuscula y no contener caracteres especiales");
    }
    else {
        console.log("Paso validacion del apellido");
    }
}

function validarFechaNacimiento() {
    let fechaNacimiento = document.getElementById("id_fecha_nacimiento").value;

    if (!fechaNacimiento) {
        console.log("ERROR: No ha ingresado la fecha de nacimiento");
        return;
    }

    let fecha = new Date(fechaNacimiento);
    let fechaActual = new Date();
    if (fecha > fechaActual) {
        console.log("ERROR: La fecha de nacimiento no puede ser mayor a la fecha actual");
    }
    else{
        console.log("Paso validacion de la fecha de nacimiento");
    }
}

function validarCorreo() {
    let correo = document.getElementById("id_email").value;
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (correo === "") {
        console.log("ERROR: No ha ingresado el correo");
    }
    if (!regex.test(correo)) {
        console.log("ERROR: El correo no es valido, debe contener '@' y un dominio valido");
    }
    else {
        console.log("Paso validacion del correo");
    }
}

function validarContrasenia() {
    let contrasenia = document.getElementById("id_password").value;
    if (contrasenia === "") {
        console.log("ERROR: No ha ingresado la contraseña");
    }
    if (contrasenia.length < 8) {
        console.log("ERROR: La contraseña debe tener al menos 8 caracteres");
    }
    else {
        console.log("Paso validacion de la contraseña");
    }
}