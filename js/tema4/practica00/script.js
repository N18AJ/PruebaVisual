/* 
@author: Nerea Álvarez Justel
 */
/*Ejercicio 1
Crea un array que contenga 10 nombres de animales que le pidas al usuario. Muestra por pantalla los
nombres de animales que ha introducido el usuario en un alert() todos juntos.
*/
    //Creación de array
    var aAnimales = new Array();
    //Recorremos el FOR 10 veces
    for (var i = 1; i <= 10; i++) {
        //Petición de valores
        animal = prompt("Introduce el animal " + i + "º");
                //.push() - Añade nuevos elementos al array al final cambiando su length​
        aAnimales.push(animal);
    }
    //Muestra de todos los elementos
    alert(aAnimales);


/*Ejercicio 2
Crea dos arrays de materiales (materiales1 y materiales2), en cada array debe haber 5 elementos
(elemento1, elemento2, …). Compara el tamaño de los arrays (el número de elementos que tienen) y
muestra por pantalla si los arrays son iguales en tamaño o no. Si lo son, muestra el mensaje: “Tienen el
mismo número de elementos” y sino lo son, muestra “No tienen el mismo número de elementos”
*/
    //Creación de arrays con valores
    var materiales1 = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"]; 
    var materiales2 = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"]; 
    //Condiciones de comparación
    if(materiales1.length === materiales2.length){
        alert("Tienen el mismo número de elementos \n"
            + materiales1 + "\n"
            + materiales2);
    }else{
        alert("No tienen el mismo número de elementos");
    }


/*Ejercicio 3
Completa el ejercicio 2, comprobando si los elementos de cada array son los mismos. Es decir, además
de comprobar que tienen el mismo número de elementos (ejercicio2), comprueba que los dos arrays
tienen también los mismos elementos.
*/
    //Creación de variables
    var total = "";
    //Creación de arrays con valores
    var materiales1 = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"]; 
    var materiales2 = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"]; 
    //Condiciones de comparación
    if(materiales1.length === materiales2.length){
        alert("Tienen el mismo número de elementos");
        //recorremos los elementos y miramos longitud
                                    //.length - representa la longitud de una cadena
        for (var i = 0; i < materiales1.length; i++) {
            if(materiales1[i] !== materiales2[i]){
                igual = false;
            }
        }
    }else{
        alert("No tienen el mismo número de elementos");
    }
    //Condición para igualdad
    if(igual === true){
      alert("Los elementos son iguales");  
    }else{
        alert("Los elementos NO son iguales");
    }
    

/*Ejercicio 4 
Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres. 
Utiliza métodos de String.
*/
    //Varible de peticion
    var frase;
    var caracter;

    //Peticion
    frase = prompt("Introduce una frase");
                    //.split() - divide un objeto de tipo String en un array. 
    caracter = frase.split("");
    //Creación de array de caracteres
    var aCaracter = new Array(caracter);
    //Muestra del array
    alert(aCaracter);


/*Ejercicio 5
Crea 1 array que contenga 10 números iguales. 
Pide al usuario los números y haz las validaciones oportunas.
*/
    //Creación de array
    var aNumeros = new Array();
    //Petición de valores
    //Indicamos directamente que la primera posicion sera el primer número
    aNumeros[0] = parseInt(prompt("Introduce un número, posición 1º"));
    //Validamos la entrada de un número
    while(isNaN(aNumeros[0])){
        //Petición de valores
        aNumeros[0] = parseInt(prompt("Introduce un números"));    
    }
    //Recorremos el FOR 10 veces
    for (var i = 1; i < 10; i++) {
        //Petición de valores
        aNumeros[i] = parseInt(prompt("Introduce siempre el mismo número, posición " + (i + 1) + "º"));
        //con este bucle realizaremos la comparación con el número inicial y el que toque en esa posición
        while(isNaN(aNumeros[i]) || aNumeros[0] !== aNumeros[i]){
            //Petición de valores si se incumple la condición
            aNumeros[i] = parseInt(prompt("Introduce SIEMPRE el mismo número, posición " + (i + 1) + "º"));
        } 
    } 
    //Muestra de todos los elementos
    alert(aNumeros);


/*Ejercicio 6
Crea un array que contenga números aleatorios entre 0 y 100. El número de números que contiene el
array, pídeselo al usuario por teclado. Muestra por pantalla el valor de cada posición del array y la suma
de todos los valores del array.
*/
    //Creacion de variable
    var numero;
    var lista = "";
    var suma = 0;
    //Creación de array
    var aNumeros = new Array();
    numero = parseInt(prompt("Introduce el tamaño del ARRAY"));
    //Recorremos el FOR 10 veces
    for (var i = 1; i <= numero; i++) {
        //Petición de valores
                    //Math.floor - Devuelve el máximo entero menor o igual a un número.
                        //Math.random() - etorna un punto flotante, un número pseudo-aleatorio dentro del rango [x, y).
        aleatorio = Math.floor(Math.random() * 100) + 1;
                //.push() - Añade nuevos elementos al array al final cambiando su length​
        aNumeros.push(aleatorio);
        lista += ("Posición: " + i + " Número: " + aleatorio + "\n");
        suma += aleatorio;
    }
    //Muestra de todos los elementos
    alert("ARRAY = \n[" + lista + " ]" + "\nLa SUMA del array es = " + suma);


