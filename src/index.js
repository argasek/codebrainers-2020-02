// Task 3
// Napisz funkcję, która sprawdzi, czy podane do niej 2 argumenty są równe.
// Przetestuj tę funkcję z następującymi argumentami:
//
// 1)
// const a = { klucz: 'wartosc' };
// const b = { klucz: 'wartosc' };
//
// 2)
// const a = { klucz: 'wartosc' };
// const b = a;
//
// Niech Twoja funkcja zwraca wartość boolowską, tj. true jeśli obiekty są równe lub false jeśli są różne.
// Zastanów się (nie szukaj w internetach!) dlaczego otrzymujesz takie wyniki i pomyśl co zrobić aby funkcja
// działała spójnie.

function compareTwoArguments(arg1, arg2) {
    let equal = false;
    if (arg1 === arg2) {
        equal = true;
    }
    return equal;
}

// console.log(compareTwoArguments( 1,1));

const a = {klucz: 'wartosc'};
const b = {klucz: 'wartosc'};

const c = {klucz: 'wartosc'};
const d = c;

console.log(compareTwoArguments(a, b));
// zwraca false, ponieważ są to de facto dwa różne obiekty.
// "Adresy" wartości w nich przechowywanych są różne,
// nawet jeśli wartości są takie same.

console.log(compareTwoArguments(c, d));
// obiekt d jest 'kopią przez referencję' zatem jest tym samym obiektem co obiekt c,
// dlatego funkcja zwraca true.

// ---------------------------------
// Task 1
// Napisz algorytm który będzie kopiował tablicę, która może zawierać tablicę... (Tak aby powstała kopia przez wartość).
// Skorzystaj z operatora "typeof" i zwróconą przez niego wartość porównaj w instrukcji warunkowej.

// po dłuższym namyśle stwierdzam, że zadanie 2* zrobiłam chyba przez przypadek robiąc zad 1 :)
// poniżej wersja "tylko task 1"

let testArray = [1, [1, 3, [1, 2, 3], 2], 6, false, 'abc'];
console.log(testArray);

function copyArray(arrayToCopy) {

    let copiedArray = [];
    for (let i = 0; i < arrayToCopy.length; i++) {

        if (typeof arrayToCopy[i] === 'object') {
            let copiedItemArray = [];
            for (let j = 0; j < arrayToCopy[i].length; j++) {
                const copiedItem = arrayToCopy[i][j];
                copiedItemArray.push(copiedItem)
            }
            copiedArray.push(copiedItemArray);

        } else {
            const copiedItem = arrayToCopy[i];
            copiedArray.push(copiedItem);
        }
    }
    return copiedArray;
}

let newArray = copyArray(testArray);
// newArray[1] = 'bla';
newArray[1][2][1] = 'bla';
console.log(testArray);
console.log(newArray);
//
//---------------------------------------------
// Task 2*
// Zmodyfikuj powyższe algorytm tak, aby był w stanie skopiować tablicę która może zawierać tablice które mogą zawierać
// inne tablice, a one inne tablice... itd. itd.

// let testArray = [1, [1, 2, [1, 2, 3], 3], 6, false, 'abc'];
// console.log(testArray[1][2][1]);
//
// function copyArray(arrayToCopy) {
//
//     let copiedArray = [];
//     for (let i = 0; i < arrayToCopy.length; i++) {
//
//         if (typeof arrayToCopy[i] === 'object') {
//             const copiedItemArray = copyArray(arrayToCopy[i]);
//             copiedArray.push(copiedItemArray);
//         } else {
//             const copiedItem = arrayToCopy[i];
//             copiedArray.push(copiedItem);
//         }
//     }
//     return copiedArray;
// }
//
// let newArray = copyArray(testArray);
// // newArray[1] = 'bla';
// // newArray[1][0] = 'bla';
// // console.log(newArray[1]);
// // console.log(newArray[1][2]);
// console.log(newArray[1][2][1]);
// newArray[1][2][1] = 'bla';
// console.log(newArray);
//
// // console.log('After copying:')
// console.log(testArray);
// // console.log(typeof testArray[1] === 'object');
// // console.log(copyArray(testArray));

// -----------------------------------------------------
// const codeBrainersStudents = [
//     {
//         name: 'Michał K.',
//         coffees: 1
//     },
//     {
//         name: 'Michał M.',
//         coffees: 1
//     },
//     {
//         name: 'Joanna',
//         coffees: 2
//     },
//     {
//         name: 'Karolina',
//         coffees: 3
//     },
//     {
//         name: 'Grzegorz',
//         coffees: 0
//     },
//     {
//         name: 'Damian',
//         coffees: 1
//     },
//     {
//         name: 'Sabina',
//         coffees: 1
//     },
//     {
//         name: 'Kamila',
//         coffees: 0
//     },
//     {
//         // name: 'Maksym',
//         coffees: 2
//     }
//
// ];
//
// const students = [];
//
//
// function getStudentArray(students) {
//     if (students.length === 0) {
//         for (let i = 0; i < codeBrainersStudents.length; i++) {
//             const codeBrainersStudent = codeBrainersStudents[i];
//             students.push(codeBrainersStudent);
//         }
//     }
// }
//
// function drawStudentFromArray(students) {
//     const randomIndex = Math.floor(Math.random() * students.length);
//
//     return students[randomIndex];
// }
//
// function deleteStudentFromArray(students) {
//     const randomIndex = Math.floor(Math.random() * students.length);
//     const resultArray = students.splice(randomIndex, 1);
//     return resultArray;
// }
//
// function drawStudent(students) {
//     getStudentArray(students);
//
//     const randomStudent = drawStudentFromArray(students);
//
//     const arrayWithDeletedItem = deleteStudentFromArray(students);
//
//     return randomStudent;
// }
//
//
//
// // console.log('rozmiar tablicy students: ', students.length);
// for (let i = 0; i < codeBrainersStudents.length; i++) {
//     const student = drawStudent(students);
//     if (student !== undefined) {
//         console.log(student.name, students.length);
//     }
// }


