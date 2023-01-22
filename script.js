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
  updateNumbers(currentNumber);
  operator = add;
  equal();
});

document.querySelector("#sub").addEventListener("click", (e) => {
  updateNumbers(currentNumber);
  operator = sub;
  equal();
});

document.querySelector("#mul").addEventListener("click", (e) => {
  updateNumbers(currentNumber);
  operator = mul;
  equal();
});

document.querySelector("#div").addEventListener("click", (e) => {
  updateNumbers(currentNumber);
  operator = div;
  equal();
});

document.querySelector("#equal").addEventListener("click", () => {
  updateNumbers(currentNumber);
  equal();
});

function equal() {
  if (y) {
    const result = operate(operator, x, y);
    updateDisplay(result);
    x = result;
    y = "";
  }
}
