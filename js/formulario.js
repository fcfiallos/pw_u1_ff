function guardar() {
    validar();
}

function validar(){
    let nombre=document.getElementById("id_nombre").value;
    if(nombre===""){
        console.log("ERROR: No ha ingresado el nombre");
    }else{
        console.log("Paso validacion del nombre");
    }
}