const toDoForm = document.querySelector("#js-toDoForm"),
  input = toDoForm.querySelector("input");
pendingListDom = document.querySelector("#js-pendingList");

const PENDING = "pending";

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

function savePendingToStorage(toDos) {
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
    const delBtn = document.createElement("button");

    span.innerText = v.text;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", () => {
      deletePendingToDo(v.id);
    });

    pendingListDom.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = v.id;
  });
}

function deletePendingToDo(id) {
  const pendingList = JSON.parse(localStorage.getItem(PENDING));

  const newPendingList = pendingList.filter(function (v) {
    return v.id !== parseInt(id);
  });

  savePendingToStorage(newPendingList);

  displayTaskToPendingList();
}

init();
