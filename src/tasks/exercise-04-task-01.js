// Task 1
// Modify calculateRandomThings() function so it renders integer numbers as having no fractional digits
// after fractional separator, and if number of fractional digits is non-0, print 3 of them.
// Example:
//    7 - 9 = -2
//    8 / 6 = 1.333
//    4 / 8 = 0.500
//    7 * 5 = 35
//    7 + 5 = 12

function drawNumber(scale) {
  return Math.floor(Math.random() * scale);
}

function drawOperator() {
  const operators = [ '+', '-', '*', '/' ];
  const index = drawNumber(operators.length);
  return operators[index];
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const add = function (a, b) {
  return a + b;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const subtract = function (a, b) {
  return a - b;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const multiply = function (a, b) {
  return a * b;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const divide = function (a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.error('Cannot divide by 0!');
    return 0;
  }
};

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {string} operator
 * @return {number}
 */
function calculate(a, b, operator) {
  const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
  };

  const operation = operations[operator];
  return operation(a, b);
}

function calculateRandomThings(questionCount) {
  for (let i = 0; i < questionCount; i++) {
    const a = drawNumber(10);
    const b = drawNumber(10);
    const operator = drawOperator();
    const result = calculate(a, b, operator);
    const resultAsString = result % 1 === 0 ? result : result.toFixed(3);
    console.log(`${a} ${operator} ${b} = ${resultAsString}`);
  }
}


calculateRandomThings(5);