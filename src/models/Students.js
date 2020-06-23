import Student from 'models/Student';
import { drawRandomIndex } from 'utils';

class Students {
  constructor() {
    this.students = [];
  }

  getSortedStudents(criteria) {
    criteria = Array.isArray(criteria) ? criteria : [];
    const comparator = ({ key, direction }) => (a, b) => a[key] === b[key] ? 0 : [ a[key] < b[key], direction === "desc" ].map(x => x ? -1 : 1).reduce((p, n) => p * n, 1);
    const sort = (criteria) => (a, b) => criteria.map(criterion => comparator(criterion)(a, b)).reduce((previous, next) => previous ? previous : next, 0);
    const students = [ ...this.students ];
    return students.sort(sort(criteria));
  }

  getShuffledStudents() {
    const shuffledStudents = [];

    let students = [ ...this.students ];

    while (students.length > 0) {
      const randomIndex = drawRandomIndex(students);
      const randomStudent = students[randomIndex];
      shuffledStudents.push(randomStudent);
      students.splice(randomIndex, 1);
    }

    return shuffledStudents;
  }

  /**
   *
   * @param {Student} student
   */
  push(student) {
    this.students.push(student);
  }

}


export default Students;