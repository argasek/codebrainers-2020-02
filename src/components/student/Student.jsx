import React from 'react';
import './Student.css';

const Student = (props) => {
  const studentName = props.student.name;
  const coffees = props.student.coffees;

  function limitRange(x, min, max) {
    return Math.min(Math.max(Math.round(x), min), max)
  }

  /**
   * @param {number} coffees Number of coffees
   * @return {string} Returns string like 'coffee0', 'coffee1', …, 'coffee10'
   */
  function getCoffeeClassName(coffees) {
    coffees = limitRange(coffees, 0, 10);
    return 'coffee' + coffees;
  }

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
