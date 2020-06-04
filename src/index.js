// Homework
//
// Task 1 solution: these random number generator function do not work the same.
// Math.floor(Math.random() * scale) + 1 => [1..scale]
// Math.ceil(Math.random() * scale) => [0..scale]
//
// Task 2 solution:

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
    students.splice(randomIndex, 1);
}

function drawStudent(students) {
    getStudentArray(students);

    const randomStudent = drawStudentFromArray(students);

    deleteStudentFromArray(students);

    return randomStudent;
}



('rozmiar tablicy students: ', students.length);
// for (let i = 0; i < codeBrainersStudents.length; i++) {
//     const student = drawStudent(students);
//     if (student !== undefined) {
//         console.log(student.name, students.length);
//     }
// }

let a = 'Kasia';
function test(x) {
    x = 'Basia';
}
console.log(a);
test(a);
console.log(a);


let b = [3];
function test2(x) {
    x[0] = 5;
}
console.log(b);
test2(b);
console.log(b);