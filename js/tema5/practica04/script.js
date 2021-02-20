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
        muestra.style.fontSize = "26pt";
        muestra.style.textAlign = "center";
    }
}

/* 
Ejercicio 2
*/
function myBoton4(){
    //Buscamos el elemento mediante Id
    var leer4 = document.getElementById("key4").value;
    
    //Creamos un bucle para recorrer el elemento a leer
    //Si councice alguna letra con una vocal eleminara con .remplace()
    for(var i = 0; i < leer4.length; i++){
        //Condicion de igualdad de caracter
        if(leer4.charAt(i) === "a"){
                        //.replace("elemeto a reconocer", "elemento sustitutivo")
            cadena = leer4.replace("a", "");
            //Se va recargando la cadena de letras
            document.getElementById("key4").value = cadena;
        }
        
        if(leer4.charAt(i) === "e"){
            cadena = leer4.replace("e", "");
            document.getElementById("key4").value = cadena;
        }
        
        if(leer4.charAt(i) === "i"){
            cadena = leer4.replace("i", "");
            document.getElementById("key4").value = cadena;
        }
        
        if(leer4.charAt(i) === "o"){
            cadena = leer4.replace("o", "");
            document.getElementById("key4").value = cadena;
        }
        
        if(leer4.charAt(i) === "u"){
            cadena = leer4.replace("u", "");
            document.getElementById("key4").value = cadena;
        }
        
         if(leer4.charAt(i) === "A"){
            cadena = leer4.replace("A", "");
            document.getElementById("key4").value = cadena;
        }
        
        if(leer4.charAt(i) === "E"){
            cadena = leer4.replace("E", "");
            document.getElementById("key4").value = cadena;
        }
        
        if(leer4.charAt(i) === "I"){
            cadena = leer4.replace("I", "");
            document.getElementById("key4").value = cadena;
        }
        
        if(leer4.charAt(i) === "O"){
            cadena = leer4.replace("O", "");
            document.getElementById("key4").value = cadena;
        }
        
        if(leer4.charAt(i) === "U"){
            cadena = leer4.replace("U", "");
            document.getElementById("key4").value = cadena;
        }
    }
}


/* 
Ejercicio 3
*/
function myBoton5(){
    //Buscamos mediante id
    var muestra3 = document.getElementById("key5");
    //Reamos elemento para recorrer
    recorre3 = muestra3.value;
    //Condicion de 4 letras cambiar de color del fondo
    if(recorre3.length === 4){
        muestra3.style.backgroundColor = "green";
        muestra3.style.color = "white";
        muestra3.style.textTransform = "uppercase";
    }else{ //Si no mandener rojo
        muestra3.style.backgroundColor = "red";
        muestra3.style.color = "black";
        muestra3.style.textTransform = "lowercase";
    }
}


/* 
Ejercicio 4
*/
function myBoton6(){
    //Buscamos el elemento mediante Id
    var tecla6 = document.getElementById("key6").value;
    var tecla7 = document.getElementById("key7").value;
    var tecla8 = document.getElementById("key8").value;
    var tecla9 = document.getElementById("key9").value;
    var tecla10 = document.getElementById("key10").value;
    var tecla11 = document.getElementById("key11").value;
    var tecla12 = document.getElementById("key12").value;
    var tecla13 = document.getElementById("key13").value;
    
    var muestra6 = document.getElementById("teclas");
    //Condicion de igualdad
     if(tecla6 === "a" && tecla7 === "s" && tecla8 === "d" && tecla9 === "f" && tecla10 === "j" && tecla11 === "k" && tecla12 === "l" && tecla13 === "ñ"){
        muestra6.innerHTML = " ¡¡¡¡ Correcto !!!!"; 
        muestra6.style.fontSize = "26pt";
        muestra6.style.textAlign = "center";
    }else{ 
        muestra6.innerHTML = ""; 
    }
}
