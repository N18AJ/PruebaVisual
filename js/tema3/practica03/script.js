/*Opción 1. 
 Pide dos cadenas al usuario y compruebe carácter a carácter si las cadenas introducidas son exactamente iguales. 
 Si las cadenas no tienen la misma longitud, el script debe dar un error y no comprobar nada.
 */
//Primera FRASE
var frase = "";
var cadena = 0;
//Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera
while (!isNaN(frase)){
    //Peticion de la frase
    frase = prompt("Introduce una frase: ");
    //Validacion de entrada
    if (!isNaN(frase)) {
        alert("Introduce una frase");
    } else {
                //.length - representa la longitud de una cadena
        cadena = frase.length;
    }
} 
//Segunda FRASE
var frase2 = "";
var cadena2 = 0;

while (!isNaN(frase2)){
    frase2 = prompt("Introduce otra frase: ");
    if (!isNaN(frase2)) {
        alert("Introduce otra frase");
    } else {
        cadena2 = frase2.length;
    }
}

//Condicion de longitud
if (cadena === cadena2) {

	alert("Las frases SON iguales" + 
		"\nFrase 1º - " + frase + 
		"\nFrase 2º - " + frase2); 
        
} else {
    alert("Las frases NO son iguales"); 
}
/*
//Varible de condicion
var igual = true;
//Condicion de longitud
if (cadena === cadena2) {
    //Recorremos las cadenas
    for (var i = 0; i < cadena; i++) {
                //.chatAt() - devuelve en un nuevo String el carácter
        if (frase.charAt(i) !== frase2.charAt(i)) {
            igual === false; 
        }
    }
    if(igual === true){
        alert("Las frases SON iguales" + 
            "\nFrase 1º - " + frase + 
            "\nFrase 2º - " + frase2);  
    }else{
        alert("Las frases NO son iguales" + 
            "\nFrase 1º - " + frase + 
            "\nFrase 2º - " + frase2); 
        }
} else {
    alert("No tienen la misma longitud"); 
}*/


/*Opción 2. 
 Pide al usuario por pantalla un número determinado de caracteres de forma seguida (no hay límite de caracteres establecido), tu script debe dividir todo lo que ha introducido en dos partes (dos cadenas) y comprobar si esas dos partes son iguales. Es decir: introduce holahola, son 8 caracteres, dividir entre dos y comprobar que “hola” y “hola” son iguales.
  Si el número de caracteres introducido no se puede dividir a partes iguales, añade un espacio al final y cuando muestres la información final indícalo.
 */
var caracter = "";
var cadena = 0;
var parte1 = "";
var parte2 = "";

while (!isNaN(caracter)) {
    caracter = prompt("Introduzca caracteres: ");
    if (!isNaN(caracter)) {
        alert("Introduzca caracteres");
    } else {
        cadena = caracter.length;
        //comprobación de los espacios
        if (cadena % 2 !== 0) {
            caracter += " ";
                        //.length - representa la longitud de una cadena
            cadena = caracter.length;
        }
        //Recorremos el for hasta la condició en una variable y luego en otra
        for (var i = 0; i < cadena; i++) {
            //Partición
            if (i < (cadena / 2)) {
                                //.chatAt() - devuelve en un nuevo String el carácter
                parte1 += caracter.charAt(i);
            } else {
                parte2 += caracter.charAt(i);
            }
        }
        //Muestra de la division
        alert("Primera parte: " + parte1 + "\nSegunda parte: " + parte2);
    }
} 


/*Opción 3. 
Pídele al usuario que introduzca una frase que contenga al menos 5 palabras, mientras no la introduzca sigue pidiéndosela.
Cuando la haya introducido comprueba si son iguales todos los primeros caracteres de todas las palabras y si es así, muestra por pantalla el ok, sino es así, muestra por pantalla los caracteres que has encontrado.
a. Ejemplo: hola hola hola hola hola -> Ok
b. Ejemplo2: hola
 */
