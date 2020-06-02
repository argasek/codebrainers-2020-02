// 1. Wystaw użytkownikowi adekwatną ocenę jeśli zdecyduje się na opcję "0 pytań" "no questions asked".   -------OKOKOKOKOK
// 2. Przerób poniższy kod w taki sposób, aby jeśli użytkownik nie zdał, zadawał on (kod!) pytania tak długo, -------OKOKOKOKOK
//    aż użytkownik zda! Podpowiedź: zamiast wyświetlać okno komunikatu "Passed: false", pomiń wyświetlanie tego  -------OKOKOKOKOK
//    okna i zadawaj pytania tak długo, aż stosunek odpowiedzi poprawnych do niepoprawnych będzie 0.6 do 0.4 ;)  -------OKOKOKOKOK
// 3*. Przerób poniższy kod w taki sposób, aby sprawdzał nie tylko znajomość tabliczki mnożenia, ale wszystkich  -------OKOKOKOKOK
//    czterech podstawowych działań, tj. + - / *. (Czyli przy każdym przejściu pętli losował nie tylko 2 liczby,  -------OKOKOKOKOK
//    ale również rodzaj działania jaki ma między nimi zajść).  -------OKOKOKOKOK
// 3a*. Dzielenie może być "trochę problematyczne". Znajdź sposób, jak to "trochę" obejść ;)

//const operators = ['-', '+', '*'];

//let operatorIndex = parseInt(Math.random()) * 3;
//let randomOperator = operators[operatorIndex];

var operators = [{
    sign: "+",
    method: function (a, b) { return a + b; }
}, {
    sign: "-",
    method: function (a, b) { return a - b; }
}, {
    sign: "*",
    method: function (a, b) { return a * b; }
}];

function question(a, b) {
    return `How much is ${a} ${operators[selectedOperator].sign} ${b}?`;
}

function drawNumber(scale) {
    return parseInt(Math.random() * scale) + 1;
}

let questionCount;

do {
    questionCount = parseInt(prompt("How many questions do you want to answer?"));
    if (questionCount === 0) {
        alert("0 questions, 0 score");
    }
} while (isNaN(questionCount) || questionCount <= 0);

let correctAnswerCount = 0;

do {
    var selectedOperator = Math.floor(Math.random() * operators.length);
    console.log(operators[selectedOperator].sign)

    const a = drawNumber(10);
    const b = drawNumber(10);
    const answer = prompt(question(a, b));

    if (parseInt(answer) === operators[selectedOperator].method(a, b)) {
        correctAnswerCount++;
    }
    console.log(question(a, b));
} while (correctAnswerCount !== questionCount || correctAnswerCount / questionCount < 0.6);

if (correctAnswerCount / questionCount >= 0.6) {
    alert('Passed');
}
