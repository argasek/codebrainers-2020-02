import React from 'react';
import codeBrainersStudents from '../../models/Students';
import Student from 'components/student/Student';
import './StudentList.css';

const comparator = ({ key, direction }) => (a, b) => a[key] === b[key] ? 0 : [ a[key] < b[key], direction === "desc" ].map(x => x ? -1 : 1).reduce((p, n) => p * n, 1);
const sort = (criteria) => (a, b) => criteria.map(criterion => comparator(criterion)(a, b)).reduce((previous, next) => previous ? previous : next, 0);
const sortStudents = (items, criteria) => items.sort(sort(criteria));

const StudentList = () => {

  const sortCriteria = [
    { key: "coffees", direction: "asc" },
    { key: "name", direction: "desc" },
  ];

  const students = sortStudents(codeBrainersStudents, sortCriteria);

  return (

    <table className='student-list-table'>
      <thead>
      <tr>
        <th className='student-header student-cell-padding'><span>☕</span></th>
        <th className='student-header student-cell-padding'>Student name</th>
      </tr>
      </thead>
      <tbody>
      {
        students.map(student =>
          <Student
            key={ student.id }
            student={ student }
          />
        )
      }
      </tbody>
    </table>
  );
};

export default StudentList;


