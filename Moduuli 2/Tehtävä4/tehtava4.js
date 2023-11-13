'use strict';
var lista = []

while (true) {
    const numerot = parseInt(prompt("Type number: "));
    if (numerot < 0) {
        break;
    }
    else if (!numerot) {
        break;
    }
    else {
        lista.push(numerot);
    }
}

let sort_array = lista.sort(function(a, b){return b - a});

for (let i = 0; i < lista.length; ++i) {
    console.log(lista[i])
}
