import React from 'react';
import 'App.scss';
import { StudentList, randomizeStudents } from 'components/student-list/StudentList';
import StudentListRandomizeButton from 'components/student-list-randomize-button/StudentListRandomizeButton';
import StudentListSortButton from 'components/student-list-sort-button/StudentListSortButton';

function App() {
  return (
    <div className="app">
      <div className="d-flex">
        <div>
          <h3>List of students:</h3>
          <div className="d-flex student-lists-container">
            <StudentList />
            <StudentList function='randomize' />
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