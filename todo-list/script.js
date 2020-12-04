const toDoForm = document.querySelector("#js-toDoForm"),
  input = toDoForm.querySelector("input"),
  pendingListDOM = document.querySelector("#js-pendingList"),
  finishedListDOM = document.querySelector("#js-finishedList");

const PENDING = "pending";
const FINISHED = "finished";

function savePendingToStorage(toDos) {
  localStorage.setItem(PENDING, JSON.stringify(toDos));
  displayTaskToList(PENDING);
}

function saveFinishedToStorage(toDos) {
  localStorage.setItem(FINISHED, JSON.stringify(toDos));
  displayTaskToList(FINISHED);
}

/**
 * Local Storage의 데이터를 리스트로 표시한다
 * @param {string} type PENDING, FINISHED
 */
function displayTaskToList(type) {
  const storageKey = type === PENDING ? PENDING : FINISHED;
  console.log("storageKey", storageKey);
  const todoList = JSON.parse(localStorage.getItem(storageKey)) || [];

  const todoListDOM = type === PENDING ? pendingListDOM : finishedListDOM;

  todoListDOM.innerHTML = "";

  todoList.forEach((v) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const additinalBtn = document.createElement("button");

    span.innerText = v.text;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", () => {
      type === PENDING ? deletePendingToDo(v.id) : deleteFinishedToDo(v.id);
    });

    additinalBtn.innerText = type === PENDING ? "✅" : "⏪ ";
    additinalBtn.addEventListener("click", () => {
      type === PENDING ? checkPendingToDos(v.id) : revertFinishedToDos(v.id);
    });

    todoListDOM.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(additinalBtn);
    li.id = v.id;
  });
}

function revertFinishedToDos(id) {
  const finishedList = JSON.parse(localStorage.getItem(FINISHED));
  const pendingList = JSON.parse(localStorage.getItem(PENDING));

  const newFinishedList = finishedList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  const revertedToDos = finishedList.find(function (v) {
    return v.id === parseInt(id);
  });

  saveFinishedToStorage(newFinishedList);

  pendingList.push(revertedToDos);
  savePendingToStorage(pendingList);
}

function checkPendingToDos(id) {
  const pendingList = JSON.parse(localStorage.getItem(PENDING));
  const finishedList = JSON.parse(localStorage.getItem(FINISHED)) || [];

  const newPendingList = pendingList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  const newFinishedList = pendingList.find(function (v) {
    return v.id === parseInt(id);
  });

  finishedList.push(newFinishedList);
  console.log(finishedList);

  savePendingToStorage(newPendingList);

  saveFinishedToStorage(finishedList);
}

function deletePendingToDo(id) {
  const pendingList = JSON.parse(localStorage.getItem(PENDING));

  const newPendingList = pendingList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  savePendingToStorage(newPendingList);
}

function deleteFinishedToDo(id) {
  const finishedList = JSON.parse(localStorage.getItem(FINISHED));

  const newFinishedList = finishedList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  saveFinishedToStorage(newFinishedList);
}

function handleSubmit(e) {
  e.preventDefault();
  const pendingList = JSON.parse(localStorage.getItem(PENDING)) || [];

  const toDo = {
    id: pendingList.length + 1,
    text: input.value,
  };

  input.value = "";

  pendingList.push(toDo);
  savePendingToStorage(pendingList);
}

function init() {
  displayTaskToList(PENDING);
  displayTaskToList(FINISHED);
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
