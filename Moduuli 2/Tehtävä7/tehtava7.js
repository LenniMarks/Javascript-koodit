'use strict';
let lista = []
let roll = true
const side = parseInt(prompt("Type side of the dice: "));


function diceroll () {
    return Math.floor(Math.random() * side) + 1;
}

while (roll == true) {
    let rolled = diceroll()
    lista.push(rolled)
    if(rolled == side){
        roll = false
    }
}

let list = document.getElementById("taulukko");
for (let i = 0; i < lista.length; ++i) {
    let li = document.createElement('li');
    li.innerText = lista[i];
    list.appendChild(li);
}