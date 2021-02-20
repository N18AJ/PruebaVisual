/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
Cambia con JavaScript la alineación y el color de la fuente del <h1> de la página a centrado.
*/
function myBoton1(){
    var aligColor = document.getElementsByTagName("h1");
    for(var i = 0; i < aligColor.length; i++){
        aligColor[i].style.color="red";
        aligColor[i].style.textAlign = "center";
    }
}


/* 
Ejercicio 2
Pon en negrita y subrayado todos los “títulos”: Formularios, Imágenes, Enlaces….

No se vera cambio a ya tener esa caracteristica los titulos
*/
function myBoton2(){
    var negrita = document.getElementsByTagName("h2");
    for(var i = 0; i < negrita.length; i++){
        negrita[i].style.fontWeight = "bold";
    }
}


/* 
Ejercicio 3
Cambia el fondo de la página a un color que no sea muy “fuerte”
*/
function myBoton3(){
   document.body.style.backgroundColor = "pink";
}


/* 
Ejercicio 4
Establece un borde “visible” a todas las imágenes
*/
function myBoton4(){
    var bordeImg = document.getElementsByTagName("img");
    for(var i = 0; i < bordeImg.length; i++){
        bordeImg[i].style.border = "5px solid #FFFFFF";
    }
}


/* 
Ejercicio 5
Cambia la alineación de la primera y la última imagen del contenedor 2.
*/

function myBoton5(){
    var articulo = document.getElementById("cont2");
    var posImg = articulo.getElementsByTagName("img");
    for(var i = 0; i < posImg.length; i++){
        posImg[0].style.cssFloat = "right";
        posImg[3].style.cssFloat = "left";
    }
}


/* 
Ejercicio 6
Cambia la fuente de los botones, establece un borde y ponles un color “como quieras”.
*/
function myBoton6(){
    var cssBoton = document.getElementsByTagName("button");
    for(var i = 0; i < cssBoton.length; i++){
        cssBoton[i].style.border = "2px solid pink";
        cssBoton[i].style.fontFamily = "Impact,Charcoal,sans-serif";
        cssBoton[i].style.backgroundColor = "#FCEAB7";
    }
}


/* 
Ejercicio 7
Cambia el formato de los botones del formulario a un formato diferente a los botones del ejercicio 6.
*/
function myBoton7(){
    var cssBoton = document.getElementsByTagName("button");
    for(var i = 0; i < cssBoton.length; i++){
        cssBoton[i].style.border = "4px solid #FCEAB7";
        cssBoton[i].style.fontFamily = "Arial";
        cssBoton[i].style.backgroundColor = "pink";
    }
}


/* 
Ejercicio 8
Cambia el tamaño, la fuente y la alineación a derecha del primer párrafo.
*/
function myBoton8(){
    var parrafo = document.getElementsByTagName("p");
    for(var i = 0; i < parrafo.length; i++){
        parrafo[0].style.textAlign = "center";
        parrafo[0].style.fontFamily = "Impact,Charcoal,sans-serif";
    }
}


/* 
Ejercicio 9
Cambia el tamaño y el color del segundo párrafo.
*/
function myBoton9(){
    var parrafo = document.getElementsByTagName("p");
    for(var i = 0; i < parrafo.length; i++){
        parrafo[1].style.color = "pink";
        parrafo[1].style.fontSize = "30pt";
    }
}


/* 
Ejercicio 10
Aplícale un estilo que tu quieras a los inputs que no hayas utilizado antes.
*/
function myBoton10(){
    var cssInput = document.getElementsByTagName("input");
    for(var i = 0; i < cssInput.length; i++){
        cssInput[i].style.border = "5px solid pink";
        cssInput[i].style.fontFamily = "Impact,Charcoal,sans-serif";
    }
}


/* 
Ejercicio 11
Cambia el tamaño de todas las imágenes al que tú quieras.
*/
function myBoton11(){
    var tamImg = document.getElementsByTagName("img");
    for(var i = 0; i < tamImg.length; i++){
        tamImg[i].style.width = "100px";
    }
}