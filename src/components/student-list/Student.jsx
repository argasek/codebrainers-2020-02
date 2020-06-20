import React from 'react';

const Student = (props) => {
  const studentName = props.studentName;
  const coffees = props.studentCoffees;
  return (
    <li>{ studentName } { coffees }</li>
  );
};



export default Student;
