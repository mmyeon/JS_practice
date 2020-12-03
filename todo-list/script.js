const toDoForm = document.querySelector(".js-toDoForm"),
  input = toDoForm.querySelector("input");

const PENDING = "pending";

const pendingToDos = [];

function handleSubmit(e) {
  e.preventDefault();

  const toDo = {
    id: pendingToDos.length + 1,
    text: input.value,
  };

  input.value = "";

  pendingToDos.push(toDo);
  saveToStorage(pendingToDos);
}

function saveToStorage(toDos) {
  localStorage.setItem(PENDING, JSON.stringify(toDos));
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
