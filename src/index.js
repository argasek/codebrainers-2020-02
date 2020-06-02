// Zad. 1
//
// Sprawdź proszę, czy możemy naszą funkcję do generowania liczb z zakresu 1..scale w postaci
//    Math.floor(Math.random() * scale) + 1
// zastąpić funkcją
//    Math.ceil(Math.random() * scale)
// Jeżeli nie, dlaczego? Odpowiedź uzasadnij.
//
// Zad. 2
//

const PASSING_CRITERIA = 0.6;

let questionCount;
let correctAnswerCount = 0;
let a, b;

function question(a, b, operator) {
  return `How much is ${ a } ${ operator } ${ b }?`;
}

function drawNumber(scale) {
  return Math.floor(Math.random() * scale) + 1;
}

// 1..4
function drawOperator(index) {
  let operatorDrawn;
  switch (index) {
    case 1:
      operatorDrawn = '+';
      break;
    case 2:
      operatorDrawn = '-';
      break;
    case 3:
      operatorDrawn = '*';
      break;
    case 4:
      operatorDrawn = '/';
      break;
    default:
      console.error('Operator needs to have index 1..4');
  }

  return operatorDrawn;
}

function drawPair(operator) {
  let x = drawNumber(10);
  let y = drawNumber(10);

  if (operator === '+' || operator === '*') {
    a = x;
    b = y;
    return;
  }

  if (operator === '-') {
    a = Math.max(x, y);
    b = Math.min(x, y);
    return;
  }

  a = x * y;
  b = Math.min(x, y);
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      console.error('Incorrect operator: ', operator);
  }
}

function startAskingQuestions() {
  let passed = false;
  let askedQuestionCount = 0;
  do {
    const operator = drawOperator(drawNumber(4));
    drawPair(operator);
    const answer = prompt(question(a, b, operator));

    console.log(a, operator, b, answer);

    askedQuestionCount++;

    if (parseInt(answer) === calculate(a, b, operator)) {
      correctAnswerCount++;
    }

    const exceededOrMetNumberOfRequiredQuestions = askedQuestionCount >= questionCount;
    const meetAcceptanceCriteria = correctAnswerCount / askedQuestionCount >= PASSING_CRITERIA;

    if (exceededOrMetNumberOfRequiredQuestions && meetAcceptanceCriteria) {
      passed = true;
    }

  } while (passed === false);

  alert(
    'Passed: '
    + passed
    + '\nCorrect answers / questions: '
    + correctAnswerCount + '/'
    + askedQuestionCount + ' '
    + 'ratio: '
    + correctAnswerCount / askedQuestionCount
  );
}

do {
  questionCount = parseInt(prompt("How many questions do you want to answer?"));
  console.log(questionCount);
} while (isNaN(questionCount) || questionCount < 0);

// questionCount = 10;

if (questionCount === 0) {
  alert('Passed: ' + false + '\nNumber of correct answers: well, no questions were asked anyway! ¯\\_(ツ)_/¯');
} else {
  startAskingQuestions();
}
