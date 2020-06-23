import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student/Student';
import './StudentList.css';

const sortStudents = (studentsArray, key, direction) => {
  const counter = direction === "desc" ? -1 : 1;
  return studentsArray.sort(function (a, b) { return a[key] !== b[key] ? a[key] < b[key] ? -1 * counter : 1 * counter : 0 });
}

const randomizeStudents = (studentsArray) => {
  let newStudentsArray = [];
  for (let i = 0; i < studentsArray.length; i++) {
    newStudentsArray.push(studentsArray[i]);
  }
  for (let i = newStudentsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = newStudentsArray[i]
    newStudentsArray[i] = newStudentsArray[j]
    newStudentsArray[j] = temp
  }
  return newStudentsArray.map(
    student =>
      <Student
        key={student.id}
        student={student}
      />
  )
}

const originalStudentList = (studentsArray) => {
  return studentsArray.map(
    student =>
      <Student
        key={student.id}
        student={student}
      />)
}

const StudentList = (props) => {


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
          props.function === 'randomize' ? randomizeStudents(codeBrainersStudents) : originalStudentList(codeBrainersStudents)
        }
      </tbody>
    </table>
  );
};

export { StudentList, randomizeStudents }


