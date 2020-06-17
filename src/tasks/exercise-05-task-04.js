// Totolotek - Duży Lotek
// Losujemy 6 kul, każda kula ma przypisaną liczbę od 1..49
// Napisz algorytm, który sprawdza, ile losowań musi się odbyć aby dla zadanego zestawu 6 liczb z zakresu od 1..49
// (nie powtarzających się) aby trafić "jedynkę", "dwójkę", "trójkę", itd., aż do "szóstki".

const actualNumbers = [5, 3, 1, 22, 49, 33];
const expectedNumbers = [3, 5, 27, 1, 46, 42];


function alphaSort(a, b) {
    return a - b;
}


function drawNumbers() {

    const availableNumbersSet = [];
    for (let i = 1; i <= 49; i++) {
        availableNumbersSet.push(i);
    }

    // console.log(availableNumbersSet);

    let newNumbersSet = [];
    for (let i = 0; i < 6; i++) {
        let newNumberIndex = Math.floor(Math.random() * availableNumbersSet.length);

        newNumbersSet.push(availableNumbersSet[newNumberIndex]);
        // console.log(newNumberIndex, availableNumbersSet.length);
        availableNumbersSet.splice(newNumberIndex, 1);
        // console.log(availableNumbersSet.length);
    }
    return newNumbersSet;
}

// console.log(drawNumbers());


function countCommonNumbers(expectedNumber, drawnNumbersSet) {
    expectedNumber.sort(alphaSort);
    drawnNumbersSet.sort(alphaSort);
    let commonNumbersCount = 0;
    let commonValues = [];

    expectedNumber.forEach(function (value1) {
        drawnNumbersSet.some(function (value2) {
            if (value2 === value1) {
                commonNumbersCount++;
                commonValues.push(value2);
                // console.log(value2);
            }
        })
    })
    // return [commonNumbersCount, commonValues];
    return commonNumbersCount;
}

console.log("How many numbers are matching both sets?");
console.log(countCommonNumbers(actualNumbers, expectedNumbers));


function drawingsToFirstMatchCount() {
    let drawingCount = 0;
    let count = 0;
    while (count < 1) {
        let newNumbers = drawNumbers();
        console.log(newNumbers);
        console.log(actualNumbers);
        count = countCommonNumbers(newNumbers, actualNumbers);
        drawingCount++;
        console.log(drawingCount);
    }
    return `It takes ${drawingCount} times to get '${count}'`;
}

console.log(drawingsToFirstMatchCount());

// function countDrawingsToGetSpecificMatch(matchingNumbers) {
//     let drawingCount = 0;
//     let count = 0;
//     while (count !== matchingNumbers) {
//         let newNumbers = drawNumbers();
//         console.log(newNumbers);
//         console.log(actualNumbers);
//         count = countCommonNumbers(newNumbers, actualNumbers);
//         drawingCount++;
//         console.log(drawingCount);
//     }
//     return `It takes ${drawingCount} times to get '${matchingNumbers}'`;
// }
//
// // argument in {1, 2, 3, 4, 5, 6}
// console.log(countDrawingsToGetSpecificMatch(2));