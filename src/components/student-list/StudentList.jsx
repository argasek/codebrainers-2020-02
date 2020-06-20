import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student/Student';
import './StudentList.css';

const sortStudents = (studentsArray, key, direction) => {
  const counter = direction === "desc" ? -1 : 1;
  return studentsArray.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] === b[key]) {
      return 0;
    } else if (a[key] > b[key]) {
      return 1;
    }
  });
}
const StudentList = () => {

  return (

    <table className='student-list-table'>
      <thead>
        <tr>
          <th className='student-header student-cell-padding'>student.name</th>
          <th className='student-header student-cell-padding'>Coffees</th>
        </tr>
      </thead>
      <tbody>
        {
          sortStudents(codeBrainersStudents, "coffees", "desc").map(student =>
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


