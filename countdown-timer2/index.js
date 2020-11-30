const clock = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  // miliseconds를 리턴함
  // 1초 = 1000ms
  const now = new Date();
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);

  const days = Math.floor(hoursInMs / 24);
  const hours = Math.floor(hoursInMs % 24);
  const minutes = Math.floor(minutesInMs % 60);
  const seconds = Math.floor(secondsInMs % 60);

  // 중복 피하기
  const daysStr = `${days < 10 ? 0`${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}d`;

  clock.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
