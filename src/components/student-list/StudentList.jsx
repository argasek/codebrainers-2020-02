import React from 'react';
import './StudentList.css';
import Student from 'components/student/Student';

const StudentList = ({ students }) => {

  return (

    <table className='student-list-table'>
      <thead>
      <tr>
        <th className='student-header student-cell-padding'><span role="img" aria-label="Coffee">☕</span></th>
        <th className='student-header student-cell-padding'>Student name</th>
      </tr>
      </thead>
      <tbody>
      {
        students.map(student =>
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


