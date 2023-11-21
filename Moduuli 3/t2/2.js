'use strict';
function addElement(id, elementti, text) {
    const list = document.createElement(elementti);
    const element = document.getElementById(id);
    element.appendChild(list);    

    const node = document.createTextNode(text);
    list.appendChild(node);
}   

addElement("target", "li", "First item")
addElement("target", "li", "Second item")
addElement("target", "li", "Third item")


document.getElementById('target').children[1].classList.add("my-item");;

