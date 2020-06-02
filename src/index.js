// 1. Wystaw użytkownikowi adekwatną ocenę jeśli zdecyduje się na opcję "0 pytań" "no questions asked".
// 2. Przerób poniższy kod w taki sposób, aby jeśli użytkownik nie zdał, zadawał on (kod!) pytania tak długo,
//    aż użytkownik zda! Podpowiedź: zamiast wyświetlać okno komunikatu "Passed: false", pomiń wyświetlanie tego
//    okna i zadawaj pytania tak długo, aż stosunek odpowiedzi poprawnych do niepoprawnych będzie 0.6 do 0.4 ;)
// 3*. Przerób poniższy kod w taki sposób, aby sprawdzał nie tylko znajomość tabliczki mnożenia, ale wszystkich
//    czterech podstawowych działań, tj. + - / *. (Czyli przy każdym przejściu pętli losował nie tylko 2 liczby,
//    ale również rodzaj działania jaki ma między nimi zajść).
// 3a*. Dzielenie może być "trochę problematyczne". Znajdź sposób, jak to "trochę" obejść ;)

// function question(a, b) {
//
//     return `How much is ${a} + ${b}?`;
// }
// function askCalc() {
const l = parseInt(prompt("What kind of calculation - you need? "));
// }

function question(a,b) {
    if (l === 1) {
        return `How much is ${a} + ${b}?`;
    }
    if (l=== 2) {
        return `How much is ${a} - ${b}?`;
    }
    if (l===3) {
        return `How much is ${a} * ${b}?`;
    }

    if (l ===4) {
        return `How much is ${a} / ${b}?`;
    }
}

function answerComp() {

    if (l === 1) {
        return a + b;
    }
    if (l === 2) {
        return  a - b;
    }
    if (l ===3) {
        return a * b;
    }

    if (l ===4) {
        return a / b;
    }
}
function drawNumber(scale) {
    return parseInt(Math.random() * scale) + 1;
}

let questionCount;

do {
    questionCount = parseInt(prompt("How many questions do you want to answer?"));
    console.log(questionCount);
    if (questionCount === 0) {
        alert('Chicken!!!');

    }
} while (isNaN(questionCount) || questionCount < 0)



let correctAnswerCount = 0;

for (let i = 0; i < questionCount; i++) {
    const a = drawNumber(10);
    const b = drawNumber(10);
    const answer = prompt(question(a, b));
    if (parseInt(answer) === a + b) {
        correctAnswerCount++;
    }

    console.log(question(a, b));
}

const passed = correctAnswerCount / questionCount >= 0.6;
alert('Passed: ' + passed + '\nNumber of correct answers: ' + correctAnswerCount + '/' + questionCount);


    do {
        const a = drawNumber(10);
        const b = drawNumber(10);
        const answer = prompt(question(a, b));
        if (question(a,b) ){
            correctAnswerCount++;
        }
        questionCount++;

        console.log(question(a, b));
    } while (passed);
if (passed) {
    alert('Passed: ' + passed + '\nNumber of correct answers: ' + correctAnswerCount + '/' + questionCount);
}



