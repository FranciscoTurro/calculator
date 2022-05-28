function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else {
    return "Valid operator please";
  }
}

const numButtons = document.querySelectorAll(".num");
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent = button.id;
    secDis.textContent += button.id;
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
  button.addEventListener("click", () => {
    secDis.textContent += button.id;
  });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "";
  secDis.textContent = "";
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {});

const display = document.getElementById("display");

const secDis = document.getElementById("secondary-display");
