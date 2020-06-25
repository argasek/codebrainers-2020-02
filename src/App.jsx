import React from 'react';
import 'App.scss';
import StudentList from 'components/student-list/StudentList';
import StudentListRandomizeButton from 'components/student-list-randomize-button/StudentListRandomizeButton';
import StudentListSortButton from 'components/student-list-sort-button/StudentListSortButton';
import Students from 'models/Students';
import Student from 'models/Student';

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
    this.students.push(new Student('Karolina', 4));
    this.students.push(new Student('Michał K.', 1));
    this.students.push(new Student('Grzegorz', 1));
    this.students.push(new Student('Damian', 1));
    this.students.push(specialStudent);
    this.students.push(new Student('Kamila', 0));
    this.students.push(new Student('Maksym', 3));
  }

  render() {
    const sortStudents = () => {
      const sortCriteria = [
        {key: "coffees", direction: "asc"},
        {key: "name", direction: "desc"},
      ];
      this.setState({
        sortedStudents: this.students.getSortedStudents(sortCriteria)
      });
    }

    const shuffleStudents = () => {
      this.setState({
        shuffledStudents: this.students.getShuffledStudents()
      });
    };

    const fixStudents = () => {
      const index = this.state.shuffledStudents.findIndex((student) => student.name === "Tajemnicza studentka");
      if (index !== -1) {
        this.setState({
          shuffledStudents: shuffledStudents
        });
      }
    }

    return (
      <div className="app">
        <h1>{this.state.field}</h1>
        <div className="d-flex">
          <div>
            <h3>List of students:</h3>
            <div className="d-flex student-lists-container">
              <StudentList students={this.students.students}/>
              <StudentList students={this.state.shuffledStudents}/>
              <StudentList students={this.state.sortedStudents}/>
            </div>
          </div>
          <div className="student-actions">
            <h3>Actions to perform: </h3>
            <div className="student-list-buttons">
              <StudentListSortButton onClick={sortStudents}/>
              <StudentListRandomizeButton onClick={shuffleStudents}/>
              <StudentListFixButton onClick={fixStudents}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;