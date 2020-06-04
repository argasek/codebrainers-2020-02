// Zad. 1
//
// Sprawdź proszę, czy możemy naszą funkcję do generowania liczb z zakresu 1..scale w postaci
//    Math.floor(Math.random() * scale) + 1
// zastąpić funkcją
//    Math.ceil(Math.random() * scale)
// Jeżeli nie, dlaczego? Odpowiedź uzasadnij.
//
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

const codeBrainersStudents = [
    {
        name: 'Michał K.',
        lp: 1
    },
    {
        name: 'Michał M.',
        lp: 2
    },
    {
        name: 'Joanna',
        lp: 3
    },
    {
        name: 'Karolina',
        lp: 4
    },
    {
        name: 'Grzegorz',
        lp: 5
    },
    {
        name: 'Damian',
        lp: 6
    },
        {
        name: 'Sabina',
        lp: 7
    },
        {
        name: 'Kamila',
        lp: 8
    },
        {
        name: 'Maksym',
        lp: 9
    },
];

//function soLetMeAskThisPersonToday(students) {
    // for (let i = 0; i < students.length; i++) {
    //     if (students[i].age >= 18) {
    //         console.log(students[i].name);
    //     }
    // }
 //   const wylosowanaOfiara = '';
//    return wylosowanaOfiara;
//}

function soLetMeAskThisPersonToday(codeBrainersStudents) {
    let i = Math.floor((Math.random() * 10) + 1 ) //; i < codeBrainersStudents.length; i++;
        return codeBrainersStudents[i].name;
    }


alert(`And the Oscar goes to: ${soLetMeAskThisPersonToday(codeBrainersStudents)}`);



// return codeBrainersStudents[(Math.random() * codeBrainersStudents.length];
// //consol.log(codeBrainersStudents[i].name);

// for (let i = 0; i < codeBrainersStudents.length; i++) {
//     if (codeBrainersStudents[i].lp>= 3) {
//         console.log(codeBrainersStudents[i].name);
//     }
// }

