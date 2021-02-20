/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
*/
//Buscamoslas imagenes por nombre de etiqueta
var aFotos = document.getElementsByTagName("img");
function intercambio(pos) {
    //Creamos variable auxiliar
    var aux;
    //Condicion de posicion distinta a 3
    if (pos !== 3) {
        aux = aFotos[pos].src; //asignamos una img a la variable aux con su ruta
        aFotos[pos].src = aFotos[pos + 1].src; //asignamos a esa foto la igualdad con una poto con posicion +1 y su ruta
        aFotos[pos + 1].src = aux; //Asignamos la unagen nueva a la varible aux con su ruta
    } else { //En caso de ser la ultima posición -- Se mandara a posición c0
        aux = aFotos[pos].src;
        aFotos[pos].src = aFotos[0].src;
        aFotos[0].src = aux;
    }
    console.log(aFotos[pos]);
}

/* 
Ejercicio 2
*/
function tipoCaracter(lugar) {
    //mostramos el valor de los caracteres y los mostramos posterioremente
    var valor = lugar.value, muestra;
    if (lugar.id === "input") {//Funcion y resultado para el input
        muestra = document.getElementById("areaInput");
        muestra.innerHTML = "Texto introducido en el input: <br>";
    } else {//El mismo procero pero para el textArea
        muestra = document.getElementById("areaTexArea");
        muestra.innerHTML = "Texto introducido en el textarea: <br>";
    }
    //Bucle para recorrer todos los carracteres
    for (var i = 0; i < valor.length; i++) {
        //forma de mostrado
        muestra.innerHTML += valor.charAt(i) + " = " + valor.charCodeAt(i) + "<br>";
    }
}
function clean() {
    document.getElementById("areaInput").innerHTML = "";
    document.getElementById("areaTexArea").innerHTML = "";
}

/* 
Ejercicio 3
*/
//Damos valor minuscula  mediante onmouseover
function myMin(cambio) {
    cambio.style.textTransform = "lowercase";
}
//Damos valor de mayusculas mediante onmouseout
function myMay(cambio) {
    cambio.style.textTransform = "uppercase";
}

/* 
Ejercicio 4
*/
//Creo un array con las ids de las imagenes
var bordeImg = ["ejer1", "ejer2", "ejer3", "ejer4"];
//Buscamos cada imagen por el nombre de la etiqueta
var ImgB = document.getElementsByTagName("img");

function bordeSi(imagen) {
    //Recorremos todas las imagenes
    for(var i = 0; i < bordeImg.length; i++){
        //Damos el estilo
        if(imagen.id === bordeImg[i]){
            ImgB[i].style.border = "3px dotted #F3E4FF";
         }
    }
}
function bordeNo(imagen) {
    for(var i = 0; i < bordeImg.length; i++){
     if(imagen.id === bordeImg[i]){
          ImgB[i].style.border = "none";
     }
 }
}

/* 
Ejercicio 5
*/
//Damos color verde  mediante onmouseover
function textoVerde() {
    var texto = document.getElementById("texto");
    texto.style.color = "green";
}
//Damos color negro mediante onmouseout
function textoNegro() {
    var texto = document.getElementById("texto");
    texto.style.color = "black";
}
