let addtodobtn = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfeild = document.getElementById('inputfeild');


addtodobtn.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('p-style');
  paragraph.innerText = inputfeild.value;
  todocontainer.appendChild(paragraph);
  inputfeild.value='';
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration="line-through";
  });
  paragraph.addEventListener('dblclick', function(){
    todocontainer.removeChild(paragraph);
  })
});
