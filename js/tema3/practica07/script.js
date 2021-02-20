/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
Muestra por pantalla el título, la última fecha de modificación, el dominio y la URL completa del documento actual.
*/
//Variable para la ventana
var ventana;
/* 
Abrir
*/
function ejercicio1(){
    var num01 = document.getElementById("num01");
        console.log(num01);
    num01.innerHTML = ("Titulo: " + document.title + "<br>" +
    "Ultima Modificación: " + document.lastModified + "<br>" +
    "Dominio: " + document.domain + "<br>" +
    "URL: " + document.URL);
}
/* 
Ejercicio 2
Muestra en el documento la siguiente información:
*/
function ejercicio2(){
    var num02 = document.getElementById("num02");
        console.log(num02);
    num02.innerHTML = ("Titulo: " + document.title + "<br>" + 
    "\nNúmero de imagenes: " + document.images.length + "<br>" +
    "\nNúmero de enlaces externos: " + document.links.length + "<br>" +
    "\nNúmero en enlace a name='': " + document.links.length);
    
    var num03 = document.getElementById("num03");
    //var unoId = document.getElementById("uno"); Solo puede ser 1 elemento con esa id
    var parrafo = document.getElementsByTagName("p");
    var clase = document.getElementsByClassName("verde");
        console.log(num03);
    num03.innerHTML = ("Número de elementos con id='uno': 1" + "<br>" + 
    "\nNúmero de elementos tipo parrafo: " + parrafo.length + "<br>" +
    "\nNúmero de elementos con class='verde': " + clase.length);
}
