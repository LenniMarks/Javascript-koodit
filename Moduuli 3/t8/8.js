'use strict';
const num1i = document.getElementById('num1');
const num2i = document.getElementById('num2');
const operations = document.getElementById('operation');
const paragraph = document.getElementById('result');
const button = document.getElementById('start');

function calculate() {
    const num1 = parseFloat(num1i.value);
    const num2 = parseFloat(num2i.value);
    const operation = operations.value;
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'sub') {
        result = num1 - num2;
    } else if (operation === 'multi') {
        result = num1 * num2;
    } else if (operation === 'div') {
        result = num1 / num2
    }

    paragraph.textContent = result;
}
button.addEventListener('click', calculate);
