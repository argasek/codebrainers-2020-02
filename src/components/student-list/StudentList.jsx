import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student/Student';
import './StudentList.css';

const sortStudents = (studentsArray, key, direction) => {
  const counter = direction === "desc" ? -1 : 1;
  return studentsArray.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1 * counter;
    } else if (a[key] === b[key]) {
      return 0;
    } else if (a[key] > b[key]) {
      return 1 * counter;
    }
  });
}

function copyArray(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const student = arr[i];
    newArray.push(student);
  }
  return newArray;
}

const randomizeStudents = (studentsArray) => {
  let temporaryArray = copyArray(studentsArray);
  let shuffledArray = [];

  for (let i = 0; i < studentsArray.length; i++) {
    const randomIndex = Math.floor(Math.random() * temporaryArray.length);
    shuffledArray.push(temporaryArray[randomIndex]);
    temporaryArray.splice(randomIndex, 1);
  }
  return shuffledArray;

}

const StudentList = () => {

  return (

    <table className='student-list-table'>
      <thead>
      <tr>
        <th className='student-header student-cell-padding'>Student name</th>
        <th className='student-header student-cell-padding'>☕</th>
      </tr>
      </thead>
      <tbody>
      {
        codeBrainersStudents.map(student =>
          <Student
            key={student.id}
            student={student}
          />
        )
      }
      </tbody>
    </table>
  );
};

const SortedStudentList = () => {

  return (

    <table className='student-list-table'>
      <thead>
      <tr>
        <th className='student-header student-cell-padding'>Student name</th>
        <th className='student-header student-cell-padding'>☕</th>
      </tr>
      </thead>
      <tbody>
      {
        sortStudents(codeBrainersStudents, "coffees", "asc").map(student =>
          <Student
            key={student.id}
            student={student}
          />
        )
      }
      </tbody>
    </table>
  );
};

// const RandomizeStudentList = () => {
//
//   return (
//
//     <table className='student-list-table'>
//       <thead>
//       <tr>
//         <th className='student-header student-cell-padding'>Student name</th>
//         <th className='student-header student-cell-padding'>☕</th>
//       </tr>
//       </thead>
//       <tbody>
//       {
//         randomizeStudents(codeBrainersStudents, "coffees", "asc").map(student =>
//           <Student
//             key={student.id}
//             student={student}
//           />
//         )
//       }
//       </tbody>
//     </table>
//   );
// };

export {StudentList, SortedStudentList};


