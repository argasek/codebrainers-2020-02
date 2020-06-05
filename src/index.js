// Homework
//
// Task 1
// Napisz algorytm który będzie kopiował tablicę, która może zawierać tablicę... (Tak aby powstała kopia przez wartość).  -----OKOKOK
// Skorzystaj z operatora "typeof" i zwróconą przez niego wartość porównaj w instrukcji warunkowej.
//
// Task 2*
// Zmodyfikuj powyższe algorytm tak, aby był w stanie skopiować tablicę która może zawierać tablice które mogą zawierać
// inne tablice, a one inne tablice... itd. itd.
//
// Task 3
// Napisz funkcję, która sprawdzi, czy podane do niej 2 argumenty są równe.  ----OKOKOK
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
    return resultArray;
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


console.log("--------------------")

const fibonacciArray = [[1, 1, 2, 3, [5, 8]], 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let fibonacciArrayCloned = [];

function cloneArrayByValue(source, target) {
    copy = [];
    for (i = 0; i < source.length; i++) {
        copy[i] = source[i];
        target.push(copy[i]);
    }
    return target;
}

cloneArrayByValue(fibonacciArray, fibonacciArrayCloned);

console.log(fibonacciArray);
console.log(fibonacciArrayCloned);

function verifyIdentity(alpha, beta) {
    let identityValue;

    if (alpha === beta) {
        identityValue = true;
    } else {
        identityValue = false;
    }
    return "Reference identity: " + identityValue;
}

// reference identity: false
console.log(verifyIdentity(fibonacciArray, fibonacciArrayCloned))
// reference identity: true
console.log(verifyIdentity(fibonacciArray[1], fibonacciArrayCloned[1]))
fibonacciArrayCloned = fibonacciArray
// reference identity: true
console.log(verifyIdentity(fibonacciArray, fibonacciArrayCloned))


// funkcja verfyIdentity sprawdza identyczność referencji. Jeżeli nasz obiekt jest sklonowany przez wartości (czyli modyfikowanie sklonowanej tablicy 
// nie wpłynie na tablicę źródłową), funkcja zwraca wartość FALSE. W odwrotnej sytuacji, kiedy sklonowana tablica nie przyjmuje nowych wartości 
// a jedynie referencje już istniejącej, funkcja zwraca wartość TRUE. Wtedy oczywiste jest, że modyfikując jedną z tablic, modyfikujemy też drugą. 
// Trzeba uważać, jeśli nie jest to naszym zamiarem. Funkcja nie jest spójna, ponieważ zwraca 'na ślepo' wartość ogólną. Sprawdzenie powinno odbywać
// się bardziej szczegółowo, np po zawartości zawartości zawartości...