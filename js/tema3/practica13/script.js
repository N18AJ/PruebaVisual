/* 
@author: Nerea Álvarez Justel
*/
/* 
Opción A
*/
var cambioS;
var segundos;
var contador = 0;
function myBoton1(segundosInicio) {
    var rojo1 = document.getElementById("cubo7");
    rojo1.style.backgroundColor = "red";
    var rojo2 = document.getElementById("cubo9");
    rojo2.style.backgroundColor = "red";
    
    var posicionS = document.getElementsByTagName("td");
    if (segundosInicio !== undefined) {
        segundos = segundosInicio;
    } else {
        segundos = 1;
    }
    //clearInterval - Cancela una acción reiterativa que se inició mediante una llamada a setInterval.
    clearInterval(cambioS);
            // setInterval() - Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso. 
    cambioS = setInterval(function () {
        if (segundos < 20) {
            /*Semaforo 1*/
            posicionS[0].style.backgroundColor = "red";
            posicionS[1].style.backgroundColor = "#2a2f4a";
            posicionS[2].style.backgroundColor = "#2a2f4a";

            /*Semaforo 2*/
            posicionS[3].style.backgroundColor = "#2a2f4a";
            posicionS[4].style.backgroundColor = "#2a2f4a";
            posicionS[5].style.backgroundColor = "green";
        }

        if (segundos > 20 && segundos < 22) {
            /*Semaforo 1*/
            posicionS[0].style.backgroundColor = "#2a2f4a";
            posicionS[1].style.backgroundColor = "yellow";
            posicionS[2].style.backgroundColor = "#2a2f4a";

            /*Semaforo 2*/
            posicionS[3].style.backgroundColor = "#2a2f4a";
            posicionS[4].style.backgroundColor = "yellow";
            posicionS[5].style.backgroundColor = "#2a2f4a";
        }

        if (segundos > 22 && segundos < 40) {
            /*Semaforo 1*/
            posicionS[0].style.backgroundColor = "#2a2f4a";
            posicionS[2].style.backgroundColor = "green";
            posicionS[1].style.backgroundColor = "#2a2f4a";


            /*Semaforo 2*/
            posicionS[3].style.backgroundColor = "red";
            posicionS[4].style.backgroundColor = "#2a2f4a";
            posicionS[5].style.backgroundColor = "#2a2f4a";
        }
        if (segundos > 40 && segundos < 42) {
            /*Semaforo 1*/
            posicionS[0].style.backgroundColor = "#2a2f4a";
            posicionS[1].style.backgroundColor = "yellow";
            posicionS[2].style.backgroundColor = "#2a2f4a";

            /*Semaforo 2*/
            posicionS[3].style.backgroundColor = "#2a2f4a";
            posicionS[4].style.backgroundColor = "yellow";
            posicionS[5].style.backgroundColor = "#2a2f4a";
        }
        segundos++;
        if (segundos === 42) {
            contador++;
            myBoton1();
        }
    //Damos parametro de tiempo (1s) y nombramos    
    }, 1000, "Tiempo");
    if (contador === 2) {
        myBotonP1();
    }
}

/* 
Opción B
*/
var cambioP1;
function myBotonP1() {
    var posicionS = document.getElementsByTagName("td");
    segundos = 1;
    //clearInterval - Cancela una acción reiterativa que se inició mediante una llamada a setInterval.
    clearInterval(cambioP1);
            // setInterval() - Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso. 
    cambioP1 = setInterval(function () {
        console.log(segundos);
        if (segundos === 5) {
            myBoton1();
        }
        if (segundos === 10) {
            /*Semaforo 1 de Peatones*/
            posicionS[6].style.backgroundColor = "green";
            posicionS[7].style.backgroundColor = "#2a2f4a";
        }

        if (segundos === 20) {
            /*Semaforo 1 de Peatones*/
            posicionS[6].style.backgroundColor = "#2a2f4a";
            posicionS[7].style.backgroundColor = "red";
        }

        segundos++;
    //Damos parametro de tiempo (1s) y nombramos
    }, 1000, "Tiempo");
}

var cambioP2;
var segundosInicio;
var segundos2;
function myBotonP2() {
    var posicionS = document.getElementsByTagName("td");
    segundos2 = 1;
    //clearInterval - Cancela una acción reiterativa que se inició mediante una llamada a setInterval.
    clearInterval(cambioP2);
            // setInterval() - Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso. 
    cambioP2 = setInterval(function () {
        //Seguimiento por consola
        console.log(segundos2);
        if (segundos2 === 5) {
            segundosInicio = 22;
            myBoton1(segundosInicio);
        }
        if (segundos2 === 10) {
            /*Semaforo 2 de Peatones*/
            posicionS[8].style.backgroundColor = "green";
            posicionS[9].style.backgroundColor = "#2a2f4a";
        }

        if (segundos2 === 20) {
            /*Semaforo 2 de Peatones*/
            posicionS[8].style.backgroundColor = "#2a2f4a";
            posicionS[9].style.backgroundColor = "red";
        }
        segundos2++;
    //Damos parametro de tiempo (1s) y nombramos
    }, 1000, "Tiempo");
}