    /*Ejercicio 1*/
    /*Una persona trabaja 40 horas a la semana y el precio hora que le paga su empresa es de 15€. 
    Calcula el importe total que recibirá al mes y muéstralo por pantalla.
    Luego pregunta al usuario si ese mes existe algún ingreso extra y si es que “si”, 
    muestra por pantalla el importe anterior + un 15%, sino muestra por pantalla. 
    “No hay ingresos extras”.*/
        //variables
        var horas = 40;
        var precHora = 15;
        var mes = 4;
        var sueldo = (horas * precHora) * mes;
        //Mostramos los resultados por pantalla
        alert("La resolución de sueldo (40 * 15)*4 = " + sueldo);
        //Petición
        var x = prompt("¿Ingresos extras? ");
        //Condición para resultado
        extra = (sueldo * 15) /100;
        //Mostramos los resultados por pantalla
        //Validar formato de respuesta
        ((x === "Sí") || (x === "Si") || (x === "sí") || x === "si") ? 
            alert(sueldo + extra) : 
                alert("No hay ingresos extras");

    /*Ejercicio 2*/
    /*Pide al usuario que introduzca 5 números impares y comprueba que los números que ha introducido
    cumplen esa condición. Muestra por pantalla si algún número no la cumple.*/	
        //Variables y petición de valoe
        var a = parseInt(prompt("Introduzca el primer número impar"));
        var b = parseInt(prompt("Introduzca el segundo número impar"));
        var c = parseInt(prompt("Introduzca el tercer número impar"));
        var d = parseInt(prompt("Introduzca el cuarto número impar"));
        var e = parseInt(prompt("Introduzca el quinto número impar"));
        //Almacenado en varible para costerior conicion
        var impar1 = (a%2 !== 0);
        var impar2 = (b%2 !== 0);
        var impar3 = (c%2 !== 0);
        var impar4 = (d%2 !== 0);
        var impar5 = (e%2 !== 0);
        //Mostramos los resultados por pantalla
        //Comprobación y muestra
        (impar1 && impar2 && impar3 && impar2 && impar5) ?
            alert("Todos los número son impares -> " + a + " " + b + " " + c + " " + d + " " + e) :
                alert("Hay números no impares -> " + a + " " + b + " " + c + " " + d + " " + e);      
                
    /*Ejercicio 3*/	
    /*Pide al usuario un tiempo en minutos y calculo los días, horas y minutos que corresponden a esos minutos.*/
        //Peticion y almacenamiento en variable
        var tiempo = parseInt(prompt("Introduzca una cantidad de minutos"));
        //Variables y operaciones
        var dia = tiempo/1440;
        var hora = (tiempo % 1440) /60; 
        var min = (tiempo % 1440) %60; 
        //Muestra
        alert(tiempo + " minutos corresponden a " + Math.floor(dia) + " día/s, " + Math.floor(hora) + " hora/s y " + Math.floor(min) + " minuto/s ");
              
        
    /*Ejercicio 4*/
    /*Crea un script que permita saber la cantidad total que se recauda 
    con las donaciones de 5 personas de	una asociación utilizando operadores de asignación. 
    Debes de preguntar la cantidad e ir “acumulando” los importes. 
    Muestra el resultado final por pantalla.*/	
        //Petición 
        var per1 = parseInt(prompt("Primera donación"));
        var per2 = parseInt(prompt("Segunda donación"));
        //Suma/Acumulación de valore
            //El operador de asignación de+= suma ( ) agrega un valor a una variable.
            per1+=per2;
        
        var per3 = parseInt(prompt("Tercera donación"));
            per1+=per3;
        
        var per4 = parseInt(prompt("Cuarta donación"));
            per1+=per4;
        
        var per5 = parseInt(prompt("Quinta donación"));
            per1+=per5;
        //Muestra de la acumulación
        alert("Total de las DONACIONES: " + per1);   


    /*Ejercicio 5*/
    /*Pide al usuario dos números y muestra por pantalla:
        a. El resultado de multiplicar ambos números
        b. El resultado de dividir el primer número entre el segundo
        c. El resultado de restar el primer número menos el segundo
        d. Muestra por pantalla la suma de los tres resultados anteriores.*/
        //Peticion de valores
        var n1 = parseInt(prompt("Introduzca el primer número"));
        var n2 = parseInt(prompt("Introduzca el segundo número"));
        //Variables para las operaciones
        var mult = (n1 * n2);
        var div = (n1 / n2);
        var rest = (n1 - n2);
        var sumaT = (mult + div + rest);
        //Muestra  del total de las operaciones
        alert("Multiplicación = " + n1 + " x " + n2 + " = " + mult);
        alert("Division = " + n1 + " / " + n2 + " = " + div);
        alert("Resta = " + n1 + " - " + n2 + " = " + rest);
        alert("Suma = " + mult + " + " + div + " + " + rest + " = " + sumaT);


    /*Ejercicio 6*/
    /*Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual.
    Diseñar una aplicación que muestre la cantidad de alumnos en porcentaje.*/	
        //Peticion de valores	
        var non = parseInt(prompt("Introduzca número de niños"));
        var nan = parseInt(prompt("Introduzca número de niñas"));
        //Suma de valores y variable
        var total = non + nan;
        //Operaciones 
        var nChico = (non / total) *100;
        var nChica = (nan / total) *100;
        //Muestra
        alert("El porcentaje de chicos es: " + nChico + "%. y el porcentaje de chicas es: " + nChica + "%");   


    /*Ejercicio 7*/
    /*Pide al usuario que introduzca cuatro números y haz comparaciones para comprobar cual es el mayor de todos. 
    Muestra éste por pantalla*/	
        //Petición de valores
        var n1 = parseInt(prompt("Introduzca el primer número"));
        var n2 = parseInt(prompt("Introduzca el segundo número"));
        var n3 = parseInt(prompt("Introduzca el tercer número"));
        var n4 = parseInt(prompt("Introduzca el cuarto número"));
        //El operador de asignación ( = ) asigna un valor a una variable.
        //Indicamos que mayor es el valor n1
        var mayor = n1;
        //Comparaciones
        n2 > mayor ? mayor = n2 : mayor;
        n3 > mayor ? mayor = n3 : mayor;
        n4 > mayor ? mayor = n4 : mayor;
        //Muestra del número mayor
        alert("El número mayor introducido es: " + mayor);


    /*Ejercicio 8*/
    /*Programa una aplicación que halle el área de un circulo, pídele al usuario los datos que necesites.*/	
        //Peticion del radio	
        var radio = parseInt(prompt("Introduzca un radio"));
        const pi = 3.14;
        //** exponente
        var area = (pi*(radio ** 2));
        //Muestra del area
        alert("El área del círculo es " + area + "cm2");   


    /*Ejercicio 9*/
    /*Pide al usuario dos números comprendidos entre 0 y 50. Comprueba que los dos números están dentro de ese rango. 
    Si no están en ese rango, muestra por pantalla error, sino muestra la suma de ambos números.*/	
        //Peticion de números
        var n1 = parseInt(prompt("Introduzca un número [0-50]"));
        var n2 = parseInt(prompt("Introduzca un número [0-50]"));
        //Condicion de rango
        ((n1 >= 0) && (n1 <= 50) && (n2 >= 0) && (n2 <= 50)) ? 
            alert("Suma de los valores = " + (n1 + n2)) : 
                alert("ERROR -- números fuera de rango");


    /*Ejercicio 10*/
    /*Pide al usuario una fecha concreta (día, mes y año) y muestra por pantalla la información recibida de esta forma. 
    Ejemplo: El día 5 de octubre de 2020 corresponde a un año no bisiesto*/	
        //Peticion de valores
        var dia = parseInt(prompt("Introduzca una fecha [DÍA]"));
        var mes = prompt("Introduzca una fecha [MES] letra");
        var anyo = parseInt(prompt("Introduzca una fecha [AÑO]"));
        //Comprobación y muestra
        anyo%4 === 0 ? alert("El día " + dia + " de " + mes + " de " + anyo + " es bisiesto") : 
                        alert("El día " + dia + " de " + mes + " de " + anyo + " NO es bisiesto");
