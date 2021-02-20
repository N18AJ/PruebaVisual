/*Ejercicio 1
Crea un script que pida la edad y el sexo de 10 personas y muestre por pantalla finalmente información
de cada persona en un único mensaje.
 */
    //Acumulación de datos
    var dato = "";
        //Petición de VALORES
        //Recorremos el FOR tantas veces como valor del numero
        for(var y = 0; y <= 9; y++){
            var edad = parseInt(prompt("Introduce tu EDAD: "));
            var sexo = prompt("Introduce tu SEXO: ");
            dato += ("\n " + edad + ", " + sexo + "\n ");
        }
        //Mostramos los IMPARES
        alert("Edad y Sexo de los participantes: " + dato);


/*Ejercicio 2
Crea un script que lea números enteros hasta que el usuario introduzca un número 0. Finalmente debe
mostrar el número máximo, el mínimo y la media de todos ellos. Debes de controlar que introduzca
números y no cualquier otro carácter.
 */
    
    //Creación de variables
    var max = 0;
    var min = 0;
    //Contador de numeros para media y acumulador de datos
    var contador = 0;
    var acumulador = 0;
    var media;
    //Petinicion de número
    var n = parseInt(prompt("Introduzca un número: "));
    //Filtro para introducir solo numeros
    if (!isNaN(n)) {
        //Creamos un bucle, miestras la sentencia sea verdad se ejecutara
        while (n !== 0) {
            //Iremos sumando 1 en cada bucle
            acumulador += n;
            contador++;
            
            min = n;
            //Condiciones para encontar MAYOR    
            if (n > max) {
                max = n;
            }
            //Condiciones para encontar MENOR
            if (n < min) {
                min = n;
            }
            //Petición de bucle
            n = parseInt(prompt("Introduzca un numero. \nIntroduzca 0 para salir"));
        }
        //División para media
        media = (acumulador / contador);
        alert("El número MAYOR: " + max + "\nEl número MENOR: " + min + "\nMEDIA: " + media);
    } else {
        alert("Introduzca solo números");
    }

	

/*Ejercicio 3
Crea un script que permita validar una clave introducida por el usuario y tenga 3 intentos para
introducirla bien. Si no la introduce bien, le da error y se sale del programa. La clave debe ser un
número de 6 dígitos. 
 */
    //Creacion de variables
    var clave;
    var contador = 0;
    var bien = false;
    //Bucle con condicion de 33 intentos
    while (contador <= 3) {
        clave = parseInt(prompt("Introduzca la clave de 6 digitos"));
        //Condicion de la validación de 6 digitos MAX - MIN
        if (clave >= 100000 & clave <= 999999 && !isNaN(clave)) {
            contador = contador + 3;
            bien = true;
        } else {
            contador = contador++;
        }
    }

    if (bien === true) {
        alert("La CLAVE fue correcta");
    } else {
        alert("CLAVE errornea. BLOQUEADO más de 3 intendos");
    }

	
	
	/*Ejercicio 4
Crea un script que cuente la cantidad de vocales que se encuentran dentro de un texto introducido por el usuario.
 */
    //Peticion de cadena
    var cadena = prompt("Introduzca una frase");
    //Creacion de contadores de vocales
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;
    //Bucle que se cierra al recorrer toda a cadena
    for (i = 0; cadena[i]; i++) {
        //El cada bucle se contara la vocal en cada case
        switch (cadena[i]) {
            //Agrupamos las vosales en sus dos formas
            case "a":
            case "A":
                contadorA = contadorA + 1;
                    break;
            case "e":
            case "E":
                contadorE = contadorE + 1;
                    break;
            case "i":
            case "I":
                contadorI = contadorI + 1;
                    break;
            case "o":
            case "O":
                contadorO = contadorO + 1;
                    break;
            case "u":
            case "U":
                contadorU = contadorU + 1;
                    break;
            default:
        }
    }
    //Muestra de los contadores
    alert(
        "Contador de A: " + contadorA + "\n" +
        "Contador de E: " + contadorE + "\n" +
        "Contador de I: " + contadorI + "\n" +
        "Contador de O: " + contadorO + "\n" +
        "Contador de U: " + contadorU + "\n"
        );
		
		

