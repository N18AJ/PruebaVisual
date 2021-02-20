/* 
@author: Nerea Álvarez Justel
*/
/* Ejercicio 1
Crea un script que al pulsar en un botón se abran a la vez 5 ventanas “vacías”. 
Luego crea varios botones que recarguen páginas web/documentos web diferentes en cada una de las ventanas. 
Por ejemplo: en la ventana 1 que cargue Google, en la ventana 2 un documento html almacenado en el equipo, 
en la ventana 3 la página del ayuntamiento de Benavente y así sucesivamente…
Luego permite que el script cierre una ventana en concreto. Pídele al usuario que te diga qué ventana quiere cerrar y ciérrala.
 */
//Variable para la ventana
var ventana1;
var ventana2;
var ventana3;
var ventana4;
var ventana5;
function myBoton1(){
                //.open() - Carga un recurso en el contexto de un nuevo navegador (como una ventana) o uno que ya existe, dependiendo de los parametros.
                        //Direccion
                                //Nombre
                                            //Caracteristicas
    ventana1 = window.open("","ventanaBoton1","_blank");
     ventana2 = window.open("","ventanaBoton2","width=250, height=250");
      ventana3 = window.open("","ventanaBoton3","width=150, height=150");
       ventana4 = window.open("","ventanaBoton4","width=500, height=500");
        ventana5 = window.open("","ventanaBoton5","width=400, height=400");
}

function ventanaBoton1(){
    ventana1 = window.open("https://www.w3schools.com/","ventanaBoton1","");
    //.focus() - fija el foco del cursor en el elemento indicado, si éste puede ser enfocado.
    ventana1.focus();
}

function ventanaBoton2(){
    ventana2 = window.open("../../../../assets/docs/tema3/extra/practicaB/enunciadoB.pdf","ventanaBoton2","");
    //.focus() - fija el foco del cursor en el elemento indicado, si éste puede ser enfocado.
    ventana2.focus();
}

function ventanaBoton3(){
    ventana3 = window.open("https://interbenavente.es/","ventanaBoton3","");
    //.focus() - fija el foco del cursor en el elemento indicado, si éste puede ser enfocado.
    ventana3.focus();
}

function ventanaBoton4(){
    ventana4 = window.open("https://www.youtube.com/watch?v=AttSqFIeE0Y","ventanaBoton4","");
    //.focus() - fija el foco del cursor en el elemento indicado, si éste puede ser enfocado.
    ventana4.focus();
}

function ventanaBoton5(){
    ventana5 = window.open("../../../../assets/docs/tema3/extra/practicaA/enunciadoA.pdf","ventanaBoton5","");
    //.focus() - fija el foco del cursor en el elemento indicado, si éste puede ser enfocado.
    ventana5.focus();
}

function opcionCierre(){
    //Realizaremos el bucle mientras la opción sea distinta de cero
    while(ventana !== 0){
    //Petición de opcion en MENU
     var ventana = parseInt(prompt("¿Qué ventana quieres cerrar?\n\
                1- W3school\n\
                2- Enunciado B\n\
                3- InterBenavente\n\
                4- YouTube\n\
                5- Enunciado A\n\
Salimos con 0"));

        switch (ventana) {
         case 1:
             //.close() - Cierra la ventana actual, o la ventana en la cual fue llamada.
            ventana1.close();
             break;
         case 2:
            ventana2.close();
             break;
         case 3:
             ventana3.close();
             break;
         case 4:
             ventana4.close();
             break;
         case 5:
            ventana5.close(); 
             break;
         }         
     }
}


/* Ejercicio 2
Crea un reloj JavaScript que marque los segundos. De forma que aparezca la hora actual y se vea como van aumentando los segundos.
Ejemplo: Solo se puede ver cómo cambian los segundos en un único reloj (10:00:01, 10:00:02, 10:00:03…)
 */
//Función para crear el reloj
function ventanaReloj(){
    //Creamos variables para almacenar la fecha de hoy y las horas, minutos y segundos de este momento
    var fecha = new Date();
    var h = fecha.getHours();
    var min = fecha.getMinutes();
    var seg = fecha.getSeconds();
    
    //Si las horas, minutoss o segundos son una cifra menor que 10, se añade un 0
    if (h < 10) {
        h = "0" + h;
        }
    if (min < 10) {
        min = "0" + min;
        }
    if (seg < 10) {
        seg = "0" + seg;
        }
    
    //Creamos una variable que almacenará las horas, minutos y segundos con formato de reloj
    var hora = h + " : " + min + " : " + seg;
    var muestra = document.getElementById("reloj");
    muestra.innerHTML = hora;
    return muestra; 
    
}
//Llama a la función actualizar() cada segundo para actualizar la hora
setInterval(ventanaReloj,1000);



/* Ejercicio 3
Crea un script que visualice un temporizador. Nada más arrancar el script debe de empezar a contar segundos en formato hora (00:00:01) en sentido ascendente.
Deben de aparecer los siguientes botones:
Botón que pare el temporizador
Botón que lo reinicie
Botón que establezca un número que empiece a contar. Por ejemplo: Se establece que empiece en 10 y el temporizador debe de empezar a contar ascendentemente en: 00:00:10
 */
//El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.
window.onload = function() {
    //Relacion de resultado con el ID donde se mostrara en el HTML
     pantalla = document.getElementById("muestra");
}

//Inicializamos la variable a false para indicar que no esta inicializada
var inicio = false; 
//Creamos la variable tiempo
var tiempo = 0; 
function start () {
    //Si no esta iniciada se iniciara la cuenta
    if (inicio == false) { 
        timeInicial = new Date();
        //le daos a control el valor de setInterval()
        //cronometro() los cambios de tiempo
        control = setInterval(cronometro,10);
        inicio = true;
        }
    }
function cronometro () { 
    timeActual = new Date();
    tiempo = timeActual - timeInicial;
    tiempo2 = new Date();
    tiempo2.setTime(tiempo); 
    //Iremos pasado de milisegundo - segundos - minutos - hora
    mili = Math.round(tiempo2.getMilliseconds()/10);
    seg = tiempo2.getSeconds();
    min = tiempo2.getMinutes();
    h = tiempo2.getHours()-1;
    //Damos dos posiciones
    if (mili < 10) {mili = "0" + mili;}
    if (seg < 10) {seg = "0" + seg;} 
    if (min < 10) {min = "0" + min;}
    if (h < 10) {h = "0" + h ;}
    //Muestra de datos del crono
    pantalla.innerHTML = h + " : " + min + " : " + seg;
    }

//Esta funcion para el crono, lo que seria igual a in reset pero dejando los dato
function stop () { 
    //Si se inicio el crono se para/limpia
    if (inicio == true) {
        //Cancela una acción reiterativa que se inició mediante una llamada a setInterval.
        clearInterval(control);
        inicio = false;
        }     
    }      

//Esta función borra y vuelve al inicio de formato
function reset () {
    //Si se inicio el crono se para/limpia
    if (inicio == true) {
        //Cancela una acción reiterativa que se inició mediante una llamada a setInterval.
        clearInterval(control);
        inicio = false;
       }
    tiempo = 0;
    //Vuelve a mostrar el formato
    pantalla.innerHTML = "00 : 00 : 00";
    }