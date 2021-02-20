/*Ejercicio 1
Implementa en JavaScript un pequeño script que muestre “hola” 5 veces seguidas.
 */
    //Creamos la variable con el mensaje y acumulador
    var saludo = "Hola";
    var lista = "";
    //Condicion del FOR
    //Repetir 5 vecer 
    for (var i = 1; i <=5; i++) {
        //Acumulación del FOR - Posterior mostrado
        lista += ((i + "º " + saludo) + "\n\ ");
       }
    //Mostramos el mensaje
    alert(lista);

/*Ejercicio 2
Implementa en JavaScript un pequeño programa que muestre la suma, la multiplicación, la resta y la
división de dos números dados (no se le piden al usuario). Las variables con los valores de los números
deben de estar inicializadas a un valor. Repite el proceso 2 veces.
 */
    //Creación de variables con valor
    var n1 = 2;
    var n2 = 3;
    var suma = (n1 + n2);
    var mult = (n1 * n2);
    var resta = (n1 - n2);
    var div = (n1 / n2);
    //Condicion del FOR
    //Repetir 2 vecer 
    for (var i = 1; i < 2; i++) {
        //Mostramos el mensaje
       alert("Mostramos las operaciones con los valores: " + n1 + " y "+ n2 +
            "\n\ El resultado de la SUMA es: " + suma +
            "\n\ El resultado de la MULTIPLICACION es: " + mult +
            "\n\ El resultado de la RESTA es: " + resta +
            "\n\ El resultado de la DIVISION es: " + div);
    }
    
    
/*Ejercicio 3
Implementar en JavaScript un pequeño programa que muestre los números del 1 al 20.
 */
    //Creación de varible para acumulación
    var total = "";
    //Recorremos el FOR tantas veces como valor del numero
    for(var n = 1; n <= 20; n++){
            //Acumulación los valores
            total += (n + "\n\ ");
    }
    //Mostramos los IMPARES
    alert("Listado del 1 al 20:\n\ " + total);
    
    
/*Ejercicio 4
Calcula el factorial de un número ya dado (inicializado a un número en concreto).
 */
    //Variables: 
    //Número para la operación
    var num = 5;
    //Factorial = 1 para la multiplicacion de los números y posterios total
    var factorial = 1;
    //Creación de varible para acumulación
    var valor = "";
        //Recorremos el FOR tantas veces como valor del numero
        for (i = 1; i <= num; i++) {
            //Igualamos factorial para el resultado final de todas las multiplicaciones
            factorial = factorial * i;
            //Acumulación los valores
            valor += ("*" + i + " ");    
        }
        //Muestra de valores y total
        alert(num + "! " + valor + " = " + factorial);
        
        
/*Ejercicio 5
Escribe un script que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido
 */
    //Petición de número
    var edad = parseInt(prompt("Introduce tu EDAD: "));
    //Creación de varible para acumulación
    var anyos = "";
    //Condicion de aceptacion de dato
    //si no la cumple para al ELSE - Muestra mensaje
    if(!isNaN(edad)){
        //Recorremos el FOR tantas veces como valor del numero
        for(var y = 1; y <= edad; y++){
            //Acumulación los IMPARES
            anyos += (" " + y + " ");
        }
        //Mostramos los IMPARES
        alert("Todos los años cumplidos: " + anyos);
    }else{
        alert("Introduce tu EDAD:");
    }   
    
    
/*Ejercicio 6
Escribe un script que pida al usuario un número entero positivo y muestre por pantalla todos los números
impares desde 1 hasta ese número separados por comas.
 */
    //Petición de número
    var numP = parseInt(prompt("Introduce un número entero POSITIVO: "));
    //Creación de varible para acumulación
    var impar = "";
    //Condicion de aceptacion de dato
    //si no la cumple para al ELSE - Muestra mensaje
    if(!isNaN(numP) && numP >= 0){
        //Recorremos el FOR tantas veces como valor del numero
        for(var p = 1; p <= numP; p++){
            //Por cada vuelta comprobaremos si el número es PAR O IMPAR
            if(p %2 !== 0){
                //Acumulación los IMPARES
                impar += ("," + p + " ");
            }
        }
        //Mostramos los IMPARES
        alert("Los números impares son: " + impar);
    }else{
        alert("Introduce un número entero POSITIVO");
    }   
    
    
/*Ejercicio 7
Escribe un script que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo
como el de abajo, de altura el número introducido.
 */
    //Petición de número
    var altura = parseInt(prompt("Introduce un número entero POSITIVO: "));
    //Creación de varible para acumulación
    var vista = "";
    //Recorremos el FOR tantas veces como valor de la altura y i = 1
    for (i = 1; i <= altura; i++) {
        //Por cada vuelta del FOR anterior entramos en este FOR
        //Y se van añadiendo +, consegutivamentes
        for (j = 1; j <= i; j++) {
            //Parte horizontal
            vista = vista + " + ";
        }
        //Realiza la parte vertical
        vista = vista + "\n";
    }
    //Muestra del triangulo
    alert(vista);


/*Ejercicio 8
Escribir un script que pida al usuario un entero y muestra por pantalla un triángulo como el que ves abajo
con los números. La altura del triangulo del ejemplo es: 9.
 */
    //Petición de número
    var altura = parseInt(prompt("Introduce un número entero POSITIVO: "));
    //Creación de varible para acumulación
    var vista = "";
        //Recorremos el FOR tantas veces como valor de la altura y i = 1
        for (i = 1; i <= altura; i++) {
            if(i %2 !== 0){
                //Realiza la parte vertical
                vista += "\n";
                //Por cada vuelta del FOR anterior entramos en este FOR
                //Y se van añadiendo +, consegutivamentes
                //Invertimos la muestra
                for (j = i; j >= 1; j--) {
                    //Por cada vuelta comprobaremos si el número es PAR O IMPAR
                    if(j %2 !== 0){
                        //Parte horizontal
                        vista += j;
                    }
                }
            }
        }
    //Muestra del triangulo
    alert(vista);
