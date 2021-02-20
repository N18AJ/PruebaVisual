/*Ejercicio 1
 Realiza un script que escriba en el documento la fecha y hora actual. La salida deberá tener el siguiente
formato:
Hoy es “dia de la semana” “número” de “mes” de “año” y son las “hora:minutos:segundos”
*/
    //Creación de variable
    var fechaHoy = new Date();
    var fechaMes = new Date();
    var dia = "";
    var mes = "";
		//Comparara los valores para mostrar el case concreto
        switch (fechaHoy.getDay()){
        case 1:
                dia = "Lunes";
                    break;
        case 2:
                dia = "Martes";
                    break;
        case 3:
                dia = "Miercoles";
                    break;
        case 4:
                dia = "Jueves";
                    break;
        case 5:
                dia = "Viernes";
                    break;
        case 6:
                dia = "Sabado";
                    break;
        case 0:
                dia = "Domingo";
                    break;
        default:
        }
        //Comparara los valores para mostrar el case concreto
        switch (fechaMes.getMonth()){
        case 0:
                mes = "Enero";
                    break;
        case 1:
                mes = "Febrero";
                    break;
        case 2:
                mes = "Marzo";
                    break;
        case 3:
                mes = "Abril";
                    break;
        case 4:
                mes = "Mayo";
                    break;
        case 5:
                mes = "Junio";
                    break;
        case 6:
                mes = "Julio";
                    break;
        case 7:
                mes = "Agosto";
                    break;
        case 8:
                mes = "Septiembre";
                    break;
        case 9:
                mes = "Octubre";
                    break;
        case 10:
                mes = "Noviembre";
                    break;
        case 11:
                mes = "Diciembre";
                    break;        
        default:
        }

    //Muestra de la fecha
    alert("Hoy es " + dia + " " + fechaHoy.getDate() + " de " + mes + " de " + fechaHoy.getFullYear() + " y son las " + fechaHoy.toLocaleTimeString());


/*Ejercicio 2
Realiza un script que cree un objeto con los siguientes datos: 3 de octubre de 2020, 16:05:00 y muestra
la información por pantalla igual que en el ejercicio1.
*/
    //Creación de variable
    var fechaDato = new Date (2020, 9, 3, 16, 05, 00);
    var mes = "";
        //Comparara los valores para mostrar el case concreto
        switch (fechaDato.getMonth()){
        case 0:
                mes = "Enero";
                    break;
        case 1:
                mes = "Febrero";
                    break;
        case 2:
                mes = "Marzo";
                    break;
        case 3:
                mes = "Abril";
                    break;
        case 4:
                mes = "Mayo";
                    break;
        case 5:
                mes = "Junio";
                    break;
        case 6:
                mes = "Julio";
                    break;
        case 7:
                mes = "Agosto";
                    break;
        case 8:
                mes = "Septiembre";
                    break;
        case 9:
                mes = "Octubre";
                    break;
        case 10:
                mes = "Noviembre";
                    break;
        case 11:
                mes = "Diciembre";
                    break;        
        default:
        }
        //Muestra de la fecha
        alert("Hoy es " + fechaDato.getDate() + " de " + mes + " de " + fechaDato.getFullYear() + " y son las " + fechaDato.toLocaleTimeString());
         



/*Ejercicio 3
Convierte a formato local, las fechas/horas de los ejercicios 1 y 2.
*/
    //Muestras de los ejercicios anteriores con formato
    alert (fechaHoy.toLocaleString());
    alert (fechaDato.toLocaleString());


