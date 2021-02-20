/* 
@author: Nerea Álvarez Justel
*/
/* 
Ejercicio 1
Un párrafo con el texto que tu quieras y que al pulsar sobre él, 
se cambie el texto en el que has pulsado por la palabra ¡PULSADO!
*/
function myBoton1() {
    //Buscamos el texto a cambiar mediante su id
    var pantalla1 = document.getElementById("cubo");
    //Texto nuevo
    pantalla1.style.color = "#000000";
    pantalla1.innerHTML += " | ";
}

/* 
Ejercicio 2
Opcion A
Esta opción esta basada en la teoria de W3schools
*/
//Funcion para selecionar un elemento y arrastrarlo para soltarlo en un recuadro
function allowDrop(event) {
//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
  event.preventDefault();
}
//En esta funcion damos el valor de elemento a mover
function drag(event) {
 //El objeto DataTransfer es usado como contenedor de datos que estan siendo manipulados durante la operación de drag and drop. 
                    //Va remplazando los "datos"
    event.dataTransfer.setData("text", ev.target.id);
}
//En esta funcion damos en valor de recipieste 
function drop(event) {
  event.preventDefault();
                            //Recupera datos de arrastre
  var data = ev.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

/*
Opcion B
Esta opción es una adaptación del ejemplo que nos aportaste 
 */
//Bucle para la condición de PARAR
//Al igual que mover tiene que poder realizarse tantas veces como MOVER
for (var i = 1; i <= 8; i++) {
    eval("var estado" + i + "= 'parar';");
}

function info(elEvento) {
    
    var evento = elEvento || window.event; //obtener objeto event
    var despX = document.documentElement.scrollLeft; //desplazamiento de la pagiina al hacer scroll
    var despY = document.documentElement.scrollTop;
    var ventanaX = evento.clientX; //coordenadas de la ventana
    var ventanaY = evento.clientY;
    var paginaX = ventanaX + despX; //coordenadas de la página
    var paginaY = ventanaY + despY;
    
    //Creamos un for para poder ejercutar tantas veces como cubos la funcion de mover
    for (var i = 1; i <= 8; i++) {
        eval(`function mover`+ i  +`(ev) { //control del movimiento del cuadrado
            var evento`+ (i+1) +` = ev || window.event //distinguir acción del ratón
            tipo`+ i +` = evento`+ (i+1) +`.type
            if (tipo`+ i +` == "click") { //coger el cuadrado (un  click)
                estado`+ i +` = "mover"
            }
            else if (tipo`+ i +` == "dblclick") { //soltar el cuadrado (doble click)
                estado`+ i +` = "parar"
            }
        }`);
    }
    color1 = document.getElementById("caja1") //posición del cuadrado
    //Estas cordenados posicionan el puntero
    posx = paginaX - 25
    posy = paginaY - 25
    //Con la condicion aceptada damos movimiento al cubo
    if (estado1 == "mover") { 
        //Las cordenadas seran  (top) y|_x (left)
        color1.style.left = posx + "px"
        color1.style.top = posy + "px"
    }
 
    color2 = document.getElementById("caja2") //posición del cuadrado
    posx = paginaX - 25
    posy = paginaY - 25
    if (estado2 == "mover") { //desplazamiento del cuadrado
        color2.style.left = posx + "px"
        color2.style.top = posy + "px"
    }
    
    color3 = document.getElementById("caja3") //posición del cuadrado
    posx = paginaX - 25
    posy = paginaY - 25
    if (estado3 == "mover") { //desplazamiento del cuadrado
        color3.style.left = posx + "px"
        color3.style.top = posy + "px"
    }

    color4 = document.getElementById("caja4") //posición del cuadrado
    posx = paginaX - 25
    posy = paginaY - 25
    if (estado4 == "mover") { //desplazamiento del cuadrado
        color4.style.left = posx + "px"
        color4.style.top = posy + "px"
    }

    color5 = document.getElementById("caja5") //posición del cuadrado
    posx = paginaX - 25
    posy = paginaY - 25
    if (estado5 == "mover"){ //desplazamiento del cuadrado
        color5.style.left = posx + "px"
        color5.style.top = posy + "px"	
    }

    color6 = document.getElementById("caja6") //posición del cuadrado
    posx = paginaX - 25
    posy = paginaY - 25
    if (estado6 == "mover"){ //desplazamiento del cuadrado
        color6.style.left = posx + "px"
        color6.style.top = posy + "px"	
    }

    color7 = document.getElementById("caja7") //posición del cuadrado
    posx = paginaX - 25
    posy = paginaY - 25
    if (estado7 == "mover"){ //desplazamiento del cuadrado
        color7.style.left = posx + "px"
        color7.style.top = posy + "px"	
    }

    color8 = document.getElementById("caja8") //posición del cuadrado
    posx = paginaX - 25
    posy = paginaY - 25
    if (estado8 == "mover"){ //desplazamiento del cuadrado
        color8.style.left = posx + "px"
        color8.style.top = posy + "px"	
    }

    //Damos a cada cubo la funcion mover para las dos opciones:
    //Al hacer click lo COGEMOS
    color1.onclick = mover1;
    //Con doble clic lo SOLTAMOS
    color1.ondblclick = mover1;

    color2.onclick = mover2;
    color2.ondblclick = mover2;

    color3.onclick = mover3;
    color3.ondblclick = mover3;

    color4.onclick = mover4;
    color4.ondblclick = mover4;

    color5.onclick = mover5;
    color5.ondblclick = mover5;

    color6.onclick = mover6;
    color6.ondblclick = mover6;

    color7.onclick = mover7;
    color7.ondblclick = mover7;

    color8.onclick = mover8;
    color8.ondblclick = mover8;
}

//Esta funcion proporciona el movimiento por la página
window.onload = function () { 				
    document.body.onmousemove = info;
}
 

/*
Ejercicio 3
4 en raya
Ejercicio visualizado
https://github.com/mjaque/4enRaya
 */

//Matriz para el 4 en raya
//Al nombrarlas en el html tendremos que poner posición x_ seguida de posición y| 
//Tentas posiciones influyen en la entrada vertical de la ficha
    var tablero = [
            [false,false,false,false,false,false],
            [false,false,false,false,false,false],
            [false,false,false,false,false,false],
            [false,false,false,false,false,false],
            [false,false,false,false,false,false],
            [false,false,false,false,false,false]];
        
        //SI INTENTO MATRIZ 7X6 NO CONSIGO QUE ME LOS LEA
        //SOLO ME FUNCIONA CON CASOS IGUALES 6X6 O 7X7
        
//Creación de array para los botones  
var botones = ["boton1", "boton2", "boton3", "boton4", "boton5", "boton6"];
//Creamos un jugador y lo inicializamos a 1
var jugador = "jugador1"; 

//Funcion asociada a los BOTONES
function myBoton3(boton){
    //Con este for recorremos los botones para saber cual fue pulsado
    for(var i = 0; i < botones.length; i++){
        //Si la condicion de boton coincide con una posicion
        if(boton.id === botones[i]){
            //Recorreremos el tablero para la ficha
            for(var j = 0; j < tablero[i].length; j++){
                //Si la posición esta vacia 
                if(tablero[i][j] === false){
                    //Rellenamos la celda para el jugador 1
                    tablero[i][j] = jugador;
                    //Localizada la celda se pintara
                    var celda = document.getElementById("celda" + i + j);
                    //Si estamos con el jugador 1 - AZUL
                    if(jugador === "jugador1"){
                        celda.style.backgroundColor = "blue";
                        //y pasamos al siguiente jugador
                        jugador = "jugador2";
                    }else{//Si el jugador es el 2 se pintara - ROJO
                        celda.style.backgroundColor = "red";
                        jugador = "jugador1";
                    }
                    //Comprobamos la posicion llamado a la función
                    comprobar(i,j);
                    //Paramos, para solo realizar esto por una ficha
                    break;
                }
            }
        }
    }
}

function comprobar(columna,fila){
    
    //COLUMNA
   
    //Contadores para las fichas de cada jugador
    var contador1 = 0;
    var contador2 = 0;
    
    //Recorremos el tablero por columnas, visualizando el jugador en cada posición
    for(var k = 0; k < tablero[columna].length; k++){
        //Si encontramos al jugador1, entrara el CONTADOR 1
        if(tablero[columna][k] === "jugador1"){
            //Si tenemos una ficha del jugador1 anadiremos al contador
            contador1++;
            //Mientras que al jugador2 no se le contara nada, por lo tanto contardor igual a 0
            contador2 = 0;
        //Mientras que si encontramos al jugador2, entrara el CONTADOR 2
        }else if(tablero[columna][k] === "jugador2"){
            contador2++;
            contador1 = 0;
        }
    }
    
    //Comprobaremos is la condición de 4 se cumple en columnas
    //Si no es para el jugador1 sera para jugador2
    if(contador1 === 4){
        //Buscamos el lugar para mostrar el ganador
        muestra = document.getElementById("carga");
        //Mostramos el mensaje
        muestra.innerHTML = " ¡¡¡¡ Ha ganado el jugador 1 !!!!";
    }else if(contador2 === 4){
        muestra = document.getElementById("carga");
        muestra.innerHTML = " ¡¡¡¡ Ha ganado el jugador 2 !!!!"; 
    }
    
    //FILA
    
    //Si no se encuentran 4 en las columnas se realizara en las filas
    //Esta comprobacion empezara de 0
    contador1 = 0;
    contador2 = 0;
    
    //Recorremos el tablero por filas, visualizando el jugador en cada posición
    if(contador1 !== 4 || contador2 !== 4){
        for(var k = 0; k < tablero[fila].length; k++){
            //Si encontramos al jugador1, entrara el CONTADOR 1
            if(tablero[k][fila] === "jugador1"){
                //Si tenemos una ficha del jugador1 anadiremos al contador
                contador1++;
                //Mientras que al jugador2 no se le contara nada, por lo tanto contardor igual a 0
                contador2 = 0;
            //Mientras que si encontramos al jugador2, entrara el CONTADOR 2
            }else if(tablero[k][fila] === "jugador2"){
                contador2++;
                contador1 = 0;
            }
        }
        
        //Comprobaremos is la condición de 4 se cumple en filas
        //Si no es para el jugador1 sera para jugador2
        if(contador1 === 4){
            muestra = document.getElementById("carga");
            muestra.innerHTML = " ¡¡¡¡ Ha ganado el jugador 1 !!!!";  
            
        }else if(contador2 === 4){
            muestra = document.getElementById("carga");
            muestra.innerHTML = " ¡¡¡¡ Ha ganado el jugador 2 !!!!"; 
        }
    }
    
    
}