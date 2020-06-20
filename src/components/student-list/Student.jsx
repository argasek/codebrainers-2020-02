import React from 'react';

const Student = (props) => {
  const studentName = props.studentName;
  return (
    <li>{ studentName }</li>
  );
};


export default Student;
