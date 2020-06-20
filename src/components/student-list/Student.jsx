import React from 'react';
import './Student.css';



const Student = (props) => {
    const studentName = props.studentName;
    const coffees = props.studentCoffees;
    const divStyle = {
      paddingLeft: coffees * 5 + 'em',
        backgroundColor: coffees===0 ? 'red':'grey'
    };

    return (
        <tr>
            <td>
              <div style={divStyle} className="student">
              {studentName}
              </div>
            </td>
            <td>{coffees}</td>
        </tr>
    );
};


export default Student;
