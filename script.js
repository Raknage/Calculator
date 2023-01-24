const display = document.querySelector(".display");
let x = "";
let y = "";
let operator = null;
let currentNumber = "";
let calc = false;

function add(x, y) {
  return +x + +y;
}

function sub(x, y) {
  return +x - +y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  return operator(x, y);
}

function updateDisplay(value) {
  display.value = value;
}

function updateNumbers(n) {
  if (!operator) {
    x = n;
  } else {
    y = n;
  }
  currentNumber = "";
}

const numArray = document.querySelectorAll(".num");
numArray.forEach((e) => {
  e.addEventListener("click", (e) => {
    currentNumber = currentNumber + e.target.innerText;
    updateDisplay(currentNumber);
  });
});

document.querySelector("#clr").addEventListener("click", () => {
  x = "";
  y = "";
  operator = null;
  display.value = "";
  currentNumber = "";
});

document.querySelector("#sum").addEventListener("click", (e) => {
  operatorEvent(add);
});

document.querySelector("#sub").addEventListener("click", (e) => {
  operatorEvent(sub);
});

document.querySelector("#mul").addEventListener("click", (e) => {
  operatorEvent(mul);
});

document.querySelector("#div").addEventListener("click", (e) => {
  operatorEvent(div);
});

document.querySelector("#equal").addEventListener("click", () => {
  updateNumbers(currentNumber);
  equal();
});

function operatorEvent(op) {
  updateNumbers(currentNumber);
  equal();
  operator = op;
  equal();
}

function equal() {
  if (y) {
    const result = operate(operator, x, y);
    updateDisplay(result);
    x = result;
    y = "";
  }
}
