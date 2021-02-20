var aColores = ["red", "green", "blue", "purple"];


function boton1() {
    var tds = trs[0].getElementsByTagName('td');
 
    for (var i = 0; i < tds.length; i++) {
        for (var j = 0; j < tds.length; j++) {
            if (i != j) {
                if (tds[i].style.backgroundColor == "") {
                    var randomPosition = Math.floor(Math.random() * (aColores.length));
                    tds[i].style.backgroundColor = aColores[randomPosition];
                }
                if (tds[j].style.backgroundColor == "") {
                    var randomPosition = Math.floor(Math.random() * (aColores.length));
                    tds[j].style.backgroundColor = aColores[randomPosition];
                }
                while (tds[i].style.backgroundColor == tds[j].style.backgroundColor) {
                    var randomPosition = Math.floor(Math.random() * (aColores.length));
                    tds[j].style.backgroundColor = aColores[randomPosition];
                }
 
            }
        }
    }
}
