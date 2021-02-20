/* 
@author: Nerea Álvarez Justel
*/
/* 
1. Crea un script que haga una estadística del tipo de alimentos que vende con más frecuencia un
supermercado de barrio. Pídele al usuario toda la información que necesites.
*/
function Alimentos(tipo_in){
    this.tipo = tipo_in;
}

var aliemnto1 = new Alimentos ("Carne");
var aliemnto2 = new Alimentos ("Pescado");
var aliemnto3 = new Alimentos ("Lacteos");
var aliemnto4 = new Alimentos ("Fruta");
var aliemnto5 = new Alimentos ("Verdura");

var aAliemnto = new Array ();
    aAliemnto.push(aliemnto1);
    aAliemnto.push(aliemnto2);
    aAliemnto.push(aliemnto3);
    aAliemnto.push(aliemnto4);
    aAliemnto.push(aliemnto5);

function datosAlimentos(){
    var lista = "";
    var tipo1 = 0;
    var tipo2 = 0;
    var tipo3 = 0;
    var tipo4 = 0;
    var tipo5 = 0;
    var acumulador = 0;

    //Recorremos todo los clientes y acumulamos el valor del tipoor de cada cliente
    for(var i = 0; i < 10; i++){
        //Petición
        var tipo = parseInt(prompt("Indica el número del alimento:\n\
    1. Carne\n\
    2. Pescado\n\
    3. Lacteos\n\
    4. Fruta\n\
    5. Verdura"));
       switch (tipo) {
        case 1:
            tipo1++;
            acumulador++;
            break;
        case 2:
            tipo2++;
            acumulador++;
            break;
        case 3:
            tipo3++;
            acumulador++;
            break;
        case 4:
            tipo4++;
            acumulador++;
            break;
        case 5:
            tipo5++;
            acumulador++;
            break;
        }         
    }
    //Realizamos la muestra de los valores de acumulación
    if (acumulador !== 0) {
        if (tipo1 !== 0) {
            lista += "Consume CARNE " + tipo1 + "  de 10 encuestados \n";
        }
        if (tipo2 !== 0) {
            lista += "Consume PESCADO " + tipo2 + " de 10 encuestados \n";
        }
        if (tipo3 !== 0) {
            lista += "Consume LACTEOR " + tipo3 + " de 10 encuestados \n";
        }
        if (tipo4!== 0) {
            lista += "Consume FRUTA " + tipo4 + " de 10 encuestados \n";
        }
        if (tipo5 !== 0) {
            lista += "Consume VERDURA " + tipo5 + " de 10 encuestados\n";
        }
        //Muestra de resultados
        return(lista);
    } else {
        alert("No hay respuestas");
    }
}

/* 
2. Crea un script que contabilice el número de personas que entre en un instituto a lo largo del día teniendo
en cuenta los parámetros siguientes: entrada a 1º hora, entrada después del recreo de los estudiantes
de la ESO y entrada de los estudiantes de bachillerato y Ciclos formativos. Toda la información que
necesites, pídesela al usuario.
*/
function Alumno(curso_in, recreo_in){
    this.curso = curso_in;
    this.recreo = recreo_in;
}

var alumno1 = new Alumno ("ESO", "1");
var alumno2 = new Alumno ("Bach o FP","2");
var alumno3 = new Alumno ("ESO", "1");
var alumno4 = new Alumno ("ESO", "1");
var alumno5 = new Alumno ("Bach o FP","2");

var aAlumno = new Array ();
    aAlumno.push(alumno1);
    aAlumno.push(alumno2);
    aAlumno.push(alumno3);
    aAlumno.push(alumno4);
    aAlumno.push(alumno5);

function datosRecreo(){
    //Variable 
    var cont1 = 0;
    var cont2 = 0;
    //Recorreremos el array de aCoches en el resultado concesionario    
    for(var i = 0; i < aAlumno.length; i++){
        if(aAlumno[i].recreo === "1"){
            cont1++;
        }else{
            cont2++;
        }
    }
    //Muestra
    return ("Total alumnos Alumnos" + (cont1 + cont2) +
            "\n Alumnos de ESO, salida primer recreo " + cont1 +
            "\n Alumnos de Bach o FP, salida segundo recreo " + cont2);
}


