import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student-list/Student';

const StudentList = () => {

  return (
    <ul>
      {
        codeBrainersStudents.map(student =>
          <Student key={ student.id } studentName={ student.name } />
        )
      }
    </ul>
  );
};

export default StudentList;