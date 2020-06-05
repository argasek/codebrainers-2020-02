// Homework
//
// Task 1
// Napisz algorytm który będzie kopiował tablicę, która może zawierać tablicę... (Tak aby powstała kopia przez wartość).
// Skorzystaj z operatora "typeof" i zwróconą przez niego wartość porównaj w instrukcji warunkowej.
//
// Task 2*
// Zmodyfikuj powyższe algorytm tak, aby był w stanie skopiować tablicę która może zawierać tablice które mogą zawierać
// inne tablice, a one inne tablice... itd. itd.
//
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





const codeBrainersStudents = [
    {
        name: 'Michał K.',
        coffees: 1
    },
    {
        name: 'Michał M.',
        coffees: 1
    },
    {
        name: 'Joanna',
        coffees: 2
    },
    {
        name: 'Karolina',
        coffees: 3
    },
    {
        name: 'Grzegorz',
        coffees: 0
    },
    {
        name: 'Damian',
        coffees: 1
    },
    {
        name: 'Sabina',
        coffees: 1
    },
    {
        name: 'Kamila',
        coffees: 0
    },
    {
        // name: 'Maksym',
        coffees: 2
    }

];

const students = [];


function getStudentArray(students) {
    if (students.length === 0) {
        for (let i = 0; i < codeBrainersStudents.length; i++) {
            const codeBrainersStudent = codeBrainersStudents[i];
            students.push(codeBrainersStudent);

        }
    }
}

function drawStudentFromArray(students) {
    const randomIndex = Math.floor(Math.random() * students.length);

    return students[randomIndex];
}

function deleteStudentFromArray(students) {
    const randomIndex = Math.floor(Math.random() * students.length);
    const resultArray = students.splice(randomIndex, 1);

}

function drawStudent(students) {
    getStudentArray(students);

    const randomStudent = drawStudentFromArray(students);

    const arrayWithDeletedItem = deleteStudentFromArray(students);

    return randomStudent;
}



// console.log('rozmiar tablicy students: ', students.length);
for (let i = 0; i < codeBrainersStudents.length; i++) {
    const student = drawStudent(students);
    if (student !== undefined) {
        console.log(student.name, students.length);
    }
}


// Task 1
// Napisz algorytm który będzie kopiował tablicę, która może zawierać tablicę... (Tak aby powstała kopia przez wartość).
// Skorzystaj z operatora "typeof" i zwróconą przez niego wartość porównaj w instrukcji warunkowej.


const arr_copy = [];
const arr= [1,2,3,[1,2,3]];

function copyArray(arr_copy) {

    if (arr_copy.length === 0) {

        for (let i = 0; i < arr.length; i++) {
            const arr_element= arr[i];
            console.log(arr_element);
            if (object === typeof arr_element) {
                const arr_sec_copy = [];
                for (let j = 0; j < arr_element.length; j++) {
                    const arr_sec_element = arr_element[j];
                    arr_sec_copy.push(arr_sec_element);
                }

            }

            arr_copy.push(arr_element);

        }
    }
}
// Task 2*
// Zmodyfikuj powyższe algorytm tak, aby był w stanie skopiować tablicę która może zawierać tablice które mogą zawierać
// inne tablice, a one inne tablice... itd. itd.



const arr1= [1,2,3,[1,2,3]];


function copyArray(arr) {
const arr_copy = [];
    if (arr_copy.length === 0) {

        for (let i = 0; i < arr.length; i++) {
            const arr_element= arr[i];
            console.log(arr_element);
            if (object === typeof arr_element) {
                copyArray(arr_element);

            }

            arr_copy.push(arr_element);

        }
    }
}