function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
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

let result1;
let result2;
let symbol;

const numButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const displaySmall = document.querySelector("[data-displaySmall]");
const displayBig = document.querySelector("[data-displayBig]");
const point = document.querySelector("[data-point]");
const backspaceKey = document.querySelector("[data-backspace]");

function addNumber(num) {
  if (num === "." && displayBig.textContent.includes(".")) return
  displayBig.textContent += num; //SE SUMAN STRINGS (2+3 = 23, NO 2+3=5)
  result1 = displayBig.textContent;
}

function chooseOperand(operand) {
  if (displayBig.textContent == "") return;
  if (displaySmall.textContent !== "") {
    equal();
  }
  displaySmall.textContent = displayBig.textContent;
  symbol = operand;
  result2 = result1;
  displayBig.textContent = "";
  result1 = displaySmall.textContent;
  displaySmall.textContent += operand;
}

function allClear() {
  displayBig.textContent = "";
  displaySmall.textContent = "";
  result1 = 0;
  result2 = 0;
  symbol = null;
}

function backspace() {
  displayBig.textContent = displayBig.textContent.slice(0,-1);
  result1 = displayBig.textContent;
}

function equal() {
  if (result1 == null || result2 == null || symbol == null) return
  if (result1 == 0 && symbol == "/") {
    alert("piss off pipsqueak, no dividing by 0 round these parts");
    allClear();
    return;
  }
  displayBig.textContent = operate(result2, result1, symbol);
  result1 = displayBig.textContent;
  displaySmall.textContent = "";
}

clearButton.addEventListener("click", () => {
  allClear();
});

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addNumber(button.textContent); //EL TEXT CONTENT ES UN STRING, ASI QUE ESTOY PASANDO ESO A LAS FUNCIONES
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperand(button.textContent);
  });
});

equalButton.addEventListener("click", () => {
  equal();
});

point.addEventListener("click",()=>{
  addNumber(point.textContent);
})

backspaceKey.addEventListener("click",()=>{
  backspace();
})

