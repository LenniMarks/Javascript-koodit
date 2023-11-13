'use strict';
var lista = []

while (true) {
    const numerot = parseInt(prompt("Type number: "));
    for (let i = 0; i < lista.length; i++)
        if (numerot == lista[i]) {
            var loytynyt = true
        }
    if (loytynyt) {
        break;
    }
    else if (!numerot) {
        break;
    }
    else {
        lista.push(numerot);
    }
}

let sort_array = lista.sort(function(a, b){return a - b});

for (let i = 0; i < lista.length; ++i) {
    console.log(lista[i])
}
