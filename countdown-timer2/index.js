const clock = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  const totalSeconds = (xmasDay - now) / 1000;

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds) % 60;

  const daysString = `${days < 10 ? `0${days}d` : `${days}d`}`;
  const hoursString = `${hours < 10 ? `0${hours}d` : `${hours}d`}`;
  const minutesString = `${minutes < 10 ? `0${minutes}d` : `${minutes}d`}`;
  const secondsString = `${seconds < 10 ? `0${seconds}d` : `${seconds}d`}`;

  clock.innerText = `${daysString} ${hoursString} ${minutesString} ${secondsString}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
