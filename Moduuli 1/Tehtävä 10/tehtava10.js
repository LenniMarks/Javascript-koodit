'use strict';
const nopat = parseInt(prompt("Type number of dices: "))
const summa = parseInt(prompt("Type sum of dices: "))
const testien_maara = 10000;

let laskin = 0

for (let i = 0; i < testien_maara; i++) {
    let sum = 0;
    
    for (let j = 0; j < nopat; j++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
      }

      if (sum === summa) {
        laskin++;
      }
    }

const probability = (laskin / testien_maara) * 100;
document.querySelector('#target').innerHTML = "Probability to get sum " + summa + " with " + nopat + " dice is " + probability.toFixed(2) + "%";

