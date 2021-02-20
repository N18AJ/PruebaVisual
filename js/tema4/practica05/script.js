/* 
@author: Nerea Álvarez Justel
*/
/* 
El script tiene que tener la capacidad de almacenar información sobre los alumnos de una escuela de arte
que cursan alguna de las siguientes actividades: oleo, grabado, acrílico o modelaje. Las clases de cada
actividad son dos días a la semana por la mañana o por la tarde.
Se debe guardar de los alumnos la información necesaria para poder mostrar lo que se pide en el menú:
*/
//OBJETO
function Alumno(nombre_in, telefono_in, email_in, tipo_in, dia_in, horario_in){
    this.nombre = nombre_in;
    this.telefono = telefono_in;
    this.email = email_in;
    this.tipo = tipo_in;
    this.dia = dia_in;
    this.horario = horario_in;
}
//Información almacenada
var alumno1 = new Alumno ("Juan Perez", "632587412", "juan95@gmail.com", "Oleo", "Lunes", "Mañana");
var alumno2 = new Alumno ("María Álvarez","632587412", "maria00@gmail.com", "Grabado", "Martes", "Mañana");
var alumno3 = new Alumno ("Paco García", "632587412", "paco63@gmail.com", "Oleo", "Lunes", "Tarde");
var alumno4 = new Alumno ("Ana Nuevo", "632587412", "ana11@gmail.com", "Acrilico", "Jueves", "Mañana");
var alumno5 = new Alumno ("Pepa Lopez", "632587412", "pepa36@gmail.com", "Modelaje", "Miercoles", "Tarde");
//Creación de array e insercion de datos
//.push() - añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
var aAlumno = new Array ();
    aAlumno.push(alumno1);
    aAlumno.push(alumno2);
    aAlumno.push(alumno3);
    aAlumno.push(alumno4);
    aAlumno.push(alumno5);


/*Opción 1: Datos de contacto teléfonico e e-mail de todos los alumnos.*/
//Creamos una función 
function datosAlumnos(){
    //Variable 
    var lista = "";
    //Recorreremos el array de aCoches en el resultado concesionario    
    for(var i = 0; i < aAlumno.length; i++){
        lista += "El alumno" + i + " con Nombre: " + aAlumno[i].nombre + " Telefono: " + aAlumno[i].telefono + " y Email: " + aAlumno[i].email + "\n";
    }
    //Muestra
    return ("Alumnos" + lista);
}

/*Opción 2: Número de alumnos que están apuntados a clase de óleo.*/
//Creamos una función 
function tipoClase(){
    //Variable 
    var contador = 0;
    //Recorreremos el array de aCoches en el resultado concesionario    
    for(var i = 0; i < aAlumno.length; i++){
       if(aAlumno[i].tipo === "Oleo"){
           contador++;
       }
    }
    //Muestra
    return ("Hoy " + contador + " alumnos en OLEO");
}

/*Opción 3: Número de alumnos que están apuntados a clase de óleo y que van a clase un día determinado de la semana. 
Ese día, se le pedirá al usuario y el script deberá mostrar la información.*/
//Creamos una función
function diaOleo(){
    //Variable de contador
    var contador = 0;
    //Peticion de marca
    //Pasamos a String
    var nomdia = prompt("Introduzca un día: ");
    nomdia = nomdia.toString().toLowerCase();
     //Elegimos el primer caracter y lo pasamos a mayusculas
                        //charAt() - de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
                                 //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
                                                //Indicamos muestra de la palabra desde la posición 1
                                                        //slice() - devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
    nomdia = nomdia.charAt(0).toUpperCase()+ nomdia.slice(1);
     //Recorreremos el array de aCoches   
    for(var i = 0; i < aAlumno.length; i++){
        //condicones de marca y estado
        if(aAlumno[i].dia === nomdia && aAlumno[i].tipo === "Oleo"){
            //Correcto se acumula resultado
            contador++;
        }
    }
    //Muestra
    return "El dia " + nomdia + " hay " + contador + " con clases de OLEO";
}

/*Opción 4: Datos de los alumnos que están matriculados en alguna de las clases que imparte la escuela 
(oleo,grabado, acrilíco y modelaje) y el día al que van a clase.*/
//Creamos una función
function actividadAlumno(){
    //Variable de contador
    var lista = "";
    //Peticion de marca
    //Pasamos a String
    var nomactividad = prompt("Introduzca una actividad: ");
    nomactividad = nomactividad.toString().toLowerCase();
     //Elegimos el primer caracter y lo pasamos a mayusculas
                        //charAt() - de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
                                 //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
                                                //Indicamos muestra de la palabra desde la posición 1
                                                        //slice() - devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
    nomactividad = nomactividad.charAt(0).toUpperCase()+ nomactividad.slice(1);
     //Recorreremos el array de aCoches   
    for(var i = 0; i < aAlumno.length; i++){
        //condicones de marca y estado
        if(aAlumno[i].tipo === nomactividad){
            lista += "los alumno" + i + " con Nombre: " + aAlumno[i].nombre + " Telefono: " + aAlumno[i].telefono + " y Email: " + aAlumno[i].email + "\n";
        }
    }
    //Muestra
    return "A la actividad " + nomactividad + " van" + lista;
}

//Realizaremos el bucle mientras la opción sea distinta de cero
while(opcion !== 0){ 
    //Petición de opcion en MENU
    var opcion = parseInt(prompt("Opción 0: Salida del SCRIPT.\n\
    Opción 1: Datos de contacto teléfonico e e-mail de todos los alumnos. \n\
    Opción 2: Número de alumnos que están apuntados a clase de óleo.\n\
    Opción 3: Número de alumnos en clases de óleo en un dia determinado.\n\
    Opción 4: Alumnos matriculados.\n\
    Introduzca número de opción:"));
    //REcorremos el menu hasta encontrar case elegido
    switch(opcion){
        case 1: 
            alert(datosAlumnos());
        break;
        case 2:
            alert(tipoClase());
        break;
        case 3:
            alert(diaOleo());
        break;
        case 4:
            alert(actividadAlumno());
        break;

    }
}