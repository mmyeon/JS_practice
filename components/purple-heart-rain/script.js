function createHeart() {
  // 요소 만들기
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerText = "💜";

  //   heart left값을 랜덤으로 줘서 하트 위치 변경되도록 설정
  heart.style.left = Math.random() * 100 + "vw";

  //   애니메이션 실행 시간 다이나믹하게 변경
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  //   요소 바디에 삽입하기
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 1000);
