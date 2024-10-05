const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let dimensions = 30;

createBtn.addEventListener("click", create);
destroyBtn.addEventListener("click", () => {
  input.value = "";
  destroyBoxes();
})

function create() {
  if (input.value < 1 || input.value > 100) {
    return;
  }
  createBoxes(input.value);
}

function createBoxes(amount) {
  destroyBoxes();
  for (let index = 0; index < amount; index++) {
    const element = document.createElement("div");
    element.style.width = `${dimensions}px`;
    element.style.height = `${dimensions}px`;
    element.style.backgroundColor = getRandomHexColor();

    boxes.append(element);
    dimensions += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  dimensions = 30;
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}














