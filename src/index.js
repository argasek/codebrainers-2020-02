
// // Statements
// console.log('Hello world from developers\' console!');
// let userName = prompt("Hello world! What's your name?");
// alert(`Nice to meet you, ${userName}!`);

function question(a, b) {
    return `Jaki jest wynik działania, ${a} * ${b}`;
}

let answer = prompt(question(3, 2));

if (parseInt(answer) === 6) {
    alert('Well done');
} else {
    alert("Wrong answer");
}