/* 
3. Crea un script que contabilice el número de personas que entran en una tienda de alimentación. Pídele
al usuario todos los datos que necesites y ten en cuenta que el horario de la tienda de alimentación es
ininterrumpido.
*/
function Cliente(tipo_in){
    this.tipo = tipo_in;
}

var cliente1 = new Cliente ("SI");
var cliente2 = new Cliente ("NO");

var aCliente = new Array ();
    aCliente.push(cliente1);
    aCliente.push(cliente2);

function datosTienda(){
    var lista = "";
    var tipo1 = 0;
    var tipo2 = 0;
    var acumulador = 0;

    //Recorremos todo los clientes y acumulamos el valor del tipoor de cada cliente
    for(var i = 0; i < 10; i++){
        //Petición
        var tipo = prompt("¿Hoy has entrado en la tienda? SI O NO");
        tipo = tipo.toString().toLowerCase();
                //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
         tipo = tipo.toUpperCase();
       switch (tipo) {
        case "SI":
            tipo1++;
            acumulador++;
            break;
        case "NO":
            tipo2++;
            acumulador++;
            break;;
        }         
    }
    //Realizamos la muestra de los valores de acumulación
    if (acumulador !== 0) {
        if (tipo1 !== 0) {
            lista += "Han entrado " + tipo1 + "  de 10 encuestados \n";
        }
        if (tipo2 !== 0) {
            lista += "No han entrado " + tipo2 + " de 10 encuestados \n";
        }
        //Muestra de resultados
        return(lista);
    } else {
        alert("No hay respuestas");
    }
}


/* 
4. Crea un script que muestre la colocación de un teclado numérico correctamente en la pantalla. De forma
que el usuario introduzca los valores que tiene que mostrar y que se visualice en la apantalla la colocación
exacta de estos elementos.
*/
function Teclado(num_in){
    this.num = num_in;
}
 
var tecla = new Array();
tecla[0] = new Teclado("0");
tecla[1] = new Teclado("1");
tecla[2] = new Teclado("2");
tecla[3] = new Teclado("3");
tecla[4] = new Teclado("4");
tecla[5] = new Teclado("5");
tecla[6] = new Teclado("6");
tecla[7] = new Teclado("7");
tecla[8] = new Teclado("8");
tecla[9] = new Teclado("9");
 
function datosTeclado(){
    var lista1 = "";
    var lista2 = "";
    var lista3 = "";
    var lista4 = "";
    //Recorremos el array con los numeros
    for(var i = 0; i < tecla.length; i++){
        //Por cada if acotaremos los numeros de cada linea
        if(i === 9 || i === 8 || i === 7){
            lista1+= tecla[i].num + "";
        }
        if(i === 6 || i === 5 || i === 4){
            lista2+= tecla[i].num + "";
        }
        if(i === 3 || i === 2 || i === 1){
            lista3+= tecla[i].num + "";
        }
        if(i === 0){
            lista4+= tecla[i].num + "";
        }
    }
    //Muestra de resultados
        return(lista1 + "\n" + lista2 + "\n" + lista3 + "\n" + lista4);
} 


/* 
5. Crea un script que muestre la información de un torneo de padel femenino que se juega en la ciudad,
teniendo en cuenta que hay 8 parejas que se han apuntado y cada pareja está formada por dos mujeres.
Pide la información al usuario que consideres necesaria. Todos los partidos se tienen que jugar entre el
viernes, sábado y domingo de un fin de semana aleatorio de este año. Cada partido dura 1 hora y media
y es recomendable que la misma pareja no juegue dos partidos el mismo día teniendo en cuenta las
restricciones de horarios que vivimos. El script debe de mostrar por pantalla el cuadrante de partidos y
finalmente permita introducir los resultados de los mismos para poder saber quienes son los finalistas y
los semifinalistas.
*/
function Partido(pareja1_in, pareja2_in, dia_in, nivel_in, punto_in){
    this.pareja1_in = pareja1_in;
    this.pareja2_in = pareja2_in;
    this.dia_in = dia_in;
    this.nivel_in = nivel_in;
    this.punto_in = punto_in;
}
//Cuartos
var partido1 = new Partido ("Ana y Bea", "Amor y Pepa", "Viernes", "Cuartos", "2 - 3");
var partido2 = new Partido ("Alba y Juana", "Maria y Nerea", "Viernes", "Cuartos", "1 - 5");
var partido3 = new Partido ("Perla y Fina", "Reina y Luna", "Viernes", "Cuartos", "2 - 1");
var partido4 = new Partido ("Carmen y Zaira", "Vero y Kris", "Viernes", "Cuartos", "0 - 3");
//Semifinales
var partido5 = new Partido ("Amor y Pepa", "Maria y Nerea", "Sabado", "Semifinales", "4 - 5");
var partido6 = new Partido ("Perla y Fina", "Vero y Kris", "Sabado", "Semifinales", "2 - 1");
//Final
var partido7 = new Partido ("Maria y Nerea", "Perla y Fina", "Domingo", "Final", "3 - 2");
//Creación de array e insercion de datos
//.push() - añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
var aPartido = new Array ();
    aPartido.push(partido1);
    aPartido.push(partido2);
    aPartido.push(partido3);
    aPartido.push(partido4);
    aPartido.push(partido5);
    aPartido.push(partido6);
    aPartido.push(partido7);

