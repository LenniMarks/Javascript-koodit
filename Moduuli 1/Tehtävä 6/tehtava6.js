'use strict';
const valinta = confirm("Should I calculate the square root?")
if (valinta == true) {
    const kysely = prompt('Type number.');
    const num = parseInt(kysely)
    if (num > 0) {
        const neliojuuri = Math.sqrt(num);
        document.querySelector('#target').innerHTML = neliojuuri;
    }
    else {
        document.querySelector('#target').innerHTML = "The square root of a negative number is not defined";
    }
}
else {
    document.querySelector('#target').innerHTML = "The square root is not calculated.";
}