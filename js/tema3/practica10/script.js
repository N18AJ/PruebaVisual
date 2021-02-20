/* 
@author: Nerea Álvarez Justel
*/
/* 
Screen
*/
function screenBoton() {
  document.getElementById("valor1").innerHTML = "availHeight : " + screen.availHeight;
  document.getElementById("valor2").innerHTML = "availWidth : " + screen.availWidth;
  document.getElementById("valor3").innerHTML = "height : " + screen.height;
  document.getElementById("valor4").innerHTML = "width : " + screen.width;
  document.getElementById("valor5").innerHTML = "colorDepth : " + screen.colorDepth;

  var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[0].style.textAlign = "right";
       lista[0].style.fontSize = "12pt";
    }
}


/* 
Location
*/
function locationBoton() {
  document.getElementById("valor6").innerHTML = "hash : " + location.hash;
  document.getElementById("valor7").innerHTML = "href : " + location.href;
  document.getElementById("valor8").innerHTML = "host : " + location.host;
  document.getElementById("valor9").innerHTML = "hostname : " + location.hostname ;
  document.getElementById("valor10").innerHTML = "orign : " + location.orign;
  document.getElementById("valor11").innerHTML = "pathname : " + location.pathname;
  document.getElementById("valor12").innerHTML = "port : " + location.port;
  document.getElementById("valor13").innerHTML = "protocol : " + location.protocol;
  document.getElementById("valor14").innerHTML = "search : " + location.search;

  var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[1].style.textAlign = "left";
       lista[1].style.fontSize = "12pt";
    }
}

/* 
Recargar
*/
function recargarB() {
    location.reload();
}

/* 
Recargar
*/
//Variable para la ventana
var ventana;
function ventanaB() {
    ventana = window.open("https://www.w3schools.com/","ventanaNueva","width=500, height=500");
}

/* 
Recargar
*/
//Variable para la ventana
var ventana2;
function windowB() {
    ventana2 = window.open("","ventanaWindow","width=800, height=800");
    ventana2.document.write("<h1>Nerea Álvarez Justel - nerea.alvjus@educa.jcyl.es</h1><h3> Objeto Screen </h3><ol class='lista'><li id='valor1'> </li><li id='valor2'></li><li id='valor3'></li><li id='valor4'></li> <li id='valor5'></li></ol><h3>Objeto Location</h3><ol class='lista'><li id='valor6'> </li><li id='valor7'></li><li id='valor8'></li><li id='valor9'></li> <li id='valor10'></li><li id='valor11'></li><li id='valor12'></li> <li id='valor13'></li><li id='valor14'></li></ol>");
    
    ventana2.document.getElementById("valor1").innerHTML = "availHeight : " + screen.availHeight;
    ventana2.document.getElementById("valor2").innerHTML = "availWidth : " + screen.availWidth;
    ventana2.document.getElementById("valor3").innerHTML = "height : " + screen.height;
    ventana2.document.getElementById("valor4").innerHTML = "width : " + screen.width;
    ventana2.document.getElementById("valor5").innerHTML = "colorDepth : " + screen.colorDepth;  

    ventana2.document.getElementById("valor6").innerHTML = "hash : " + location.hash;
    ventana2.document.getElementById("valor7").innerHTML = "href : " + location.href;
    ventana2.document.getElementById("valor8").innerHTML = "host : " + location.host;
    ventana2.document.getElementById("valor9").innerHTML = "hostname : " + location.hostname ;
    ventana2.document.getElementById("valor10").innerHTML = "orign : " + location.orign;
    ventana2.document.getElementById("valor11").innerHTML = "pathname : " + location.pathname;
    ventana2.document.getElementById("valor12").innerHTML = "port : " + location.port;
    ventana2.document.getElementById("valor13").innerHTML = "protocol : " + location.protocol;
    ventana2.document.getElementById("valor14").innerHTML = "search : " + location.search;
}


/* 
Diseño
*/
function myBoton1(){
    var tipo = document.getElementsByTagName("h3");
    for(var i = 0; i < tipo.length; i++){
        tipo[i].style.fontFamily = "Console";
        tipo[i].style.fontSize = "14pt";
        
    }
}


