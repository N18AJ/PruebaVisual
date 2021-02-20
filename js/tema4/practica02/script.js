/* 
@author: Nerea Álvarez Justel
Ejercicio 1
 */
//Variables de fechas
var fecha1 = new Date(2019, 4, 18);
var fecha2 = new Date(1993, 3, 5);
var fecha3 = new Date(2020, 2, 7);
var fecha4 = new Date(2010, 1, 25);
var fecha5 = new Date(2018, 11, 13);
var fecha6 = new Date(2020, 01, 18);
//Arrays para los datos
    //DNI
var aDni = new Array("4862a", "0351j", "8496s", "7310c", "9650h");
    //Nombre
var aNom = new Array("Lucas", "Mateo", "Juan", "Magdalena", "María");
    //Apellidos
var aApe1 = new Array("Sánchez", "Pérez", "López", "Martínez", "Alonso");
var aApe2 = new Array("Nuevo", "Merino", "Álvarez", "Robles", "Justel");
    //Número de Cuentas
var aNumCuenta = new Array("123a", "456b", "789c", "983d", "321t");
var aNumCuenta2 = new Array(null, null, null, "879f", null);
    //Importe de Cuentas
var aImporte = new Array(-150, 150, 300, -300, 450);
var aImporte2 = new Array(null, null, null, 250, null);
    //Saldo Negativo si/no
var aSaldoN = new Array();
var aSaldoN2 = new Array();
//Variables para almacenar clientes
var contN = 0;
var contP = 0;
//Bucle para recorrer los clientes
for (var k = 0; k < aDni.length; k++) {
    //Realizamos una operación y comprobamos la condición
    if(aImporte[k] + aImporte2[k] < 0){
        //Si se cumple
        aSaldoN[k] = true;
        contN++; 
    }else{
        //si no se cumple
        aSaldoN[k] = false;
        contP++;
    }
}
    //Fecha Alta
var aFecha = new Array(fecha1, fecha2, fecha3, fecha4, fecha5);
var aFecha2 = new Array(null, null, null, fecha6, null);
    //Gestores
var aNomGestor = new Array("gestor1", "gestor2", "gestor2", "gestor4", "gestor3"); 

//Creacion de ARRAY de cliente
var aClientes = new Array();
//Recorremos las posiciones de los arrays para crear a las CLIENTES 
for (var i = 0; i < aDni.length; i++) {
    if(aNumCuenta2[i] !== null && aImporte2[i] !== null){
        aClientes[i] = "El Cliente con DNI: " + aDni[i] + ", Nombre: " + aNom[i] + ", Apellidos: " + aApe1[i] + " " + aApe2[i] + ", Nº de Cuenta1: " + aNumCuenta[i] + ", Saldo Negativo1: " + aSaldoN[i] + ", Fecha de alta1: " + aFecha[i] + ", Total de Cuenta1: " + aImporte[i] +
                                                                                                                                ", Nº de Cuenta2: " + aNumCuenta2[i] + ", Saldo Negativo2: " + aSaldoN2[i] + ", Fecha de alta2: " + aFecha2[i] + ", Total de Cuenta2: " + aImporte2[i] + ", Gestor: " + aNomGestor[i];
    }else{
        aClientes[i] = "El Cliente con DNI: " + aDni[i] + ", Nombre: " + aNom[i] + ", Apellidos: " + aApe1[i] + " " + aApe2[i] + ", Nº de Cuenta: " + aNumCuenta[i] + ", Saldo Negativo: " + aSaldoN[i] + ", Fecha de alta: " + aFecha[i] + ", Total de Cuenta: " + aImporte[i] + ", Gestor: " + aNomGestor[i];
    }
}
console.log(aClientes);

