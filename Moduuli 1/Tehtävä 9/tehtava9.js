const numero = parseInt(prompt('Type number: '));
let primary = true;

if (numero === 1) {
    document.querySelector('#target').innerHTML = "number is not a prime number";
}

else if (numero > 1) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primary = false;
            break;
        }
    }

    if (primary) {
        document.querySelector('#target').innerHTML = "number is a prime number";
    } else {
        document.querySelector('#target').innerHTML = "number is not a prime number";
    }
}

else {
    document.querySelector('#target').innerHTML = "number is not a prime number";
}