/*Ejercicio 5
Crea un script que calcule las calificaciones de un grupo de alumnos. El profesor tendrá que introducir
el número de alumnos que va a gestionar el script.
La nota final de cada alumno se calcula según el siguiente criterio:
a. Parte práctica 40%
b. Parte teórica 30%
c. Actitud 10%
El script leerá el nombre del alumno y su número de expediente y las notas obtenidas en cada parte.
Finalmente mostrará el resultado de todos los alumnos y una media de la nota final y una media de
cada parte.
 */
//Varibles para recopilacion de datos
    var totalAlumnos;
    var numExpediente;
    var contadorExpediente;
    var practica;
    var practicaNota;
    var teoria;
    var teoriaNota;
    var actitud;
    var actitudNota;
    var notaFinal;
    var lista = "";

    do {
        //Peticion de rango
        totalAlumnos = parseInt(prompt("Introduce el número de alumnos que va a evaluar"));
        if (!isNaN(totalAlumnos) && totalAlumnos >= 1) {
            //Realizaremos el FOR hasta completar el rango
            for (var i = 1; i <= totalAlumnos; i++) {
                do {
                    //Peticion de num exp
                    numExpediente = prompt("Número de Expediente del alumno " + i + " [4 números y una letra minuscula]");
                    if (isNaN(numExpediente)) {
                        contadorExpediente = 0;
                        for (j = 0; numExpediente[j]; j++) {
                            contadorExpediente++;
                        }
                        if (contadorExpediente === 5) {
                            //Se interoduce nota y se realiza el porcentaje que coresponde
                            //Se realiza comprobacion de número y de rango de 0-10
                            //Practica
                            do {
                                practica = parseInt(prompt("Inserte la nota de la PRACTICA: "));
                                if (!isNaN(practica)) {
                                    if (practica >= 0 && practica <= 10) {
                                        partePracticaNota = (practica * 50) / 100;
                                    } else {
                                        alert("La nota tiene que ser un numero entre 0 y 10");
                                    }
                                } else {
                                    alert("La nota tiene que se superior a 0");
                                }
                            } while (isNaN(practica) || practica <= 0 || practica > 10)

                            //Teórica
                            do {
                                teoria = parseInt(prompt("Inserte la nota de la TEORIA: "));
                                if (!isNaN(teoria)) {
                                    if (teoria >= 0 && teoria <= 10) {
                                        teoriaNota = (teoria * 30) / 100;
                                    } else {
                                        alert("La nota tiene que ser un numero entre 0 y 10");
                                    }
                                } else {
                                    alert("La nota tiene que se superior a 0");
                                }
                            } while (isNaN(teoria) || teoria <= 0 || teoria > 10);

                            //Actitud
                            do {
                                actitud = parseInt(prompt("Inserta la nota de la ACTITUD: "));
                                if (!isNaN(actitud)) {
                                    if (actitud >= 0 && actitud <= 10) {
                                        actitudNota = (actitud * 10) / 100;
                                    } else {
                                        alert("La nota tiene que ser un numero entre 0 y 10");
                                    }
                                } else {
                                    alert("La nota tiene que se superior a 0");
                                }
                            } while (isNaN(actitud) || actitud <= 0 || actitud > 10)

                        } else {
                            alert("Nº Expediente = 4 números y una letra minuscula");
                        }
                    } else {
                        alert("Vuelva a introducir el número de expediente");
                    }
                    notaFinal = partePracticaNota + teoriaNota + actitudNota;
                } while (!isNaN(numExpediente) || (contadorExpediente !== 5))
                lista = lista +
                        "Datos del alumno " + i + "\n" +
                        "Número de Expediente: " + numExpediente + "\n" +
                        "Nota de la Practica: " + practica + "/10\n" +
                        "Nota de la Tearica: " + teoria + "/10\n" +
                        "Nota de la Actitud: " + actitud + "/10\n" +
                        "NOTA TOTAL: " + notaFinal + "/10\n";
                lista = lista + "\n";
            }
        } else {
            alert("Introduce un numero mayor que 0");
        }
    } while (isNaN(totalAlumnos) || totalAlumnos < 1)

    alert(lista);



