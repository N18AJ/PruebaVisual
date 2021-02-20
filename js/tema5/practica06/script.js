//Inicializamora variable de DATOS
var partidas = 1; //Posicionamos la primera partida
var partidasGanadas1 = 0; //Inicializamos las partidas  ganadas a 0 en ambos jugadores
var partidasGanadas2 = 0;
var jugador = "1"; //Variable que se utilizara para saber a que jugador le toca - Empezaremos con el jugados asignado a 1

function cargar(){
    //Busqueda de elemnto mediante nombre de la etiqueta
    aCasilla = document.getElementsByTagName("td");
    numMovimiento = 0;//Contador que se ira incrementando a medida que pasen los turnos  hasta 9
    //Inicializamos ganador a false, inicio de partida
    ganador = false;
    //Busqueda de elemnto mediante nombre de la Id
    colorFondoCasilla = document.getElementById("colorFondoCasillas");
      //document.addEventListener(event, function, useCapture) Registra un evento a un objeto en específico.
    colorFondoCasilla.addEventListener('change',cambiarColorFondo,false);
    colorCasillaVacia = document.getElementById("colorCasillasVacias");
    colorCasillaVacia.addEventListener('change',alCambiarColorVacia,false);
    colorJugador1 = document.getElementById("colorJugador1");
    colorJugador1.addEventListener('change',cambiarColorJugador1,false);
    colorJugador2 = document.getElementById("colorJugador2");
    colorJugador2.addEventListener('change',cambiarColorJugador2,false);
    //Creamos un for para recorrer todas las casillas con los diferentes eventos
    for(var i = 0; i <9; i++){
        aCasilla[i].addEventListener('mouseenter',alEntrar,false); //Señala la posición en la que esta el raton
        aCasilla[i].addEventListener('mouseleave',alSalir,false); //Salida de la señal de posición
        aCasilla[i].addEventListener('click',alSeleccionar,false); //Deja seleccionada la posicion
        aCasilla[i].style.color=colorCasillaVacia.value;
        aCasilla[i].style.backgroundColor=colorFondoCasilla.value;
    }
}
//Con esta funcion asociamos el jugador con su color y simbolo
function alEntrar(){
    if(jugador === "1"){ //Damos condicion de jugador 1
      this.style.color = colorJugador1.value;
      this.innerHTML = 'O';
    }else{ //Si no jugador 2
      this.style.color = colorJugador2.value;
      this.innerHTML = 'X';
    }    
}
//Con esta funcion dejamos la cenda a "0"
function alSalir(){
  this.style.color = colorCasillaVacia.value;
  this.innerHTML = '-';
}
//Función de seleccion de posicion 
function alSeleccionar(){
  this.style.fontSize="60px";
  this.removeEventListener('mouseenter', alEntrar, false);
  this.removeEventListener('mouseleave', alSalir, false);
  this.removeEventListener('click', alSeleccionar, false); //Quitamos el evento para que no se pueda seleccionar de nuevo
    if(jugador === "1"){
        this.innerHTML = 'O';
      }else{
        this.innerHTML = 'X';
      }
    numMovimiento++; //Contador de movimientos
    ultimoMovimiento=this; //Tendremos en cuanta el ultimo movimiento 
    if(numMovimiento => 5){//Condición para empezar la comparacion y la posible partida ganada
      comprobarGanador(); 
    }
    if(jugador === "1"){ //Condicion para saber que jugador es el ganador
        jugador = "2";
      }else{
        jugador = "1";
      }
      //Si se esceden los movimientos no puede hacer un ganador
      //Se muestra mensaje, NO HAY GANADORES
    if(numMovimiento === 9 && !ganador){
         //Busqueda de elemnto mediante nombre de la Id
        muestraGanador = document.getElementById("muestraGanador");
        muestraGanador.style.position = "absolute";
        muestraGanador.style.fontSize = "30pt";
        muestraGanador.style.backgroundColor = "black";
        muestraGanador.style.opacity = "0.5";
        muestraGanador.style.marginTop = "20%";
        muestraGanador.innerHTML = "NO HAY GANADORES";
    }
}
//Esta funcion hace todas las comparaciones posibles de victorias, filas, columnas y diagonales.
//Si se cumple la condicion da ganador
function comprobarGanador(){
    //Comparaci�n fila 1
    if(aCasilla[0].textContent == aCasilla[1].textContent && aCasilla[1].textContent == aCasilla[2].textContent && (aCasilla[0].textContent == "O" || aCasilla[0].textContent == "X")) {
        ganador = true;
        //Si es la convinación ganadoras se colorean distinto
            var color=document.getElementById('colorGanador');
            for(var i = 0; i <3; i++){
                aCasilla[i].style.color=color.value; 
            }
    }
    //Comparaci�n fila 2
    if(aCasilla[3].textContent == aCasilla[4].textContent && aCasilla[4].textContent == aCasilla[5].textContent && (aCasilla[3].textContent == "O" || aCasilla[3].textContent == "X")) {
        ganador = true;
            var color=document.getElementById('colorGanador');
            for(var i = 3; i <6; i++){
                aCasilla[i].style.color=color.value; 
            }

    }
    //Comparaci�n fila 3
    if(aCasilla[6].textContent == aCasilla[7].textContent && aCasilla[7].textContent == aCasilla[8].textContent && (aCasilla[6].textContent == "O" || aCasilla[6].textContent == "X")) {
        ganador = true;
            var color=document.getElementById('colorGanador');
            for(var i = 6; i <9; i++){
                aCasilla[i].style.color=color.value; 
            }
    }
    //Comparaci�n columna 1
    if(aCasilla[0].textContent == aCasilla[3].textContent && aCasilla[3].textContent == aCasilla[6].textContent && (aCasilla[0].textContent == "O" || aCasilla[0].textContent == "X")) {
      ganador = true;
        var color=document.getElementById('colorGanador');
        for(var i = 0; i <9; i+=3){
            aCasilla[i].style.color=color.value; 
        }
    }
    //Comparaci�n columna 2
    if(aCasilla[1].textContent == aCasilla[4].textContent && aCasilla[4].textContent == aCasilla[7].textContent && (aCasilla[1].textContent == "O" || aCasilla[1].textContent == "X")) {
        ganador = true;
            var color=document.getElementById('colorGanador');
            for(var i = 1; i <9; i+=3){
                aCasilla[i].style.color=color.value; 
            }
    }
    //Comparaci�n columna 3
    if(aCasilla[2].textContent == aCasilla[5].textContent && aCasilla[5].textContent == aCasilla[8].textContent && (aCasilla[2].textContent == "O" || aCasilla[2].textContent == "X")) {
        ganador = true;
            var color=document.getElementById('colorGanador');
            for(var i = 2; i <9; i+=3){
                aCasilla[i].style.color=color.value; 
            }
    }
    //Comparaci�n diagonal 1
    if(aCasilla[0].textContent == aCasilla[4].textContent && aCasilla[4].textContent == aCasilla[8].textContent && (aCasilla[0].textContent == "O" || aCasilla[0].textContent == "X")) {
        ganador = true;
            var color=document.getElementById('colorGanador');
            for(var i = 0; i <9; i+=4){
                aCasilla[i].style.color=color.value; 
            }
    }
    //Comparaci�n diagonal 2
    if(aCasilla[2].textContent == aCasilla[4].textContent && aCasilla[4].textContent == aCasilla[6].textContent && (aCasilla[2].textContent == "O" || aCasilla[2].textContent == "X")) {
        ganador = true;
            var color=document.getElementById('colorGanador');
            for(var i = 0; i <9; i+=4){
                aCasilla[i].style.color=color.value; 
            }
    }
    //Si hay ganador se muestra mensaje HA GANADO EL JUGADOR seguido del NÚMERO DE JUGADOR
    if(ganador){
        //Busqueda de elemnto mediante nombre de la Id
        muestraGanador = document.getElementById("muestraGanador");
        muestraGanador.style.position = "absolute";
        muestraGanador.style.fontSize = "30pt";
        muestraGanador.style.backgroundColor = "black";
        muestraGanador.style.opacity = "0.5";
        muestraGanador.style.marginTop = "20%";
        muestraGanador.innerHTML = "HA GANADO EL JUGADOR " + jugador;
    }
}

//Las siguientes funciones aportas color
//Primero se busca por Id el elemento
//se recorre todas las posiciones con un for
//Una vez el elemento o el texto se aportara el color indicando mediante el value
function alCambiarColorVacia(){
  var color = document.getElementById('colorCasillasVacias');
  for(var i = 0; i <9; i++){
    if(aCasilla[i].textContent === "-"){
      aCasilla[i].style.color=color.value; //El value aporta el color indicado en el HTML
    }
  }
}
function cambiarColorFondo(){
  var color = document.getElementById('colorFondoCasillas');
  for(var i = 0; i <9; i++){
    aCasilla[i].style.backgroundColor=color.value; 
  }
}
function cambiarColorJugador1(){
  var color = document.getElementById('colorJugador1');
  for(var i = 0; i <9; i++){
    if(aCasilla[i].textContent === "O"){
      aCasilla[i].style.color=color.value; 
    }
  }
}
function cambiarColorJugador2(){
  var color = document.getElementById('colorJugador2');
  for(var i = 0; i <9; i++){
    if(aCasilla[i].textContent === "X"){
      aCasilla[i].style.color=color.value; 
    }
  }
}