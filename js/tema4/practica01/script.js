/* 
@author: Nerea Álvarez Justel
 */
/*Ejercicio 1
Crea un script que contenga información de profesores, asignaturas y número de alumnos de los ciclos de
Informática del IES Los Sauces de Benavente. Debes de utilizar un array para profesores, otro para
asignaturas y otro para alumnos y gestionarlos conjuntamente.
El script debe de mostrar por pantalla qué asignaturas imparte cada profesor y cuántos alumnos tiene por
aula.
Ejemplo:
    • Leticia imparte DWEC y tiene 20 alumnos en clase
    • Amor imparte Entornos y tiene 20 alumnos en clase.
Debes de tener en cuenta:
    • 1 profesor imparte 1 asignatura.
    • Para mantener la lógica del ejercicio, es importante que los arrays tengan la misma longitud. Haz
todas las comprobaciones oportunas.
*/
    //Creación de ARRAY
    var aProfesores = ["Amor", "Heraclio", "Leti", "Antonio"]; 
    var aModulos = ["DAW", "DWES", "DWEC", "DIW"];
    var aAlumnos = ["15", "20", "18", "16"];
    
    //Variable de muestra
    var lista = "";
    
    //Recorremos los arrays, todos tienen los mismos números de elementos, por lo que los mismos bucles
    //En cada paso del bucle se mostrara la información de la misma posición
    for (var i = 0; i < aProfesores.length; i++) { 
        lista += (aProfesores[i] + " imparte " + aModulos[i] + " y tiene " + aAlumnos[i] + " alumnos en clase\n")
    }
    alert(lista);