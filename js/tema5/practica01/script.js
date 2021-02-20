/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
Un párrafo con el texto que tu quieras y que al pulsar sobre él, 
se cambie el texto en el que has pulsado por la palabra ¡PULSADO!
*/
function myBoton1() {
    //Buscamos el texto a cambiar mediante su id
    var pantalla = document.getElementById("muestra");
    //Sustituimos el texto por TEXTO nuevo
    pantalla.innerHTML = "¡PULSADO!";
}

/* 
Ejercicio 2
Un botón que ponga “Púlsame” y que al pulsarlo aparezca debajo de éste, la palabra ¡PULSADO!
*/
function myBoton2() {
    //Buscamos el espacion donde añadiremos el texto nuevo
    var pantalla2 = document.getElementById("muestra2");
    //Añadimos el texto
    pantalla2.innerHTML = "¡PULSADO!";
}

/* 
Ejercicio 3
Un párrafo que al pasar por encima con el ratón, se cambie el color de la fuente a rojo.
*/
function myBoton3() {
    //Buscamos el texto a cambiar mediante su id
    var pantalla3 = document.getElementById("muestra3");
    //Sustituimos o añadimos el color
    pantalla3.style.color = "red";
}

/* 
Ejercicio 4
Una imagen que al ponerse encima de ella, se cambie a otra imagen del mismo tamaño y al salir “de ella” vuelva a la imagen inicial.
*/

/* 
Ejercicio 5
Un contenedor que al entrar dentro de él cuente cuantos segundos está dentro. 
Cuando el puntero del ratón salga del contenedor que se muestre por pantalla en el propio documento HTML los segundos que ha estado “dentro”.
*/
//Cramos variable
var contador = 0; //Inicializamos a cero
var tiempo;

function myBoton51() {
    //Creamos un intervalo de 1seg 
    tiempo = setInterval(function(){
        //Vamos añadiendo al contador 1 por cada periodo de intevalo
        contador++;
    }, 1000);
}

function myBoton52() {
    //Limpiamos el intevalo
    clearInterval(tiempo);
    //Buscamos el texto a cambiar mediante su id
    var pantalla5 = document.getElementById("muestra5");
    //Añadimos el valor del CONTADOR
    pantalla5.innerHTML = contador + " segs";
}

/* 
Ejercicio 6
Una tabla con 4 celdas y que cada una cambie de color al pasar por encima de ella.
Los colores pueden ser aleatorios,
*/
function myBoton6(celda){
    //Creamos las variables de datos
    var simbolos, color;
    //Valores de los colores
    simbolos = "0123456789ABCDEF";
    //Inicio del color
    color = "#";
    //Realizamos un bucle 
    for(var i = 0; i < 6; i++){
        //Creamos la combinacion del color
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    //Damos el color a cada celda
    celda.style.backgroundColor = color;


    //Forma con colores dados en Array
    /*colores = ["red", "blue", "yellow", "pink", "green"];
    //Damos el valos a una contste aleatorio
    aleatorio = Math.floor(Math.random() * 6);
    //asifnacion de color a cada celda
    celda.style.backgroundColor = colores[aleatorio];*/
}

/* 
Ejercicio 7
Un contenedor que muestre la letra A y mientras se esté dentro del contenedor se vayan visualizando de forma secuencial el resto de letras del abecedario hasta que el usuario salga del contenedor con el ratón.
*/
//Cramos variable
var contador = 0; //Inicializamos a cero
var tiempo;

function myBoton71(){
    //Creamos ARRAY con las letras
    var letra = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];
    var pantalla7 = document.getElementById("muestra7");
    //Creamos un intervalo de 1seg 
    tiempo = setInterval(function(){
        pantalla7.innerHTML = "ABC: " + letra[contador];
        //Vamos añadiendo al contador 1 por cada periodo de intevalo
        contador++;
        //Miramos si ya se recorrio todo el array
        if(contador > 24){
            contador = 0;
        }
    }, 1000);
}

function myBoton72() {
    //Limpiamos el intevalo
    clearInterval(tiempo);
}

/* 
Ejercicio 8
Muestra en el documento HTML las coordenadas que tiene el ratón en cada momento, 
de forma que si el ratón se mueve, cambien continuamente.
*/
function myBoton8(){
        //Creamos la posición X e Y
        var posicionX = event.clientX;
        var posicionY = event.clientY;
        //Buscamos el texto a cambiar mediante su id
        var coordenada = document.getElementById('coordenadas');
        //Añadimos el texto
        coordenada.innerHTML = 'Posicion x: ' + posicionX + ' - Posicion y: ' + posicionY;
}

/* 
Ejercicio 9
Crea un contenedor que tenga dentro 4 divisiones coloreadas de blanco. 
Cuando el usuario entre a una de las divisiones con el ratón, 
ésta se debe de colorear de un color y cuando salga de ella, 
debe de aparecer escrita la palabra “Ok” en esa división. 
Si el color de fondo es muy claro, pon un color de fuente oscura, 
si el color de fondo es oscuro, pon una fuente clara…
*/

function myBoton91(celda){
    //Cambiamos el color de fondo
    celda.style.backgroundColor = "#F59A2C";
}

function myBoton92(celda){
    //Damos color a la palabra
    celda.style.color = "#000000";
    //Insertamos palabra
    celda.innerHTML = "OK";    
}