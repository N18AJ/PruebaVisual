/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
*/
//Creación de variables para eventos
var key1;
var key2;
var key3;


function myBoton1(){
    //Buscamos el texto a cambiar mediante su nombre de la etiqueta
    texto = document.getElementsByTagName("td");
    //Asociacion de evento
    key1 = event.keyCode;
    //Indicamos posicion para mostrar la información
    //event.type - devuelve una cadena de texto que contiene el tipo de evento. 
    texto[0].innerHTML = "Tipo de evento: " + event.type;
    //event.keyCode - devuelve el valor Unicode de la tecla.
    texto[1].innerHTML = "Propiedad KeyCode: " + event.keyCode;
    //event.type - devuelve el valor Unicode de la tecla.
    texto[2].innerHTML = "Propiedad CharCode: " + event.charCode;
    //Realizamos una comparación para saber si hay valor en las variables
    if(key1 != null && key2 != null && key3 != null){
        iguales();
    }
}


function myBoton2(){
    //Buscamos el texto a cambiar mediante su nombre de la etiqueta
    texto = document.getElementsByTagName("td");
    key2 = event.keyCode;
    
    texto[3].innerHTML = "Tipo de evento: " + event.type;
    texto[4].innerHTML = "Propiedad KeyCode: " + event.keyCode;
    texto[5].innerHTML = "Propiedad CharCode: " + event.charCode;
    if(key1 != null && key2 != null && key3 != null){
        iguales();
    }
}


function myBoton3(){
    //Buscamos el texto a cambiar mediante su nombre de la etiqueta
    texto = document.getElementsByTagName("td");
    key3 = event.keyCode;
    
    texto[6].innerHTML = "Tipo de evento: " + event.type;
    texto[7].innerHTML = "Propiedad KeyCode: " + event.keyCode;
    texto[8].innerHTML = "Propiedad CharCode: " + event.charCode;
    if(key1 != null && key2 != null && key3 != null){
        iguales();
    }
}

/* 
Ejercicio 2
*/
//Funcion de la IGUALDAD
function iguales(){
    //Visualizacion de valores por console
    console.log("Campo 1: " + key1);
    console.log("Campo 2: " + key2);
    console.log("Campo 3: " + key3);
    //Condicion de comaparación
    //Si se cumple la igualdad, y mostraremos mensaje
    if(key1 === key2 && key1  === key3 && key2 === key3){
        muestra = document.getElementById("solucion");
        muestra.innerHTML = " ¡¡¡¡ Iguales !!!!";  
    }
}






