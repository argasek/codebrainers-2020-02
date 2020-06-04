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
        name: 'Maksym',
        coffees: 2
    },
    {
        name: 'Karolina',
    },
    {
        name: 'Damian',
    },
    {
        name: 'Sabina',
    },
    {
        name: 'Kamila',
    },

];

const students = [];

function drawStudent(students) {
    if (students.length === 0) {
        for (let i = 0; i < codeBrainersStudents.length; i++) {
            const codeBrainersStudent = codeBrainersStudents[i];
            students.push(codeBrainersStudent);
        }
    }
    const randomIndex = Math.floor(Math.random() * students.length);
    const randomStudent = students[randomIndex];
    students.splice(randomIndex, 1);
    return randomStudent;
}

for (let i = 0; i < codeBrainersStudents.length; i++) {
    const student = drawStudent(students);
    console.log(student.name);
}
