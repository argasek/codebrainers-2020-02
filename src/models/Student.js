import { v1 as uuid } from 'uuid';

class Student {
  constructor(name, coffees) {
    this.id = uuid();
    this.name = name;
    this.coffees = coffees;
    this.comment = '';
  }

  setComment(comment) {
    this.comment = comment;
  }

  copy() {
    const studentCopy = new Student();
    studentCopy.id = this.id;
    studentCopy.name = this.name;
    studentCopy.coffees = this.coffees;
    studentCopy.comment = this.comment;
    return studentCopy;
  }
}



export default Student;