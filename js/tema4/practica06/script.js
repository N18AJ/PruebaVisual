/* 
@author: Nerea Álvarez Justel
*/
function Libro(titulo_in, autor_in, nPag_in, isbn_in, tematica_in){
    this.titulo = titulo_in;
    this.autor = autor_in;
    this.nPag = nPag_in;
    this.isbn = isbn_in;
    this.tematica = tematica_in;
}

var libro1 = new Libro ("Celula", "Perico Perez", 300, 12363, "Biologia");
var libro2 = new Libro ("El pigmento", "Bea Alonso", 250, 36945, "Artes plasticas");
var libro3 = new Libro ("Base de PHP", "Nerea Nuevo", 200, 56385, "Informatica");
var libro4 = new Libro ("La Ley", "Pablo Mario Jerez", 325, 38523, "Legislacion");
var libro5 = new Libro ("La Luz", "Nerea Álvarez", 215, 95196, "Artes plasticas");

var aLibros = new Array ();
    aLibros.push(libro1);
    aLibros.push(libro2);
    aLibros.push(libro3);
    aLibros.push(libro4);
    aLibros.push(libro5);
/* PARTE A */
/* 
1. Añadir un nuevo libro pidiéndole al usuario los datos necesarios con sus correspondientes
validaciones.
*/

function añadirLibro(){
   //Petición de valores
    var titulo = prompt("Titulo: ");
    var autor = prompt("Autor: ");
    //Validaremos la entrada de número
    var nPag = parseInt(prompt("Número de páginas: "));
    while(isNaN(nPag)){
        alert("Introduce números");
            var nPag = parseInt(prompt("Número de páginas: "));
    }
    //Validacion de entrada de número y 5 cifras
    var isbn = parseInt(prompt("ISBN de 5 cifras: "));
     //toString() - Devuelve una cadena que representa al objeto
                        //length - La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código UTF-16.
    cadena = isbn.toString().length;
    while(!isNaN(isbn) && cadena !== 5){
        alert("Introduce un número de 5 cifras");
            var isbn = parseInt(prompt("ISBN de 5 cifras: "));
            cadena = isbn.toString().length;
    }
    //Validación de entrada de temas y el formato
    var tematica = prompt("Tematica: Biologia - Informatica - Legislacion - Artes plasticas");
    tematica = tematica.toString().toLowerCase();
    //Elegimos el primer caracter y lo pasamos a mayusculas
                       //charAt() - de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
                                //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
                                               //Indicamos muestra de la palabra desde la posición 1
                                                       //slice() - devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
   tematica = tematica.charAt(0).toUpperCase()+ tematica.slice(1);
    while(tematica !== "Biologia" && tematica !== "Artes plasticas" && tematica !== "Informatica" && tematica !== "Legislacion"){
        alert("Tematica incorrecta");
            var tematica = prompt("Tematica: ");
            tematica = tematica.toString().toLowerCase();
            tematica = tematica.charAt(0).toUpperCase()+ tematica.slice(1);
    }
    //Creamos el 6 debreo del ARRAY
    var libro6 = new Libro (titulo, autor, nPag, isbn, tematica);
    //Añadimos
    aLibros.push(libro6);
    //Muestra
    return "El libro añadido es: \n\
                Titulo - " + libro6.titulo + "\n\
                Autor - " + libro6.autor + "\n\
                Nº páginas - " + libro6.nPag + "\n\
                ISBN - " + libro6.isbn + "\n\
                Tematica - " + libro6.tematica;
       
}
console.log(aLibros);


/* 
2. Eliminar un libro que el usuario elija (identificación a través de preguntas al usuario y se deben
realizar las comprobaciones necesarias).
*/
function eliminarLibro(){
    //Petición
    var isbn = parseInt(prompt("ISBN de 5 cifras: "));
    //toString() - Devuelve una cadena que representa al objeto
                       //length - La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código UTF-16.
   cadena = isbn.toString().length;
   while(!isNaN(isbn) && cadena !== 5){
       alert("Introduce un número de 5 cifras");
           var isbn = parseInt(prompt("ISBN de 5 cifras: "));
           cadena = isbn.toString().length;
   }
   //Recorremos el array buscando el ISBN - si no se encuetra mensaje de ERROR
   for(var i = 0; i < aLibros.length; i++){
       if(aLibros[i].isbn === isbn ){
                //splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
           aLibros.splice(i, 1);
           return "Eliminado";
       }else{
           return "No hay libro con ese ISBN";
       }
    }   
}


