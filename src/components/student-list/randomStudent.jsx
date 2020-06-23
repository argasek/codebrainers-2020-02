import React from 'react';
import codeBrainersStudents from '../../models/Students';

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


export default studentPool;