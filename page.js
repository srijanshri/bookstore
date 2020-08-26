const navLeft = document.querySelector(".left");
const navRight = document.querySelector(".right");

const images = document.querySelector(".images");
const colors = document.querySelector(".colored-backgrounds");

let index = 0;

function right() {
  transform((index = index < 4 ? ++index : 0));
}

function left() {
  transform((index = index > 0 ? --index : 4));
}

navLeft.addEventListener("click", left);
navRight.addEventListener("click", right);

function transform(index) {
  images.style.transform = `translateX(-${index * 100}%)`;
  colors.style.transform = `translateX(-${index * 100}%)`;
}
