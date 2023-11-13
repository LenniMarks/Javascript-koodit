'use strict';
let lista = []
var result = 0

const side = parseInt(prompt("Type side of the dice: "));


function diceroll () {
    return Math.floor(Math.random() * side) + 1;
}

while (result < side) {
    let rolled = diceroll()
    console.log(rolled)
    result = result + rolled
    if (result < side) {
        lista.push(result)
    }
    else if (result > side) {
        result = result - rolled
        lista.push(result)
    }
    else if(result == side){
        lista.push(result)
        break
    }
}

let list = document.getElementById("taulukko");
for (let i = 0; i < lista.length; ++i) {
    let li = document.createElement('li');
    li.innerText = lista[i];
    list.appendChild(li);
}