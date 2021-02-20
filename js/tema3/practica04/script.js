/*Ejercicio 1: 
Crea el script que pida al usuario las palabras que quieres introducir en el crucigrama
marcándole tu las pautas. Es decir, pídele al usuario una palabra de dos caracteres, una palabra de cuatro y
así sucesivamente hasta las que necesites. Sería recomendable validar la entrada.*/
//Variables de uso
var letra = 0;
var posicion;
var str = " * ";
var palabra = "";
var logitud = 0;
var crucigrama = "";

//Crea un bucle que se ejecutara hasta cumplir la condicion - 11 filas.
for (var i = 1; i <= 11; i++) {
    //Dependiendo del case indicaremos el número de letras a introducir
    switch (i) {
        case 1:
            letra = 2;
            break;
        case 2:
            letra = 2;
            break;
        case 3:
            letra = 4;
            break;
        case 4:
            letra = 3;
            break;
        case 5:
            letra = 1;
            break;
        case 6:
            letra = 4;
            break;
        case 7:
            letra = 3;
            break;
        case 8:
            letra = 2;
            break;
        case 9:
            letra = 2;
            break;
        case 10:
            letra = 3;
            break;
        case 11:
            letra = 1;
            break;
    }
    
    //Con este switch, diferenciamos que filas del cricigrama empiezan con una celda rellena o con una celda vacía por la posicion del mismo
    switch (i) {
        case 1:
            posicion = true;
            espacios = 3;
            break;
        case 2:
            posicion = false;
            espacios = 3;
            break;
        case 3:
            posicion = false;
            espacios = 1;
            break;
        case 4:
            posicion = false;
            espacios = 2;
            break;
         case 5:
            posicion = true;
            espacios = 4;
            break;
        case 6:
            posicion = false;
            espacios = 1;
            break;
        case 7:
            posicion = false;
            espacios = 2;
            break;
        case 8:
            posicion = true;
            espacios = 3;
            break;
        case 9:
            posicion = false;
            espacios = 3;
            break;
        case 10:
            posicion = true;
            espacios = 2;
            break;
        case 11:
            posicion = true;
            espacios = 4;
            break;
    }
    //Bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa
    do { 
        //Petición de la palabra
                                    //Indicaremos el número de letras y el numero de fila
        palabra = prompt("Introduce " + letra + " letras  para la fila " + i + " : ");
                        //.length - representa la longitud de una cadena
        logitud = palabra.length;
        //Si la validación es correcta entramos a la ejecución ...
        if (!isNaN(palabra) || logitud === letra) {
            //Si la posición es true empezamos IZQUIERDA
            if (posicion === true) { 
                                                    //repeat() - construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena 
                crucigrama += (i + " | " + palabra + str.repeat(espacios) + " |\n");
            } else{
                crucigrama += (i + " | " + str.repeat(espacios) + palabra + " |\n");
            }
            //.... Sino se  mensaje de petición nuevamente
        } else { 
            alert("Palabra incorrecta");
        }
    } while (!isNaN(palabra) || logitud !== letra)
}
alert(crucigrama);