/* 
3. Modificación de datos de un libro en concreto, se debe de reconocer por ISBN y el script tiene que
tener la capacidad de hacer modificaciones en todos los datos del libro.
*/
function modificarLibro(){
    //Petición
    var isbn = parseInt(prompt("ISBN de 5 cifras: "));
    //toString() - Devuelve una cadena que representa al objeto
                       //length - La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código UTF-16.
   cadena = isbn.toString().length;
   while(!isNaN(isbn) && cadena !== 5){
       alert("Introduce un número de 5 cifras");
           var isbn = parseInt(prompt("ISBN de 5 cifras: "));
           cadena = isbn.toString().length;
   }
   //Recorremos el array buscando el ISBN - si no se encuetra mensaje de ERROR 
    for(var i = 0; i < aLibros.length; i++){
        if(aLibros[i].isbn === isbn ){
            //Realizaremos el bucle mientras la opción sea distinta de cero
             while(opcion !== 0){ 
                 //Petición de opcion en MENU
                 var opcion = parseInt(prompt("Opción 0: Salida de MODIFICAR.\n\
                 Opción 1: Titulo. \n\
                 Opción 2: Autor.\n\
                 Opción 3: Nº de Páginas.\n\
                 Opción 4: ISBN.\n\
                 Opción 5: Tematica.\n\
                 Introduzca número de opción:"));
                 //Recorremos el menu hasta encontrar case elegido
                 switch(opcion){
                     case 1: 
                         //Peticion de valor nuevo
                         var titulo = prompt("Titulo: ");
                         //Cambio de valor
                         aLibros[i].titulo = titulo;
                     break;
                     case 2:
                         var autor = prompt("Autor: ");
                         aLibros[i].autor = autor;
                     break;
                     case 3:
                         var nPag = parseInt(prompt("Nº de páginas: "));
                         aLibros[i].nPag = nPag;
                     break;
                     case 4:
                         var isbn = parseInt(prompt("ISBN de 5 cifras: "));
                         aLibros[i].isbn = isbn;
                     break;
                     case 5:
                         var tematica = prompt("Tematica: Biologia - Informatica - Legislacion - Artes plasticas");
                         aLibros[i].tematica = tematica;
                     break;
                 }
             }
             //Muestra de información
             return "Muestra \n\
                     Titulo - " + aLibros[i].titulo + "\n\
                     Autor - " + aLibros[i].autor + "\n\
                     Nº páginas - " + aLibros[i].nPag + "\n\
                     ISBN - " + aLibros[i].isbn + "\n\
                     Tematica - " + aLibros[i].tematica;
        }else{
             return "No hay libro con ese ISBN";
         }
    }     
}