//Realizaremos el bucle mientras la opción sea distinta de cero
while(opcion !== 0){
    //Petición de opcion en MENU
    var opcion = parseInt(prompt("Opción 0: Salida del SCRIP.\n\
    Opción 1: Número clientes total por gestor y número de clientes total por sede del banco. \n\
    Opción 2: Número de clientes que tienen en sus cuentas salgo positivo.\n\
    Opción 3: Número de clientes que tienen en sus cuentas salgo negativo.\n\
    Opción 4: DNI, nombre y apellidos del cliente que tiene más saldo en sus cuentas en el banco.\n\
    Opción 5: DNI de los clientes que deben de llamar para gestiones comerciales.\n\
    Introduzca número de opción:"));
    //REcorremos el menu hasta encontrar case elegido
    switch(opcion){
        case 1: 
            var lista = "";
            var gest1 = 0;
            var gest2 = 0;
            var gest3 = 0;
            var gest4 = 0;
            var gest5 = 0;
            var acumulador = 0;
            var sede;
                //Recorremos todo los clientes y acumulamos el valor del gestor de cada cliente
                for(var j = 0; j < aClientes.length; j++){
                   switch (aNomGestor[j]) {
                    case "gestor1":
                        gest1++;
                        acumulador++;
                        break;
                    case "gestor2":
                        gest2++;
                        acumulador++;
                        break;
                    case "gestor3":
                        gest3++;
                        acumulador++;
                        break;
                    case "gestor4":
                        gest4++;
                        acumulador++;
                        break;
                    case "gestor5":
                        gest5++;
                        acumulador++;
                        break;
                    }         
                }
                //REalizamos la muestra de los valores de acumulación
                if (acumulador !== 0) {
                    if (gest1 !== 0) {
                        lista += "El Gestor1 tiene " + gest1 + " clientes \n";
                    }
                    if (gest2 !== 0) {
                        lista += "El Gestor2 tiene " + gest2 + " clientes \n";
                    }
                    if (gest3 !== 0) {
                        lista += "El Gestor3 tiene " + gest3 + " clientes \n";
                    }
                    if (gest4!== 0) {
                        lista += "El Gestor4 tiene " + gest4 + " clientes \n";
                    }
                    if (gest5 !== 0) {
                        lista += "El Gestor5 tiene " + gest5 + " clientes \n";
                    }
                    sede = (gest1 + gest2 + gest3 + gest4 + gest5);
                    lista += "\nEsta SEDE tiene " + sede + " clientes";
                    //Muestra de resultados
                    alert(lista);
                } else {
                    alert("No hay clientes");
                }
        break;
        case 2:
            //Mostra valor de contador
            alert("El número de clientes con saldo positivo es: " + contP);
        break;
        case 3:
            //Mostra valor de contador
            alert("El número de clientes con saldo negativo es: " + contN);
        break;
        case 4:
            //Creacion de variable
            //Asignamos a la variable MAYOR un valor para la comparación
            var suma;
            var mayor = aImporte[0]+ aImporte2[0];
            //Recorremos los clientes
            for(var j = 0; j < aClientes.length; j++){
                //Sumamos los IMPORTES
                suma = aImporte[j] + aImporte2[j];
                //Solo recogemos valores positivos y mayores que cero
                //Math.sign() - retorna el signo de un número, indicando si el número es positivo, negativo o cero.
                if(Math.sign(suma) === 1){
                    //Comparamos los valores y los vamos sustituyendo si cumple la función
                    if(suma > mayor){
                        mayor = suma;
                    }
                } 
            }
            //Recorremos clientes y igualamos Importe TOTAL con los importes por POSICION
            for(var k = 0; k < aClientes.length; k++){
                if((aImporte[k] + aImporte2[k]) === mayor){
                    //Muestra de los valores
                    alert("El Cliente con DNI: " + aDni[k] + ", Nombre: " + aNom[k] + ", Apellidos: " + aApe1[k] + " " + aApe2[k] + ", Con Importe: " + mayor + "\nMAYOR SALDO DE BANCO");
                }
            }
        break;
        case 5:
            lista = "";
            lista2 = "";
             //Recorremos los clientes
            for(var j = 0; j < aDni.length; j++){
                var fechaCuenta = new Date (aFecha[j]);
                //Creacion de variable con la fecha del instante
                var fechaHoy = new Date();
                //Creamos la variable de la resta pasando las fechas a Ms con getTime()
                var diferencia = ((fechaHoy.getTime() - fechaCuenta.getTime())/(1000 * 365 * 60 * 60 * 24));//Devuelve AÑOS
                //Muestras de la diferencias
                //alert("Dias que quedan hasta esa fecha desde hoy: " + diferencia);
                if(diferencia > 2){
                   lista += "El Cliente con DNI: " + aDni[j] + ", Recibira una llamada.\n";
                }
            } 
            
            alert(lista);
        break;

    }
}