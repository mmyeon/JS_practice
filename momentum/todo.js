const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveTodo(todo) {
  localStorage.setItem(TODOS_LS, JSON.stringify(todo));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  span.innerText = text;
  delBtn.innerText = "❌";

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoObj);
  saveTodo(toDos);
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = toDoInput.value;
  toDoInput.value = "";
  paintTodo(currentValue);
}

function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    //   string을 객체로 변환하기
    const parsedToDos = JSON.parse(loadedToDos);

    const a = parsedToDos.forEach((toDo) => {
      paintTodo(toDo.text);
    });
  }
}

function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
