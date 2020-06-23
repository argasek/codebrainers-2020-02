import React from 'react';
import 'App.scss';
import StudentList from 'components/student-list/StudentList';
import StudentListRandomizeButton from 'components/student-list-randomize-button/StudentListRandomizeButton';
import StudentListSortButton from 'components/student-list-sort-button/StudentListSortButton';
import { codeBrainersStudents, sortStudents } from 'models/Students';

function App() {

  const sortCriteria = [
    { key: "coffees", direction: "asc" },
    { key: "name", direction: "desc" },
  ];

  const students = [ ...codeBrainersStudents ];
  const sortedStudents = sortStudents(codeBrainersStudents, sortCriteria);


  return (
    <div className="app">
      <div className="d-flex">
        <div>
          <h3>List of students:</h3>
          <div className="d-flex student-lists-container">
            <StudentList students={students} />
            <StudentList students={sortedStudents}/>
          </div>
        </div>
        <div className="student-actions">
          <h3>Actions to perform: </h3>
          <div className="student-list-buttons">
            <StudentListSortButton />
            <StudentListRandomizeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;