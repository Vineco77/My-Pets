let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let list = container.querySelector('.list')

let active = 0;
let firstPosition = 0;
let lastPosittion = items.length - 1;

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
  active = active - 1 < firstPosition ? lastPosittion : active - 1;
  setSlider();
  items[active].classList.add("active");
};

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
  active = active + 1 > lastPosittion ? 0 : active + 1;
  setSlider();
  items[active].classList.add("active");
};

function setSlider() {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");

}
