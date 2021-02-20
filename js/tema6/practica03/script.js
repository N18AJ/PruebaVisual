function validarE01() {
    //Crearemos las variables para cada imput
    var nombre = document.getElementById("nombre").value;
    var apellido1 = document.getElementById("apellido1").value;
    var apellido2 = document.getElementById("apellido2").value;
    var direccion = document.getElementById("direccion").value;
    var postal = document.getElementById("postal").value;
    var telf = document.getElementById("telf").value;
    var telm = document.getElementById("telm").value;
    
    var eCivil = document.getElementsByName("eCivil");
    
    var DNI = document.getElementById("DNI").value;
    var NSS = document.getElementById("NSS").value;
    
    //Condición para campos OBLIGATORIOS
    if (nombre !== "" || apellido1 !== "" || apellido2 !== "" || direccion !== "" || postal !== "" || telf !== "" || telm !== "" || NSS !== "" || DNI !== "") {

        //NOMBRE
        if (nombre !== "") {
            var exp = /^[A-Z][a-z\u00f1]{2,15}/;
            if (!exp.test(nombre) || nombre.length >= 15) {
                document.getElementById("nombre").style.border = "2px solid red";
                document.getElementById("nombreError").innerHTML = "Primera en mayúscula - min 3 y MAX 15";
                return false;
            } else {
                document.getElementById("nombre").style.border = "2px solid green";
                document.getElementById("nombreError").innerHTML = "";
            }
        } else {
            document.getElementById("nombre").style.border = "2px solid red";
            return false;
        }

        //APELLIDO 1
        if (apellido1 !== "") {
            var exp = /^[A-Z][a-z\u00f1]{3,15}/;
            if (!exp.test(apellido1) || apellido1.length >= 15) {
                document.getElementById("apellido1").style.border = "2px solid red";
                document.getElementById("apellido1Error").innerHTML = "Primera en mayúscula - min 3 y MAX 15";
                return false;
            } else {
                document.getElementById("apellido1").style.border = "2px solid green";
                document.getElementById("apellido1Error").innerHTML = "";
            }
        } else {
            document.getElementById("apellido1").style.border = "2px solid red";
            return false;
        }

        //APELLIDO 2
        if (apellido2 !== "") {
            var exp = /^[A-Z][a-z\u00f1]{3,15}/;
            if (!exp.test(apellido2) || apellido2.length >= 15) {
                document.getElementById("apellido2").style.border = "2px solid red";
                document.getElementById("apellido2Error").innerHTML = "Primera en mayúscula - min 3 y MAX 15";
                return false;
            } else {
                document.getElementById("apellido2").style.border = "2px solid green";
                document.getElementById("apellido2Error").innerHTML = "";
            }
        } else {
            document.getElementById("apellido2").style.border = "2px solid red";
            return false;
        }

        //DIRECCION POSTAL
        if (direccion !== "") {
            var exp = /^[A-Z][A-Za-z\u00f1(\s)*(\.)*(\/)*]{3,25}/;
            if (!exp.test(direccion) || direccion.length >= 25) {
                document.getElementById("direccion").style.border = "2px solid red";
                document.getElementById("direccionError").innerHTML = "Primera en mayusculas - Excede el maximo de 25 caracteres";
                return false;
            } else {
                document.getElementById("direccion").style.border = "2px solid green";
                document.getElementById("direccionError").innerHTML = "";
            }
        } else {
            document.getElementById("direccion").style.border = "2px solid red";
            return false;
        }

        //CODIGO POSTAL
        if (postal !== "") {
            var exp = /[0-9]{5}/;
            if (!exp.test(postal) || postal.length !== 5) {
                document.getElementById("postal").style.border = "2px solid red";
                document.getElementById("postalError").innerHTML = "Son 5 caracteres";
                return false;
            } else {
                document.getElementById("postal").style.border = "2px solid green";
                document.getElementById("postalError").innerHTML = "";
            }
        } else {
            document.getElementById("postal").style.border = "2px solid red";
            return false;
        }

        //TELEFONO FIJO
        if (telf !== "") {
            var exp = /^[9][0-9]{2}((\-)[0-9]{3}){2}/;
            if (!exp.test(telf) || telf.length !== 11) {
                document.getElementById("telf").style.border = "2px solid red";
                document.getElementById("telfError").innerHTML = "Formato incorrecto - 9 números - Empieza por 9";
                return false;
            } else {
                document.getElementById("telf").style.border = "2px solid green";
                document.getElementById("telfError").innerHTML = "";
            }
        } else {
            document.getElementById("telf").style.border = "2px solid red";
            return false;
        }


        //TELEFONO MOVIL
        if (telm !== "") {
            var exp = /^[6|7][0-9]{2}((\-)[0-9]{3}){2}/;
            if (!exp.test(telm) || telm.length !== 11) {
                document.getElementById("telm").style.border = "2px solid red";
                document.getElementById("telmError").innerHTML = "Formato incorrecto - 9 números Empieza por 6 o 7";
                return false;
            } else {
                document.getElementById("telm").style.border = "2px solid green";
                document.getElementById("telmError").innerHTML = "";
            }
        } else {
            document.getElementById("telm").style.border = "2px solid red";
            return false;
        }
        
        //RADIO BUTTON
        var seleccionado = false;
        var estadoCivilSeleccionado;

        for (var i = 0; i < eCivil.length; i++) {
            if (eCivil[i].checked) {
                seleccionado = true;
                estadoCivilSeleccionado = eCivil[i].value;
                break;
                document.getElementById("civilError").innerHTML = "";
            }
        }
        if (!seleccionado) {
            document.getElementById("civilError").innerHTML = "Seleccion un estado";
            return false;
        }

        
        //DNI
        if (DNI !== "") {
            var exp = /^\d{8}\D{1}$/;
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

            if (!exp.test(DNI)) {
                document.getElementById("DNI").style.border = "2px solid red";
                document.getElementById("dniError").innerHTML = "Formato incorrecto";
                return false;
            }

            if (DNI.charAt(8) !== letras[(DNI.substring(0, 8)) % 23]) {
                document.getElementById("DNI").style.border = "2px solid red";
                document.getElementById("dniError").innerHTML = "Formato incorrecto";
                return false;
            } else {
                document.getElementById("DNI").style.border = "2px solid green";
                document.getElementById("dniError").innerHTML = "";
            }
        } else {
            document.getElementById("DNI").style.border = "2px solid red";
            return false;
        }

        //NUMERO DE LA SEGURIDAD SOCIAL
        if (NSS !== "") {
            var exp = /[0-9]{11}/g;
            if (!exp.test(NSS) || NSS.length !== 11) {
                document.getElementById("NSS").style.border = "2px solid red";
                document.getElementById("nssError").innerHTML = "Formato incorrecto";
                return false;
            } else {
                document.getElementById("NSS").style.border = "2px solid green";
                document.getElementById("nssError").innerHTML = "";
            }
        } else {
            document.getElementById("NSS").style.border = "2px solid red";
            return false;
        }
        
        //El método Window.confirm() muestra una ventana de diálogo con un mensaje opcional y dos botones, Aceptar y Cancelar.
        if (window.confirm("Nombre: " + nombre + "\n" +
                "Primer Apellido: " + apellido1 + "\n" +
                "Segundo Apellido: " + apellido2 + "\n" +
                "Dirección Postal: " + direccion + "\n" +
                "Código Postal: " + postal + "\n" +
                "Telefono Fijo: " + telf + "\n" +
                "Telefono Movil: " + telm + "\n" +
                "Estado Civil: " + estadoCivilSeleccionado + "\n" +
                "DNI: " + DNI + "\n" +
                "Seguridad Social: " + NSS + "\n" +
                "Código: " + document.getElementById("codigoG").value + "\n\n" +
                "Su datos van a proceder a ser enviados"
                ) === true) {
            return true;
        } else {
            return false;
        }

        
    } else {
        
        var errorInput = document.getElementsByTagName("input");
        var errorCampo = document.getElementsByTagName("td");
        
        for(var i = 0; i < errorInput.length; i++){
            errorInput[i].style.border = "2px solid red";
        }
        for(var i = 2; i < errorCampo.length; i+=3){
            errorCampo[i].innerHTML = "Campo vacio";
        }
       
        return false;
    }
}


function validarCheck() {
    var checkBox = document.getElementById("checkBox");
    var check = document.getElementById("check");

    //CODIGO FINAL GENERADO
    var nombre = document.getElementById("nombre").value;

    if (checkBox.checked) {
        check.removeAttribute("disabled");
        if (nombre !== "") {
            document.getElementById("codigoG").value = Math.floor(((Math.random() * 99999) + 10000)) + "-" + nombre.charAt(0);
            document.getElementById("codigoG").style.border = "2px solid green";
            document.getElementById("codigoError").innerHTML = "";
        }

        return true;
    } else {
        check.setAttribute("disabled", "");
        return false;
    }
}

