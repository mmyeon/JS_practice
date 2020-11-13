const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const popup = document.getElementById("container");

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  popup.classList.add("active");
}

function closeModal() {
  popup.classList.remove("active");
}

// 모달창 밖 클릭하면 모달창에서 나오기
window.onclick = function (event) {
  if (event.target == container) {
    popup.classList.remove("active");
  }
};
