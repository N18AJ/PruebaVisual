/*Ejercicio 1
Pide al usuario que introduzca por pantalla un número que corresponda al número de día de la
semana (1 al 7). Si introduce un número fuera de ese rango, debe de aparecer un error y salirse del
programa. Si introduce el número 1, debe de mostrar por pantalla “Lunes” y así sucesivamente.
 */
    //Peticion de dia
    var n = parseInt(prompt("Introduzca número de la semana"));
    //Condicion para introducir a un rango de día
        switch (n){
        case 1:
                alert("Lunes");
                    break;
        case 2:
                alert("Martes");
                    break;
        case 3:
                alert("Miercoles");
                    break;
        case 4:
                alert("Jueves");
                    break;
        case 5:
                alert("Viernes");
                    break;
        case 6:
                alert("Sabado");
                    break;
        case 7:
                alert("Domingo");
                    break;
        default:
        alert("Este número esta fuera de rango");
        }


/*Ejercicio 2
Pide al usuario que introduzca por pantalla un carácter, si tu script reconoce ese carácter, muestra
por pantalla el carácter que ha reconocido. Tu script debe de reconocer vocales mayúsculas y
minúsculas (sin tilde).
 */
     //Peticion de dia
    var letra = prompt("Introduzca una vocal");
    //Condicion para introducir el caracter
        switch (letra){
        case 'a':
                alert("a");
                    break;
        case 'A':
                alert("A");
                    break;
        case 'e':
                alert("e");
                    break;
        case 'E':
                alert("E");
                    break;
        case 'i':
                alert("i");
                    break;
        case 'I':
                alert("I");
                    break;
        case 'o':
                alert("o");
                    break;
        case 'O':
                alert("O");
                    break;
        case 'u':
                alert("u");
                    break;
        case 'U':
                alert("U");
                    break;            
        default:
        alert("Este caracter no lo reconoce");
        }

/*Ejercicio 3
Crea un script sencillo que pida al usuario su edad y dependiendo de la edad que introduzca, salga
un mensaje por pantalla u otro. Controla que lo que introduce el usuario es un número y si
introduce algo que no es un número, muestra un error por pantalla.
• Si introduce una edad comprendida entre 0 y 12 años -> Muestra por pantalla “Educación primaria”.
• Si introduce una edad comprendida entre 13 y 18 años -> Muestra por pantalla “Educación secundaria”.
• Si introduce una edad comprendida entre 18 y 65 años -> “Edad de vida laboral”.
• Si introduce por pantalla un edad superior a 65, muestra por pantalla -> “Jubilación”.
 */
    //Peticion de edad
    var n = parseInt(prompt("Introduzca su edad"));
    //Condicion para introducir a un rango la edad
        //Creación de variable para almacenar esas edad
    if (n >= 0 && n <= 12){
        var primaria = n;
    }
    if (n >= 13 && n <= 17){
        var secundaria = n;
    }
    if (n >= 18 && n <= 65){
        var laboral = n;
    }
    if (n >= 66){
        var jubilacion = n;
    }
    
    if (!isNaN (n)){
        switch (n){
        case primaria:
        alert("Educación primaria");
            break;
        case secundaria:
        alert("Educación secundaria");
            break;
        case laboral:
        alert("Edad de vida laboral");
            break;
        case jubilacion:
        alert("Jubilación");
            break;
        default:
        alert("");
        }
    }else{
        alert("Introduzca un número");
        }


/*Ejercicio 4
Un usuario compra en una tienda online productos para mascotas, como respuesta de fidelización a
la hora de pagar tienen la opción de aplicar un código de descuento que dependiendo de que
código sea se aplica un descuento u otro.
Debes de mostrarle información por pantalla de los productos que tiene la tienda (3 productos con
sus correspondientes precios con IVA) y luego aplicar el descuento en el caso de que exista.
Estos son los códigos de descuento aplicables
• HOLA1: descuento del 15% del total de productos que ha comprado
• BIENVENIDA1: descuento el 12% del total de productos que ha comprado.
• AFILIADO: descuento del 20% del total de productos que ha comprado
 */
    //Muestra de opciones
    alert("¡Bienvenido! \n\
                1. Casita para Gato = 25€ \n\
                2. Casita para Perro = 34€\n\
                3. Casita para Pajaro = 42€");
        //Petición de producto
    var producto = parseInt(prompt("Introduzca el número del producto"));
    //Condición de entrada
    if(producto === 1 || producto === 2 || producto === 3){
        //Igualamos la informacion por peticion a la que usaremos en el SWITCH
        var productoD = producto; 
        //Creamos la variable de precio para alamacenar el valor para su posterior uso
            //este valor varia en funcion de case que usemos
        var precio;
        switch(productoD){
            case 1:
                precio = 10;
                var des = prompt("\n\¡DESCUENTOS! \n\ HOLA1-->15% \n\ BIENVENIDA1-->12%\n\ AFILIADO-->20%");
            break;
            case 2:
                precio = 15;
                var des = prompt("\n\¡DESCUENTOS! \n\ HOLA1-->15% \n\ BIENVENIDA1-->12%\n\ AFILIADO-->20%");
            break;
            case 3:
                precio = 25;
                var des = prompt("\n\¡DESCUENTOS! \n\ HOLA1-->15% \n\ BIENVENIDA1-->12%\n\ AFILIADO-->20%");
            break;
        } 
        //Condiciones para el descuento  --  entramos en él despues del SWITCH
        if(des === "HOLA1"){
            precio = precio - (precio *15) /100;
            alert("Descuento aplicado");
        }else if(des === "BIENVENIDA1"){
            precio = precio - (precio *12) /100;
            alert("Descuento aplicado");
        }else if(des === "AFILIADO"){
            precio = precio - (precio *20) /100;
            alert("Descuento aplicado");
        }else{
            alert("¡Has introducido mal el descuento!");
        }
        alert("Precio final del producto" + producto + " = " + precio + "€");
    }else{
        alert("No has introducido ningún producto");
    }