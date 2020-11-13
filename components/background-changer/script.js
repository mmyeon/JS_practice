const btn = document.getElementById("btn");

btn.addEventListener("click", changeBgColor);

function changeBgColor() {
  document.body.style.background = randomBg();
}

function randomBg() {
  // case 1
  //   컬러가 많이 바뀜
  //   let bgColor = Math.floor(Math.random() * 16777215).toString(16);
  //   return "#" + bgColor;

  // case 2
  return `hsl(${Math.floor(Math.random() * 240)}, 97%, 79%)`;
}
