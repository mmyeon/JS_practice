const toDoForm = document.querySelector("#js-toDoForm"),
  input = toDoForm.querySelector("input"),
  pendingListDOM = document.querySelector("#js-pendingList"),
  finishedListDOM = document.querySelector("#js-finishedList");

const PENDING = "pending";
const FINISHED = "finished";

function savePendingToStorage(toDos) {
  localStorage.setItem(PENDING, JSON.stringify(toDos));
  displayTaskToPendingList();
}

function saveFinishedToStorage(toDos) {
  localStorage.setItem(FINISHED, JSON.stringify(toDos));
  displayTaskToFinishedList();
}

// TODO: displayTaskToFinishedList 과 합쳐서 중복 없애기
function displayTaskToPendingList() {
  const pendingList = JSON.parse(localStorage.getItem(PENDING)) || [];

  pendingListDOM.innerHTML = "";

  pendingList.forEach((v) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");

    span.innerText = v.text;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", () => {
      deletePendingToDo(v.id);
    });

    checkBtn.innerText = "✅";
    checkBtn.addEventListener("click", () => {
      checkPendingToDos(v.id);
    });

    pendingListDOM.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = v.id;
  });
}

function displayTaskToFinishedList() {
  const finishedList = JSON.parse(localStorage.getItem(FINISHED)) || [];

  finishedListDOM.innerHTML = "";

  finishedList.forEach((v) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");

    span.innerText = v.text;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", () => {
      deleteFinishedToDo(v.id);
    });

    checkBtn.innerText = "⏪ ";
    checkBtn.addEventListener("click", () => {
      revertFinishedToDos(v.id);
    });

    finishedListDOM.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = v.id;
  });
}

function revertFinishedToDos(id) {
  const finishedList = JSON.parse(localStorage.getItem(FINISHED));
  const pendingList = JSON.parse(localStorage.getItem(PENDING));

  const newFinishedList = finishedList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  const revertedToDos = finishedList.filter(function (v) {
    return v.id === parseInt(id);
  });

  console.log("revertedToDos", revertedToDos);

  saveFinishedToStorage(newFinishedList);
  displayTaskToFinishedList();

  pendingList.push(revertedToDos[0]);
  savePendingToStorage(pendingList);
}

function checkPendingToDos(id) {
  const pendingList = JSON.parse(localStorage.getItem(PENDING));
  const finishedList = JSON.parse(localStorage.getItem(FINISHED)) || [];

  const newPendingList = pendingList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  // TODO: 한개만 가져오기
  const newFinishedList = pendingList.filter(function (v) {
    return v.id === parseInt(id);
  });

  finishedList.push(newFinishedList[0]);

  savePendingToStorage(newPendingList);

  saveFinishedToStorage(finishedList);
}

function deletePendingToDo(id) {
  const pendingList = JSON.parse(localStorage.getItem(PENDING));

  const newPendingList = pendingList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  savePendingToStorage(newPendingList);
  displayTaskToPendingList();
}

function deleteFinishedToDo(id) {
  const finishedList = JSON.parse(localStorage.getItem(FINISHED));

  const newFinishedList = finishedList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  saveFinishedToStorage(newFinishedList);
  displayTaskToFinishedList();
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
  displayTaskToPendingList();
  displayTaskToFinishedList();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
