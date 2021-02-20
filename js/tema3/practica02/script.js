/*Opciones 1
Se tiene que generar un número aleatorio entre 1 y 500 y comprobar si el número generado es capicúa. 
Debe aparecer por pantalla el número aleatorio que se ha generado y si es capicúa o no.
El número que introduce el usuario no tiene limitación de longitud, es decir, puede introducir el número que quiera.
 */
/*
 Busqueda en internet para la resolución 
 http://lineadecodigo.com/java/saber-si-un-numero-es-capicua-con-java/ 
 https://gist.github.com/progent/9d7752544d00502c4b623b3b5e3f9683
 */
    //Peticion de número aleatorio
                //Math.floor - Devuelve el máximo entero menor o igual a un número.
                            //Math.random() -  retorna un punto flotante, un número pseudo-aleatorio dentro del rango [x, y)
    var number = Math.floor(Math.random() * 500) + 1;
    //Creación de variables para partición del número
    var centena;
    var decena;
    var unidad;
    //Descomposición del número
    centena = Math.floor(number / 100);
    decena = Math.floor((number % 100) / 10);
    unidad = Math.floor((number % 100) % 10);
    //Condición de igualdad
    if (centena === unidad) {
        alert("Númeor introducido: " + number + " CAPICUA");
    } else {
        alert("Númeor introducido: " + number + " NO CAPICUA");
    }
    
    
/*Opciones 2
Pídele al usuario que introduzca un número de 4 cifras, comprueba que ese número es positivo y no tiene decimales. 
Si introduce un valor no válido, pídele otra vez el número hasta que introduzca uno válido.
Luego comprueba si el número introducido es capicúa o no, si lo es, muéstralo por pantalla, sino lo es, pídele otro y vuelve a comprobar que es un valor correcto y que es capicúa. 
El script finaliza cuando ha introducido dos números capicúas con formato adecuado.
 */
    //Creación de variables
    var number;
    var cadena;
    var millar;
    var centena;
    var decena;
    var unidad;
    var contador = 0;
    var capicua = false;
    //La sentencia crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa.
    do {
        //Float para aceptar cualquier tipo numerico
        number = parseFloat(prompt("Introduce un número de 4 cifras: "));
                //toString() - Devuelve una cadena que representa al objeto
                            //length - La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código UTF-16.
        cadena = number.toString().length;
        //Condición para el número
            //Numero positivo y NO decimal
        if (isNaN(number) || number < 0 || !Number.isInteger(number) || cadena !== 4) {
            alert("Introduce un número de 4 cifras: ");
        } else {
            //Descomposición del número
            millar = Math.floor(number / 1000);
            centena = Math.floor((number % 1000) / 100);
            decena = Math.floor(((number % 1000) % 100) / 10);
            unidad = Math.floor(((number % 1000) % 100) % 10);

            if (millar === unidad && centena === decena) {
                capicua = true;
                alert("Has introducido un número CAPICUA es: " + number);
            } else {
                alert("El número no es CAPICUA, introduce otro");
            }
        }
    } while (isNaN(number) || number < 0 || !Number.isInteger(number) || cadena !== 4 || !capicua || contador !== 2);


