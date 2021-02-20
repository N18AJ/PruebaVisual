/* 
@author: Nerea Álvarez Justel
*/
/* 

*/
function estilo(){
    
    var titulo = document.getElementById("titulo");
    titulo.style.textAlign = "center";
    titulo.style.textTransform = "uppercase";
    
    var imagen = document.getElementById("cuadro");
    imagen.style.border = "10px double black";
    imagen.style.cssFloat = "left";
    imagen.style.marginRight = "20px";
    
    var parrafo = document.getElementsByTagName("p");
    for(var i = 0; i < parrafo.length; i++){
        parrafo[i].style.textAlign = "justify";
        parrafo[i].style.lineHeight = "1.5"; 
    }
    
    var palabra = document.getElementsByTagName("span");
    for(var i = 0; i < palabra.length; i++){
        palabra[i].style.color = "orange";
    }
    
    var enlace = document.getElementsByTagName("a");
    for(var i = 0; i < enlace.length; i++){
        enlace[i].style.color = "red";
        enlace[i].style.textDecoration = "underline red";
    }
    
    var wikip = document.getElementById("wiki");
    wikip.style.color = "blue";
    wikip.style.textDecoration = "none";
}