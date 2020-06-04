// // Zad. 1
// //
// // Sprawdź proszę, czy możemy naszą funkcję do generowania liczb z zakresu 1..scale w postaci
// //    Math.floor(Math.random() * scale) + 1
// // zastąpić funkcją
// //    Math.ceil(Math.random() * scale)
// // Jeżeli nie, dlaczego? Odpowiedź uzasadnij.
// //
// // Zad. 2
// // Napisz algorytm losujący studenta CodeBrainers to odstrzału! Czyli:
// // treść funkcji soLetMeAskThisPersonToday() która przyjmuje tablicę studentów
// // i losowo wyświetla nazwisko studenta do odpytania wylosowanego z tej przekazanej tablicy.


// // funkcje -- charakter ogólny, niezwiązany z żadnym obiektem
// // metody = funkcje danego obiektu / klasy
// //
// // zmienne -- charakter ogólny, niezwiązany z żadnym obiektem
// // pola = zmienne danego obiektu / klasy

// // const a = [
// //   0: [5, 6],
// //   1: "basia",
// //   2: 3,
// //   3: false,
// // ];

// // POJO == Plain Old JavaScript Object

// const numbers = [13, 666, 2137];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// // POJO == Plain Old JavaScript Object
// const codeBrainersStudents = [
//     {
//         name: 'Jakub Argasiński',
//         age: 18
//     },
//     {
//         name: 'Michał Marchański',
//         age: 13
//     },
//     {
//         name: 'Joanna Lucjanna',
//         age: 24
//     },
//     {
//         name: 'Kaczor Donald',
//         age: 83
//     },
//     {
//         name: 'Grzegorz Lasoń',
//         age: 84
//     },
// ];

// function soLetMeAskThisPersonToday(students) {
//     // for (let i = 0; i < students.length; i++) {
//     //     if (students[i].age >= 18) {
//     //         console.log(students[i].name);
//     //     }
//     // }
//     const wylosowanaOfiara = '';
//     return wylosowanaOfiara;
// }

// soLetMeAskThisPersonToday(codeBrainersStudents);

//zad 1

for (let i = 0; i < 100; i++) {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.ceil(Math.random() * 10);
    if (a === 0 || b === 0) console.log('The answer is "no"');
    else {
        console.log('The answer is "yes"');
    }
}



