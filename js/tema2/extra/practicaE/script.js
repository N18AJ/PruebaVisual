/* Ejercicio 1
 Realiza un script que muestre la siguiente figura:
    *
   ***
  *****
*/
    //Creación de variables para consterior entrada de valor por teclado
    var fila = 3;
    var vista;
                    
    //Visualización de las operaciones  
            //valor minimo 1
        for (var i = 1; i <= fila; i++) { //Este for te crea el número de filas (cada fila = i)
                                    //Se añaden 1 filas cada vez
            for (var j = 1; j <= (fila - i) * 2; j++) { //Este for crea los espacios
                                                //Se añaden dos espacios en casa *
                vista += " ";
            }
            for (var k = 1; k < i * 2; k++) {
                                        //Se añaden 2* + 1
                vista += "*";
            }
            vista += "\n";
        }
        alert(vista);



/* Ejercicio 2
 Realiza un script que muestre la siguiente figura:
    *
   ***
  *****
   ***
    *
*/
    //Creación de variables para consterior entrada de valor por teclado
    var fila = 3;
    var vista;
                    
            //valor minimo 1
        //Parte superior
        for (var i = 1; i <= fila; i++) { //Este for te crea el número de filas (cada fila = i)
                                    //Se añade 1 filas cada vez
            for (var j = 1; j <= (fila - i) * 2; j++) { //Este for crea los espacios
                                                //Se añaden dos espacios en casa *
                vista += " ";
            }
            for (var k = 1; k < i * 2; k++) {
                                        //Se añaden 2* + 1
                vista += "*";
            }
            vista += "\n";
        }
        //Parte inferior
        for (var i = fila - 1; i >= 1; i--) { //Este for te crea el número de filas (cada fila - 1 = i)ya que la del centro no se crea aqui
                                        //Se va reduciendo 1 filas cada vez
            for (var j = 1; j <= (fila - i) * 2; j++) {
                vista += " ";
            }
            for (var k = 1; k < i * 2; k++) {
                vista += "*";
            }
            vista += "\n";
        }
        alert(vista);



/*Ejercicio 3
 Realiza un script que muestre la siguiente figura:
    *
   * *
   * *
   * *
    *
 */

    //Creación de variables para consterior entrada de valor por teclado
        var fila = 3;
        var vista;

    //Visualización de las operaciones  
            //valor minimo 1
        //Parte superior
        for (var i = 1; i <= fila; i++) { //Este for te crea el número de filas (cada fila = i)
                                    //Se añade 1 filas cada vez
            for (var j = 1; j <= (fila - i) * 2; j++) { //Este for crea los espacios
                                                //Se añaden dos espacios en casa *
                vista += " ";
            }
            for (var k = 1; k <= i * 2; k++) {
                if (k === 1 || k === (i * 2) - 1) { //Se realiza la condicion de que solo se inserta * en la primera
                                                        // y en la ultima en relacion del valor i
                    vista += "*";
                } else {
                    vista += "  ";
                }
            }
            vista += "\n";
        }
        //Parte inferior
        for (var i = fila - 1; i >= 1; i--) { //Este for te crea el número de filas (cada fila - 1 = i)ya que la del centro no se crea aqui
                                        //Se va reduciendo 1 filas cada vez
            for (var j = 1; j <= (fila - i) * 2; j++) {
                vista += " ";
            }
            for (var k = 1; k <= i * 2; k++) {
                if (k === 1 || k === (i * 2) - 1) {
                    vista += "*";
                } else {
                    vista += "  ";
                }
            }
            vista += "\n";
        }
        alert(vista);