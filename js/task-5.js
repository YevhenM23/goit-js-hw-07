const colorChangeBut = document.querySelector(".change-color");
const colorNames = document.querySelector(".color");
const body = document.querySelector("body");

colorChangeBut.addEventListener("click", handleClick);

function handleClick() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorNames.textContent = newColor;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
     
















