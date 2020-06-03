// Zad. 1
//
// Sprawdź proszę, czy możemy naszą funkcję do generowania liczb z zakresu 1..scale w postaci
//    Math.floor(Math.random() * scale) + 1 // {1,2,3,4,5,6,7,8,9,10} dla scale = 10
// zastąpić funkcją
//    Math.ceil(Math.random() * scale) // {0,1,2,3,4,5,6,7,8,9,10} dla scale = 10
// Jeżeli nie, dlaczego? Odpowiedź uzasadnij.
//
// Drugie wyrażenie może zwrócić 0 (z małym pradopodobieństwem, ale zawsze)
// A 0 chcemy wykluczyć.

// Zad. 2
// Napisz algorytm losujący studenta CodeBrainers to odstrzału! Czyli:
// treść funkcji soLetMeAskThisPersonToday() która przyjmuje tablicę studentów
// i losowo wyświetla nazwisko studenta do odpytania wylosowanego z tej przekazanej tablicy.

// funkcje -- charakter ogólny, niezwiązany z żadnym obiektem
// metody = funkcje danego obiektu / klasy
//
// zmienne -- charakter ogólny, niezwiązany z żadnym obiektem
// pola = zmienne danego obiektu / klasy

// const a = [
//   0: [5, 6],
//   1: "basia",
//   2: 3,
//   3: false,
// ];

// POJO == Plain Old JavaScript Object

// const numbers = [13, 666, 2137];
//
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// POJO == Plain Old JavaScript Object
const students = [

    {
        name: 'Michał M',
        age: 1
    },
    {
        name: 'Sabina',
        age: 2
    },
    {
        name: 'Kamila',
        age: 3
    },
    {
        name: 'Grzegorz',
        age: 4
    },
    {
        name: 'Michał K',
        age: 5
    },
    {
        name: 'Damian',
        age: 6
    },
        {
        name: 'Joanna',
        age: 7
    },
    {
        name: 'Maksym',
        age: 8
    },
    {
        name: 'Karolina',
        age: 9
    },
];

function soLetMeAskThisPersonToday(students) {

    const scale = students.length;
    // {0, 1, ... 9}
    let index = Math.floor(Math.random() * scale);

    // console.log(scale)
    // console.log(index);

    return students[index].name;
}

alert(`And the winner is... ${soLetMeAskThisPersonToday(students)}!`)
// console.log(soLetMeAskThisPersonToday(students));