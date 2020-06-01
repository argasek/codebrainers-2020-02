// 1. Wystaw użytkownikowi adekwatną ocenę jeśli zdecyduje się na opcję "0 pytań" "no questions asked".
// 2. Przerób poniższy kod w taki sposób, aby jeśli użytkownik nie zdał, zadawał on (kod!) pytania tak długo,
//    aż użytkownik zda! Podpowiedź: zamiast wyświetlać okno komunikatu "Passed: false", pomiń wyświetlanie tego
//    okna i zadawaj pytania tak długo, aż stosunek odpowiedzi poprawnych do niepoprawnych będzie 0.6 do 0.4 ;)
// 3*. Przerób poniższy kod w taki sposób, aby sprawdzał nie tylko znajomość tabliczki mnożenia, ale wszystkich
//    czterech podstawowych działań, tj. + - / *. (Czyli przy każdym przejściu pętli losował nie tylko 2 liczby,
//    ale również rodzaj działania jaki ma między nimi zajść).
// 3a*. Dzielenie może być "trochę problematyczne". Znajdź sposób, jak to "trochę" obejść ;)
var values = ['+', '-', '*', '//'];

function question(a, b, option) {
        let values = [
         `How much is ${a} + ${b}?`,
         `How much is ${a} - ${b}?`,
         `How much is ${a} * ${b}?`,
         `How much is ${a} / ${b}?`,
    ]
    return values[option];
}
function getOperator() {
    return values[Math.floor(Math.random() * values.length)];
}

console.log(getOperator());

function drawNumber(scale) {
    return parseInt(Math.random() * scale) + 1;
}

let questionCount;

do {
    questionCount = parseInt(prompt("How many questions do you want to answer?"));
    console.log(questionCount);
} while (isNaN(questionCount) || questionCount < 0);

if (questionCount === 0) {
    alert('Are you joking me, mate ?. Next time will be better :P Your favorite number is ' + questionCount);
} else {
    let correctAnswerCount = 0;
    let allQuestionCount = 1;
    let passed = 0;

    while (allQuestionCount <= questionCount) {
        const a = drawNumber(10);
        const b = drawNumber(10);
        const factor = getOperator();
        const answer = prompt(question(a, b, factor));
        if (parseInt(answer) === (a, factor, b)) {
            correctAnswerCount++;
        }
        passed = correctAnswerCount / questionCount >= 0.6;
        passed = correctAnswerCount / allQuestionCount;
        allQuestionCount++;

        console.log(allQuestionCount);
        console.log(passed);
        console.log(correctAnswerCount);

    }
    alert('Passed: ' + passed + '\nNumber of correct answers: ' + correctAnswerCount + '/' + questionCount);
}
