const select = document.querySelector(".js-select");

const USER_LOCATION = "country";

function handleChange() {
  const selected = select.value;
  localStorage.setItem(USER_LOCATION, selected);
}

function loadCountry() {
  const selected = localStorage.getItem(USER_LOCATION);

  if (selected) {
    const option = document.querySelector(`option[value=${selected}]`);
    console.log(option);
    option.selected = true;
  }
}

loadCountry();
select.addEventListener("change", handleChange);
