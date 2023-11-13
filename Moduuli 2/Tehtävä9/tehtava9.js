'use strict';
const lista = [2, 7, 4]

function even (lista) {
    let newlist = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            newlist.push(lista[i]);
        }
      }
    return newlist
}

console.log(lista);
console.log(even(lista));

