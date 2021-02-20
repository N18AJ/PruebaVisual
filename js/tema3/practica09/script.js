/* 
@author: Nerea Álvarez Justel
*/
/* 
Muestra de la propiedad .appCodeName
*/
function codeName() {
  var x = "Browser CodeName: " + navigator.appCodeName;
  console.log(x);
  var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[0].style.border = "2px solid pink";
       lista[0].style.textAlign = "center";
    }
}
/* 
Muestra de la propiedad .appName
*/
function nameNav() {
  var x = "Browser Name: " + navigator.appName;
  console.log(x);
  var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[1].style.border = "2px solid pink";
       lista[1].style.textAlign = "center";
    }
}
/* 
Muestra de la propiedad .appVersion
*/
function version() {
  var x = "Browser Version: " + navigator.appVersion;
  console.log(x);
  var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[2].style.border = "2px solid pink";
       lista[2].style.textAlign = "center";
    }
}
/* 
Muestra de la propiedad .cookieEnabled
*/
function cookieNav() {
  var x = "Cookies Enabled: " + navigator.cookieEnabled ;
  console.log(x);
  var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[3].style.border = "2px solid pink";
       lista[3].style.textAlign = "center";
    }
}
/* 
Muestra de la propiedad .geolocation
*/
function geo() {
  var x = "Browser Name: " + navigator.geolocation;
  console.log(x);
  var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[4].style.border = "2px solid pink";
       lista[4].style.textAlign = "center";
    }
}
/* 
Muestra de la propiedad .language
*/
function idioma() {
  var x = "Browser Language: " + navigator.language;
  console.log(x);
  var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[5].style.border = "2px solid pink";
       lista[5].style.textAlign = "center";
    }
}
/* 
Diseño
*/
function myBoton1(){
    var tipo = document.getElementsByTagName("h3");
    for(var i = 0; i < tipo.length; i++){
        tipo[i].style.fontFamily = "Console";
    }
    var lista = document.getElementsByClassName("lista");
  for(var i = 0; i < lista.length; i++){
       lista[6].style.border = "2px solid pink";
       lista[6].style.textAlign = "center";
    }
}

function myBoton2(){
    var navegadores = document.getElementById("navegadores");
    var navegador = navegadores.getElementsByTagName("li");
    for(var i = 0; i < navegador.length; i++){
       navegador[i].style.fontWeight = "bold";
       navegador[i].style.fontFamily = "Arial";
       navegador[i].style.border = "2px solid pink";
       navegador[i].style.textAlign = "center";
    }
}

