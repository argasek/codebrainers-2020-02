import React from 'react';
import codeBrainersStudents from '../../models/Students';

const StudentList = () => {

  const studentNames = codeBrainersStudents.map(student => student.name);


  return (
    <ul>
      {studentNames.map(studentName => <li>{studentName}</li>)}
    </ul>
  );
};

export default StudentList;