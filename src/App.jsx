import React from 'react';
import 'App.scss';
import StudentList from 'components/student-list/StudentList';
import StudentListRandomizeButton from 'components/student-list-randomize-button/StudentListRandomizeButton';
import StudentListSortButton from 'components/student-list-sort-button/StudentListSortButton';
import Students from 'models/Students';
import Student from 'models/Student';

function App() {

  const sortCriteria = [
    { key: "coffees", direction: "asc" },
    { key: "name", direction: "desc" },
  ];

  const students = new Students();

  const specialStudent = new Student('Sabina', 2);

  specialStudent.setComment('Jedna kawka od Michałów i Damiana!');

  students.push(new Student('Michał K.', 1));
  students.push(new Student('Michał M.', 1));
  students.push(new Student('Joanna', 3));
  students.push(new Student('Karolina', 4));
  students.push(new Student('Grzegorz', 1));
  students.push(new Student('Damian', 1));
  students.push(specialStudent);
  students.push(new Student('Kamila', 0));
  students.push(new Student('Maksym', 3));

  const studentLists = [
    students.students,
    students.getShuffledStudents(),
    students.getSortedStudents(sortCriteria),
  ];


  const shuffleStudents = () => {
    // studentLists[1] = students.getShuffledStudents();
    let a = students.getShuffledStudents();
    console.log(a);
    studentLists[1] = a;
  };

  let zmienna = 'Cześć!' + ' ' + 'Jestem kodem w React!';

  const onClick = function () {
    zmienna = 'Siemaneczko';
    console.log(zmienna);
  };

  return (
    <div className="app">
      <h1>{zmienna}</h1>
      <div className="d-flex">
        <div>
          <h3>List of students:</h3>
          <div className="d-flex student-lists-container">
            {
              studentLists.map((students, index) =>
                <StudentList
                  key={index}
                  students={students}
                />
              )
            }
          </div>
        </div>
        <div className="student-actions">
          <h3>Actions to perform: </h3>
          <div className="student-list-buttons">
            <StudentListSortButton onClick={() => onClick()} />
            <StudentListRandomizeButton onClick={shuffleStudents} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;