function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
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

function addNumber(num) {
  displayBig.textContent += num //SE SUMAN STRINGS (2+3 = 23, NO 2+3=5)
  result1 = num
}

function chooseOperand(operand) {
  if (displayBig.textContent == "") return
  if (displaySmall.textContent !== "") {
    equal();
  }
  displaySmall.textContent = displayBig.textContent;
  symbol = operand
  result2 = result1;
  displayBig.textContent = "";
  result1 = displaySmall.textContent;
  displaySmall.textContent += operand;
}

function allClear() {
  displayBig.textContent = "";
  displaySmall.textContent = "";
}

function equal(){
  displayBig.textContent = operate(result2,result1,symbol);
  result1 = displayBig.textContent
  displaySmall.textContent = "";
}

clearButton.addEventListener("click",()=>{
  allClear();
})

numButtons.forEach(button=> {
  button.addEventListener("click",()=>{
    addNumber(button.textContent) //EL TEXT CONTENT ES UN STRING, ASI QUE ESTOY PASANDO ESO A LAS FUNCIONES
  })
})

operatorButtons.forEach(button=> {
  button.addEventListener("click",()=>{
    chooseOperand(button.textContent);
  })
})

equalButton.addEventListener("click",()=>{
  equal()
})