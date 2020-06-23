import React from 'react';
import './ClassBasedStudent.css';
import { getCoffeeClassName } from 'shared/visualFormatting';

class ClassBasedStudent extends React.PureComponent {
  render() {
    const studentName = this.props.student.name;
    const coffees = this.props.student.coffees;

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
  }
}


export default ClassBasedStudent;