/*Ejercicio 4
Realiza un script que pida un número al usuario e indique el tiempo que se tardó en introducir los datos
desde que se le pide hasta que lo introduce. Muestra la información en segundos, algo parecido a esto:
Has tardado en introducir el número 45 segundos.
*/
    //Creamos las variables
    var tiempo = new Date();
        //Devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970
        tiempo.getTime();
    //Peticion del numero
    var num = parseInt(prompt("Introduzca un numero"));
    //Creamos la segunda varible de tiempo para la resta
    var tiempo2 = new Date();
        tiempo2.getTime();
    //Creamos la variable FINAL y RESTAMOS al cierre la abertura de la peticiñon
    var tiempoFinal = new Date(tiempo2.getTime() - tiempo.getTime());
    //Muestra del tiempo transcurrido
    alert("Has tardado en introducir el numero " + tiempoFinal.getSeconds() + " segundos");
	
	
/*Ejercicio 5
Realiza un script que pida un mes y año e imprima su calendario. Olvídate de “calendarios bonitos”,
muestra la información:
OCTUBRE – 2020: 1 (jueves), 2 (viernes), ….. , 31 (sábado).
*/
    //Peticiones de tatos
    var anyo = parseInt(prompt("Introduzca un anyo"));
    var mes = parseInt(prompt("Introduzca un mes [0-11]"));
    //Creacion de variables para mes y dia
    var mesDato;
    var diaDato;
    var nombreMes = "";
    var nombreDia = "";
    //Igualamos la variable del MES a DATE para la información concreta
    mesDato = new Date(anyo, mes, 0).getDate();
    //Comparara los valores para mostrar el case concreto
    switch (mes) {
        case 0:
                nombreMes = 'Enero';
                    break;
        case 1:
                nombreMes = 'Febrero';
                    break;
        case 2:
                nombreMes = 'Marzo';
                    break;
        case 3:
                nombreMes = 'Abril';
                    break;
        case 4:
                nombreMes = 'Mayo';
                    break;
        case 5:
                nombreMes = 'Junio';
                    break;
        case 6:
                nombreMes = 'Julio';
                    break;
        case 7:
                nombreMes = 'Agosto';
                    break;
        case 8:
                nombreMes = 'Septiembre';
                    break;
        case 9:
                nombreMes = 'Octubre';
                    break;
        case 10:
                nombreMes = 'Diciembre';
                    break;
        case 11:
                nombreMes = 'Noviembre';
                    break;
    }
    //Mostrara el mes (El nombre) y el año introducido
    alert(nombreMes + " - " + anyo);
    //Bucle que se recorre hasta que se cumpla la condicion de la variable (31 dias)
    for (var i = 1; i <= mesDato; i++) {
        //Igualamos la variable del dia a DATE para que recoga la información concreta
        diaDato = new Date(anyo, mes, i).getDay();
        //Comparara los valores para mostrar el case concreto
        switch (diaDato) {
            case 1:
                    nombreDia = 'Lunes';
                        break;
            case 2:
                    nombreDia = 'Martes';
                        break;
            case 3:
                    nombreDia = 'Miercoles';
                        break;
            case 4:
                    nombreDia = 'Jueves';
                        break;
            case 5:
                    nombreDia = 'Viernes';
                        break;
            case 6:
                    nombreDia = 'Sabado';
                        break
            case 0:
                    nombreDia = 'Domingo';
                        break;
            default:
        }
        //Muestra del mes indicando el dia y el número del mes correspondiente
        alert(nombreDia + " = " + i);
    }
	
	
/*Ejercicio 6
Pídele al usuario una fecha concreta que sea lejana y muéstrale por pantalla cuanto tiempo queda para
ese día.
*/
    //Peticion de fecha - Por partes para mejor utilizacion de datos
    var anyo = parseInt(prompt("Introduzca el AÑO de una fecha lejana"));
    var mes = parseInt(prompt("Introduzca el MES de una fecha lejana"));
    var dia = parseInt(prompt("Introduzca el DÍA de una fecha lejana"));
    //Creacion de variable con la fecha introducida
    var fechaLejana = new Date(anyo, mes - 1, dia);
    //Creacion de variable con la fecha del instante
    var fechaHoy = new Date();
    //Creamos la variable de la resta pasando las fechas a Ms con getTime()
    var diferencia = (fechaLejana.getTime() - fechaHoy.getTime());
    //Variable con el valor de la resta
    var fechaFinal = new Date(diferencia);
    //Muestras de la diferencias y pasamos los Ms a DIAS
                                                                    //Ms en un dia
    alert("Dias que quedan hasta esa fecha desde hoy: " + fechaFinal / 86400000);
	
	
