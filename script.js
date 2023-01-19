let inputArray = [];
const display = document.querySelector(".display");

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  operator(x, y);
}

function updateDisplay(button) {
  inputArray.push(button);
  display.value = button;
}
