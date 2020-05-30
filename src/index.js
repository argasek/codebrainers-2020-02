
// // Statements
// console.log('Hello world from developers\' console!');
// let userName = prompt("Hello world! What's your name?");
// alert(`Nice to meet you, ${userName}!`);

function question(a, b) {
    return `Jaki jest wynik działania, ${a} * ${b}`;
}

function drawNumber(scale) {
    return parseInt(Math.random() * scale) + 1;
}

let a = drawNumber(10);
let b = drawNumber(10);

// let answer = prompt(question(a, b));
const answer = "";

console.log(question(a, b));

// if (parseInt(answer) === a * b) {
//     alert('Well done');
// } else {
//     alert("Wrong answer");
// }
