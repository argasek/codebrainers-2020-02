import React from 'react';

const Student = (props) => {
    const studentName = props.studentName;
    const coffees = props.studentCoffees;
    return (
        <tr>
            <td>{studentName}</td>
            <td>{coffees}</td>
        </tr>
    );
};


export default Student;
