const sounds = ["applause", "bonfire", "burning", "phone-ring", "sea", "timer"];

// 버튼요소 만들어서 넣기
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  //   클릭시 소리 재생
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.body.appendChild(btn);
});

function stopSound() {
  // 모든 사운드를 멈추기
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();

    // 버튼 누르면 이전 재생과 상관없이 사운드를 처음에서부터 시작하기
    song.currentTime = 0;
  });
}
