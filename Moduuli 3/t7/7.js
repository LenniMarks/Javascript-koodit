'use strict';
const p = document.getElementById('trigger');
const image = document.getElementById('target');

function changeImage(source) {
    image.src = source;
}

p.addEventListener('mouseover', function() {
    changeImage('img/picB.jpg');
});

p.addEventListener('mouseout', function() {
    changeImage('img/picA.jpg');
});