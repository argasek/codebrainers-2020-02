import React from 'react';
import codeBrainersStudents from '../../models/Students';

const StudentList = () => {
  const test = codeBrainersStudents[0].name;
  // arr.forEach(callback[, thisArg])

  const studentNames = codeBrainersStudents.map(student => { return student.name; });





  return (
    <div>
      <p>{studentNames}</p>
    </div>
  );
};

export default StudentList;