var frase = "";
var grupoPalabra = 0;
var palabra;
var contador = 0;
var lista = "";
//Bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa 
do {
    frase = prompt("Introduce una frase de 5 palabras minimo: ");
    //Validamos frase para minimo 5 palabras
                    //.split() - divide un objeto de tipo String en un array 
                                //.length - representa la longitud de una cadena
    grupoPalabra = frase.split(" ").length;
    if (!isNaN(frase) || grupoPalabra < 5) {
        alert("Introduce una frase de 5 palabras minimo");
    } else {
                        //.split() - divide un objeto de tipo String en un array
        palabra = frase.split(" ");
        //REcorremos el bucle hasta vista todas las palabras
        for (var i = 0; i < palabra.length; i++) {
            //Comparación de palabras para el contador
            if (palabra[i][0] === palabra[1][0]) {
                contador++;
            }
            lista += "La palabra nº " + (i + 1) + " empieza por la letra: " + palabra[i][0] + "\n";
        }

        if (contador === 5) {
            alert("OK");
        } else {
            alert(lista);
        }
    }
} while (!isNaN(frase) || grupoPalabra < 5)


/*Opción 4. 
Pide al usuario una frase de la longitud que el usuario quiera (no hay límite) y muestra por pantalla las veces que aparecen las vocales,
 debes de identificar en mayúsculas y minúsculas y mostrar la información.
a. Ejemplo: Si el usuario introduce “ala” debe mostrar que tiene 2 a
b. Ejemplo: Si el usuario introduce “alaaAA” debe mostrar que tiene 3 a y 2 A
 */
//Creación de variables
var vocal = "";
var cadena = 0;
var caracter = "";
var mayusculaA = 0;
var mayusculaE = 0;
var mayusculaI = 0;
var mayusculaO = 0;
var mayusculaU = 0;
var minusculaA = 0;
var minusculaE = 0;
var minusculaI = 0;
var minusculaO = 0;
var minusculaU = 0;
var acumulador = 0;
var lista = "";

//Bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera
 while (!isNaN(vocal)){
     //Petición de frase
    vocal = prompt("Introduce una frase - Se contaran las vocales: ");
    //Paso de frase a una cadena
                //.length - representa la longitud de una cadena
    cadena = vocal.length;
    //Validación de condiciones
    if (!isNaN(vocal) || cadena === 0) {
        alert("Introduce VOCALES");
    } else {
        //Bucle recorriendo la cadena
        for (var i = 0; i < cadena; i++) {
                            //.chatAt() - devuelve en un nuevo String el carácter
            caracter = vocal.charAt(i);
            //Elecion de Case y acumulacion de resultado
            switch (caracter) {
                case "A":
                    mayusculaA++;
                    acumulador++;
                    break;
                case "E":
                    mayusculaE++;
                    acumulador++;
                    break;
                case "I":
                    mayusculaI++;
                    acumulador++;
                    break;
                case "O":
                    mayusculaO++;
                    acumulador++;
                    break;
                case "U":
                    mayusculaU++;
                    acumulador++;
                    break;
                case "a":
                    minusculaA++;
                    acumulador++;
                    break;
                case "e":
                    minusculaE++;
                    acumulador++;
                    break;
                case "i":
                    minusculaI++;
                    acumulador++;
                    break;
                case "o":
                    minusculaO++;
                    acumulador++;
                    break;
                case "u":
                    minusculaU++;
                    acumulador++;
                    break;
            }
        }
        //Condicion para la posterior muestra
        if (acumulador !== 0) {
            if (mayusculaA !== 0) {
                lista += "Se intodujeron " + mayusculaA + " A \n";
            }
            if (mayusculaE !== 0) {
                lista += "Se intodujeron " + mayusculaE + " E \n";
            }
            if (mayusculaI !== 0) {
                lista += "Se intodujeron " + mayusculaI + " I \n";
            }
            if (mayusculaO !== 0) {
                lista += "Se intodujeron " + mayusculaO + " O \n";
            }
            if (mayusculaU !== 0) {
                lista += "Se intodujeron " + mayusculaU + " U \n";
            }

            if (minusculaA !== 0) {
                lista += "Se intodujeron " + minusculaA + " a \n";
            }
            if (minusculaE !== 0) {
                lista += "Se intodujeron " + minusculaE + " e \n";
            }
            if (minusculaI !== 0) {
                lista += "Se intodujeron " + minusculaI + " i \n";
            }
            if (minusculaO !== 0) {
                lista += "Se intodujeron " + minusculaO + " o \n";
            }
            if (minusculaU !== 0) {
                lista += "Se intodujeron " + minusculaU + " u \n";
            }
            //Muestra de resultados
            alert(lista);
        } else {
            alert("No se intodujeron vocales");
        }
    }
}