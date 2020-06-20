import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student-list/Student';

const StudentList = () => {

    return (
        /*
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">The table header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The table body</td>
                            <td>with two columns</td>
                        </tr>
                    </tbody>
                </table>
        */

        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Coffees</th>
            </tr>
            </thead>
            <tbody>
                {
                    codeBrainersStudents.map(student =>
                        <Student
                            key={student.id}
                            studentName={student.name}
                            studentCoffees={student.coffees}
                        />
                    )
                }
            </tbody>
        </table>
    );
};

export default StudentList;


