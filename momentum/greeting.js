const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_ON = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // 이벤트가 막힌 상태
  event.preventDefault();
  // 현재 입력된 값 가져오기
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greetings.classList.add(SHOWING_ON);
  greetings.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    //   she is not
    askForName();
  } else {
    //   she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
