/* 
@author: Nerea Álvarez Justel
*/
/* Variables globales */
var aImagenes = document.getElementsByTagName("img"); // array de todas las imágenes
var aDosUltimas = []; //array de las dos últimas cartas elegidas
var G = false, H = false, R = false; // booleans globales que guardan si se ha conseguido una pareja de cartas iguales 

// Función que se ejecuta al pinchar una carta

function tocarCarta(carta) {
    aDosUltimas.push(carta); // se guarda la imágen en el array de las dos últimas cartas seleccionadas
    if (aDosUltimas.length < 3) { // si hay menos de 3 cartas en el array de las dos últimas
        switch (carta.className) { // según la clase de la carta, se cambia la imágen que se muestra
            case "1":
                carta.src = "../../../assets/images/tema5/practica07/g.jpg";
                break;
            case "2":
                carta.src = "../../../assets/images/tema5/practica07/h.jpg";
                break;
            case "3":
                carta.src = "../../../assets/images/tema5/practica07/r.jpg";
                break;
        }
        setTimeout(function () { // al cabo de un segundo, se vuelve a la imagen original
            carta.src = "../../../assets/images/tema5/practica07/reverso.jpg";
        }, 1000);
    } else { // si hay más de dos cartas en el array 'aDosUltimas' 
        aDosUltimas.length = 0; // se reinicia el array
    }
    setTimeout(function () { // al cabo de cerca de dos segundos y si se han pinchado dos cartas [array 'aDosUltimas' completo], 
        if (aDosUltimas.length === 2) {
            controlCartas(aDosUltimas); //se envía el array a la función que comprueba si se han formado o no parejas
        }
    }, 1850);
}

// Función que controla si se ha conseguido alguna de las parejas o todas ellas.

function controlCartas(array) {
    var bReset = document.getElementById("reset"); // botón de reinicio ocultado en un principio
    var g = true, h = true, r = true; // booleans que comprueban la completación de cada determinada pareja

    //array con las parejas respectivamente
    var aG = document.getElementsByClassName("1");
    var aH = document.getElementsByClassName("2");
    var aR = document.getElementsByClassName("3");

    for (var i = 0; i < 2; i++) { //recorremos el array de las dos últimas
        if (array[i] !== aG[i]) { // si el array("aDosUltimas") no coincide completamente con el array de una pareja 
            g = false; // pues ya no se ha formado esa pareja 
        }
        if (array[i] !== aH[i]) {
            h = false;
        }
        if (array[i] !== aR[i]) {
            r = false;
        }       
    }
    if (g || h || r ) { // si se ha formado alguna pareja
        for (var e = 0; e < 2; e++) {
            array[e].onclick = "null"; // las cartas ya no se pueden pinchar y se les cambia la imágen según su clase
            if (g) {
                array[e].src = "../../../assets/images/tema5/practica07/g.jpg";
                G = true; // se pasa el boolean global de esa pareja a true, determinando que ya se ha formado la pareja durante el juego
            }
            if (h) {
                array[e].src = "../../../assets/images/tema5/practica07/h.jpg";
                H = true;
            }
            if (r) {
                array[e].src = "../../../assets/images/tema5/practica07/r.jpg";
                R = true;
            }
        }
    }
    if (G && H && R) { // si se han formado todas las parejas durante el juego, ya se finaliza el juego
        bReset.style.display = "block"; // se hace visible el botón de reinicio
    }
    aDosUltimas.length = 0; // reiniciamos el array de las dos últimas cartas seleccionadas

}

//Función que genera una pareja de 1, 2 y 3 en orden aleatorio,para que cada vez que juegues sea diferente.
 
function aleatorios() {
    var aleatorios = []; // array donde guardaremos los números aleatorios
    var c1, c2, c3, c4; // contadores de los diferentes números
    do { // bucle que no finaliza hasta que solo haya dos repeticiones de cada número, es decir, (1x2, 2x2 y 3x2)
        c1 = 0;
        c2 = 0;
        c3 = 0;
        for (var e = 0; e < aImagenes.length; e++) {
            aleatorios[e] = Math.floor((Math.random() * 3) + 1);
            switch (aleatorios[e]) {
                case 1:
                    c1++;
                    break;
                case 2:
                    c2++;
                    break;
                case 3:
                    c3++;
                    break;
            }
        }
    } while (c1 > 2 || c2 > 2 || c3 > 2)
    for (var i = 0; i < aImagenes.length; i++) { // una vez generados correctamente los números aleatorios
        aImagenes[i].className = aleatorios[i]; // se añaden como clase a las cartas
    }
}

 
//Función que se ejecuta al pinchar el botón 'resultado' que 'voltea' a todas las cartas mostrando sus valores y finalizando con el juego.

function rendirse() {
    var bReset = document.getElementById("reset"); // botón de reinicio ocultado en un principio
    for (var i = 0; i < aImagenes.length; i++) { // recorremos todas las imágenes
        aImagenes[i].onclick = "null"; // ya no se pueden pinchar las imágenes
        switch (aImagenes[i].className) { // según su clase, se cambian las imágenes a su "valor"
            case "1":
                aImagenes[i].src = "../../../assets/images/tema5/practica07/g.jpg";
                break;
            case "2":
                aImagenes[i].src = "../../../assets/images/tema5/practica07/h.jpg";
                break;
            case "3":
                aImagenes[i].src = "../../../assets/images/tema5/practica07/r.jpg";
                break;   
        }
    }
    bReset.style.display = "block"; // hacemos el botón de reinicio visible
}

// Función que se ejecuta al pinchar el botón 'reset' que recarga la página y por tanto reinicia el juego de manera que aleatoria el orden de las cartas.

function reinicio() {
    location.reload();
}

//Según cargue la página, ejecutamos la funcion aleatorios()
window.onload = aleatorios;