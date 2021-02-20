/* Ejercicio 1
Realiza un script que calcule el área de un cuadrado, triángulo, rectángulo y circunferencia.
Pide al usuario los datos necesarios para hacer los cálculos.
 */
//Peticion de medidad
    //CUADRADO
    var lado = parseInt(prompt("Introduzca el lado del CUADRADO: "));
    //RECTANGULO
    var mayor = parseInt(prompt("Introduzca el lado MAYOR del RECTANGULO: "));
    var menor = parseInt(prompt("Introduzca el lado MENOR del RECTANGULO: "));
    //TRIÁNGULO
    var base = parseInt(prompt("Introduzca la BASE del TRIÁNGULO: "));
    var altura = parseInt(prompt("Introduzca la ALTURA del TRIÁNGULO: "));
    //CIRCULO
    var radio = parseInt(prompt("Introduzca el RADIO der CIRCULO: "));
    //Muestra
    //Math.PI  - representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159.
    //Math.pow() -  devuelve la  base elevada al exponente.
    alert("Area del CUADRADO = " + (lado * lado) + 
          "\nArea del RECTANGULO = " + (mayor * menor) +
          "\nArea del TRIÁNGULO = " + ((base * altura)/2) +
          "\nArea del CIRCULO = " + (Math.PI * (Math.pow(radio,2))));


/* Ejercicio 2
Realiza un script que genere números aleatorios sin que se repitan comprendidos entre 1 y 100. 
Nota: números es plural, pueden ser 2.
 */
            //Math.floor - Devuelve el máximo entero menor o igual a un número.
                        //Math.random() - etorna un punto flotante, un número pseudo-aleatorio dentro del rango [x, y).
    var n1 = Math.floor(Math.random() * 100) + 1;
    var n2 = Math.floor(Math.random() * 100) + 1;
    //Muestra
    alert("Los valores son: " + n1 + ", " + n2);


/* Ejercicio 3
Realiza un script que genere 4 cuatro números comprendidos entre 1 y 50 y los compare.
Muestra los números ordenados de menor a mayor por pantalla.
 */
var ordenado = false;
var lista = "";
var aux = 0;
var num1 = Math.floor(Math.random() * 50) + 1;
var num2 = Math.floor(Math.random() * 50) + 1;
var num3 = Math.floor(Math.random() * 50) + 1;
var num4 = Math.floor(Math.random() * 50) + 1;
//Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera.
// Dicha condición es evaluada antes de ejecutar la sentencia
while(!ordenado){
    if(num1 > num2){
        aux = num1;
        num1 = num2;
        num2 = aux;
    }

    if(num2 > num3){
        aux = num2;
        num2 = num3;
        num3 = aux;
    }

    if(num3 > num4){
        aux = num3;
        num3 = num4;
        num4 = aux;
    }

    if(num1 < num2 && num2 < num3 && num3 < num4){
        lista = num1 + ", " + num2 + ", " + num3 + ", " + num4;
        ordenado = true;
    }
}
alert(lista);


/* Ejercicio 4
Realiza un script que cree un objeto de tipo Number con el valor de PI.
Muestra por pantalla el valor de PI con 4 decimales.
 */
var numero = Math.PI;
alert(numero.toFixed(4));


/* Ejercicio 5
Realiza un script que le pida al usuario números decimales con hasta 5 decimales (4.56675 o 3.4546), 
formatea la salida para que solamente queden números de 2 decimales y calcula el máximo y el mínimo de los valores introducidos. 
Sería recomendable validar que se introducen 5 decimales.
 */
    //Peticion de valores 
    var decimal = parseFloat(prompt("Introduzca un número con 5 decimales: "));
    //igualación de max y min a valor
    max = decimal;
    min = decimal;
    //Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera.
    // Dicha condición es evaluada antes de ejecutar la sentencia
    while (decimal !== 0) {
            if (decimal !== 0) {
            if (decimal > max) {
                max = decimal;
                } else if (decimal < min) {
                    min = decimal;
                }
            }
            decimal = parseFloat(prompt("Introduzca un número con con 5 decimales: \nEscriba 0 para salir"));
        }
    //Muestra    
    alert("Número mayor: " + max.toFixed(2) +"\nNúmero menor: " + min.toFixed(2));
    
        