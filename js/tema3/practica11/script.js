/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
Color en cada cuadro
*/
//Creamos un array de colores a utilizar
 var color = ["red", "green", "blue", "purple", "pink", "black", "white", "yellow"];
 //Cada cuadro tendra un onClick con el que se llamara a la función
function cubo1() {
            //Math.floor - devuelve un valor aleatorio de color
    colores = Math.floor(Math.random() * (color.length));
    //Incicamos a que cubo tiene que aportar el color
    var cubo = document.getElementById("cubo1");
    //Damos el color llamando al array
    cubo.style.backgroundColor = color[colores];
}

function cubo2() {
    colores = Math.floor(Math.random() * (color.length));
    var cubo = document.getElementById("cubo2");
    cubo.style.backgroundColor = color[colores];
}

function cubo3() {
    colores = Math.floor(Math.random() * (color.length));
    var cubo = document.getElementById("cubo3");
    cubo.style.backgroundColor = color[colores];
}

function cubo4() {
    colores = Math.floor(Math.random() * (color.length));
    var cubo = document.getElementById("cubo4");
    cubo.style.backgroundColor = color[colores];
}

function cubo5() {
    colores = Math.floor(Math.random() * (color.length));
    var cubo = document.getElementById("cubo5");
    cubo.style.backgroundColor = color[colores];
}

function cubo6() {
    colores = Math.floor(Math.random() * (color.length));
    var cubo = document.getElementById("cubo6");
    cubo.style.backgroundColor = color[colores];
}

function cubo7() {
    colores = Math.floor(Math.random() * (color.length));
    var cubo = document.getElementById("cubo7");
    cubo.style.backgroundColor = color[colores];
}

function cubo8() {
    colores = Math.floor(Math.random() * (color.length));
    var cubo = document.getElementById("cubo8");
    cubo.style.backgroundColor = color[colores];
}

/*
 Ejercicio 2
Fila 1
 */
//Enlazamos la función con un boton
function myBoton1() {
    //Haremos la seleción a los td, fijando primero en la primera fila
    var fila = document.getElementById("fila1");
    var cubo = fila.getElementsByTagName("td");
    //Seleccionamos un elemento de la fila al hacer el recorrido
    for(var i = 0; i < cubo.length; i++ ){
        //y compararemos ese elemento con otro elemento de esa misma fila
        for(var j = 0; j < cubo.length; j++ ){
            //condicion que no sean el mismo elemento
            if(i != j){
                //Condiciones para no estar son color esa posición
                if(cubo[i].style.backgroundColor == "" ){
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[i].style.backgroundColor = color[cambio];
                }
                //y lo mismo para la posición a comparar
                if(cubo[j].style.backgroundColor == "" ){
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[j].style.backgroundColor = color[cambio];
                }
                //Se comparan lo colores de las posiciones y se cambia si son iguales
                //este bucle se hara mientras algunos colores sean iguales.
                while(cubo[i].style.backgroundColor == cubo[j].style.backgroundColor){
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[j].style.backgroundColor = color[cambio];
                }  
            }
        }
    }
}

/*
 Ejercicio 3
Fila 2
 */
function myBoton2() {
    var fila = document.getElementById("fila2");
    var cubo = fila.getElementsByTagName("td");
    for(var i = 0; i < cubo.length; i++ ){
        for(var j = 0; j < cubo.length; j++ ){
            if(i != j){
                if(cubo[i].style.backgroundColor == "" ){
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[i].style.backgroundColor = color[cambio];
                }
                if(cubo[j].style.backgroundColor == "" ){
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[j].style.backgroundColor = color[cambio];
                }
                while(cubo[i].style.backgroundColor == cubo[j].style.backgroundColor){
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[j].style.backgroundColor = color[cambio];
                }  
            }
        }
    }
}

/*
 Ejercicio 4
Con las 2 filas
 */
