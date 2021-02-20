/* Ejercicio 1
 Crea un script que muestre por pantalla todas las películas y el horario en el que se proyectan en un
cine en un mes en concreto, sabiendo que las películas se estrenan los viernes en la sesión de las
20horas. Las sesiones del fin de semana son:
• Viernes: 20h y 23h
• Sábado: 17h, 20h y 23h
• Domingo: 17h y 20h
Todas las películas la primera y segunda semana en cartelera, se emiten en todas las sesiones de viernes a
domingo. El resto de semanas, en las sesiones de las 20h y 23h los fines de semana.
La cartelera debe tener al menos 4 películas: Película 1, Película 2, Película 3 y Películas 4
No hay que tener en cuenta sesiones del resto de días de la semana (lunes a jueves)
Todos los estrenos se hacen el primer viernes de cada mes.
 */
    //De esta variablles sacamos el año 
                        //getFullYear() - devuelve el año del objeto de fecha especificado acorde al tiempo local.
    var anyo = new Date().getFullYear();
    //variables
    var mes;
    var diasMes;
    var nombreMes;
    var lista = "";
    //Variables de contador
    var contViernes = 0;
    var contSabado = 0;
    var contDomingo = 0;
    //variables que contienen una cadena de texto con las respectivas horas dependiendo del dia y de si dicho dia es la primera o segunda vez que aparece
    //o ya ha aparecido en más ocasines
    var horarioV = " 20h y 23h";
    var horarioS1 = " 17h, 20h y 23h";
    var horarioS2 = " 20h y 23h";
    var horarioD1 = " 17h y 20h";
    var horarioD2 = " 20h";
    //array de peliculas que vamos a mostrar
    var peliculas = [' Película 1 ', ' Película 2 ', ' Película 3 ', ' Película 4 '];
    
    //Bucle para introdución de mes
    do{
        //solicitud al usuario del mes
        mes = parseInt(prompt("Introduce el número del mes para ver cartelera: ")); 
        //Si no cumple la condicion vuelve la petición
        if(isNaN(mes) || mes<1 || mes>12){                   
            alert("UN MES (1-12)...");
        }else{
           //En la varibale diasMes integrams todos los dias del mes
                                            //getDate() - devuelve el día del mes para la fecha especificada de acuerdo con la hora local.
          diasMes = new Date(anyo, mes-1, 0).getDate();
           //switch que utilizamos para saber el mes
           //restamos al mes 1 para las constantes 0-11
           switch(mes-1){
              case 0:
                    nombreMes='Enero';
                break;
                case 1:
                    nombreMes='Febrero';
                break;
                case 2:
                    nombreMes='Marzo';
                break;
                case 3:
                    nombreMes='Abril';
                break;
                case 4:
                    nombreMes='Mayo';
                break;
                case 5:
                    nombreMes='Junio';
                break;
                case 6:
                    nombreMes='Julio';
                break;
                case 7:
                    nombreMes='Agosto';
                break;
                case 8:
                    nombreMes='Septiembre';
                break;
                case 9:
                    nombreMes='Octubre';
                break;
                case 10:
                    nombreMes='Noviembre';
                break;
                case 11:
                    nombreMes='Diciembre';
                break; 
           }
           //Muestra del mes y año
           //Añadimos en la variable lista para la posterior muestra
           lista += ("Cartelera de " + nombreMes + " - " + anyo + "\n");

           //Recorremos los dias del MES introducido
           for (var i = 1; i <= diasMes; i++) {
               //Creamos dia para los dias del mes
                                                //getDay() - devuelve el día de la semana de la fecha especificada en función de la fecha local.
               var dia = new Date(anyo, mes-1, i).getDay();
               //Switch para saber el dia del calendario
               //Solo contavilizamos 0, 5 y 6
               switch(dia){
                    case 5:
                        nombredia = 'Viernes';
                        contViernes++;
                    break;
                    case 6:
                        nombredia = 'Sabado';
                        contSabado++;
                    break;
                     case 0:
                        nombredia = 'Domingo';
                        contDomingo++;
                    break;
                }
                //Conjunto de condifiones y muestras de la informacion
                if(dia === 5){
                    //Muestra del primer VIERNES estrenos
                    if(contSabado <= 1){
                        lista += ("El " + nombredia + " " + i + " Con horario : " + horarioV + " Peliculas ESTRENO: " + peliculas + "\n");
                    }
                    //El resto de VIERNES
                    else{
                        lista += ("El " + nombredia + " " + i + " Con horario : " + horarioV + " Peliculas: " + peliculas + "\n");
                    }
                }
                if(dia === 6){
                    //Muestra de los dos primeros SABADO
                    if(contSabado <= 2){
                        lista += ("El " + nombredia + " " + i + " Con horario : " + horarioS1 + " Peliculas: " + peliculas + "\n");
                    }
                    //El resto de SABADO menos horarios
                    else{
                        lista += ("El " + nombredia + " " + i + " Con horario : " + horarioS2 + " Peliculas: " + peliculas + "\n");
                    }
                }
                if(dia === 0){
                    //Muestra de los dos primeros DOMINGOS
                    if(contDomingo <= 2){
                        lista += ("El " + nombredia + " " + i + " Con horario : " + horarioD1 + " Peliculas: " + peliculas + "\n"); 
                    }
                    //El resto de DOMINGO menos horarios
                    else{
                        lista += ("El " + nombredia + " " + i + " Con horario : " + horarioD2 + " Peliculas: " + peliculas + "\n");
                    }
                }
                //Este alert salta en cada dia, por lo que se iria pasando uno uno los valores
                //alert(lista);
            }
           //Muestra la cartelera total ya recorrida 
           alert(lista); 
        }
    }while(isNaN(mes) || mes<1 || mes>12)

