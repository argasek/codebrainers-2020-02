import React from 'react';
import './Student.css';
import { getCoffeeClassName } from 'shared/visualFormatting';

const Student = (props) => {
  const studentName = props.student.name;
  const coffees = props.student.coffees;

  const className = 'student ' + getCoffeeClassName(coffees);

  return (
    <tr className='student-row'>
      <td className='student-cell student-cell-padding student-cell-center'>{ coffees }</td>
      <td className='student-cell student-cell-padding'>
        <div className={ className } >
          { studentName }
        </div>
      </td>
    </tr>
  );
};


export default Student;
