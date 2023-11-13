'use strict';
var lista = []
let nolla = true
while (nolla == true) {
    let numerot = parseInt(prompt("Type number: "));
    if (numerot == 0) {
        nolla = false
    }
    lista.push(numerot);
}

lista.sort(function(a, b){return b - a});

console.log(lista)