/*Ejercicio 7
Crea un script que le pida al usuario una fecha concreta de nacimiento (dd/mm/aa). Comprueba que ha
introducido valores correctos y devuelve la fecha 500 días posterior.
*/
    //Peticion de fecha - Por partes para mejor utilizacion de datos
    var anyo = parseInt(prompt("Introduzca su AÑO de nacimiento"));
    var mes = parseInt(prompt("Introduzca su MES de nacimiento"));
    var dia = parseInt(prompt("Introduzca su DIA de nacimiento"));
    //Creacion de variable con la fecha introducida
    var fecha = new Date(anyo, mes - 1, dia);
    //Fecha en dias para la suma
    fecha.setDate(fecha.getDate() + 500);
    //Muestra de las fecha final
    alert("500 dias despues de su fecha de nacimiento: " + fecha.toLocaleDateString());
	
	
/*Ejercicio 8
Crea un script que muestre la hora en España y la diferencia con UTC
*/
    //Creacion de variable 
    var fechaEs = new Date();
    //Muestra de la fecha en formatos
    alert("Fecha actual en España: " + fechaEs +
          "\n\Diferencia con UTC: " + fechaEs.toUTCString());


/*Ejercicio 9
Crea un script que pida por pantalla la fecha de nacimiento (dd/mm/aa). Comprueba que ha
introducido valores correctos y muestra los años, meses y días que han pasado desde su nacimiento.
*/
    //Peticion de fecha - Por partes para mejor utilizacion de datos
    var anyo = parseInt(prompt("Introduzca su AÑO de nacimiento"));
    var mes = parseInt(prompt("Introduzca su MES de nacimiento"));
    var dia = parseInt(prompt("Introduzca su DIA de nacimiento"));
    var tiempo;
    //Creacion de variable con la fecha introducida
    var fecha = new Date(anyo, mes - 1, dia);
    //Creacion de fecha dos para el tiempo pasado
    fecha2 = new Date();
    //sacaremos la diferencia entre la fecha actual y la fecha introducida 
    //Ms
    tiempo = fecha2.getTime() - fecha.getTime();
    //Muestra de los AÑOS 
    //De la diferencia iremos sacando AÑOS - MESES y DIAS transcurridos
                                //Math.floor() - Devuelve el máximo entero menor o igual a un número.
    alert("AÑOS transcurridos: " + Math.floor(tiempo / 1000 / 365 / 24 / 60 / 60));//Ms - AÑO
    tiempo = (tiempo / 1000 / 365 / 24 / 60 / 60) - (Math.floor(tiempo / 1000 / 365 / 24 / 60 / 60));
    //Muestra de los MESES
    alert("MESES transcurridos: " + Math.floor(tiempo * 12)); //12 meses
    tiempo = (tiempo * 12) - Math.floor(tiempo * 12);
    //Muestra de los DIAS 
    alert("DIAS trascurridos: " + Math.floor(tiempo * 30)); //30dias	
	
	
