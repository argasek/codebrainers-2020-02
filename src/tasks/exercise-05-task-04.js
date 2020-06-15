// Totolotek - Duży Lotek
// Losujemy 6 kul, każda kula ma przypisaną liczbę od 1..49
// Napisz algorytm, który sprawdza, ile losowań musi się odbyć aby dla zadanego zestawu 6 liczb z zakresu od 1..49
// (nie powtarzających się) aby trafić "jedynkę", "dwójkę", "trójkę", itd., aż do "szóstki".

const actualNumbers = [ 5, 3, 1, 22, 49, 33 ];
const expectedNumbers = [ 3, 5, 27, 1, 46, 42 ];

function createTable (howMany){
    const result =[];
    let j = 1;
    for (let i =0; i < howMany; i++){
        result.push(j);
        j++;
    }
    return result;
}

console.log(createTable(49));



const numbeRandom = [];
const howManyBalls = 6;
const numberTable = createTable(49);

function getNumberArray(numbers) {
  if (numbers.length === 0) {
    for (let i = 0; i < numberTable.length; i++) {
      const ballnumber = numberTable[i];
      numbers.push(ballnumber);
    }
  }
}

function drawRandomIndex(numbers) {
  return Math.floor(Math.random() * numbers.length);
}

function drawNumberFromArray(numbers, randomIndex) {
  return numbers[randomIndex];
}

function deleteNumberFromArray(numbers, randomIndex) {
  const resultArray = numbers.splice(randomIndex, 1);
  return resultArray;
}

function drawBall(numbers) {
  const randomIndex = drawRandomIndex(numbers);
  const randomNumber = drawNumberFromArray(numbers, randomIndex);

  const listOfNumbersWithDeletedItem = deleteNumberFromArray(numbers, randomIndex);

  return randomNumber;
}

getNumberArray(numbeRandom);



function finaleShuffle (numbers){
const finalShuffleArray = [];
for (let i = 0; i < howManyBalls; i++) {
  const ball = drawBall(numbers);
  if (ball !== undefined) {
    finalShuffleArray.push(ball);
  }
}
return finalShuffleArray;}
console.log(finaleShuffle(numbeRandom));


const happySix = finaleShuffle(numbeRandom);
console.log(happySix + " happy six")

let compareHappySix ;
let result1 = 0;

do {
   compareHappySix = finaleShuffle(numbeRandom);
   console.log(compareHappySix + " compare Six");
    result1 ++;
} while (Array.isArray(happySix) &&
    Array.isArray(compareHappySix) &&
    happySix.length === compareHappySix.length &&
    happySix.every((val, index) => val === compareHappySix[index]))

console.log(result1);