function myBoton3() {
    //En este caso nos posicionamos en todos loa td indiferentemente de la fila
    var cubo = document.getElementsByTagName("td");
    for(var i = 0; i < cubo.length; i++ ){
        for(var j = 0; j < cubo.length; j++ ){
            if(i != j){
                if(cubo[i].style.backgroundColor == "" ){
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[i].style.backgroundColor = color[cambio];
                }
                if(cubo[j].style.backgroundColor == "" ){
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[j].style.backgroundColor = color[cambio];
                }
                while(cubo[i].style.backgroundColor == cubo[j].style.backgroundColor){
              
                    var cambio = Math.floor(Math.random() * (color.length));
                    cubo[j].style.backgroundColor = color[cambio];   
                }  
            }
        }
    }
}

/*
 Ejercicio 5
Cambio de color a gusto
 */
function myBoton4() {
    //Realizaremos el bucle mientras la opción sea distinta de cero
    while(posicion !== 0){
    //Petición de opcion de la posición
     var posicion = parseInt(prompt("¿Que cuadro pintamos?\n\
                    1 - 2 - 3 - 4\n\
                    5 - 6 - 7 - 8\n\
    Salimos con 0"));
        //Una vez en la posición entraremos en otro menu para elegir el color
        switch (posicion) {
        case 1:
           //Elegimos el color 
           var elegir = parseInt(prompt("¿Eliga número de color?\n\
                                        1 - Rojo    ||  2 - Azul\n\
                                        3 - Verde   ||  4 - Negro\n\
                                        5 - Blanco  ||  6 - Rosa\n\
                                        7 - Morado  ||  8 - Amarillo"));
                //Dependicendo de la elecion entraremos en un case
                //Y este pondra color a ese cubo en cuestion
            switch (elegir) {
                case 1:
                    var cubo = document.getElementById("cubo1");
                    cubo.style.backgroundColor = "red";
                    break;
                case 2:
                    var cubo = document.getElementById("cubo1");
                    cubo.style.backgroundColor = "blue";
                    break;
                case 3:
                    var cubo = document.getElementById("cubo1");
                    cubo.style.backgroundColor = "green";
                    break;
                case 4:
                    var cubo = document.getElementById("cubo1");
                    cubo.style.backgroundColor = "black";
                    break;
                case 5:
                    var cubo = document.getElementById("cubo1");
                    cubo.style.backgroundColor = "white";
                    break;
                case 6:
                    var cubo = document.getElementById("cubo1");
                    cubo.style.backgroundColor = "pink";
                    break;
                case 7:
                    var cubo = document.getElementById("cubo1");
                    cubo.style.backgroundColor = "purple";
                    break;
                case 8:
                    var cubo = document.getElementById("cubo1");
                    cubo.style.backgroundColor = "yellow";
                    break;
            }    
            break;
        case 2:
           var elegir = parseInt(prompt("¿Eliga número de color?\n\
                                        1 - Rojo    ||  2 - Azul\n\
                                        3 - Verde   ||  4 - Negro\n\
                                        5 - Blanco  ||  6 - Rosa\n\
                                        7 - Morado  ||  8 - Amarillo"));
            switch (elegir) {
                case 1:
                    var cubo = document.getElementById("cubo2");
                    cubo.style.backgroundColor = "red";
                    break;
                case 2:
                    var cubo = document.getElementById("cubo2");
                    cubo.style.backgroundColor = "blue";
                    break;
                case 3:
                    var cubo = document.getElementById("cubo2");
                    cubo.style.backgroundColor = "green";
                    break;
                case 4:
                    var cubo = document.getElementById("cubo2");
                    cubo.style.backgroundColor = "black";
                    break;
                case 5:
                    var cubo = document.getElementById("cubo2");
                    cubo.style.backgroundColor = "white";
                    break;
                case 6:
                    var cubo = document.getElementById("cubo2");
                    cubo.style.backgroundColor = "pink";
                    break;
                case 7:
                    var cubo = document.getElementById("cubo2");
                    cubo.style.backgroundColor = "purple";
                    break;
                case 8:
                    var cubo = document.getElementById("cubo2");
                    cubo.style.backgroundColor = "yellow";
                    break;
            }
            break;
        case 3:
            var elegir = parseInt(prompt("¿Eliga número de color?\n\
                                        1 - Rojo    ||  2 - Azul\n\
                                        3 - Verde   ||  4 - Negro\n\
                                        5 - Blanco  ||  6 - Rosa\n\
                                        7 - Morado  ||  8 - Amarillo"));
            switch (elegir) {
                case 1:
                    var cubo = document.getElementById("cubo3");
                    cubo.style.backgroundColor = "red";
                    break;
                case 2:
                    var cubo = document.getElementById("cubo3");
                    cubo.style.backgroundColor = "blue";
                    break;
                case 3:
                    var cubo = document.getElementById("cubo3");
                    cubo.style.backgroundColor = "green";
                    break;
                case 4:
                    var cubo = document.getElementById("cubo3");
                    cubo.style.backgroundColor = "black";
                    break;
                case 5:
                    var cubo = document.getElementById("cubo3");
                    cubo.style.backgroundColor = "white";
                    break;
                case 6:
                    var cubo = document.getElementById("cubo3");
                    cubo.style.backgroundColor = "pink";
                    break;
                case 7:
                    var cubo = document.getElementById("cubo3");
                    cubo.style.backgroundColor = "purple";
                    break;
                case 8:
                    var cubo = document.getElementById("cubo3");
                    cubo.style.backgroundColor = "yellow";
                    break;
            }
            break;
        case 4:
            var elegir = parseInt(prompt("¿Eliga número de color?\n\
                                        1 - Rojo    ||  2 - Azul\n\
                                        3 - Verde   ||  4 - Negro\n\
                                        5 - Blanco  ||  6 - Rosa\n\
                                        7 - Morado  ||  8 - Amarillo"));
            switch (elegir) {
                case 1:
                    var cubo = document.getElementById("cubo4");
                    cubo.style.backgroundColor = "red";
                    break;
                case 2:
                    var cubo = document.getElementById("cubo4");
                    cubo.style.backgroundColor = "blue";
                    break;
                case 3:
                    var cubo = document.getElementById("cubo4");
                    cubo.style.backgroundColor = "green";
                    break;
                case 4:
                    var cubo = document.getElementById("cubo4");
                    cubo.style.backgroundColor = "black";
                    break;
                case 5:
                    var cubo = document.getElementById("cubo4");
                    cubo.style.backgroundColor = "white";
                    break;
                case 6:
                    var cubo = document.getElementById("cubo4");
                    cubo.style.backgroundColor = "pink";
                    break;
                case 7:
                    var cubo = document.getElementById("cubo4");
                    cubo.style.backgroundColor = "purple";
                    break;
                case 8:
                    var cubo = document.getElementById("cubo4");
                    cubo.style.backgroundColor = "yellow";
                    break;
            }
             break;
        case 5:
           var elegir = parseInt(prompt("¿Eliga número de color?\n\
                                        1 - Rojo    ||  2 - Azul\n\
                                        3 - Verde   ||  4 - Negro\n\
                                        5 - Blanco  ||  6 - Rosa\n\
                                        7 - Morado  ||  8 - Amarillo"));
            switch (elegir) {
                case 1:
                    var cubo = document.getElementById("cubo5");
                    cubo.style.backgroundColor = "red";
                    break;
                case 2:
                    var cubo = document.getElementById("cubo5");
                    cubo.style.backgroundColor = "blue";
                    break;
                case 3:
                    var cubo = document.getElementById("cubo5");
                    cubo.style.backgroundColor = "green";
                    break;
                case 4:
                    var cubo = document.getElementById("cubo5");
                    cubo.style.backgroundColor = "black";
                    break;
                case 5:
                    var cubo = document.getElementById("cubo5");
                    cubo.style.backgroundColor = "white";
                    break;
                case 6:
                    var cubo = document.getElementById("cubo5");
                    cubo.style.backgroundColor = "pink";
                    break;
                case 7:
                    var cubo = document.getElementById("cubo5");
                    cubo.style.backgroundColor = "purple";
                    break;
                case 8:
                    var cubo = document.getElementById("cubo5");
                    cubo.style.backgroundColor = "yellow";
                    break;
            }
        case 6:
            var elegir = parseInt(prompt("¿Eliga número de color?\n\
                                        1 - Rojo    ||  2 - Azul\n\
                                        3 - Verde   ||  4 - Negro\n\
                                        5 - Blanco  ||  6 - Rosa\n\
                                        7 - Morado  ||  8 - Amarillo"));
            switch (elegir) {
                case 1:
                    var cubo = document.getElementById("cubo6");
                    cubo.style.backgroundColor = "red";
                    break;
                case 2:
                    var cubo = document.getElementById("cubo6");
                    cubo.style.backgroundColor = "blue";
                    break;
                case 3:
                    var cubo = document.getElementById("cubo6");
                    cubo.style.backgroundColor = "green";
                    break;
                case 4:
                    var cubo = document.getElementById("cubo6");
                    cubo.style.backgroundColor = "black";
                    break;
                case 5:
                    var cubo = document.getElementById("cubo6");
                    cubo.style.backgroundColor = "white";
                    break;
                case 6:
                    var cubo = document.getElementById("cubo6");
                    cubo.style.backgroundColor = "pink";
                    break;
                case 7:
                    var cubo = document.getElementById("cubo6");
                    cubo.style.backgroundColor = "purple";
                    break;
                case 8:
                    var cubo = document.getElementById("cubo6");
                    cubo.style.backgroundColor = "yellow";
                    break;
            } 
            break;
        case 7:
            var elegir = parseInt(prompt("¿Eliga número de color?\n\
                                        1 - Rojo    ||  2 - Azul\n\
                                        3 - Verde   ||  4 - Negro\n\
                                        5 - Blanco  ||  6 - Rosa\n\
                                        7 - Morado  ||  8 - Amarillo"));
            switch (elegir) {
                case 1:
                    var cubo = document.getElementById("cubo7");
                    cubo.style.backgroundColor = "red";
                    break;
                case 2:
                    var cubo = document.getElementById("cubo7");
                    cubo.style.backgroundColor = "blue";
                    break;
                case 3:
                    var cubo = document.getElementById("cubo7");
                    cubo.style.backgroundColor = "green";
                    break;
                case 4:
                    var cubo = document.getElementById("cubo7");
                    cubo.style.backgroundColor = "black";
                    break;
                case 5:
                    var cubo = document.getElementById("cubo7");
                    cubo.style.backgroundColor = "white";
                    break;
                case 6:
                    var cubo = document.getElementById("cubo7");
                    cubo.style.backgroundColor = "pink";
                    break;
                case 7:
                    var cubo = document.getElementById("cubo7");
                    cubo.style.backgroundColor = "purple";
                    break;
                case 8:
                    var cubo = document.getElementById("cubo7");
                    cubo.style.backgroundColor = "yellow";
                    break;
            }
            break;
        case 8:
            var elegir = parseInt(prompt("¿Eliga número de color?\n\
                                        1 - Rojo    ||  2 - Azul\n\
                                        3 - Verde   ||  4 - Negro\n\
                                        5 - Blanco  ||  6 - Rosa\n\
                                        7 - Morado  ||  8 - Amarillo"));
            switch (elegir) {
                case 1:
                    var cubo = document.getElementById("cubo8");
                    cubo.style.backgroundColor = "red";
                    break;
                case 2:
                    var cubo = document.getElementById("cubo8");
                    cubo.style.backgroundColor = "blue";
                    break;
                case 3:
                    var cubo = document.getElementById("cubo8");
                    cubo.style.backgroundColor = "green";
                    break;
                case 4:
                    var cubo = document.getElementById("cubo8");
                    cubo.style.backgroundColor = "black";
                    break;
                case 5:
                    var cubo = document.getElementById("cubo8");
                    cubo.style.backgroundColor = "white";
                    break;
                case 6:
                    var cubo = document.getElementById("cubo8");
                    cubo.style.backgroundColor = "pink";
                    break;
                case 7:
                    var cubo = document.getElementById("cubo8");
                    cubo.style.backgroundColor = "purple";
                    break;
                case 8:
                    var cubo = document.getElementById("cubo8");
                    cubo.style.backgroundColor = "yellow";
                    break;
            }
            break;
         } 
     }     
}



/* 
Recargar
*/
function recargarB() {
    location.reload();
}