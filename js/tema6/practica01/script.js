
function validarE01() {
    
    //Variables asociadas a cada campo del formulario miediante ID
    var nombre = document.getElementById("nombre").value;
    var apellido1 = document.getElementById("apellido1").value;
    var apellido2 = document.getElementById("apellido2").value;
    var direccion = document.getElementById("direccion").value;
    var postal = document.getElementById("postal").value;
    var telf = document.getElementById("telf").value;
    var telm = document.getElementById("telm").value;
    
    var fechaB = document.getElementById("fechaB").value;
    var fechaD = document.getElementById("fechaD").value;
    
    //NOMBRE
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if (nombre !== "") {
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
    } 

    //APELLIDO1
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if (apellido1 !== "") {
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
            document.getElementById("apellido2Error").innerHTML = "";
        }
    }                                                                                    


    //DIRECCIÓN POSTAL
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if(direccion !== ""){
    //Ahora indicamos el minimo de los caracteres 
    //Si se cumple esta condicion se corresponde a ERROR - Se mostrara mensaje de ERROR
        if (direccion.length > 50) {
            document.getElementById("direccion").style.border = "2px solid red";
            document.getElementById("direccionError").innerHTML = "¡Máximo 50 caracteres!";
            return false;
        } else {//Si es menor que la condición, se dara valor correcto
            document.getElementById("direccion").style.border = "2px solid green";
            document.getElementById("direccionError").innerHTML = "";
        }
    } 
    
    //CÓDIGO POSTAL
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if (postal !== "") {
        //Condición de que sean numeros los elementos
        if (!isNaN(postal)) {
            //Indicamos el maximo de elementos aceptados
            if (postal.length === 5) {
                    document.getElementById("postal").style.border = "2px solid green";
                    document.getElementById("postalError").innerHTML = "";
            } else {//Si no son 5 elementos se muestra el mensaje de ERROR
                document.getElementById("postal").style.border = "2px solid red";
                document.getElementById("postalError").innerHTML = "¡Se necesitan 5 caracteres!";
                return false;
            }
        } else {//Si no son numeros se muestra el mensaje de ERROR
            document.getElementById("postal").style.border = "2px solid red";
            document.getElementById("postalError").innerHTML = "¡Solo puede contener numeros!";
            return false;
        }
    }
    
    
    //NUMERO TELEFONO FIJO
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if (telf !== "") {
        //Condición de que sean numeros los elementos
        if (isNaN(telf)) {
            //Indicamos el maximo de elementos aceptados
            if (telf.length === 11) {
                //Creamos un bucle para que se recorra el total de elementos del input
                for (var i = 0; i < telf.length; i++) {
                    //Ahora daremos formato a al numero
                    //por lo que despues de 3 digitos un separador _ _ _ - y despues de 7 digitos otro _ _ _ - _ _ _ -
                    if (telf.charAt(0) === "9" && telf.charAt(3) === "-" && telf.charAt(7) === "-") {
                        document.getElementById("telf").style.border = "2px solid green";
                        document.getElementById("telfError").innerHTML = "";
                    } else {//Si el formato no es correcto mostraremos el mensaje de ERROR
                        document.getElementById("telf").style.border = "2px solid red";
                        document.getElementById("telfError").innerHTML = "¡Número invalido. Empieza por 9!";
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
            document.getElementById("telfError").innerHTML = "¡Seguir fomato!";
            return false;
        }
    }
    
    //NUMERO TELEFONO MOVIL
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if (telm !== "") {
        //Condición de que sean numeros los elementos
        if (isNaN(telm)) {
            //Indicamos el maximo de elementos aceptados
            if (telm.length === 11) {
                //Creamos un bucle para que se recorra el total de elementos del input
                for (var i = 0; i < telm.length; i++) {
                    //Ahora daremos formato a al numero
                    //por lo que despues de 3 digitos un separador _ _ _ - y despues de 7 digitos otro _ _ _ - _ _ _ -
                    if (telm.charAt(0) === "6" || telm.charAt(0) === "7" && telm.charAt(3) === "-" && telm.charAt(7) === "-") {
                        document.getElementById("telm").style.border = "2px solid green";
                        document.getElementById("telmError").innerHTML = "";
                    } else {//Si el formato no es correcto mostraremos el mensaje de ERROR
                        document.getElementById("telm").style.border = "2px solid red";
                        document.getElementById("telmError").innerHTML = "¡Número invalido. Empieza por 6 o 7!";
                        return false;
                    }
                }
            } else {//Si no son mas de 12 elementos se muestra el mensaje de ERROR
                document.getElementById("telm").style.border = "2px solid red";
                document.getElementById("telmError").innerHTML = "¡Faltan elementos!";
                return false;
            }
        } else {//Si no son numeros se muestra el mensaje de ERROR
            document.getElementById("telm").style.border = "2px solid red";
            document.getElementById("telmError").innerHTML = "¡Seguir fomato!";
            return false;
        }
    }
   
   
   //FECHA DE BODA
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if(fechaB !== ""){
        //Condición inicial de número
        //.include("/")includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
        //Lo usaremos para dar el formato a la fechaB
        if(fechaB.includes("/")){
        fechaB = fechaB.split("/");
        //Creamos 3 grupos DIA -- MES -- AÑO
        var dia = fechaB[0];
        var mes = fechaB[1];
        var anyo = fechaB[2];
            //Haremos las condiciones de cada grupo
            //Los dias solo pueden ir de 1 a 31
            if (dia > 0 && dia <= 31) {
                //Los meses solo pueden ir de 1 a 12
                if(mes > 0 && mes <= 12){
                    // y los años tienen que ser mayores que 1
                    if(anyo > 0){
                        document.getElementById("fechaB").style.backgroundColor = "2px solid green";
                        document.getElementById("fechaBError").innerHTML = "";
                        return false;
                    }else{ //Si no cumplen la condición dara mendaje de ERROR - AÑO
                        document.getElementById("fechaB").style.border = "2px solid red";
                        document.getElementById("fechaBError").innerHTML = "Fecha inválida - AÑO 1 ....";
                        return false;
                    }
                }else {//Si no cumplen la condición dara mendaje de ERROR - MES
                    document.getElementById("fechaB").style.border = "2px solid red";
                    document.getElementById("fechaBError").innerHTML = "Fecha inválida - MES 1-12";
                    return false;
                }
            }else{//Si no cumplen la condición dara mendaje de ERROR - DIA  
                document.getElementById("fechaB").style.border = "2px solid red";
                document.getElementById("fechaBError").innerHTML = "Fecha inválida - DIA 1- 31";
                return false;
            }
        }else{//Si no cumple el formato mensaje de ERROR
            document.getElementById("fechaB").style.border = "2px solid red";
            document.getElementById("fechaBError").innerHTML = "Formato dd/mm/aaaa";
            return false;
        }

    }
    
    
    //FECHA DE DIVORCIO
    //Le damos la condicion de VACIO pero NO OBLIGAROIO
    if(fechaD !== ""){
        //Condición inicial de número
        //.include("/")includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
        //Lo usaremos para dar el formato a la fechaD
        if(fechaD.includes("/")){
        fechaD = fechaD.split("/");
        //Creamos 3 grupos DIA -- MES -- AÑO
        var dia = fechaD[0];
        var mes = fechaD[1];
        var anyo = fechaD[2];
            //Haremos las condiciones de cada grupo
            //Los dias solo pueden ir de 1 a 31
            if (dia > 0 && dia <= 31) {
                //Los meses solo pueden ir de 1 a 12
                if(mes > 0 && mes <= 12){
                    // y los años tienen que ser mayores que 1
                    if(anyo > 0){
                        document.getElementById("fechaD").style.backgroundColor = "2px solid green";
                        document.getElementById("fechaDError").innerHTML = "";
                        return false;
                    }else{ //Si no cumplen la condición dara mendaje de ERROR - AÑO
                        document.getElementById("fechaD").style.border = "2px solid red";
                        document.getElementById("fechaDError").innerHTML = "Fecha inválida - AÑO 1 ....";
                        return false;
                    }
                }else {//Si no cumplen la condición dara mendaje de ERROR - MES
                    document.getElementById("fechaD").style.border = "2px solid red";
                    document.getElementById("fechaDError").innerHTML = "Fecha inválida - MES 1-12";
                    return false;
                }
            }else{//Si no cumplen la condición dara mendaje de ERROR - DIA  
                document.getElementById("fechaD").style.border = "2px solid red";
                document.getElementById("fechaDError").innerHTML = "Fecha inválida - DIA 1- 31";
                return false;
            }
        }else{//Si no cumple el formato mensaje de ERROR
            document.getElementById("fechaD").style.border = "2px solid red";
            document.getElementById("fechaDError").innerHTML = "Formato dd/mm/aaaa";
            return false;
        }

    }
    
    //Busqueda de las opciones
    var noR = document.getElementById("noR");
    var siR = document.getElementById("siR");

        //Condición de selección OBLIGATORIA
        if (noR.checked === true ||  siR.checked === true){
            //Si hay alguna seleccion se borra el mensaje de EEROR
            if (noR.checked === true){
                document.getElementById("radioError").innerHTML = "";
            } else{
                document.getElementById("radioError").innerHTML = "";
            }
        }else {//Mensaje de ERROR si no hay selección
           document.getElementById("radioError").innerHTML = "Selecciona uno";
            return false;
        }
        
    //Busqueda de checkBox    
     var check = document.getElementById("check");
        //Condición de selección OBLIGATORIA
        if (check.checked === true){
            //Si hay alguna seleccion se borra el mensaje de EEROR
            document.getElementById("checkError").innerHTML = "";
        } else {//Mensaje de ERROR si no hay selección
           document.getElementById("checkError").innerHTML = "Acepte para seguir";
            return false;
        }


        

    return true;
}  


function estadoCivil() {
    var selectEstado = document.getElementById("selectEstado");
     
    if( selectEstado.value !== null || selectEstado.value !== 0 ){
        if(selectEstado.value === "casado"){
            document.getElementById("casadaD").style.visibility = "visible";
            document.getElementById("divorcioD").style.visibility = "hidden";
        }else{
            if(selectEstado.value === "divorciado"){
                document.getElementById("casadaD").style.visibility = "visible";
                document.getElementById("divorcioD").style.visibility = "visible";  
            }else{
                if(selectEstado.value === "separado"){
                    document.getElementById("casadaD").style.visibility = "hidden";
                    document.getElementById("divorcioD").style.visibility = "hidden";    
                }else{
                    if(selectEstado.value === "soltero"){
                        document.getElementById("casadaD").style.visibility = "hidden";
                        document.getElementById("divorcioD").style.visibility = "hidden";    
                    }else{
                        if(selectEstado.value === "esDificil"){
                            document.getElementById("casadaD").style.visibility = "hidden";
                            document.getElementById("divorcioD").style.visibility = "hidden";     
                        }
                    }
                }
            }
        }

    }else {//Si no son numeros se muestra el mensaje de ERROR
        return false;
    }
}