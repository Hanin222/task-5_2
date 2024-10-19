const firstNumber = document.querySelector(".first-number");
const operator = document.querySelector(".operator"); // Correct the operator name here
const operator2 = document.querySelector(".operator2");
const calculateBtn = document.querySelector(".calculate");
const resultSpan = document.querySelector(".result");

function calculate() {
  let result = 0;
  const num1 = Number(firstNumber.value); 
  
  if (operator.value == "cm" && operator2.value == "m") {
    result = num1 / 100;
  } else if (operator.value == "cm" && operator2.value == "km") {
    result = num1 / 100000;
  } else if (operator.value == "m" && operator2.value == "cm") {
    result = num1 * 100;
  } else if (operator.value == "m" && operator2.value == "km") {
    result = num1 / 1000;
  } else if (operator.value == "km" && operator2.value == "cm") {
    result = num1 * 100000;
  } else if (operator.value == "km" && operator2.value == "m") {
    result = num1 * 1000;
  }
  
  resultSpan.innerHTML = result; 
}

calculateBtn.addEventListener("click", calculate);
