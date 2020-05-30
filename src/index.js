// typy danych w javascripcie : string, number(zmiennoprzecinkowa),
// boolean np.( var a = true), array (tablice), object


// console.log('Hello world from developers\' console!');
// let userName = prompt("Hello world! What's your name?");
// alert(`Nice to meet you, ${userName}!`);

// '=' operator przypisania (assignment)
// '==' operator porównania (comparison)
// '===' operator identyczności (strict comparison)

// var b = 3;
// const c = 4;
// let a = 1.0;

function question(a, b) {
    return 'Jaki jest wynik działania, ${a} * ${b}';
}

let answer = prompt(question(3, 2));

if (parseInt(answer) === 6) {
    alert('Well done!');
} else {
    alert('Wrong!');
}
