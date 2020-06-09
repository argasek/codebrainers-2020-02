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


// Task 1 and 2 solution:


const arr = [ false, true, 665, "false", [ "a", "b", 1, [ 1, 2, 3, 4 ] ], 555, 444 ];

function cloneArray(items) {
  // It's an array (or object, but we ignore it for now)
  console.log('Wywołanie funkcji cloneArray() z argumentem: ', items);
  if (typeof items === "object") {
    console.log('Ups, to jest tablica, musimy ją sklonować!');
    // Create an array or object to hold the values
    let result = [];

    for (let i = 0; i < items.length; i++) {
      const value = items[i];
      result[i] = cloneArray(value)
    }

    return result;
  }
  console.log('Zwykły item: ');
  // Well, it's not an array -- so we might safely return value
  return items;
}

// Task 3 -- solution
// There is no easy way to compare objects in JS ¯\_(ツ)_/¯
function areObjectsEqual(a, b) {
  return a === b;
}

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
    // Jedna kawka od Michałów i Damiana!
    name: 'Sabina',
    coffees: 2
  },
  {
    name: 'Kamila',
    coffees: 0
  },
  {
    name: 'Maksym',
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


console.log('rozmiar tablicy students: ', students.length);
for (let i = 0; i < codeBrainersStudents.length; i++) {
  const student = drawStudent(students);
  if (student !== undefined) {
    console.log(student.name, students.length);
  }
}


const clonedArr = cloneArray(arr);

console.log('Sklonowana: ', clonedArr);