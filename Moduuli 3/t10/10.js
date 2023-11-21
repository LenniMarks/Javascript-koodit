'use strict';

const form = document.getElementById("source");

form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const fname = document.querySelector('input[name="firstname"]').value;
    const lname = document.querySelector('input[name="lastname"]').value;

    const paragraph = document.getElementById("target");

    paragraph.textContent = `Your name is ${fname} ${lname}`;
});
