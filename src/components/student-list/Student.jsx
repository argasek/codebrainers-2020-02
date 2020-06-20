import React from 'react';
import './Student.css';

const Student = (props) => {
  const studentName = props.studentName;
  const coffees = props.studentCoffees;

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

  const className = 'student' + ' ' + getCoffeeClassName(coffees);

  return (
    <tr>
      <td>
        <div className={ className } >
          { studentName }
        </div>
      </td>
      <td>{ coffees }</td>
    </tr>
  );
};


export default Student;
