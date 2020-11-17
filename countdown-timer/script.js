const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// 카운트다운 할 날짜설정
// const newYears = `1 Jan 2021`;
const newYears = `25 Dec 2020`;

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

// 1초가 아닌 01초로 찍히도록 설정
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

// 1초마다 카운트다운 업데이트
setInterval(countdown, 1000);