function datosPadel(){
    //Realizaremos el bucle mientras la opción sea distinta de cero
     while(opcion !== 0){
         //Petición de opcion en MENU
         var opcion = parseInt(prompt("Opción 0: Salida del SCRIPT.\n\
         Opción 1: Cuartos. \n\
         Opción 2: Semifinal.\n\
         Opción 3: Final.\n\
         Introduzca número de opción:"));
         //REcorremos el menu hasta encontrar case elegido
         switch(opcion){
             case 1: 
                 //Variable 
                 var contador = 0;
                 var lista1 = ""; 
                 for(var i = 0; i < aPartido.length; i++){
                     if(aPartido[i].nivel === "Cuartos"){
                         contador++;
                         lista1 += "Pareja: " + aPartido[i].pareja1 + " Pareja: " + aPartido[i].pareja2 + " Puntuacion: " + aPartido[i].punto + "\n";
                     }
                 }
                 //Muestra
                 return("Hay " + contador + " parejas en cuartos\n\
             Partido jugado el VIERNES" + "\n" + lista1 );
             break;
             case 2:
                 //Variable 
                 var contador = 0;
                 var lista2 = ""; 
                 for(var i = 0; i < aPartido.length; i++){
                     if(aPartido[i].nivel === "Semifinales"){
                         contador++;
                         lista2 += "Pareja: " + aPartido[i].pareja1 + " Pareja: " + aPartido[i].pareja2 + " Puntuacion: " + aPartido[i].punto + "\n";
                     }
                 }
                 //Muestra
                 return ("Hay " + contador + " parejas en cuartos\n\
             Partido jugado el SABADO" + "\n" + lista2 );
             break;
             case 3:
                 //Variable 
                 var contador = 0;
                 var lista3 = ""; 
                 for(var i = 0; i < aPartido.length; i++){
                     if(aPartido[i].nivel === "Final"){
                         contador++;
                         lista2 += "Pareja: " + aPartido[i].pareja1 + " Pareja: " + aPartido[i].pareja2 + " Puntuacion: " + aPartido[i].punto + "\n";
                     }
                 }
                 //Muestra
                return("Hay " + contador + " parejas en cuartos\n\
             Partido jugado el DOMINGO" + "\n" + lista3 );
             break;

         }
     }

}
//Realizaremos el bucle mientras la opción sea distinta de cero
while(opcion !== 0){ 
    //Petición de opcion en MENU
    var opcion = parseInt(prompt("Opción 0: Salida del SCRIPT.\n\
    Opción 1: Encuesta Alimentos. \n\
    Opción 2: Contabilidad Alumnos.\n\
    Opción 3: Contabilidad Tienda.\n\
    Opción 4: Teclado numérico.\n\
    Opción 5: Torneo Padel.\n\
    Introduzca número de opción:"));
    //Recorremos el menu hasta encontrar case elegido
    switch(opcion){
        case 1: 
            alert(datosAlimentos());
        break;
        case 2:
           alert(datosRecreo()); 
        break;
        case 3:
            alert(datosTienda());
        break;
        case 4:
            alert(datosTeclado());
        break;
        case 5:
            alert(datosPadel());
        break;

    }
}
