// Totolotek - Duży Lotek
// Losujemy 6 kul, każda kula ma przypisaną liczbę od 1..49
// Napisz algorytm, który sprawdza, ile losowań musi się odbyć aby dla zadanego zestawu 6 liczb z zakresu od 1..49
// (nie powtarzających się) aby trafić "jedynkę", "dwójkę", "trójkę", itd., aż do "szóstki".


function getArrOfNumbersFromOneToCeil(ceil) {
  const arrOfNumbers = [];
  for (let i = 1; i <= ceil; i++) {
    arrOfNumbers.push(i);
  }
  return arrOfNumbers;
}

// Czy ponizsze rozwiazanie dla utworzenia tabeli jest uzywane w praktyce?
function getArrOfNumbersFromOneToCeilAlternative(ceil) {
  return Array.from(Array(ceil), (x, i) => i + 1);
}

function getRandomNumFromOneToMax(max) {
  return Math.ceil(Math.random() * Math.floor(max));
}

function drawNNumbersFromRangeCeil(n, ceil) {
  const numbersToDrawFrom = getArrOfNumbersFromOneToCeil(ceil);
  const drawnNumbers = [];
  for (let i = 0; i < n; i++) {
    const arrLength = numbersToDrawFrom.length;
    const randomInt = getRandomNumFromOneToMax(arrLength);
    drawnNumbers.push(numbersToDrawFrom.splice(randomInt, 1)[0]);
  }
  return drawnNumbers;
}

function checkNumberOfHits(expectedArr, actualArr) {
  let hitNumbers = 0;
  expectedArr.forEach(function (item) {
    if (actualArr.includes(item)) {
      hitNumbers++;
    }
  });
  return hitNumbers;
}

function checkNumberOfDrawingsToHit(numOutOf49) {
  if (!(0 <= numOutOf49 <= 6)) {
    console.log("You must provide number in range 0 to 6")
    return;
  }
  let drawings = 0;
  do {
    drawings++;
    const actualNumbers = drawNNumbersFromRangeCeil(6, 49);
    let hitNumbers = checkNumberOfHits(expectedNumbers, actualNumbers);

    if (hitNumbers === numOutOf49) {
      console.log("Drawing", actualNumbers, "for expected", expectedNumbers);
      console.log("You hit", hitNumbers, "numbers after", drawings, "drawings");
      break;
    }
  } while (true)
  return drawings;
}

const expectedNumbers = [3, 5, 27, 1, 46, 42];
const toGet0OutOf49 = checkNumberOfDrawingsToHit(0);
const toGet1OutOf49 = checkNumberOfDrawingsToHit(1);
const toGet2OutOf49 = checkNumberOfDrawingsToHit(2);
const toGet3OutOf49 = checkNumberOfDrawingsToHit(3);
const toGet4OutOf49 = checkNumberOfDrawingsToHit(4);
const toGet5OutOf49 = checkNumberOfDrawingsToHit(5);
const toGet6OutOf49 = checkNumberOfDrawingsToHit(6);