/*Ejercicio 7
Crea dos arrays que tengan el mismo tamaño. El tamaño del array pídeselo al usuario. En uno de los
arrays almacenaras nombres de personas como cadenas y en el otro array tendrás que almacenar la
longitud de los nombres del primer array. Muestra por pantalla el nombre y la longitud que tiene (datos
de ambos arrays).
*/
    //Creacion de variable
    var lista = "";
    var resultado = "";
    //Creación de array
    var aNombre = new Array();
    var aTamaño = new Array();
    //Petición de tamaño de ARRAY
    numero = parseInt(prompt("Introduce el tamaño del ARRAY"));
    //Recorremos el FOR 10 veces
    for (var i = 1; i <= numero; i++) {
        //Petición de nombre
        nombre = prompt("Introduce el NOMBRE");
                //.push() - Añade nuevos elementos al array al final cambiando su length​
        aNombre.push(nombre);
        lista += ("Posición: " + i + " Nombre: " + nombre + "\n");
        
        //Longuitud de elementos
                        //.length - representa la longitud de una cadena
        aTamaño.push(nombre.length);
        resultado += ("Posición: " + i + " Longitud: " + nombre.length + "\n");
    }
    //Muestra de todos los elementos
    alert("ARRAY nombre = \n[" + lista + " ]" + "ARRAY tamaño = \n[" + resultado + " ]");



/*Ejercicio 8
Crea nuevas propiedades para el objeto Array:
• Propiedad “aMayusculas”: Crea una nueva propiedad de Array que permita pasar todos los caracteres
introducidos a mayúsculas. Utiliza la propiedad en el ejercicio1 y muestra los animales en mayúsculas
utilizándola.
• Propiedad “aMinusculas”: Crea una nueva propiedad de Array que permita pasar todos los caracteres
introducidos a minúsculas. Utiliza la propiedad en el ejercicio3 y muestra el contenido del primer
array de materiales en minúsculas.
• Propiedad “PI”. Crea una propiedad de Array que permita utilizar el valor de PI (3.1416) en este script.
Utiliza la propiedad en el ejercicio 5 multiplicando cada elemento del array por el valor de PI
*/
        //MAYUSCULAS
    //Creación el prototype para el paso a MAYUSCULAS
    Array.prototype.aMayusculas = function() { // creo el prototype que pase los elementos del array a mayuscula
        for (i = 0; i < this.length; i++) {
                          //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
          this[i] = this[i].toUpperCase();
        }
    };

    //Creación de array
    var aAnimales = new Array();
        //Recorremos el FOR 10 veces
        for (var i = 0; i < 10; i++) {
            //Petición de valores
            aAnimales[i] = prompt("Introduce el animal " + (i + 1) + "º");
        }
     //Damos funcion de mayusculas   
    aAnimales.aMayusculas();
    //Muestra de todos los elementos
    alert(aAnimales);


        //MINUSCULAS
    //Creación el prototype para el paso a MINUSCULAS
    Array.prototype.aMinusculas = function() { // creo el prototype que pase los elementos del array a mayuscula
        for (i = 0; i < this.length; i++) {
                          //toLowerCase() - devuelve el valor en minúsculas de la cadena que realiza la llamada.
          this[i] = this[i].toLowerCase();
        }
    };

    //Creación de variables
    var igual = true;
    //Creación de arrays con valores
    var materiales1 = ["Elemento1", "Elemento2", "Elemento3", "Elemento4", "Elemento5"]; 
    var materiales2 = ["Elemento1", "Elemento2", "Elemento3", "Elemento4", "Elemento5"]; 
    //Condiciones de comparación
    if(materiales1.length === materiales2.length){
        alert("Tienen el mismo número de elementos");
        //recorremos los elementos y miramos longitud
                                    //.length - representa la longitud de una cadena
        for (var i = 0; i < materiales1.length; i++) {
            if(materiales1[i] !== materiales2[i]){
                igual = false;
            }
        }
        //Damos funcion de minusculas    
        materiales1.aMinusculas();
        materiales2.aMinusculas();
    }else{
        alert("No tienen el mismo número de elementos");
    }
    //Condición para igualdad
    if(igual === true){
      alert("Los elementos son iguales \nARRAY 1 = " + materiales1 + "\nARRAY 2 = " + materiales2);  
    }else{
        alert("Los elementos NO son iguales");
    }        
      
            
        //PI
        //Creación el prototype para la multiplicación con PI
    Array.prototype.aPi = function() { 
        for (i = 0; i < this.length; i++) {
                          //Math.PI  - representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159.
          this[i] = this[i]*Math.PI; 
        }
    };
    
    //Creación de array
    var aNumeros = new Array();
    //Petición de valores
    //Indicamos directamente que la primera posicion sera el primer número
    aNumeros[0] = parseInt(prompt("Introduce un número, posición 1º"));
    //Validamos la entrada de un número
    while(isNaN(aNumeros[0])){
        //Petición de valores
        aNumeros[0] = parseInt(prompt("Introduce un números"));    
    }
    //Recorremos el FOR 10 veces
    for (var i = 1; i < 10; i++) {
        //Petición de valores
        aNumeros[i] = parseInt(prompt("Introduce siempre el mismo número, posición " + (i + 1) + "º"));
        //con este bucle realizaremos la comparación con el número inicial y el que toque en esa posición
        while(isNaN(aNumeros[i]) || aNumeros[0] !== aNumeros[i]){
            //Petición de valores si se incumple la condición
            aNumeros[i] = parseInt(prompt("Introduce SIEMPRE el mismo número, posición " + (i + 1) + "º"));
        } 
    } 
    //Damos funcion de Pi   
    aNumeros.aPi();    
    //Muestra de todos los elementos
    alert(aNumeros);