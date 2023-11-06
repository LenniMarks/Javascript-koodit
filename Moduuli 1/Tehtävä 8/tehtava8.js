'use strict';
const start = parseInt(prompt('Start of the year: '));
const end = parseInt(prompt('End of the year: '));

var lista = []
var newlist = []

for (let i = start; i <= end ; i += 1) {
    lista.push(i);
}
for (let i = 0; i <= lista.length ; i += 1) {
    if ((0 == lista[i] % 4) && (0 != lista[i] % 100) || (0 == lista[i] % 400)) {
        newlist.push(lista[i]);
    }
}

let list = document.getElementById("vuosi");
for (let i = 0; i < newlist.length; ++i) {
    let li = document.createElement('li');
    li.innerText = newlist[i];
    list.appendChild(li);
}
