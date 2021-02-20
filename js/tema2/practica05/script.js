/*Ejercicio 1
Escribe un script que pida dos números enteros al usuario de manera que siga pidiendo números
mientras el segundo número no sea mayor que el primero. El programa terminará mostrando por
pantalla los dos números.
 */
    //Petición de los números
    var n1 = parseInt(prompt("Introduce un número: "));
    var n2 = parseInt(prompt("Introduce un número mayor al primero:"));
    //Condicion para la aceptación
    //Mientras se ejecuta sentencia vuelve la ejecucion, bucle.
    //Se termina el bucle cuando n1 < n2
    while(n1 > n2){
        n2 = parseInt(prompt("Vuelva a intentarlo\nIntroduce un número mayor al primero:"));
    }
    //Muestra los números
    alert("Primer número: " + n1 + "Segundo número: " + n2);


/*Ejercicio 2
Escriba un script que pida la cantidad de números positivos que se tienen que escribir y a
continuación pida números hasta que se haya escrito la cantidad de números positivos que se
indicó al principio.
 */
    //Petición de 
    var cantidad = parseInt(prompt("Introduce la cantidad del rango: "));
    //
    if(!isNaN(cantidad) && cantidad > 0){
        //Condicion para la aceptación
        //Mientras se ejecuta sentencia vuelve la ejecucion, bucle.
        //Se termina el bucle cuando CANTIDAD < 0
        while(cantidad > 0){
            var num = parseInt(prompt("Introduce " + cantidad + " números: "));
            cantidad--;
        }
        //Muestra el fin
        alert("¡SE FINIT!");
    }else{
        //Peticion de número correcto
        alert("Introduce un número POSITIVO");
    }


/*Ejercicio 3
Realiza un script que muestre los primeros 100 números de forma inversa, es decir, del 100 al 1.
 */
    //Creación de variable, contiene 100
    var cien = 100;
    //Condicion para la aceptación
    //Mientras se ejecuta sentencia vuelve la ejecucion, bucle.
    //Se termina el bucle cuando CIEN = 0
    while(cien > 0){
        alert("De 100 a 1: " + cien);
        //Vamos restando 1
        cien--;
    }
    
    
/*Ejercicio 4
Realiza un script que muestre la suma de los números impares del 1 al 100.
 */
    //Creación de variable, contiene 100
    var cien = 100;
    //Creación de variable, acumulador
    var acumulador = 0;
    //Condicion para la aceptación
    //Mientras se ejecuta sentencia vuelve la ejecucion, bucle.
    //Se termina el bucle cuando CIEN = 0
    while(cien > 0){
        //Condicion para encontrar los impares
        if(cien%2 !== 0){
            //Vamos incorporando los impares
            acumulador += cien;
        }
        //Vamos restando 1
        cien--;
    }
    //Muestra de la suma
    alert("Suma de todos los IMPARES es: " + acumulador);


/*Ejercicio 5
Escriba un script que pida números mientras no se escriba un número negativo. El programa
terminará escribiendo la suma de los números introducidos.
 */
    //Peticion de número
    var n = parseInt(prompt("Introduce números POSITIVO: "));
    //Creación de variable, acumulador
    var acumulador=0;
    //si el valor es positivo lo acumulamos
    if(n >= 0){
        acumulador = n;
    }
    //Condicion para la aceptación
    //Mientras se ejecuta sentencia vuelve la ejecucion, bucle.
    //Se termina el bucle cuando n <= 0
    while(n >= 0){
         n = parseInt(prompt("Introduce números POSITIVO \nNúmero NEGATIVO = EXIT"));
         if(n >= 0){
             acumulador += n;
         }
    }
    alert("Suma total: "+acumulador);


/*Ejercicio 6
Escriba un script que pida primero dos números enteros (mínimo y máximo) y que después pida
números enteros situados entre ellos. El script terminará cuando se escriba un número que no esté
comprendido entre los dos valores iniciales. El script finalizará mostrando la cantidad de números
que se han escritos.
 */
    //Petición de rango
    var min = parseInt(prompt("Introduce el mínimo entero: "));
    var max = parseInt(prompt("Introduce el máximo entero: "));
    //Creación de variable, acumulador
    var contador = 0;
    //petición de números deltro del RANGO
    var n = parseFloat(prompt("Introduce un número dentro del rango \nNúmero fuera de RANGO = EXIT "));
    //si el valor esta en rango lo acumulamos
    if(n >= min && n <= max){
        contador++;
    }
    //Condicion para la aceptación
    //Mientras se ejecuta sentencia vuelve la ejecucion, bucle.
    //Se termina el bucle cuando el número esta fuera de RANGO
    while(n >= min && n <= max){
        var n = parseFloat(prompt("Introduce un número dentro del rango \nNúmero fuera de RANGO = EXIT "));
        if(n >= min && n <= max){
            contador++;
        }
    }
    //Muestra de cantidad de números introducidos
    alert("Cantidad de números escritos: " + contador);


/*Ejercicio 7
Crear un script que permita al usuario ingresar títulos de libros por teclado hasta que el usuario
introduzca la palabra “salir” de cualquiera de sus maneras. Finalmente se tiene que mostrar por
pantalla la lista de libros que han ido introduciendo uno debajo de otro y numerados (con un
número delante).
 */
    //Petidición de titulos
    var titulo = prompt("Introduce un titulo de un libro: ");
    //Variable para muestra de información
    var libro = 0;
    var total = "";
    //Condición de salida - Si no se cumple muestra lo introducido

    //Condicion para la aceptación
    //Mientras se ejecuta sentencia vuelve la ejecucion, bucle.
    //Se termina el bucle cuando SALIDA = true
    while (titulo !== "SALIR" && titulo !== "salir" && titulo !== "Salir") {
        libro++;
        total = total + libro + ". " + titulo + "\n";
        titulo = prompt("Introduce un titulo de un libro \n\ escribe SALIR para cerrar el programa: ");
        //Condición de salida - Si no se cumple muestra lo introducido
        //Si se cumple se cierra el script
    }
    alert(total);


