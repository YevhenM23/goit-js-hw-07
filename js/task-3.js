const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", handleInput);

function handleInput(event) {
    const val = event.target.value.trim();
    if (val) {
        outputName.textContent = val;
    }
    else {
        outputName.textContent = "Anonymous"
    }
}


























