const toDoForm = document.querySelector("#js-toDoForm"),
  input = toDoForm.querySelector("input");
pendingListDom = document.querySelector("#js-pendingList");

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
  displayTaskToPendingList();
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

function displayTaskToPendingList() {
  const pendingList = JSON.parse(localStorage.getItem(PENDING));

  pendingListDom.innerHTML = "";

  pendingList.forEach((v) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = v.text;
    pendingListDom.appendChild(li);
    li.appendChild(span);
    li.id = v.id;
  });
}

init();
