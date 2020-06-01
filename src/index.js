// 1. Wystaw użytkownikowi adekwatną ocenę jeśli zdecyduje się na opcję "0 pytań" "no questions asked".
// 2. Przerób poniższy kod w taki sposób, aby jeśli użytkownik nie zdał, zadawał on (kod!) pytania tak długo,
//    aż użytkownik zda! Podpowiedź: zamiast wyświetlać okno komunikatu "Passed: false", pomiń wyświetlanie tego
//    okna i zadawaj pytania tak długo, aż stosunek odpowiedzi poprawnych do niepoprawnych będzie 0.6 do 0.4 ;)
// 3*. Przerób poniższy kod w taki sposób, aby sprawdzał nie tylko znajomość tabliczki mnożenia, ale wszystkich
//    czterech podstawowych działań, tj. + - / *. (Czyli przy każdym przejściu pętli losował nie tylko 2 liczby,
//    ale również rodzaj działania jaki ma między nimi zajść).
// 3a*. Dzielenie może być "trochę problematyczne". Znajdź sposób, jak to "trochę" obejść ;)


// Dzielenie modulo sporo upraszcza sprawę, ale nie wiem czy to nie zbyt okrężne obejście :D


var operators = ['+', '-', '*', '//'];

function getOperator() {
    return operators[Math.floor(Math.random() * operators.length)];
}

console.log(getOperator());

function question(a, b, operation) {
    return `How much is ${a} ${operation} ${b}?`;
}

function drawNumber(scale) {
    return parseInt(Math.random() * scale) + 1;
}

let questionCount;

do {
    questionCount = parseInt(prompt("How many questions do you want to answer?"));
    console.log(questionCount);
} while (isNaN(questionCount) || questionCount < 0);

if (questionCount === 0) {
    alert('You get what you give. Your note is also ' + questionCount);
} else {
    let correctAnswerCount = 0;
    let askedQuestionCount = 1;
    let passed = 0;

    while (passed < 0.6 || (askedQuestionCount <= questionCount)) {
        const a = drawNumber(10);
        const b = drawNumber(10);
        const operator = getOperator();
        const answer = prompt(question(a, b, operator));
        if (parseInt(answer) === a, operator, b) {
            correctAnswerCount++;
        }
        passed = correctAnswerCount / askedQuestionCount;
        askedQuestionCount++;

        console.log(askedQuestionCount);
        console.log(correctAnswerCount);
        console.log(passed);
    }

    alert('You passed!'+ '\nNumber of correct answers: ' + correctAnswerCount + '/' + questionCount);
}
