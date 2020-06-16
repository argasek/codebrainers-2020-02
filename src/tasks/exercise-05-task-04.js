// Totolotek - Duży Lotek
// Losujemy 6 kul, każda kula ma przypisaną liczbę od 1..49
// Napisz algorytm, który sprawdza, ile losowań musi się odbyć aby dla zadanego zestawu 6 liczb z zakresu od 1..49
// (nie powtarzających się) aby trafić "jedynkę", "dwójkę", "trójkę", itd., aż do "szóstki".

const actualNumbers = [5, 3, 1, 22, 49, 33];
// const expectedNumbers = [3, 5, 27, 1, 46, 42];
const expectedNumbers = [3, 5, 49]


function algorytmTotolotek(expectedNumbers) {
    let randomNumberList = []
    let numberOfDraws = 0
    while (randomNumberList.toString() != expectedNumbers.toString()) {
        for (let i = 0; i < expectedNumbers.length; i++) {
            randomNumber = Math.ceil(Math.random() * 49)
            for (let j = 0; j < randomNumberList.length; j++) {
                if (randomNumberList[j] === randomNumber) {
                    randomNumber = Math.ceil(Math.random() * 49) // jest opcja ze drugi raz wylosuje taką samą liczbę
                }
            }
            randomNumberList.push(randomNumber)
            if (randomNumberList.length === expectedNumbers.length && randomNumberList.toString() != expectedNumbers.toString()) {
                randomNumberList = []
                numberOfDraws++
            }
        }
    }

    return numberOfDraws
}

console.log(algorytmTotolotek(expectedNumbers))
