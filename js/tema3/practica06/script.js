/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
Comprueba que una de las ventanas de la Práctica 05, está abierta/cerrada con la propiedad
“closed”. Es decir, en uno de los ejercicios que abras una ventana nueva y la cierres con otro botón,
programa otra botón que te permita comprobar si esa ventana se ha cerrado o no.
*/
//Variable para la ventana
var ventana;
/* 
Abrir
*/
function myBoton1(){
                //.open() - Carga un recurso en el contexto de un nuevo navegador (como una ventana) o uno que ya existe, dependiendo de los parametros.
                        //Direccion
                                //Nombre
                                            //Caracteristicas
    ventana = window.open("","ventanaBoton1","width=150, height=150");
}
/* 
Cerre.
*/
function myBoton2(){
            //.close() - Cierra la ventana actual, o la ventana en la cual fue llamada.
    ventana.close();
}
/* 
Muestra de información
*/
function datoVentana(){
    //.closed - Esta propiedad de solo lectura indica si la ventana referenciada está cerrada o no.
    if(ventana.closed){
        alert("Ventana CERRADA");
    }else{
        alert("Ventana ABIERTA");
    }
}

/* 
Ejercicio 2
Crea un script que abra 1 ventana nueva en blanco pulsando un botón en el HTML principal.
Debes de añadir a mayores un botón en el HTML principal que permita mover la ventana por la pantalla
(los valores invéntalos tu).
*/
function moverBoton(){
    //moveTo() - método de la Windowinterfaz mueve la ventana actual a las coordenadas especificadas.
ventana.moveTo(600,500);
    //.focus() - fija el foco del cursor en el elemento indicado, si éste puede ser enfocado.
ventana.focus();
}


/* 
Ejercicio 3
Crea un script que después de pulsar un botón en el documento HTML, cuente 5 segundos y
muestre por pantalla “Han pasado 5 segundos”. Debe de aparecer el mensaje “Han pasado 5 segundos”
cada 5 segundos hasta que pulse un botón “Parar” que para el temporizador y deja de mostrar el mensaje.
*/
var intervalo;
function segBoton(){
    //.setInterval() - Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.
    intervalo = setInterval(cierre, 5000); 
}
function cierre(){
        alert("5 segundos");
    }

function finSegBoton(){
    //.clearInterval() - Cancela una acción reiterativa que se inició mediante una llamada a setInterval
    window.clearInterval(intervalo);
}

/* 
Ejercicio 4
Crea un script que permita activar un temporizador desde 0 al pulsar un botón y empiece a
contar ascendentemente (0, 1, 2….) sin límite. Debe de aparecer otro botón que pare el temporizador al
pulsarlo (es decir, dejen de aparecer números y se pare de contar). Después de pulsar el botón de “parar”
debe de mostrar por pantalla el número más alto al que ha llegado contando.
*/
var crono;
function contadorBoton(){
    //.setInterval() - Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.
    crono = setInterval(parar, 1000); 
}
var contador = 0;
function parar(){

    contador++;
    if(confirm(contador) === false){
    //.clearInterval() - Cancela una acción reiterativa que se inició mediante una llamada a setInterval
    clearInterval(crono);
    }
}

function finContadorBoton(){
    //Muestra
    alert("Segundo " + contador);
}


/* 
Ejercicio 5
Crea un script que visualice una cuenta atrás empezando en 1 minuto. Es decir, tiene que
empezar en 01:00, 00:59, 00:58, 00:57 … así hasta 00:00. Cuando acabe el tiempo muestra por pantalla:
¡Tiempo agotado!
*/
//Creamos variable 
var tiempo = 61;
//Funcion asociada al boton
function fReloj() {
    //Condicion para primer numero
    if(tiempo > 60){
        //Restamos al acumulador 1
        tiempo-= 1;
        //setTimeout() - llama a una función o evalúa una expresión después de un número específico de milisegundos.
        setTimeout("fReloj()",1000);
       document.getElementById('reloj').innerHTML = "01:00"; 
    }else{
        if(tiempo === 0){
            alert("Final");
        }else{
            tiempo-= 1;
            setTimeout("fReloj()",1000);
            document.getElementById('reloj').innerHTML = "00:" + tiempo;
            if(tiempo < 10){
                document.getElementById('reloj').innerHTML = "00:0" + tiempo;
            }
        }
    }  
}







