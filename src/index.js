function question(a, b) {
  return `How much is ${ a } * ${ b }?`;
}

function drawNumber(scale) {
  return parseInt(Math.random() * scale) + 1;
}

const questionCount = 5;
let correctAnswerCount = 0;

for (let i = 0; i < questionCount; i++) {
  let a = drawNumber(10);
  let b = drawNumber(10);
  let answer = prompt(question(a, b));
  if (parseInt(answer) === a * b) {
    correctAnswerCount++;
  } else {
  }

  console.log(question(a, b));
}

let passed;
// undefined
console.log(correctAnswerCount); //9
console.log(questionCount); //10
console.log(correctAnswerCount/questionCount); //0.9
console.log(0.6 * questionCount); //6


if (correctAnswerCount/questionCount >= 0.6) {
  passed = true;
} else {
  passed = false;
}

alert('Passed: ' + passed + '\nNumber of correct answers: ' + correctAnswerCount + '/' + questionCount);

