'use strict';
var lista = []

for (let i=0; i<6; i++) {
    const nimet = prompt("Type dog name: ");
    lista.push(nimet);
}

lista.sort();
lista.reverse();
let list = document.getElementById("taulukko");
for (let i = 0; i < lista.length; ++i) {
    let li = document.createElement('li');
    li.innerText = lista[i];
    list.appendChild(li);
}
