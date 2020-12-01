const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// 변수는 상수로 관리
const TODOS_LS = "toDos";

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  span.innerText = text;
  delBtn.innerText = "❌";

  //   toDoItem.innerHTML = `
  //   <span>${text}</span>
  //   `;

  li.appendChild(delBtn);
  li.appendChild(span);
  // 기존 요소에 li 추가하기
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = toDoInput.value;
  toDoInput.value = "";
  paintTodo(currentValue);
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
