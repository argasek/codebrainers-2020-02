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

const studentPool = [];


function getStudentArray(students) {
  if (students.length === 0) {
    for (let i = 0; i < codeBrainersStudents.length; i++) {
      const codeBrainersStudent = codeBrainersStudents[i];
      students.push(codeBrainersStudent);
    }
  }
}

function drawRandomIndex(students) {
  return Math.floor(Math.random() * students.length);
}

function drawStudentFromArray(students, randomIndex) {
  return students[randomIndex];
}

function deleteStudentFromArray(students, randomIndex) {
  const resultArray = students.splice(randomIndex, 1);
  return resultArray;
}

function drawStudent(students) {
  const randomIndex = drawRandomIndex(students);
  const randomStudent = drawStudentFromArray(students, randomIndex);

  const arrayWithDeletedItem = deleteStudentFromArray(students, randomIndex);

  return randomStudent;
}

getStudentArray(studentPool);

for (let i = 0; i < codeBrainersStudents.length; i++) {
  const student = drawStudent(studentPool);
  if (student !== undefined) {
    console.log(student.name, studentPool.length);
  }
}
