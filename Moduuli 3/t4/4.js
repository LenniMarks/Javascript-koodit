'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

function addElement(id, elementti, text) {
  const list = document.createElement(elementti);
  const element = document.getElementById(id);
  element.appendChild(list);

  const node = document.createTextNode(text);
  list.appendChild(node);
}

for (let i = 0; i < students.length; i++) {
  addElement("target", "option", students[i].name)
  document.getElementById("target").children[i].value = students[i].id;
}
