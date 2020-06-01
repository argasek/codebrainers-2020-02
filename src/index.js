// 1. Wystaw użytkownikowi adekwatną ocenę jeśli zdecyduje się na opcję "0 pytań" "no questions asked".
// 2. Przerób poniższy kod w taki sposób, aby jeśli użytkownik nie zdał, zadawał on (kod!) pytania tak długo,
//    aż użytkownik zda! Podpowiedź: zamiast wyświetlać okno komunikatu "Passed: false", pomiń wyświetlanie tego
//    okna i zadawaj pytania tak długo, aż stosunek odpowiedzi poprawnych do niepoprawnych będzie 0.6 do 0.4 ;)
// 3*. Przerób poniższy kod w taki sposób, aby sprawdzał nie tylko znajomość tabliczki mnożenia, ale wszystkich
//    czterech podstawowych działań, tj. + - / *. (Czyli przy każdym przejściu pętli losował nie tylko 2 liczby,
//    ale również rodzaj działania jaki ma między nimi zajść).
// 3a*. Dzielenie może być "trochę problematyczne". Znajdź sposób, jak to "trochę" obejść ;)

function question(a, b, operator) {
    let choices = {
        1: `How much is ${a} + ${b}?`,
        2: `How much is ${a} - ${b}?`,
        3: `How much is ${a} * ${b}?`,
        4: `How much is ${a} / ${b}?`,
    }
    return choices[operator]
}
function answers(a, b, operator) {
    let choices = {
        1: a + b,
        2: a - b,
        3: a * b,
        4: a / b,
    }
    return choices[operator]
}

function round(n, k) {
    let factor = Math.pow(10, k + 1);
    n = Math.round(Math.round(n * factor) / 10);
    return n / (factor / 10);
}

function drawNumber(scale) {
    return parseInt(Math.random() * scale) + 1;
}

let questionCount;

do {
    questionCount = parseInt(prompt("How many questions do you want to answer?"));
} while (isNaN(questionCount) || questionCount < 0);

let correctAnswerCount = 0;

if (questionCount === 0) {
    do {
        correctAnswerCount = parseInt(Math.random() * 100) + 1;
        questionCount = parseInt(Math.random() * 100) + 1;
    } while (questionCount <= correctAnswerCount);

    const passed = correctAnswerCount / questionCount >= 0.6;

    alert('That\'s a smart move! Roll the wheel than and get a random scores ;)');
    alert(`Passed: ${passed}\nYour score is: ${correctAnswerCount}/${questionCount}!`)
}
else {
    do {
        for (let i = 0; i < questionCount; i++) {
            const a = drawNumber(10);
            const b = drawNumber(10);
            const operator = 4;
            const answer = prompt(question(a, b, operator));
            if (String(answer) === String(round(answers(a, b, operator), 1))) {
                correctAnswerCount++;
            } else {
                questionCount++;
            }

        }
    } while ((correctAnswerCount / questionCount) <= 0.6);
    const passed = correctAnswerCount / questionCount >= 0.6;

    alert('Passed: ' + passed + '\nNumber of correct answers: ' + correctAnswerCount + '/' + questionCount);
}
