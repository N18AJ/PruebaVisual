/*Ejercicio 1
Crea un pequeño script que compare el número 5 y el número 6. 
Comprueba si es mayor uno u otro y muestra la información por pantalla.*/
    //Variables
    var n5 = 5;
    var n6 = 6;
    //Condición -- Si no se cumple la condicion inicial se para al else
    if(n5 > n6){
        alert ("5 es mayor que 6");
    }else{
        alert("6 es mayor que 5");
    }

/*Eejrcicio 2. 
Pídele al usuario que introduzca un número y muestra la siguiente información de ese número:
    • Si es positivo o negativo*/
    //Peticion de valor
    var n = parseInt(prompt("Introduzca un número"));
    //Condicion para resultado
    if(n >= 0){
        alert ("El número es POSITIVO");
    }else{
        alert("El número es NEGATIVO");
    }

/*Ejercicio 3
Pídele al usuario que introduzca un número y muestra la siguiente información de ese número:
    • Si es distinto de cero o es cero*/
    //Peticion de valor
    var n0 = parseInt(prompt("Introduzca un número"));
    //Condicion para resultado
    if(n0 === 0){
        alert ("El número es 0");
    }else{
        alert("El número es DISTINTO de 0");
    }            
                
/*Ejercicio 4
Pídele al usuario que introduzca un número y muestra la siguiente información de ese número:
    • Si es positivo o negativo 
    • Si es distinto de cero o es cero*/ 
    //Peticion de valor
    var nx = parseInt(prompt("Introduzca un número"));
    //Condicion para resultado
    if(nx === 0){
        alert ("El número es IGUAL a 0 y POSITIVO");
    }else{
        if(nx > 0){
            alert ("El número es POSITIVO y DISTINTO de 0");
        }else{
            alert("El número es NEGATIVO y DISTINTO de 0");
            }
    }

/*Ejercicio 5
Pide al usuario que introduzca un día de la semana por teclado. 
Si introduce “viernes”, muestra por pantalla la frase ¡fiestaaaa!
Si introduce “lunes” que muestre por pantalla “empezando la semana…”*/ 
    //Peticion de valor
    var dia = prompt("Introduzca un dia de la SEMANA ");
    //Condicion para resultado
    if(dia === "LUNES" || dia === "Lunes" || dia === "lunes"){
        alert ("Empezando la semana…");
    }else{
        if(dia === "VIERNES" || dia === "Viernes" || dia === "viernes"){
            alert ("¡FIESTAAAAAA!");
        }else{
            alert("Otros día");
            }
    }

/*Ejercicio 6
Crea un pequeño script que compare dos números que le pides al usuario por pantalla.
Debes de mostrar si los números son iguales, si uno es mayor que otro o menor…*/ 
    //Peticion de valor
    var a = parseInt(prompt("Introduzca un número: "));
    var b = parseInt(prompt("Introduzca un número: "));
    //Condicion para resultado
    if(a === b){
        alert ("Los números son IGUALES");
    }else{
        if(a < b){
            alert (a + "es MAYOR que " + b);
        }else{
            alert(a + "es MENOR que " + b);
            }
    }    
                    
/*Ejercicio 7
Crea un pequeño programa compruebe las edades de tres personas diferentes. Las edades debes de pedírselas al usuario por pantalla. 
Se debe hacer las siguientes comprobaciones:
    • Si la edad de persona1 es mayor que la edad de persona2, muestra por pantalla: ¡Que mayor eres!
    • Si la edad de persona1 es menor que la edad de persona2, muestra por pantalla: ¡uiiiiii!
    • Si la edad de persona 2 es mayor que la edad de persoan3, muestra por pantalla: ¡Con 5 años todavía hay que ir al cole!
    • Si la edad de persona 3 es menor que la edad de persona 2, muestra por pantalla: ¡Seguimos en el cole!
    • Si la edad de persona1 y la edad de persona2 es la misma: ¡Tenéis la misma edad!*/
        //Peticion de valor
        var per1 = parseInt(prompt("Introduzca una edad: "));
        var per2 = parseInt(prompt("Introduzca una edad: "));
        var per3 = parseInt(prompt("Introduzca una edad: "));
        //Condicion para resultado
        if(per1 > per2){
            alert ("¡Que mayor eres!");
        }else{
            if(per1 < per2){
                alert ("¡uiiiiii!");
            }else{
                alert("¡Tenéis la misma edad!");
                }
            }
            
        if(per2 > per3){
            alert ("¡Con 5 años todavía hay que ir al cole!");
        }else{
                alert ("¡Seguimos en el cole!");
            }    


/*Ejercicio 8
Implementa un pequeño programa en pseudocódigo que lea un número por teclado. Si ese número es
menor que 0, saldrá del programa y mostrará por pantalla un mensaje de error “Error, número negativo”. 
Si es mayor que 0 debe de mostrar la tabla de multiplicar de ese número.*/
    //Peticion de valor
    var k = parseInt(prompt("Introduzca un número: "));
    //Condicion para resultado
    if(k <= 0){
        alert ("Error, número negativo");
    }else{
        alert ("Tabla de multiplicar: " + k +
               "\n1 x " + k + "=" + (1 * k) + 
               "\n2 x " + k + "=" + (2 * k) + 
               "\n3 x " + k + "=" + (3 * k) + 
               "\n4 x " + k + "=" + (4 * k) + 
               "\n5 x " + k + "=" + (5 * k) + 
               "\n6 x " + k + "=" + (6 * k) + 
               "\n7 x " + k + "=" + (7 * k) + 
               "\n8 x " + k + "=" + (8 * k) + 
               "\n9 x " + k + "=" + (9 * k) + 
               "\n10 x " + k + "=" + (10 * k) 
            );
        } 

/*Ejercicio 9
Diseña un script que pida por teclado tres números. Si el primer número es negativo, debe de mostrar
por pantalla el producto de los tres y si no lo es, mostrará por pantalla la suma.*/
    //Peticion de valor
    var o = parseInt(prompt("Introduzca un número: "));
    var p = parseInt(prompt("Introduzca un número: "));
    var q = parseInt(prompt("Introduzca un número: "));
    //Condicion para resultado
    if(o < 0){
        alert ("Producto = " + ((o * p)* q));
    }else{
        alert ("Suma = " + (o + p + q));
        }  
         
/*Ejercicio 10
Crea un script teniendo en cuenta lo siguiente:
• Pídele al usuario un número y comprueba si ese valor es mayor que 100.
• Pídele al usuario otro número y comprueba si ese número es menor que 50.
• Pídele al usuario otro número y comprueba si ese número es igual a 10.
• Muestra al final de todo los 3 números introducidos separados por comas en un alert().*/
    //Peticion de valor
    var x = (parseInt(prompt("Introduzca primer número")));
    var y = (parseInt(prompt("Introduzca segundo número")));
    var z = (parseInt(prompt("Introduzca tercer número")));
   
    if (x > 100){
    }
   
    if (y < 50){
    }
   
    if (z === 10){
    }
   
    alert(x + ", " + y + ", " + z);              