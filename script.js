// Variables
let displayValue = "0";

let numberA = "";
let numberB = "";
let numberTotal = "";

let operator = "";

// DOM lines
// DOM to change displayOutput
let displayOutput = document.getElementById('displayOutput');
displayOutput.innerHTML = displayValue.toString();

// DOM to change calculationOutput
let calculationOutput = document.getElementById('calculationOutput');
calculationOutput.innerHTML = numberA.toString() + operator.toString();


const numbers = document.querySelectorAll('.number');
const decimal = document.querySelector('.decimal');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');

clear.addEventListener('click', clearAll);

// Adds an event listener to each button to add to the number variables
numbers.forEach(number => {
  number.addEventListener('click', e => {
    if (operator == "") {
      numberA += e.target.innerText;
      calculationOutput.innerHTML = numberA.toString();
      console.log(numberA);
    } else {
      numberB += e.target.innerText;
      calculationOutput.innerHTML = numberB.toString();
      console.log(numberB);
    }
  });
});

// Adds an event listener to the operator buttons and calculates based on that
operators.forEach(operatorChoice => {
  operatorChoice.addEventListener('click', e => {
    if (e.target.id !== "equals") {
      operator = e.target.id;

      calculationOutput.innerHTML = numberA.toString() + ' ' + e.target.innerHTML;
      console.log(numberA);
      console.log(operator);

      // checks to see if numberB has a number attached to avoid crashes
    } else if (e.target.id == "equals" && numberB !== "") {
      numberTotal = operate(operator, parseFloat(numberA), parseFloat(numberB));
      console.log(equals());

    } else {
      clearAll();
    }
  });
});

// calculation functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Bruh no."
  } else {
    return num1 / num2;
  }
}

function equals() {
  numberA = numberTotal;
  numberB = "";

  displayOutput.innerHTML = numberTotal.toString();
  return numberTotal;
}

// function that calls calculation function depending on operator choice
function operate(choice, num1, num2) {
  switch (choice) {
    case "plus":
      return add(num1, num2);
      break;
    case "minus":
      return subtract(num1, num2);
      break;
    case "multiply":
      return multiply(num1, num2);
      break;
    case "divide":
      return divide(num1, num2);
      break;
    default:
      break;
  }
}

// function that resets calculator
function clearAll() {
  displayValue = "0";

  numberA = "";
  numberB = "";
  numberTotal = "";

  operator = "";
  displayOutput.innerHTML = displayValue
  calculationOutput.innerHTML = numberA.toString()
}
