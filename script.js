const display = document.querySelector(".display");
let oldValue = "";
let newValue = "";
let x = "";
let y = "";
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
  oldValue = display.value;
  newValue = oldValue + value;
  display.value = "";
  display.value = newValue;
}

function updateNumbers(n) {
  if (!operator) {
    x = x + n;
  } else {
    y = y + n;
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
  newValue = "";
  oldValue = "";
  x = "";
  y = "";
  operator = null;
  display.value = "";
});

document.querySelector("#sum").addEventListener("click", (e) => {
  operator = add;
});

document.querySelector("#sub").addEventListener("click", (e) => {
  operator = sub;
});

document.querySelector("#mul").addEventListener("click", (e) => {
  operator = mul;
});

document.querySelector("#div").addEventListener("click", (e) => {
  operator = div;
});

document.querySelector("#equal").addEventListener("click", () => {
  const result = operate(operator, x, y);
  display.value = result;
  x = result;
  y = "";
  operator = null;
});
