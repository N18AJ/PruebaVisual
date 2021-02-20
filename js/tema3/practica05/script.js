/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
*/
//Variable para la ventana
var ventana;
/* 
Desde el “Botón1” crea un evento “onclick” que al pulsar el botón abra una función. Esa función debe
de abrir una ventana nueva vacía con un width y height específico. Cambia el texto del botón para
que se sepa que hace cuando se pulsa éste.
*/
function myBoton1(){
                //.open() - Carga un recurso en el contexto de un nuevo navegador (como una ventana) o uno que ya existe, dependiendo de los parametros.
                        //Direccion
                                //Nombre
                                            //Caracteristicas
    ventana = window.open("","ventanaBoton1","width=150, height=150");
}
/* 
Desde el “Botón2” crea un evento “onclick” que al pulsar el botón abra una función. Esa función debe
de cerrar la primera ventana que has abierto. Cambia el texto del botón para que se sepa que hace
cuando se pulsa éste.
*/
function myBoton2(){
            //.close() - Cierra la ventana actual, o la ventana en la cual fue llamada.
    ventana.close();
}
/* 
Desde el “Botón3” crea un evento “onclick” que al pulsar el botón abra una función. Esa función debe
de abrir una ventana nueva con la url de w3schools. Cambia el texto del botón para que se sepa que
hace cuando se pulsa éste.
*/
function myBoton3(){
                        //Direccion
    ventana = window.open("https://www.w3schools.com/","ventanaBoton3","width=150, height=150");
}
/* 
Desde el “Botón4” crea un evento “onclick” que al pulsar el botón abra una función. Esa función debe
de cerrar la segunda ventana que has abierto. Cambia el texto del botón para que se sepa que hace
cuando se pulsa éste.
*/
function myBoton4(){
    ventana.close();
}

/* 
Ejercicio 2
Desde el “Botón5” crea un evento “onclick” que al pulsar el botón abra una función. Esa función
debe de cargar en el documento HTML “padre” (donde están todos los botones), la página web de Google.
*/
function myBoton5(){
                                                    //_self - Abre la ventana en la misma pagina
    ventana = window.open("https://www.google.es/","_self","ventanaBoton5");
}

/* 
Ejercicio 3
Desde el “Botón6” crea un evento “onclick” que al pulsar el botón abra una función. Esa función
debe de escribir en la página “padre” (donde están los botones), el nombre de todas las ventanas nuevas
abiertas en este HTML.
*/
var ventana1;
function myBoton6(){
    ventana1 = window.open("","_self","ventanaBoton5");
    //Muestra el contenido    
    ventana1.document.write("<p>ventanaBoton1 - ventanaBoton3 - ventanaBoton5</p>");
}

/* 
Ejercicio 4
Desde el “Botón7” crea un evento “onclick” que al pulsar el botón abra una función. Esa
función debe de pedir 3 datos numéricos al usuario. Si el usuario introduce un número pulsará aceptar y si
no quiere introducir números pulsará cancelar. Debes de mostrar por pantalla finalmente cuántas veces
pulsó “Aceptar” y cuántas “Cancelar” y los elementos que escribió.
*/
function myBoton7(){
    //Variables
    var contA = 0;
    var contC = 0;
    var numeros = "";
    //Bucle para 3 peticiones
    for(var i = 1; i <= 3; i++){
                        //Window.confirm() - muestra una ventana de diálogo con un mensaje opcional y dos botones, Aceptar y Cancelar.
        var condicion = confirm("¿Quieres jugar?");
        //Si la condicion es ACEPTAR
        if(condicion){
            //Petición de valor
            var num = parseInt(prompt("Introduce un número "));
            //Contador de veces aceptado 
            contA++;
            //Acumulador de números
            numeros+=num + ",";
        }else{
            //Contador de veces cancelado
            contC++;
        }
    }
    //Muestra de valores recopilados
    alert("Se pulso ACEPTAR " + contA + " numeros introducidos " + numeros + " se pulso CANCELAR " + contC);
}