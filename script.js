const display = document.querySelector(".display");
let newValue = null;
let x = null;
let y = null;
let operator = null;

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

function updateDisplay(value) {
  newValue = display.value + value;
  display.value = newValue;
  updateNumbers(newValue);
}

function updateNumbers(n) {
  if (!operator) {
    x = n;
  } else {
    y = n;
  }
}

const numArray = document.querySelectorAll(".num");
numArray.forEach((e) => {
  e.addEventListener("click", (e) => {
    updateDisplay(e.target.innerText);
  });
});
