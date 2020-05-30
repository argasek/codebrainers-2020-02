function question(a, b) {
  return `How much is ${ a } * ${ b }?`;
}

function drawNumber(scale) {
  return parseInt(Math.random() * scale) + 1;
}

const questionCount = prompt("How many questions do you want to answer?");
let correctAnswerCount = 0;

for (let i = 0; i < questionCount; i++) {
  const a = drawNumber(10);
  const b = drawNumber(10);
  const answer = prompt(question(a, b));
  if (parseInt(answer) === a * b) {
    correctAnswerCount++;
  } else {
  }

  console.log(question(a, b));
}

// undefined
console.log(correctAnswerCount); //9
console.log(questionCount); //10
console.log(correctAnswerCount/questionCount); //0.9
console.log(0.6 * questionCount); //6


const passed = correctAnswerCount / questionCount >= 0.6;

alert('Passed: ' + passed + '\nNumber of correct answers: ' + correctAnswerCount + '/' + questionCount);

