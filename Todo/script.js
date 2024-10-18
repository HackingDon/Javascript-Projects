
const todo = document.getElementById("todo");
const input = document.getElementById("input");
const add = document.getElementById("add");
let array = [];
let array2 = JSON.parse(localStorage.getItem("list"));
if(array2!=null){
    array = array2
}
function AddElement(){
    todo.innerHTML = "";
    for (let i = array.length-1; i >= 0; i--) {
      let li = document.createElement("li");
      let input1 = document.createElement("input");
      input1.setAttribute("type", "checkbox");
      let span = document.createElement("span");
      span.textContent = array[i].value;
      if (array[i].completed) {
        input1.checked = true;
        span.style.textDecoration = "line-through"
      }
      let button = document.createElement("button");
      button.setAttribute("class", "btn btn-outline-danger");
      button.innerText = "del";
      li.appendChild(input1);
      li.appendChild(span);
      li.appendChild(button);
      todo.appendChild(li);
      button.addEventListener("click", () => {
        todo.removeChild(li);
        array.splice(i,1);
        localStorage.setItem("list",JSON.stringify(array))
      });
      input1.addEventListener("click", () => {
        if (input1.checked) {
          array[i].completed = true;
          span.style.textDecoration = "line-through"
          
        } else {
          array[i].completed = false;
          span.style.textDecoration = "none"
        }
        localStorage.setItem("list",JSON.stringify(array))
      });
    }
}
window.onload = () => {
  input.focus();
 AddElement()
};

function AddValue(event) {
  let target = event.currentTarget.value;
  todo.innerHTML = "";
    for (let i = array.length-1; i >= 0; i--) {
      let li = document.createElement("li");
      let input1 = document.createElement("input");
      input1.setAttribute("type", "checkbox");
      let span = document.createElement("span");
      span.textContent = array[i].value;
      if ((target=="all" && array[i].completed) || target=="completed") {
        input1.checked = true;
        span.style.textDecoration = "line-through"
      }
      let button = document.createElement("button");
      button.setAttribute("class", "btn btn-outline-danger");
      button.innerText = "del";
      li.appendChild(input1);
      li.appendChild(span);
      li.appendChild(button);
      if(target == "pending" && !array[i].completed){
        todo.appendChild(li);
      }
      else if(target == "completed" && array[i].completed){
        todo.appendChild(li);
      }
      else if(target == "all"){
        todo.appendChild(li);
      }
      button.addEventListener("click", () => {
        todo.removeChild(li);
        array.splice(i,1);
        localStorage.setItem("list",JSON.stringify(array))
      });
      input1.addEventListener("click", () => {
        if (input1.checked) {
          array[i].completed = true;
          if(target=="all"){
            span.style.textDecoration = "line-through"
          }
          if(target == "pending"){
            todo.removeChild(li);
          } 
        } else {
          array[i].completed = false;
          if(target == "all"){
            span.style.textDecoration = "none"
          }
          if(target == "completed"){
            todo.removeChild(li);
          } 
        }
        localStorage.setItem("list",JSON.stringify(array))
      });
    } 
}
function AddTodo(event) {
  event.preventDefault();
  if (input.value != "") {
    let obj = {
      value: input.value,
      completed: false,
    };
    input.value = "";
    array.push(obj);
    localStorage.setItem("list",JSON.stringify(array))
    AddElement();
  }
}
add.addEventListener("click", AddTodo);
