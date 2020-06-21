import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student/Student';
import './StudentList.css';

const sortStudents = (studentsArray, key, direction) => {
  const counter = direction === "desc" ? -1 : 1;
  return studentsArray.sort(function (a, b) {
    return a[key] < b[key] ? -1 * counter : a[key] === b[key] ? 0 * counter : 1 * counter
    // if (a[key] < b[key]) {
    //   return -1 * counter;
    // } else if (a[key] === b[key]) {
    //   return 0;
    // } else if (a[key] > b[key]) {
    //   return 1 * counter;
    // }
  });
}

const randomizeStudents = (studentsArray) => {
  return studentsArray.sort(() => Math.random() - 0.5);
}

const sortStudentsByTwoColumns = (studentsArray, key1, direction1, key2, direction2) => {
  const key1SortDirection = direction1 === "desc" ? -1 : 1;
  const key2SortDirection = direction2 === "desc" ? -1 : 1;
  return studentsArray.sort(function (a, b) {
    if (a[key1] < b[key1]) return -1 * key1SortDirection;
    if (a[key1] > b[key1]) return 1 * key1SortDirection;
    if (a[key2].toLowerCase() < b[key2].toLowerCase()) return -1 * key2SortDirection;
    if (a[key2].toLowerCase() > b[key2].toLowerCase()) return 1 * key2SortDirection;
    return 0;
  });
}

const StudentListOriginal = () => {

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

export default StudentListOriginal;

export const StudentListRearranged = () => {

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
        sortStudentsByTwoColumns(codeBrainersStudents, "coffees", "asc", "name", "desc").map(student =>
          <Student
            key={student.id}
            student={student}
          />
        )
        // randomizeStudents(codeBrainersStudents).map(student =>
        //   <Student
        //     key={student.id}
        //     student={student}
        //   />
        // )
        // sortStudents(codeBrainersStudents, "coffees", "desc").map(student =>
        //   <Student
        //     key={student.id}
        //     student={student}
        //   />
        // )
      }
      </tbody>
    </table>
  );
};



