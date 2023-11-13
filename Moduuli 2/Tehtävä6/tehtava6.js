'use strict';
let lista = []
var result = 0
function diceroll () {
    return Math.floor(Math.random() * 6) + 1;
}

while (true) {
    let rolled = diceroll()
    result = result + rolled
    if (result == 6) {
        lista.push(result)
        break;
    }
    else if (result > 6) {
        result = result - rolled
        lista.push(result)
    }
}

let list = document.getElementById("taulukko");
for (let i = 0; i < lista.length; ++i) {
    let li = document.createElement('li');
    li.innerText = lista[i];
    list.appendChild(li);
}