/*Opciones 3
Pídele al usuario que introduzca un día y un mes de lo que queda de año (teniendo en cuenta que se admiten fechas del 1 de noviembre al 31 de diciembre de 2020).
Luego pídele que inserte una cantidad en euros asignado a cada día, teniendo en cuenta que máximo podrá insertar 7 cantidades/7días. Puede introducir cantidades enteras o decimales.
Debes de sumar todas las cantidades que ha introducido y redondear la cantidad obtenida.
Haz todas las comprobaciones oportunas para cerciorarte que introduce datos válidos acorde al enunciado y ten en cuenta que no todos los meses tienen el mismo número de días.
 */
    //Variables
    var mes;
    var nombreMes;
    var diasMes = 0;
    var dia;
    var tiempo;
    var sueldo;
    var acumulador = 0;
    var salario = 0;
    //Bucle para la peticion del mes
    do {
        mes = parseInt(prompt("Introduce el número del mes, 11 o 12: "));
        //Validación del mes introducido
        if (isNaN(mes) || mes < 11 || mes > 12) {
            alert("Introduce el número del mes, 11 o 12");
        } else {
             //Comparara los valores para mostrar el case concreto
              //Mes y días
            switch (mes) {
                case 11:
                    nombreMes = "noviembre";
                    diasMes = 30;
                    break;
                case 12:
                    nombreMes = "diciembre";
                    diasMes = 31;
                    break;
            }
            //Bucle para la peticion del dia, para que este dentro del rango de dias del MES
            do {
                //Peticion de dia del mes
                dia = parseInt(prompt("Introduce el día de " + nombreMes + " ( 1 - " + diasMes + " ):"));
                //Validación de entrada, número y dentro de rango
                if (isNaN(dia) || dia < 1 || dia > diasMes) {
                    alert("Día fuera del rango del MES");
                } else {
                    //Bucle para peticion de dias de sueldo
                    do {
                        //Peticion de días para sueldo
                        tiempo = parseInt(prompt("Introduce los días de sueldo, entre 1 - 7: "));
                        //Validamos la entrada de valor, número y dentro de rango
                        if (isNaN(tiempo) || tiempo < 1 || tiempo > 7) {
                            alert("Rango entre 1 - 7 días");
                        } else {
                            //Repetición de de peticiones por numero de días
                            for (var i = 1; i <= tiempo; i++) {
                                do {
                                    //Petición de sueldo
                                    sueldo = parseFloat(prompt("Introduce el sueldo para el día " + i + ": "));
                                    //Validación de entrada, número positivo
                                    if (isNaN(sueldo) || sueldo < 0) {
                                        alert("Introduce un valor pasitivo");
                                    } else {
                                        alert("Día " + i + "\nSueldo: " + sueldo + " €");
                                        acumulador += sueldo;
                                    }
                                } while (isNaN(sueldo) || sueldo < 0)
                            }
                            salario = Math.round(acumulador);
                        }
                    } while (isNaN(tiempo) || tiempo < 1 || tiempo > 7)
                }
            } while (isNaN(dia) || dia < 1 || dia > diasMes)
        }
    } while (isNaN(mes) || mes < 11 || mes > 12)
    //Muestra de la suma de los sueldos
    alert("SALARIO: " + salario + " €");

/*Opciones 4
Pídele al usuario que introduzca 5 números decimales y comprueba que introduce números de este tipo.
 Después extrae la parte entera de todos los números decimales que ha introducido, súmalas y muestra por pantalla el resultado de la suma de estos números.
 */
    var contador = 1;
    var suma = 0;
    //Numro de veces a realizar el bucle
    while (contador <= 5) {
        //Peticion de valores
        var n = parseFloat(prompt("Introduzca número decimal: "));
        //Condicion de valor es un número
        if (!isNaN(n)) {
                //Math.trunc() - devuelve la parte entera de un numero 
            suma += Math.trunc(n);
            contador++;    
        } else {
            alert("El número introducido no es válido");
        }
    }
    //Muestra del valor  
    alert("La suma es: " + suma);



/*Opciones 5
Muestra los números primos que hay entre 1 y 100, ambos incluidos en un alert de forma conjunta.
 */
    //Creación de variables
    var lista = "";
    var primo;
    //Crea un bucle que seguira ejecutando hasta que se cumpla la condición .
    for (var i = 1; i <= 100; i++) {
        primo = true;
        //Comprobacion de números primos
        for (var j = 2; j <= i - 1; j++) {
            if (i % j === 0) {
                primo = false;
            }
        }
        //Acumulación en la lista
        if (primo) {
            lista += i + ", ";
        }
    }
    //Muestra de los números
    alert(lista + 100);