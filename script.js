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

const numButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const displaySmall = document.querySelector("[data-displaySmall]");
const displayBig = document.querySelector("[data-displayBig]");

function addNumber(num) {
  displayBig.textContent += num //SE SUMAN STRINGS (2+3 = 23, NO 2+3=5)
}

function chooseOperand(operand) {
  if (displayBig.textContent == "") return
  if (displaySmall.textContent !== "") {
    equal();
  }
  displaySmall.textContent = displayBig.textContent;
  displayBig.textContent = "";
  displaySmall.textContent += operand;
}

function allClear() {
  displayBig.textContent = "";
  displaySmall.textContent = "";
}

function equal(){
  const splitter = (displaySmall.textContent + displayBig.textContent).split('');
  alert(operate(splitter[0],splitter[2],splitter[1]))
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