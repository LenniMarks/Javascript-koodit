'use strict';
let lista = []
let kaannetty_lista = []

for (let i=0; i<5; i++) {
    const num = parseInt(prompt("Type number: "));
    lista.push(num);
}
for (let i = lista.length - 1; i >= 0; i--) {
    kaannetty_lista.push(lista[i]);
}
console.log(kaannetty_lista)
