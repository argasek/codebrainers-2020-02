// Task 1. Fix App.jsx so clicking on "Fix students" button doesn't make the app explode.
// As a result, "Tajemnicza studentka" should be changed to "Joanna"
// Task 2. Fix fixStudents() function so "Joanna" name appears only on shuffledStudents array and not
// the others.

import React from 'react';
import 'App.scss';
import StudentList from 'components/student-list/StudentList';
import Students from 'models/Students';
import Student from 'models/Student';
import StudentButton from 'components/student-button/StudentButton';
import StudentNameInput from 'components/student-name-input/StudentNameInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initStudents();
    this.state = {
      field: 'Cześć! Jestem kodem w React!',
      shuffledStudents: this.students.getShuffledStudents(),
      sortedStudents: this.students.students,
    };
  }

  initStudents() {
    this.students = new Students();
    const specialStudent = new Student('Sabina', 2);
    specialStudent.setComment('Jedna kawka od Michałów i Damiana!');
    this.students.push(new Student('Michał M.', 1));
    this.students.push(new Student('Tajemnicza studentka', 3));
    this.students.push(new Student('Karolina', 5));
    this.students.push(new Student('Michał K.', 1));
    this.students.push(new Student('Grzegorz', 1));
    this.students.push(new Student('Damian', 1));
    this.students.push(specialStudent);
    this.students.push(new Student('Kamila', 0));
    this.students.push(new Student('Maksym', 4));
  }

  handleInputChange = (event) => {
    this.setState({ field: event.currentTarget.value });
  }

  sortStudents = () => {
    const sortCriteria = [
      { key: "coffees", direction: "asc" },
      { key: "name", direction: "desc" },
    ];
    this.setState({
      sortedStudents: this.students.getSortedStudents(sortCriteria)
    });
  }

  shuffleStudents = () => {
    this.setState({
      shuffledStudents: this.students.getShuffledStudents()
    });
  }

  fixStudents = () => {
    const index = this.state.shuffledStudents.findIndex((student) => student.name === "Tajemnicza studentka");
    const shuffledStudents = [...this.state.shuffledStudents];
    if (index !== -1) {
      shuffledStudents[index].name = 'Joanna';
      this.setState({
        shuffledStudents: shuffledStudents
      });
    }
  }

  render() {

    return (
      <div className="app">
        <h1>{this.state.field}</h1>
        <div className="d-flex">
          <div>
            <h3>List of students:</h3>
            <div className="d-flex student-lists-container">
              <StudentList students={this.students.students} />
              {/*<StudentList students={this.state.shuffledStudents} />*/}
              {/*<StudentList students={this.state.sortedStudents} />*/}
            </div>
          </div>
          <div className="student-actions">
            <h3>Actions to perform: </h3>
            <div className="student-list-buttons">
              <StudentButton onClick={this.sortStudents} label="Sort students" />
              <StudentButton onClick={this.shuffleStudents} label="Shuffle students" />
              <StudentButton onClick={this.fixStudents} label="Fix students" />
              <StudentNameInput
                exampleField={this.state.field}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;