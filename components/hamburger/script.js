const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", handleClick);

function handleClick() {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
}
