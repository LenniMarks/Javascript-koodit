'use strict';
const class1 = "Gryffindor"
const class2 = "Slytherin"
const class3 = "Hufflepuff"
const class4 = "Ravenclaw"

var random = Math.floor(Math.random() * 4) + 1;
console.log(random)

const nimi = prompt("Type your name. ")

if (random == 1) {
    document.querySelector('#target').innerHTML = nimi + ', you are ' + class1;
}
else if (random == 2) {
    document.querySelector('#target').innerHTML = nimi + ', you are ' + class2;
}
else if (random == 3) {
    document.querySelector('#target').innerHTML = nimi + ', you are ' + class3;
}
else if (random == 4) {
    document.querySelector('#target').innerHTML = nimi + ', you are ' + class4;
}
