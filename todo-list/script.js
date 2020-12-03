const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

let pendingToDos = [];
const PENDING_STORAGE = "PENDING";
const FINISHED_STORAGE = "FINISHED";

let newId;

function deleteToDo(e) {
  // TODO: 로컬스토리지 삭제
  // TODO: 뿌린다(paint)
  const btn = e.target;
  const li = btn.parentNode;

  if (li.parentNode === pendingList) {
    pendingList.removeChild(li);
    pendingToDos = pendingToDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
  }

  saveToDos(pendingToDos);
}

function saveToDos(text) {
  localStorage.setItem(PENDING_STORAGE, JSON.stringify(text));
}

function addToStorage(text) {
  newId = pendingToDos.length + 1;

  const toDo = {
    id: newId,
    text: text,
  };

  pendingToDos.push(toDo);
  saveToDos(pendingToDos);
}

function paintToDos(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.innerText = "⭕";
  pendingList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  addToStorage(text);
  li.id = newId;
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDos(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedPendingToDos = localStorage.getItem(PENDING_STORAGE);
  const loadedFinishedToDos = localStorage.getItem(FINISHED_STORAGE);
  const parsedPendingToDos = JSON.parse(loadedPendingToDos);
  // const parsedFinishedToDos = JSON.parse(loadedFinishedToDos);

  if (pendingToDos !== null) {
    parsedPendingToDos.map((item) => paintToDos(item.text));
    // parsedFinishedToDos.map((item) => paintToDos(item.text));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
