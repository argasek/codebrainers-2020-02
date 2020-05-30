function question(a, b) {
  return `How much is ${ a } * ${ b }?`;
}

function drawNumber(scale) {
  return parseInt(Math.random() * scale) + 1;
}

const questionCount = 1;
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
if (correctAnswerCount/questionCount >= 0.6 * questionCount) {
  passed = true;
} else {
  passed = false;
}

alert('Passed: ' + passed + '\nNumber of correct answers: ' + correctAnswerCount + '/' + questionCount);

