
function validarE01() {
    
    //Variables asociadas a cada campo del formulario miediante ID
    var nombre = document.getElementById("nombre").value;
    var apellido1 = document.getElementById("apellido1").value;
    var apellido2 = document.getElementById("apellido2").value;
    var edad = document.getElementById("edad").value;
    var aficcion1 = document.getElementById("aficcion1").value;
    var aficcion2 = document.getElementById("aficcion2").value;
    var fecha = document.getElementById("fecha").value;
    var telf = document.getElementById("telf").value;


 if (nombre !== "" || apellido1 !== "" || edad !== "" || telf !== "") {
     
    //NOMBRE
    //Ahora indicamos el minimo de los caracteres 
    //Si se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
    if (nombre.length > 15) {
        document.getElementById("nombre").style.border = "2px solid red";
        document.getElementById("nombreError").innerHTML = "¡Máximo 15 caracteres!";
        return false;
    } else { //Si es menor que la condición, se dara valor correcto
        document.getElementById("nombre").style.border = "2px solid green";
        document.getElementById("nombreError").innerHTML = "";
    } 
        

    //APELLIDO1
    //Ahora indicamos el minimo de los caracteres 
    //Si se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
    if (apellido1.length > 15) {
        document.getElementById("apellido1").style.border = "2px solid red";
        document.getElementById("apellido1Error").innerHTML = "¡Máximo 15 caracteres!";
        return false;
    } else {//Si es menor que la condición, se dara valor correcto
        document.getElementById("apellido1").style.border = "2px solid green";
        document.getElementById("apellido1Error").innerHTML = "";
    }
  

    //EDAD
    //Tenemos una condición de dos
    //La edad igual a 0  --  o  -- edad un numero
    //Si se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
    if (edad.length === 0 || isNaN(edad)) {
        document.getElementById("edad").style.border = "2px solid red";
        document.getElementById("edadError").innerHTML = "¡Valor erróneo!";
        return false;
    } else {//Si es distinto de 0 o núemro la condició,n se dara valor correcto
        document.getElementById("edad").style.border = "2px solid green";
        document.getElementById("edadError").innerHTML = "";
    }
        
    //NUMERO TELEFONO
    //Condición de que sean numeros los elementos
    if (isNaN(telf)) {
        //Indicamos el maximo de elementos aceptados
        if (telf.length === 11) {
            //Creamos un bucle para que se recorra el total de elementos del input
            for (var i = 0; i < telf.length; i++) {
                //Ahora daremos formato a al numero
                //Empeice por 6
                //por lo que despues de 3 digitos un separador _ _ _ - y despues de 7 digitos otro _ _ _ - _ _ _ -
                if (telf.charAt(0) === "6" || telf.charAt(0) === "7" && telf.charAt(3) === "-" && telf.charAt(7) === "-") {
                    document.getElementById("telf").style.border = "2px solid green";
                    document.getElementById("telfError").innerHTML = "";
                } else {//Si el formato no es correcto mostraremos el mensaje de ERROR
                    document.getElementById("telf").style.border = "2px solid red";
                    document.getElementById("telfError").innerHTML = "¡Número incorrecto - Empieza 6 o 7!";
                    return false;
                }
            }
        } else {//Si no son mas de 12 elementos se muestra el mensaje de ERROR
            document.getElementById("telf").style.border = "2px solid red";
            document.getElementById("telfError").innerHTML = "¡Faltan elementos!";
            return false;
        }
    } else {//Si no son numeros se muestra el mensaje de ERROR
        document.getElementById("telf").style.border = "2px solid red";
        document.getElementById("telfError").innerHTML = "¡Asegurese de ultilizar el formato!";
        return false;
    }
         
     
 } else {//Si esta VACIO el campo se mostrara mensaje de petición
        document.getElementById("nombre").style.border = "2px solid red";
        document.getElementById("nombreError").innerHTML = "¡Campo vacio!";
        
        document.getElementById("apellido1").style.border = "2px solid red";
        document.getElementById("apellido1Error").innerHTML = "¡Campo vacio!";
        
        document.getElementById("edad").style.border = "2px solid red";
        document.getElementById("edadError").innerHTML = "¡Campo vacio!";
        
        document.getElementById("telf").style.border = "2px solid red";
        document.getElementById("telfError").innerHTML = "¡Campo vacio!";

        
        return false;
    }


    //APELLIDO2
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if(apellido2 !== ""){
    //Ahora indicamos el minimo de los caracteres 
    //Si se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
        if (apellido2.length > 15) {
            document.getElementById("apellido2").style.border = "2px solid red";
            document.getElementById("apellido2Error").innerHTML = "¡Máximo 15 caracteres!";
            return false;
        } else {//Si es menor que la condición, se dara valor correcto
            document.getElementById("apellido2").style.border = "2px solid green";
        }
    }                                                                                    


    //AFICCCION1
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if(aficcion1 !== ""){
        //Condición de que el valor no sea un número
        //Si se cumple entraremos a la siguiente condición
        if (isNaN(aficcion1)) {
            //Condición de número de caracteres
            //Si se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
            if (aficcion1.length < 3) {
                document.getElementById("aficcion1").style.border = "2px solid red";
                document.getElementById("aficcion1Error").innerHTML = "¡La aficción debe tener al menos tres caraceters alfabéticos!¡No existen aficiones tan “pequeñas”!";
                return false;
            } else {//Si es mayor que la condición, se dara valor correcto
                document.getElementById("aficcion1").style.border = "2px solid green";
            }
        }else{//Si no se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
            document.getElementById("aficcion1").style.border = "2px solid red";
            document.getElementById("aficcion1Error").innerHTML = "El valor no puede ser un número";
            return false;
        }
    }

    //AFICCCION2
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if(aficcion2 !== ""){
        //Condición de que el valor no sea un número
        //Si se cumple entraremos a la siguiente condición
        if (isNaN(aficcion2)) {
            //Condición de rango de caracteres
            //Si se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
            if (aficcion2.length < 5 || aficcion2.length > 15) {
                document.getElementById("aficcion2Error").innerHTML = "¡Afición errónea, introduce otra!";
                return false;
            } else {//Si esta dentro del rango de la condición, se dara valor correcto
                document.getElementById("aficcion2").style.border = "2px solid green";
            }
        }else{ //Si no se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
            document.getElementById("aficcion2").style.border = "2px solid red";
            document.getElementById("aficcion2Error").innerHTML = "El valor no puede ser un número";
            return false;
        }
    }

    //FECHA DE NACIMIENTO
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if(fecha !== ""){
        //Condición inicial de número
        //.include("/")includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
        //Lo usaremos para dar el formato a la fecha
        if(fecha.includes("/")){
        fecha = fecha.split("/");
        //Creamos 3 grupos DIA -- MES -- AÑO
        var dia = fecha[0];
        var mes = fecha[1];
        var anyo = fecha[2];
            //Haremos las condiciones de cada grupo
            //Los dias solo pueden ir de 1 a 31
            if (dia > 0 && dia <= 31) {
                //Los meses solo pueden ir de 1 a 12
                if(mes > 0 && mes <= 12){
                    // y los años tienen que ser mayores que 1
                    if(anyo > 0){
                        document.getElementById("fechaN").style.backgroundColor = "2px solid green";
                        return false;
                    }else{ //Si no cumplen la condición dara mendaje de ERROR - AÑO
                        document.getElementById("fecha").style.border = "2px solid red";
                        document.getElementById("fechaError").innerHTML = "Fecha inválida - AÑO 1 ....";
                        return false;
                    }
                }else {//Si no cumplen la condición dara mendaje de ERROR - MES
                    document.getElementById("fecha").style.border = "2px solid red";
                    document.getElementById("fechaError").innerHTML = "Fecha inválida - MES 1-12";
                    return false;
                }
            }else{//Si no cumplen la condición dara mendaje de ERROR - DIA  
                document.getElementById("fecha").style.border = "2px solid red";
                document.getElementById("fechaError").innerHTML = "Fecha inválida - DIA 1- 31";
                return false;
            }
        }else{//Si no cumple el formato mensaje de ERROR
            document.getElementById("fecha").style.border = "2px solid red";
            document.getElementById("fechaError").innerHTML = "Formato dd/mm/aaaa";
            return false;
        }

    }

    return true;
}

//Creamos funcion propapia para el uso del FOCUS
function numExpe() {
    //Variable asociada a su ID. Elemento de FOCUS
    var numExp1 = document.getElementById("numExp").value;

    //NUMERO DE EXPEDIENTE
     //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if (numExp1 !== "") {
        //Condición para elementos numericos 
        if (isNaN(numExp1)) {
            document.getElementById("numExp").style.border = "2px solid red";
            alert("Debes introducir un numero");
        } else {//Si no cumple la condicion valor correcto
            document.getElementById("numExp").style.border = "2px solid green";
        }
    }
}