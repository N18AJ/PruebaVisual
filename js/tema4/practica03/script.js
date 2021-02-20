/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
contarNumeros() que muestre por pantalla la cuenta atrás de un número que el usuario
ha introducido por pantalla.
*/
function contarNumeros(){
    //Petición de dato
    var num = parseInt(prompt("Introduce un número: "));
    //Creamos variable para eliminar valor de cuenta atras
    var cuenta = (num - 1);
    //Condicion para la aceptación
    //Mientras se ejecuta sentencia vuelve la ejecucion, bucle.
    //Se termina el bucle cuando cuenta = 0
    while(cuenta >= 0){
        alert("Cuenta atras: " + cuenta);
        //Vamos restando 1
        cuenta--;
    }
}

/* 
Ejercicio 2
cambiarPosicion() que permita darle la vuelva a un número de dos cifras. Debes de comprobar
que el número que introduce el usuario tiene dos dígitos.
*/
function cambiarPosicion(){
    //Creamos un bucle de petición
    do{
        //Peticion y variable
        var num = parseInt(prompt("Introduce un número de dos digitos: "));
        //Condición para ejecución
        if (num >= 10 && num <= 99) {
            //Creación de variables para partición del número
            var decena;
            var unidad;
            //Descomposición del número
            decena = Math.floor(num / 10);
            unidad = Math.floor(num % 10);
            //Muestra de los datos
            alert("Número inicial: " + num + "\nNúmero cambiado: " + unidad + decena);
        }else {
            alert("Introduzca un número de dos digitos");
        }
    }while (num < 10 || num > 99)
}

/* 
Ejercicio 3
operaciones() que permite hacer operaciones con dos números que se le piden al usuario. 
El script debe comprobar que son números y llamar a la función que mostrará suma/resta/multiplicación/división de los dos números.
 El resultado debe de aparecer por pantalla de forma conjunta (todas las operaciones).
*/
function operaciones(){
    //Petición de variable 1
    var num1 = parseInt(prompt("Introduce un número: ")); 
    //Primera condición de validación, si se cumple segunda petición
    if (!isNaN(num1)) {
        //Petición de variable 2
        var num2 = parseInt(prompt("Introduce un número: "));
        //Se cumple las condiciones, ejecutamos
        if (!isNaN(num2)) {
            //Muestra de las diferentes operaciones
            alert("Suma = " + num1 + " + " + num2 + " = " + (num1 + num2) +
            "\nResta = " + num1 + " - " + num2 + " = " + (num1 - num2) +
            "\nMultimplicación = " + num1 + " x " + num2 + " = " + (num1 * num2) +
            "\nDivisión = " + num1 + " / " + num2 + " = " + (num1 / num2));
        }else {
                alert("Introduzca solo números");
            }
    }else {
            alert("Introduzca solo números");
        }   
}

/* 
Ejercicio 4
Invéntate una operación que utilice String de alguna forma y explica con comentarios qué hace la función.
*/
function operacionesString(){
    //Bucle de condición 
    do {
        //Petición de palabra
        var palabra = prompt("Introduzca una palabra: ");
        //si cumple la condición ejecutamos
        if (isNaN(palabra)) {
            //Elegimos el primer caracter y lo pasamos a mayusculas
                        //charAt() - de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
                                 //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
                                                //Indicamos muestra de la palabra desde la posición 1
                                                        //slice() - devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
            //Muestra                                             
            alert(palabra.charAt(0).toUpperCase()+ palabra.slice(1));
        } else {
            alert("Introduce una palabra");
        }
    } while (!isNaN(palabra))
}

/* 
Ejercicio 5
Invéntate una operación que utilice Date de alguna forma y explica con comentarios qué hace la función.
*/

function operacionesDate(){
    //Petición por partes de la fecha 
    var dia = prompt("Día de nacimiento:");
    var mes = prompt("Mes de nacimiento:");
    var anyo = prompt("Año de nacimiento:");
    //Igualamos nuestra edad a la fecha actual
    fechaHoy = new Date();
    fechaAnyo = fechaHoy.getYear();
    fechaMes = fechaHoy.getMonth();
    fechaDia = fechaHoy.getDate();
    //Sacamos la varible edad. Jugamos con el AÑO
    var edad = (fechaAnyo + 1900) - anyo;
    //Condiciones para el calculo de edad
    //Condicones para añadir año o no en relación del MES
    if ( fechaMes < (mes - 1)){
      edad--;
    }
    if (((mes - 1) === fechaMes) && (fechaDia < dia)){ 
      edad--;
    }
    //Sacamos los años
    if (edad > 1900){
        edad -= 1900;
    }
    //Muestra de edad
    alert("¡Tienes " + edad + " años!");
}

//Realizaremos el bucle mientras la opción sea distinta de cero
while(opcion !== 0){
    //Petición de opcion en MENU
    var opcion = parseInt(prompt("Opción 0: Salida del SCRIP.\n\
                Opción 1: contarNumeros()\n\
                Opción 2: cambiarPosicion()\n\
                Opción 3: operaciones()\n\
                Opción 4: Operación que utilice String\n\
                Opción 5: Operación que utilice Date"));
    //Recorremos el menu hasta encontrar case elegido
    switch(opcion){
        case 1:
            alert(contarNumeros());
        break;
        case 2:
            alert(cambiarPosicion());
        break;
        case 3:
            alert(operaciones());
        break;
        case 4:
            alert(operacionesString());
        break;
        case 5:
            alert(operacionesDate());
        break;

    }
}