/*Ejercicio 10
Crea un script que pida la fecha de cumpleaños de los niños de una clase de Primaria de un colegio que
tiene 20 alumnos. El programa tiene que agrupar por trimestres los cumpleaños de los niños, es decir:
los niños que nazcan de oct-nov-dic (1º trimestre), ene-feb-mar(2º trimestre), abril-may-junio (3º
trimestre) y julio-agost-sept (4º trimestre). Debe de mostrar por pantalla el nombre y el primer apellido
de todos los niños agrupados por trimestres y si un trimestre tiene más de 5 niños que cumplen años,
mostrar una alerta por pantalla informando.
*/
    //Creacion de variables para el almacenado de los alumnos
    var contadorT1 = 0;
    var contadorT2 = 0;
    var contadorT3 = 0;
    var contadorT4 = 0;
    //Bucle que se recorre hasta que se cumpla la condicion de 20 alumnos
    for (i = 1; i <= 6; i++) {
        //Peticiones de valores con variables
        var nombreAlumno = prompt("Introduzca su nombre");
        var apellido = prompt("Introduzca su apellido");
        var anyo = parseInt(prompt("Anyo de nacimiento"));
        var mes = parseInt(prompt("Mes de nacimiento"));
        //Creacion de variable con formato de FECHA
        var fecha = new Date(anyo, mes - 1);
        //Utizamos If para la condicion de agrupar por meses
            //oct-nov-dic 
        //Si cumple la condicion y entra en el if se acumula alumno
        if ((mes - 1) >= 9 && (mes - 1) <= 11) {
            contadorT1 += 1;
            //mostramos datos del alumno
            alert("Primer Trimestre: " + nombreAlumno + " " + apellido);
            //Si se cumple la condicion de >= 5 en el contador mostramos mensaje
            if (contadorT1 >= 5) {
                alert("Hay 5 o más alumnos nacidos en el Primer Trismestre");
            }
        }
            //ene-feb-mar
        if ((mes - 1) >= 0 && (mes - 1) <= 2) {
            contadorT2 += 1;
            alert("Segundo Trimestre: " + nombreAlumno + " " + apellido);
            if (contadorT2 >= 5) {
                alert("Hay 5 o más alumnos nacidos en el Segundo Trismestre");
            }
        }
            //abril-may-junio
        if ((mes - 1) >= 3 && (mes - 1) <= 5) {
            contadorT3 += 1;
            alert("Tercer Trimestre: " + nombreAlumno + " " + apellido);
            if (contadorT3 >= 5) {
                alert("Hay 5 o más alumnos nacidos en el Tercer Trismestre");
            }
        }
            //julio-agost-sept
        if ((mes - 1) >= 6 && (mes - 1) <= 8) {
            contadorT4 += 1;
            alert("Cuarto Trimestre: " + nombreAlumno + " " + apellido);
            if (contadorT1 >= 5) {
                alert("Hay 5 o más alumnos nacidos en el Cuarto Trismestre");
            }
        }
    }


/*Ejercicio 11
Crea un script que permita saber quién cumple años en un mes den concreto. Debe de reconocer al
menos 10 fechas de cumpleaños (créalas como variables) y el usuario debe introducir el mes del que
quiere saber los cumpleaños y mostrar por pantalla su nombre. Es decir: el usuario introducirá
“febrero” y mostrará por pantalla quién cumple años en febrero de las 10 personas que “conoce”.
*/
    //Creacion de variable 
    var persona = "";
    //Bucle que se recorre hasta que se cumpla la condicion de 10 personas
    for (i = 1; i <= 10; i++) {
        var mes = parseInt(prompt("Introduzca un mes [1-12]"));
        //Da el valor del mes para fecha
        for (j = 1; j <= 12; j++) {
            //Creacion de fecha para el formato
            var fecha = new Date(persona, j - 1);
            //Comparara los valores para mostrar el case concreto
            switch (mes) {
                case 1:
                    persona = 'María';
                    break;
                case 2:
                    persona = 'Izan';
                    break;
                case 3:
                    persona = 'NereaN';
                    break;
                case 4:
                    persona = 'Bea';
                    break;
                case 5:
                    persona = 'NereaA';
                    break;
                case 6:
                    persona = 'Paco';
                    break;
                case 7:
                    persona = 'Juan';
                    break;
                case 8:
                    persona = 'Christian';
                    break;
                case 9:
                    persona = 'Edu';
                    break;
                case 10:
                    persona = 'Lucia';
                    break;
                case 11:
                    persona = 'Fernando';
                    break;
                case 12:
                    persona = 'Alba';
                    break;
            }
        }
        alert(persona + " cumple años en este mes");
    }
