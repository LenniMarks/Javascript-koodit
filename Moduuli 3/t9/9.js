'use strict';

const paragraph = document.getElementById('result');
const button = document.getElementById('start');

function calculate() {
    const text = document.getElementById('calculation').value;
    const lista = text.split("");
    const numerot = ["0","1","2","3","4","5","6","7","8","9"]
    let operator = ""
    let num1 = ""
    let num2 = ""

    for (let i = 0; i<lista.length; i++) {
        if (lista[i] === "+") {
            operator = "+"
        }
        else if (lista[i] === "-") {
            operator = "-"
        }
        else if (lista[i] === "*") {
            operator = "*"
        }
        else if (lista[i] === "/") {
            operator = "/"
        }
        else {
            for (let j = 0; i<numerot.length; j++) {
                if (operator == "") {
                    num1 += lista[i]
                    break
                }
                else if (operator != "") {
                    num2 += lista[i]
                    break
                }
            }
        }
    }
    let result;

    if (operator === '+') {
        result = parseInt(num1) + parseInt(num2);
    } else if (operator === '-') {
        result = parseInt(num1) - parseInt(num2);
    } else if (operator === '*') {
        result = parseInt(num1) * parseInt(num2);
    } else if (operator === '/') {
        result = parseInt(num1) / parseInt(num2);
    }
    else {
        result = "virhe"
    }

    paragraph.textContent = result;
}
button.addEventListener('click', calculate);
