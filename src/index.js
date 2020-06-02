// 3*. Przerób poniższy kod w taki sposób, aby sprawdzał nie tylko znajomość tabliczki mnożenia, ale wszystkich
//    czterech podstawowych działań, tj. + - / *. (Czyli przy każdym przejściu pętli losował nie tylko 2 liczby,
//    ale również rodzaj działania jaki ma między nimi zajść).
// 3a*. Dzielenie może być "trochę problematyczne". Znajdź sposób, jak to "trochę" obejść ;)

const PASSING_CRITERIA = 0.6;

let questionCount;
let correctAnswerCount = 0;

function question(a, b) {
  return `How much is ${ a } + ${ b }?`;
}

function drawNumber(scale) {
  return parseInt(Math.random() * scale) + 1;
}

function startAskingQuestions() {
  let passed = false;
  let askedQuestionCount = 0;
  do {
    const a = drawNumber(10);
    const b = drawNumber(10);
    const answer = prompt(question(a, b));

    askedQuestionCount++;
    if (parseInt(answer) === a + b) {
      correctAnswerCount++;
    }

    if (askedQuestionCount === questionCount) {
      passed = correctAnswerCount / questionCount >= PASSING_CRITERIA;
    }

    if (askedQuestionCount > questionCount) {
      passed = correctAnswerCount / askedQuestionCount >= PASSING_CRITERIA;
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

if (questionCount === 0) {
  alert('Passed: ' + false + '\nNumber of correct answers: well, no questions were asked anyway! ¯\\_(ツ)_/¯');
} else {
  startAskingQuestions();
}
