import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student/Student';
import './StudentList.css';

const StudentList = () => {

  return (

    <table className='student-list-table'>
      <thead>
      <tr>
        <th className='student-header student-cell-padding'>Name</th>
        <th className='student-header student-cell-padding'>Coffees</th>
      </tr>
      </thead>
      <tbody>
      {
        codeBrainersStudents.map(student =>
          <Student
            key={ student.id }
            student={ student }
          />
        )
      }
      </tbody>
    </table>
  );
};

export default StudentList;


