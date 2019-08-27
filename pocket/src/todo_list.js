let todos = [];
let toDoUl = document.querySelector('.todos');
let toDoForm = document.querySelector('.add-todo-form');

let i = 1; 
while (localStorage.getItem(`value${i}`)) {
  let value = localStorage.getItem(`value${i}`);
  let done = localStorage.getItem(`done${i}`);
  todos.push({value:value, done: done});
  i++;
}
// console.log(todos);

function addCheck(e) {
  todos[parseInt(e.target.getAttribute('data'))].done = e.target.checked;
  saveToDo();
}


function addToDo() {
  let input = document.getElementsByName('add-todo')[0];
  let todo = {value:input.value, done: false};
  todos.push(todo);
  
  saveToDo();
  
  input.value = "";
  populateList(todos);
}

function saveToDo() {
  todos.forEach((el, idx) => {
    localStorage.setItem(`value${idx}`, el.value);
    localStorage.setItem(`done${idx}`, el.done);
  });
}

function populateList(todos) {
  todos.forEach((el, idx) => {
    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    label.innerHTML = el.value;
    let li = document.querySelector('.todos li');
    checkbox.setAttribute('data', idx);
    checkbox.checked = el.done;
    li.append(checkbox);
    li.append(label);
  });
  
}


populateList(todos);
let checkboxes = document.querySelectorAll(".todos li input");
toDoForm.addEventListener("submit", addToDo);

checkboxes.forEach(el => {
  el.addEventListener("change", (e) => {
    addCheck(e);
  });
});
