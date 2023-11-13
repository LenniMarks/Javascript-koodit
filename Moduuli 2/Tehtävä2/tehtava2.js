'use strict';
var lista = []


const osallistujat = parseInt(prompt("Type participants: "));


for (let i=0; i<osallistujat; i++) {
    const nimet = prompt("Type your name: ");
    lista.push(nimet);
}

lista.sort();
let list = document.getElementById("taulukko");
for (let i = 0; i < lista.length; ++i) {
    let li = document.createElement('li');
    li.innerText = lista[i];
    list.appendChild(li);
}
