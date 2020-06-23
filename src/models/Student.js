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
}

export default Student;