const toggle = document.getElementById("toggle");

toggle.addEventListener("change", changeBg);

function changeBg(e) {
  document.body.classList.toggle("dark", e.target.checked);
}
