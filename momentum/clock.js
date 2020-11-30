const clockContainer = document.querySelector(".js-clock");
clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? 0`${hours}` : hours} : ${
    minutes < 10 ? 0`${minutes}` : minutes
  } : ${seconds < 10 ? 0`${seconds}` : seconds} `;
}

function init() {
  // 초기에 시간을 얻어야 새로고침해도 시간이 보여짐
  getTime();
  setInterval(getTime, 1000);
}

init();
