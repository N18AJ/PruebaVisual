/* Ejercicio 1
 Imagina que eres el dueño de una tienda y en el mes de febrero aplicas 
 un descuento de un 15% a todos los clientes que compren ese mes. 
 Crea un pequeño programa en JavaScript que, dado un mes y un importe,
 calcule la cantidad que le debes de cobrar al cliente dependiendo del mes en que estemos.
*/
    //Peticion de datos
    var importe = parseInt(prompt("Introduzca su importe total"));
    var mes = prompt("Introduzca un mes");
    //Condición
    if (mes === "Febrero" || mes === "febrero" || mes === "FEBRERO"){
        //Creamos variable para aplicar el descuento
        var total = (importe * 15)/100;
    alert("Su precio con descuento es: " + (importe - total));
    }else{
        alert("Este mes no tienen descuento, precio " + importe);
    }



/* Ejercicio 2
 Crea un algoritmo que dado un número entero, se visualice por pantalla si es par o impar.
  En caso de ser 0, se debe visualizar “el número no es par ni impar”.
*/
    //Petición de variable
    var n1 = parseInt(prompt("Introduzca un número"));
    //Condición
    if (n1 === 0){
         alert("El número no es par ni impar, es 0");
        }else if (n1%2 === 0){
            alert("El número es PAR");
             }else if (n1%2 !== 0){
                alert("El número es IMPAR");
            }



/*Ejercicio 3
 Escribe un script que informe al cliente de una empresa de helados, cuánto le va a costar el helado
  que quiere en función del topping que elija teniendo en cuenta lo siguiente:
    • El helado sin topping cuesta 1.90€.
    • El topping de Oreo cuesta 1€.
    • El topping de KitKat cuesta 1.50€.
    • El topping de brownie cuesta 1€.
    • El topping de lacasitos cuesta 0.95€.
    • En caso de no disponer del topping solicitado por el usuario el script escribirá por pantalla “No disponemos de ese topping”.
Finalmente, el script debe mostrar por pantalla el precio del helado con el topping seleccionado o ninguno y sólo puede elegir 1 topping por helado.
 */
       alert("HELADERIA \n\
            1. El helado sin topping cuesta 1.90€. \n\
            2. El topping de Oreo cuesta 1€ \n\
            3. El topping de KitKat cuesta 1.50€ \n\
            4. El topping de brownie cuesta 1€ \n\
            5. El topping de lacasitos cuesta 0.95");
    //Petición de topping
    var topp = parseInt(prompt("Introduzca el número del topping"));
    //Variable // Elegir lista
    var helado = 1.90;
    var top1 = 1;
    var top2 = 1.50;
    var top3 = 1;
    var top4 = 0.95;
    //Condición    
    if (topp === 1){
        alert("Precio Helado: " + helado);
        }else if (topp === 2){
                alert("Precio total - Helado + Oreo: " + (helado + top1) + "€");
                }else if (topp === 3){
                    alert("Precio total - Helado + KitKat: " + (helado + top2) + "€");
                        }else if (topp === 4){
                            alert("Precio total - Helado + Brownie: " + (helado + top3) + "€");
                                }else if (topp === 5){
                                    alert("Precio total - Helado + Lacasitos: " + (helado + top4) + "€");
                                        }else{
                                            alert("No disponemos de ese topping");
                                        }



/*Ejercicio 4
 Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y realice las siguientes operaciones:
    • Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. 
    Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. 
    Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
    • Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, 
    con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
 */
    //Peticion 
    var diametro = parseFloat(prompt("Introduzca el diametro"));
    var grosor = parseFloat(prompt("Introduzca el grosor"));
    //Condición 
    if(diametro > 1.4){
        alert("La rueda es para un vehículo grande");
        }else if(diametro <= 1.4 && diametro > 0.8){
             alert("La rueda es para un vehículo mediano");
            }else{
                alert("La rueda es para un vehículo pequeño");
            }
            
   if(diametro > 1.4 && grosor < 0.4 || ((diametro <= 1.4 && diametro > 0.8) && grosor < 0.25)){
        alert("El grosor para esta rueda es inferior al recomendado");
            }         


/*Ejercicio 5
 Crea un script que lea las notas de tres alumnos y calcule la media obtenida entre todos y 
 muestra por pantalla quién ha aprobado y quién no (nota>=5)
 */
    //Peticion de notas
    var per1 = parseFloat(prompt("Introduzca su nota"));
    var per2 = parseFloat(prompt("Introduzca su nota"));
    var per3 = parseFloat(prompt("Introduzca su nota"));
    //Operacion
    var media = parseFloat((per1 + per2 + per3)/3);
    //Muestra
    alert("La MEDIA de las notas es: " + media);
    //Condicion
    if(per1 >= 5){
        alert("Alumn@ 1 es APROBADOS = " + per1);
        }else{
            alert("Alumn@ 1 esta SUSPENSO = " + per1);
        }
    if(per2 >=5){
        alert("Alumn@ 2 es APROBADOS = " + per2);
        }else{
            alert("Alumn@ 2 esta SUSPENSO = " + per2);
        }
    if(per3 >= 5){
        alert("Alumn@ 3 es APROBADOS = " + per3);
        }else{
            alert("Alumn@ 3 esta SUSPENSO = " + per3);
        }
        
        

/*Eejrcicio 6
 Crea un script de una tienda de coches, dependiendo de qué coche compre el cliente hay unos descuentos u otros.
    • Si el cliente compra un twingo el descuento será de un 5%. 
    Si el coche es un Renault el descuento es un 10%. 
    Twingo es un modelo de Renault
    • Si el cliente compra un altea el descuento será de un 6%.
     Si el coche es un Seat el descuento será un 12%. 
     Altea es un modelo de Seat
 */
   alert("HCONCESIONARIO \n\
            1. Coche modelo Twingo. \n\
            2. Coche marca Renault.\n\
            3. Coche modelo Altea \n\
            4. Coche marca Seat");
    //Petición de coche
    var coche = parseInt(prompt("Introduzca el número del modelo"));
    //Variable // Elegir lista
    var coc1 = 17000;
    var coc2 = 25000;
    var coc3 = 29000;
    var coc4 = 15000;
    /* OTRA FORMA --- Peticion del precio
    var coc1 = parseInt(prompt("Introduzca el número del modelo"));
    var coc2 = parseInt(prompt("Introduzca el número del modelo"));
    var coc3 = parseInt(prompt("Introduzca el número del modelo"));
    var coc4 = parseInt(prompt("Introduzca el número del modelo"));
     */
    //Condición    
    if (coche === 1){
        alert("Twingo con un 15% sobre 17.000€: " + (coc1 - ((coc1 *15)/100)));
        }else if (coche === 2){
                alert("Renault con un 10% sobre 25.000€: " + (coc2 - ((coc2 *10)/100)));
                }else if (coche === 3){
                    alert("Altea con un 18% sobre 29.000€: " + (coc3 - ((coc3 *18)/100)));
                        }else if (coche === 4){
                            alert("Seat con un 12% sobre 15.000€: " + (coc4 - ((coc4 *12)/100)));
                                }else{ 
                                    alert("El número no esta en la lista");
                                    }