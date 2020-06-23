import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student/Student';
import './StudentList.css';

const sortStudents = (studentsArray, key, direction) => {
  const counter = direction === "desc" ? -1 : 1;
  return studentsArray.sort(function (a, b) { return a[key] !== b[key] ? a[key] < b[key] ? -1 * counter : 1 * counter : 0 });
}

const randomizeStudents = (studentsArray) => {
  for (let i = studentsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = studentsArray[i]
    studentsArray[i] = studentsArray[j]
    studentsArray[j] = temp
  }
  return studentsArray
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
          randomizeStudents(codeBrainersStudents).map(student =>
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

export default StudentList;


