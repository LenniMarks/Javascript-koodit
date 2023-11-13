'use strict';
const lista = ["Johnny", "DeeDee", "Joey", "Marky"]

function concat (lista) {
    let text = ""
    for (let i = 0; i < lista.length; i++) {
        text += lista[i];
      }
    return text
}

document.querySelector('#target').innerHTML = concat(lista);
