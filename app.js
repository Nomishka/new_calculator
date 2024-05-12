// Selectors
const display = document.getElementById("display");

// functions

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculation() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