/*Ejercicio 6
Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números que pides al
usuario. El segundo número tiene que ser mayor o igual que el primer número.
 */
    //Petición de números
    var n1 = parseInt(prompt("Introduce un número"));
    var n2 = parseInt(prompt("Introduzca un numero mayor o igual al primero"));
    //Varible de muerta
    var lista = "";

    if (n2 >= n1) {
        for (i === n1; i <= n2; i++) {
            if (i % 2 === 0) {
                lista = lista + i + ", ";
            }
        }
    }
    //Muestra de los valores
    alert(lista);
	

/*Ejercicio 7
Escribe un script que calcule la suma de los números pares y los números impares de los números
comprendidos entre 1 y 100. El 1 y el 100 no se tienen en cuenta.
 */
    //Creacion de variables e inicializacion a 0
    var impar = 0;
    var par = 0;
    //Buvle para hacer un recorrido de 100 - al llegar a 100 n cierra
    for (i = 1; i < 100; i++) {
        //Comprobacion de numero imapar ...
        if (i % 2 !== 0 && i !== 1) {
            impar = impar + i;
            //Sino numero par
        } else if (i % 2 === 0) {
            par = par + i;
        }
    }
    //Muestra del resultado
    alert("Suma de IMPARES: " + impar + "\n" + "Suma de PARES: " + par);


/*Ejercicio 8
Escribe un script que calcule la suma de los números pares y la suma de los números impares
comprendidos entre dos números que le pides al usuario. Es decir, el usuario introduce por ejemplo el
45 y el 89 y debes de mostrar la suma de los números pares comprendidos entre el 45 y el 89 y por otro
lado la suma de los números impares. No contar extremos, es decir, el 45 y el 89 en este caso no se
tienen en cuenta.
 */
//Peticion de números
    var n1 = parseInt(prompt("Introduzca un numero"));
    var n2 = parseInt(prompt("Introduzca otro numero mayor"));
    //Variables de acumulacion
    var impar = 0;
    var par = 0;
    //Bucle de rango de números
    for (i = (n1 + 1); i < n2; i++) {
        //Su el número no es impar ...
        if (i % 2 !== 0) {
            impar = impar + i;
            //Sera par
        } else if (i % 2 === 0) {
            par = par + i;
        }
    }
    //Muestras de los valores
    alert("Suma de IMPARES: " + impar + "\n" + "Suma de PARES: " + par);


/*Ejercicio 9
Crea un script que cuente las veces que aparece una determinada letra en una frase que el usuario
introduce por teclado.
 */
    //Creacion de variables
    //Almacenar cadena
    var cadena;
    //Letra a buscar    
    var buscar;
    //Contador de la letra
    var letra;
    var contador = 0;
    //Sentencia ejecitada mientras se cumpla la condición
    do {
        //Petición de cadena
        cadena = prompt("Introduzca una frase");
        //Condicion de solo cadena
        if (!isNaN(cadena)) {
            alert("Introduzca una frase");
        }
    } while (!isNaN(cadena))
    //Sentencia ejecitada mientras se cumpla la condición
    do {
        buscar = prompt("Introduzca una letra para buscar en la frase");
        //Condicion de busqueda de letra
        if (!isNaN(buscar)) {
            alert("Introduzca una letra a buscar, no un numero");
        } else {
            letra = 0;
            //Recorre la cadena buscando la letra
            for (i = 0; buscar[i]; i++) {
                letra++;
            }
            //Condicion de solo una letra
            if (letra !== 1) {
                alert("Introduzca una sola letra a buscar");
            }
        }
    } while (!isNaN(buscar) || letra !== 1)
    //Bucle para el contador 
    for (j = 0; cadena[j]; j++) {
        if (cadena[j] === buscar) {
            contador++;
        }
    }
    alert("La frase: \n" + cadena + "\nContiene la letra " + buscar + " y aparece " + contador + " veces");


/*Ejercicio 10
Crea un script que simule el funcionamiento de un reloj digital y que permita ponerlo en hora.
 */
    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var sec = hoy.getSeconds();
    //Condiciones
    if(hr < 10){
        hr = "0" + hr;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    
    //Creacion de muestra
    var reloj = hr + ":" + min + ":" + sec;
    alert(reloj);
            