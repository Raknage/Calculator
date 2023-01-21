const display = document.querySelector(".display");
let newValue = null;
let x = null;
let y = null;
let operator = null;

const add = function (x, y) {
  return +x + +y;
};

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
  display.value = "";
  newValue = display.value + value;
  display.value = newValue;
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
    updateNumbers(e.target.innerText);
  });
});

document.querySelector("#clr").addEventListener("click", () => {
  newValue = null;
  x = null;
  y = null;
  operator = null;
  display.value = "";
});

document.querySelector("#sum").addEventListener("click", (e) => {
  operator = add;
});

document.querySelector("#equal").addEventListener("click", () => {
  const result = operate(operator, x, y);
  display.value = result;
  x = result;
  y = null;
  operator = null;
});
