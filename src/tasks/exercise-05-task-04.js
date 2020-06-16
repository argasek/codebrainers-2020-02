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

    let scale = 49;
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


function countCommonNumbers(set1, set2) {
    set1.sort(alphaSort);
    set2.sort(alphaSort);
    let commonNumbersCount = 0;

    set1.forEach(function (value1) {
        set2.some(function (value2) {
            if (value2 === value1) {
                commonNumbersCount++;
                // console.log(value2);
            }
        })
    })
    return commonNumbersCount;
}

// console.log("How many numbers are matching both sets?");
// console.log(countCommonNumbers(actualNumbers, expectedNumbers));


