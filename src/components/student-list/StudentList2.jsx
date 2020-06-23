import React from 'react';
import Student from 'components/student/Student';
import './StudentList.css';
import studentPool from './randomStudent';



const StudentList2 = () => {

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
          studentPool.map(student =>
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

export default StudentList2;


