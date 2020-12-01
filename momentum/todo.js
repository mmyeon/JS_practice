const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);
  //   로컬 스토리지에 반영하기
  // 조건이 true인 요소로 새로운 배열을 만듦

  const cleanToDos = toDos.filter(function (toDo) {
    //   li.id가 string이라 number로 변환해줘야함
    return toDo.id !== parseInt(li.id);
  });

  //   바뀐 toDos를 반영해주기
  toDos = cleanToDos;
  //   로컬스토리지에 반영
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = toDoInput.value;
  toDoInput.value = "";
  paintTodo(currentValue);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //   string을 객체로 변환하기
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
