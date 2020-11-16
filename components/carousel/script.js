// 이미지 담는 컨테이너
const container = document.getElementById("container");
// 이미지들
const img = document.querySelectorAll("img");

let currentIdx = 0;

function run() {
  container.style.transform = `translateX(${-currentIdx * 500}px)`;

  currentIdx++;

  if (currentIdx === img.length) {
    currentIdx = 0;
  }
}

setInterval(run, 2000);

// 다른 예시

// let idx = 0;

// function run() {
//   idx++;

//   if (idx > img.length - 1) {
//     idx = 0;
//   }

//   imgs.style.transform = `translateX(${-idx * 500}px)`;
// }

// setInterval(run, 2000);
