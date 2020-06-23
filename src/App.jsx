import React, {useState} from 'react';
import 'App.scss';
import StudentList from 'components/student-list/StudentList';
import {StudentListRearranged} from "components/student-list/StudentList";
import StudentListRandomizeButton from 'components/student-list-randomize-button/StudentListRandomizeButton';
import StudentListSortButton from 'components/student-list-sort-button/StudentListSortButton';
import codeBrainersStudents from "./models/Students";
import Student from "./components/student/Student";

// import './StudentList.css';

function App() {
  const [studentArrayRandomized, setStudentArrayRandomized] = useState(codeBrainersStudents.map(student =>
    <Student
      key={student.id}
      student={student}
    />
    ),
  )

  function randStudArray() {
    setStudentArrayRandomized(codeBrainersStudents.sort(() => Math.random() - 0.5).map(student =>
        <Student
          key={student.id}
          student={student}
        />
      ),
    );
  }


  return (
    <div className="app">
      <div className="d-flex">
        <div>
          <h3>List of students:</h3>
          <div className="d-flex student-lists-container">
            <StudentList/>


            <table className='student-list-table'>
              <thead>
              <tr>
                <th className='student-header student-cell-padding'>Student name (Random):</th>
                <th className='student-header student-cell-padding'>☕</th>
              </tr>
              </thead>
              <tbody>
              {studentArrayRandomized}
              </tbody>
            </table>


            <StudentListRearranged/>
          </div>
        </div>
        <div className="student-actions">
          <h3>Actions to perform: </h3>
          <div className="student-list-buttons">
            <StudentListSortButton/>


            <button className="button" onClick={randStudArray}>Random students button</button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;