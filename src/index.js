// Zad. 1
//
// Sprawdź proszę, czy możemy naszą funkcję do generowania liczb z zakresu 1..scale w postaci
//    Math.floor(Math.random() * scale) + 1
// zastąpić funkcją
//    Math.ceil(Math.random() * scale)
// Jeżeli nie, dlaczego? Odpowiedź uzasadnij.
// const a = Math.ceil(Math.random())+1;
// console.log(a);
//
// 2
// const a = Math.ceil(Math.random());
// console.log(a);
//
// 1 V 0
//
//
// const a = Math.floor(Math.random());
// console.log(a);
//
// 0
//
// const a = Math.floor(Math.random() )+1;
// console.log(a);
//
// 1
//
//
// random integers in the interval [1, 10]:
// Math.floor(Math.random()*10 + 1)
// random integers in the interval [0, 10]:
// Math.ceil(Math.random()*10);g
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

const numbers = [13, 666, 2137];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// POJO == Plain Old JavaScript Object
const codeBrainersStudents = [
    'Grzegorz Lason',
    'Michał Marchański',
    'Joanna Włoskowicz',
    'Damian Lipniak',
    'Kamila Kalisz',
    'Karolina Bochenek',
    'Sabina Dziedzioch',
    'Michał Marchański',
    'Maksym Garus',
];
const scale = codeBrainersStudents.length - 1;
console.log(" dl listy index 0 do " + scale)

function drawNumber(scale) {
    return Math.ceil(Math.random() * scale);
}

// let studentIndex = drawNumber(scale);
// console.log('Osoba  indexem ' + studentIndex);

// const wylosowanaOfiara = codeBrainersStudents[studentIndex];

// console.log(wylosowanaOfiara);


function soLetMeAskThisPersonToday() {
    const studentIndex = drawNumber(scale);
    let wylosowanaOfiara = codeBrainersStudents[studentIndex];

    const new_list = [0];

    for (var i = 0; i < new_list.length; i++) {
        if (new_list[i] === wylosowanaOfiara) {
            wylosowanaOfiara;
            // soLetMeAskThisPersonToday(codeBrainersStudents);
        }
        else {
            new_list[i] = wylosowanaOfiara;
            return wylosowanaOfiara;
        }
    }


}

for (var l = 0; l < codeBrainersStudents.length; l++) {
    let person = soLetMeAskThisPersonToday();
    console.log('Losujemy osobę nr: ' + (l + 1) + ' do odpowiedzi. Ofiara to...:' + person);



    // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // for( var i = 0; i < arr.length; i++){ if ( arr[i] === 5) { arr.splice(i, 1); }}
    // => [1, 2, 3, 4, 6, 7, 8, 9, 0]

