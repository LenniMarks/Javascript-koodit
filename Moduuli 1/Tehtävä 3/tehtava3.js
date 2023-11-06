'use strict';
let numero1 = parseInt(prompt('Type number 1.'));
let numero2 = parseInt(prompt('Type number 2.'));
let numero3 = parseInt(prompt('Type number 3.'));

const summa = numero1 + numero2 + numero3
const tulo = numero1 * numero2 * numero3
const keskiarvo = summa/3

document.querySelector('#summa').innerHTML = 'Summa = ' + summa;
document.querySelector('#tulo').innerHTML = 'Tulo = ' + tulo;
document.querySelector('#keskiarvo').innerHTML = 'Keskiarvo = ' + keskiarvo;