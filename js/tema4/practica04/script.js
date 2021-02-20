/* 
@author: Nerea Álvarez Justel
*/
/* 
El script tiene que tener la capacidad de almacenar información sobre los vehículos (coches y furgonetas)
que vende un concesionario multimarca, si el vehículo está vendido/no vendido/reservado y el nombre,
apellidos y DNI de la persona que lo compra en caso de que esté vendido o reservado. Si no está vendido,
no figurará dato alguno de comprador.
Crea un script que contenga un menú que permita utilizar las siguientes funciones
*/
//OBJETOS
function Concesionario(cod_oficina_in, ciudad_in, responsable_in){
    this.codigoOficina = cod_oficina_in;
    this.ciudad = ciudad_in;
    this.responsable = responsable_in;
}

function Propietario(dni_in, nombre_in, apellidos_in){
    this.dni = dni_in;
    this.nombre = nombre_in;
    this.apellidos = apellidos_in;
}

function Vehiculo(marca_in, modelo_in, anyo_in, concesionario_in, tipo_in, estado_in, propietario_in){
    this.marca = marca_in;
    this.modelo = modelo_in;
    this.anyo = anyo_in;
    this.concesionario = concesionario_in;
    this.tipo = tipo_in;
    this.estado = estado_in;
    this.propietario = propietario_in;
}
//Información almacenada
var concesionarioAtocha = new Concesionario ("281", "Madrid", "Pedro Navarro");

var persona1 = new Propietario ("45688597G", "Juan", "Perez Alonso");
var persona2 = new Propietario ("46325597C", "María", "Álvarez Justel");
var persona3 = new Propietario ("45985477R", "Paco", "García Merino");
var persona4 = new Propietario ("45321454W", "Ana", "Nuevo Pascual");

var coche1 = new Vehiculo ("Citroen", "C4", "2010", concesionarioAtocha, "coche", "Libre");
var coche2 = new Vehiculo ("Renault", "cangoo", "2015", concesionarioAtocha, "Furgoneta", "Libre");
var coche3 = new Vehiculo ("Nissan", "Altima", "2016", concesionarioAtocha, "Coche", "Comprado", persona2);
var coche4 = new Vehiculo ("Kia", "Forte", "2009", concesionarioAtocha, "Coche", "Reservado", persona1);
var coche5 = new Vehiculo ("Dacia", "Dokker", "2011", concesionarioAtocha, "Furgoneta", "Comprado", persona4);
var coche6 = new Vehiculo ("Ford", "focus", "2010", concesionarioAtocha, "Coche", "Reservado", persona3);

//Creación de array e insercion de datos
//.push() - añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
var aCoches = new Array ();
    aCoches.push(coche1);
    aCoches.push(coche2);
    aCoches.push(coche3);
    aCoches.push(coche4);
    aCoches.push(coche5);
    aCoches.push(coche6);

/*Función 1: Número de vehículos que se tienen en el concesionario (incluyendo coches y furgonetas)*/
//Creamos una función 
function numVehiculos(){
    //Variable de contador
    var contAtocha = 0;
    //Recorreremos el array de aCoches en el resultado concesionario    
    for(var i = 0; i < aCoches.length; i++){
        //Sumamos al contador
        contAtocha++;
    }
    //Muestra
    return ("En el concesionario Atocha tienes: " + contAtocha + " vehículos");
}    
  
/*Función 2: Número de vehículos que se tienen en el concesionario (incluyendo coches y furgoneta) y el DNI de la persona que lo ha comprado o reservado.*/
//Creamos la función
function estadoVehiculos(){
    //Creación de variables
    var contador = 0;
    var lista = "";
    //Recorreremos el array de aCoches    
    for(var i = 0; i < aCoches.length; i++){
        contador++;
        if(aCoches[i].estado === "Comprado" || aCoches[i].estado === "Reservado"){  
            lista += aCoches[i].propietario.dni + "\n";
        }
    }
    //Muestra
    return ("En el concesionario Atocha tienes: " + contador + " vehículos.\n\
Los DNIs de los propietarios de los vehículos son: \n" + lista);
}


/*Función 3: Número de coches de una marca en concreto. Se le pedirá al usuario la marca que quiere conocer la información y 
se mostrará por pantalla el número de vehículos que el concesionario tiene de esa marca sin vender ni reserva, es decir disponibles.*/
//Creamos la función
function marcaVehiculos(){
    //Variable de contador
    var contVehiculo = 0;
    //Peticion de marca
    //Pasamos a String
    var marca = prompt("Introduzca una marca de coche: ");
    marca = marca.toString().toLowerCase();
     //Elegimos el primer caracter y lo pasamos a mayusculas
                        //charAt() - de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
                                 //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
                                                //Indicamos muestra de la palabra desde la posición 1
                                                        //slice() - devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
    marca = marca.charAt(0).toUpperCase()+ marca.slice(1);
     //Recorreremos el array de aCoches   
    for(var i = 0; i < aCoches.length; i++){
        //condicones de marca y estado
        if(aCoches[i].marca === marca && aCoches[i].estado === "Libre"){
            //Correcto se acumula resultado
            contVehiculo++;
        }
    }
    //Muestra
    return "En el concesionario de Atocha tienes: " + contVehiculo + " vehículos de la marca: " + marca + " disponibles.";
}


//Realizaremos el bucle mientras la opción sea distinta de cero
while(opcion !== 0){
    //Petición de opcion en MENU
    var opcion = parseInt(prompt("Opción 0: Salida del SCRIPT.\n\
    Opción 1: Número de vehículos total. \n\
    Opción 2: Número de vehículos comprado o reservado - DNI.\n\
    Opción 3: Número de coches de una marca.\n\
    Introduzca número de opción:"));
    //REcorremos el menu hasta encontrar case elegido
    switch(opcion){
        case 1: 
            alert(numVehiculos());
        break;
        case 2:
            alert(estadoVehiculos());
        break;
        case 3:
            alert(marcaVehiculos());
        break;

    }
}