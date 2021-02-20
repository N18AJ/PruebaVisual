/* 
@author: Nerea Álvarez Justel
*/
var aPisos = document.getElementsByClassName("piso");
function activar() {
    var tabla = document.getElementById("tabla");
    var aTD = document.getElementsByTagName("td");
    tabla.style.borderCollapse = "separate";
    tabla.style.borderSpacing = "10px 5px";
    for (var i = 0; i < aPisos.length; i++) {
        aPisos[i].style.backgroundColor = "#1C6EA4";
        aPisos[i].style.width = "70px";
        aPisos[i].style.height = "70px";
    }
    aTD[11].style.backgroundColor = "green";
}
function animacion(pisoFinal, pisoInicial) {
    if (pisoInicial > pisoFinal) {
        console.log("Normal");
        console.log("Piso Final: " + pisoInicial);
        console.log("Piso inicial: " + pisoFinal);

        for (var i = pisoFinal; i < pisoInicial; i++) {
            setColor(aPisos[i]);
            setColorInicial(aPisos[i]);

        }
        setTimeout(function () {
            aPisos[pisoInicial].style.backgroundColor= "green";
        }, i * 2000);


    }

    if (pisoInicial < pisoFinal) {
        console.log("inverso");
        console.log("Piso inicial: " + pisoInicial);
        console.log("Piso Final: " + pisoFinal);

        for (var e = pisoFinal; e > pisoInicial; e--) {
            setColor2(aPisos[e]);
            //setColorInicial2(aPisos[e]);

        }
        setTimeout(function () {
            aPisos[pisoInicial].style.backgroundColor = "green";
        }, e * 2000);
    }

    function setColor(piso) {
        setTimeout(function () {
            piso.style.backgroundColor = "salmon";
        }, i * 2000);
    }
    function setColor2(piso) {
        var elemento = i - (pisoFinal + 1);
        setTimeout(function () {
            console.log(piso);
            piso.style.backgroundColor = "salmon";
        }, elemento * 2000);
    }
    function setColorInicial(piso) {
        setTimeout(function () {
            piso.style.backgroundColor = "#1C6EA4";
        }, i * 2500);
    }
    function setColorInicial2(piso) {
        setTimeout(function () {
            piso.style.backgroundColor = "#1C6EA4";
        }, (i - (pisoFinal + 1)) * 2500);
    }

}

function cambiarAscensor(nPiso) {
    var final;
    for (var i = 0; i < aPisos.length; i++) {
        if (aPisos[i].style.backgroundColor === "yellow") {
            final = i;
            aPisos[i].style.backgroundColor = "#1C6EA4";
        }
        if (aPisos[i].style.backgroundColor === "green") {
            aPisos[i].style.backgroundColor = "#1C6EA4";
        }
    }
    aPisos[nPiso].style.backgroundColor = "yellow";
    animacion(final, nPiso);


}
function primer() {
    cambiarAscensor(5);
}
function segundo() {
    cambiarAscensor(4);
}
function tercero() {
    cambiarAscensor(3);
}
function cuarto() {
    cambiarAscensor(2);
}
function quinto() {
    cambiarAscensor(1);
}
function sexto() {
    cambiarAscensor(0);
}