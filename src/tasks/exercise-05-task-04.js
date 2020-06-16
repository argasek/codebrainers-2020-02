// Totolotek - Duży Lotek
// Losujemy 6 kul, każda kula ma przypisaną liczbę od 1..49
// Napisz algorytm, który sprawdza, ile losowań musi się odbyć aby dla zadanego zestawu 6 liczb z zakresu od 1..49
// (nie powtarzających się) aby trafić "jedynkę", "dwójkę", "trójkę", itd., aż do "szóstki".

const actualNumbers = [5, 3, 1, 22, 49, 33];
const expectedNumbers = [3, 5, 27, 1, 46, 42];


let numbers = [];

for (i = 0; i < 49; i++) {
    numbers[i] = i + 1;
}

function shuffle(array) {
    let tmp, current, top = array.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

let drawnNumbers = [];

for (i = 0; i < 6; i++) {
    drawnNumbers.push(shuffle(numbers)[i])
}
console.log(drawnNumbers)


let drawLots = 0;

// function lotto(bet, num) {

//     for (i = 0; i < 100; i++) {
//         if (num !== bet) {
//             drawLots = drawLots + 1;
//         }

//         return drawLots;
//     }
// }

// // console.log(drawLots)
// console.log(lotto(expectedNumbers, drawnNumbers));