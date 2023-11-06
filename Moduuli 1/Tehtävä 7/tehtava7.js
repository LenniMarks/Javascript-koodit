'use strict';
const nopat = parseInt(prompt('Enter the amount of dices:'));
var num = 0

for (let i = 0; i <= nopat ; i++) {
    num = num + Math.floor(Math.random() * 6) + 1;
}
console.log("The sum of the results " + num);