/* 
4. Número de libros de una temática en concreto. Se le preguntará al usuario de qué temática quiere
que se visualice el número de libros y se visualizará el número.
*/
function tematicaLibro(){
    //Varible de contador
    var contador = 0;
    //Petición
    var tematica = prompt("Tematica: Biologia - Informatica - Legislacion - Artes plasticas");
    tematica = tematica.toString().toLowerCase();
    //Elegimos el primer caracter y lo pasamos a mayusculas
                       //charAt() - de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
                                //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
                                               //Indicamos muestra de la palabra desde la posición 1
                                                       //slice() - devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
   tematica = tematica.charAt(0).toUpperCase()+ tematica.slice(1);
    while(tematica != "Biologia" && tematica != "Artes plasticas" && tematica != "Informatica" && tematica != "Legislacion"){
        alert("Tematica incorrecta");
            var tematica = prompt("Tematica: ");
            tematica = tematica.toString().toLowerCase();
            tematica = tematica.charAt(0).toUpperCase()+ tematica.slice(1);
    }
    //Recorremos el array buscando el ISBN - si no se encuetra mensaje de ERROR 
   for(var i = 0; i < aLibros.length; i++){
       if(aLibros[i].tematica === tematica ){
           //Correcto se acumula resultado
            contador++;
       }else{
             return "No hay libro con esa TEMATICA";
        }
    }
    //Muestra
    return "Con la tematica " + tematica + " hay " + contador + " libros";   
}
 
 
/* PARTE B */
/* 
5. Número de libros de una temática en concreto. Se le preguntará al usuario de qué temática quiere
que se visualice el número de libros y se visualizará el número.
*/
function temaMuestraLibro(){
    //Varible
    var contador = 0;
    var lista = "";
    //Petición
    var tematica = prompt("Tematica: Biologia - Informatica - Legislacion - Artes plasticas");
    tematica = tematica.toString().toLowerCase();
    //Elegimos el primer caracter y lo pasamos a mayusculas
                       //charAt() - de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
                                //toUpperCase() - método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
                                               //Indicamos muestra de la palabra desde la posición 1
                                                       //slice() - devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
   tematica = tematica.charAt(0).toUpperCase()+ tematica.slice(1);
    while(tematica != "Biologia" && tematica != "Artes plasticas" && tematica != "Informatica" && tematica != "Legislacion"){
        alert("Tematica incorrecta");
            var tematica = prompt("Tematica: ");
            tematica = tematica.toString().toLowerCase();
            tematica = tematica.charAt(0).toUpperCase()+ tematica.slice(1);
    }

   for(var i = 0; i < aLibros.length; i++){
       if(aLibros[i].tematica === tematica ){
           //Correcto se acumula resultado
            contador++;
            lista += "Titulo - " + aLibros[i].titulo + "\n\
                        Autor - " + aLibros[i].autor + "\n\
                        Nº páginas - " + aLibros[i].nPag + "\n\
                        ISBN - " + aLibros[i].isbn + "\n\
                        Tematica - " + aLibros[i].tematica + "\n";
       }else{
             return "No hay libro con esa TEMATICA";
        }
    }
    //Muestra
    return "Con la tematica " + tematica + " hay " + contador + " libros\n\
            Los cuales son: \n" + lista;   
}


/* 
6. Visualiza la información completa de un libro completo.
*/
function muestraLibro(){
    //Petición
    var isbn = parseInt(prompt("ISBN de 5 cifras: "));
    //toString() - Devuelve una cadena que representa al objeto
                       //length - La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código UTF-16.
   cadena = isbn.toString().length;
   while(!isNaN(isbn) && cadena !== 5){
       alert("Introduce un número de 5 cifras");
           var isbn = parseInt(prompt("ISBN de 5 cifras: "));
           cadena = isbn.toString().length;
   }
   //Recorremos el array buscando el ISBN - si no se encuetra mensaje de ERROR 
   for(var i = 0; i < aLibros.length; i++){
       if(aLibros[i].isbn === isbn ){
           return "Muestra \n\
                    Titulo - " + aLibros[i].titulo + "\n\
                    Autor - " + aLibros[i].autor + "\n\
                    Nº páginas - " + aLibros[i].nPag + "\n\
                    ISBN - " + aLibros[i].isbn + "\n\
                    Tematica - " + aLibros[i].tematica;
       }else{
             return "No hay libro con ese ISBN";
        }
    }   
}

//Realizaremos el bucle mientras la opción sea distinta de cero
while(opcion !== 0){ 
    //Petición de opcion en MENU
    var opcion = parseInt(prompt("Opción 0: Salida del SCRIPT.\n\
        Parte A\n\
    Opción 1: Anadir libro. \n\
    Opción 2: Eliminar libro.\n\
    Opción 3: Modificar libro.\n\
    Opción 4: Nº de libro por TEMATICA.\n\
        Parte B\n\
    Opción 5: Visualizacion por tematica.\n\
    Opción 6: Libro.\n\
    Introduzca número de opción:"));
    //Recorremos el menu hasta encontrar case elegido
    switch(opcion){
        case 1: 
            alert(añadirLibro());
        break;
        case 2:
            alert(eliminarLibro());
        break;
        case 3:
            alert(modificarLibro());
        break;
        case 4:
            alert(tematicaLibro());
        break;
        case 5:
            alert(temaMuestraLibro());
        break;
        case 6:
            alert(muestraLibro());
        break;

    }
}
