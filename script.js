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
const clear = document.querySelector('.clear').addEventListener('click', clearAll);


// Adds an event listener to each button to add to the number variables
numbers.forEach(number => {
    number.addEventListener('click', e => {
      if (operator == "") {
        numberA += e.target.innerText;
        calculationOutput.innerHTML = numberA.toString()
        console.log(numberA);
      } else {
        numberB += e.target.innerText;
        console.log(numberB);
      }
    });
});

// Adds an event listener to the operator buttons and calculates based on that
operators.forEach(operatorChoice => {
  operatorChoice.addEventListener('click', e => {
    if (e.target.id !== "equals") {
      operator = e.target.id;

      console.log(numberA);
      console.log(operator);

    } else {
      numberTotal = operate(operator, parseInt(numberA), parseInt(numberB));

      console.log(numberB);
      console.log(numberA);
      console.log(operator);
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
  if(num2 === 0) {
    return "Bruh no."
  } else {
    return num1 / num2;
  }
}

// function that calls calculation function depending on operator choice
function operate(choice, num1, num2) {
  switch (choice) {
    case "add":
      return add(num1, num2);
      break;
    case "subtract":
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
  this.displayValue = "0";

  this.numberA = "";
  this.numberB = "";
  numberTotal = "";

  this.operator = undefined;
}
