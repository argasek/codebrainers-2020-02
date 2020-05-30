
// // Statements
// console.log('Hello world from developers\' console!');
// let userName = prompt("Hello world! What's your name?");
// alert(`Nice to meet you, ${userName}!`);

function question(a, b) {
    return `Jaki jest wynik działania, ${a} * ${b}`;
}

let a = parseInt(Math.random());
let b = Math.random();

let answer = prompt(question(a, b));

if (parseInt(answer) === a * b) {
    alert('Well done');
} else {
    alert("Wrong answer");
}
