const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

const pendingToDos = [];
const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";
const newId = pendingToDos.length + 1;

// TODO:btn 삭제 구현
function deleteToDo(e) {
  const btn = e.target;
  console.log();
}

function saveToDos(text) {
  localStorage.setItem(PENDING_LS, JSON.stringify(text));
}

function addToLS(text) {
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
  li.id = newId;
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.innerText = "⭕";
  pendingList.appendChild(li);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  addToLS(text);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDos(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const pendingToDos = localStorage.getItem(PENDING_LS);
  const finishedToDos = localStorage.getItem(FINISHED_LS);
  const parsedPendingToDos = JSON.parse(pendingToDos);
  const parsedFinishedToDos = JSON.parse(finishedToDos);

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
