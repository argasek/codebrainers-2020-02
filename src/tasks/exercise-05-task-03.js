// Task 3
// Calculate total number of coffees but do not use forEach() or loops (for, while, do/while) this time,
// but instead utilize .reduce() method. See:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

class Student {
  constructor(name, coffees = 0) {
    this.isPrepared = false;
    this.name = name;
    this.coffees = coffees;
    this.albumId = 0;
    this.comment = '';
  }
}

const anonymousStudent = new Student('Sabina', 2);
anonymousStudent.comment = 'Jedna kawka od Michałów i Damiana!';

const students = [
  new Student('Michał K.', 1),
  new Student('Michał M.', 1),
  new Student('Joanna', 2),
  new Student('Karolina', 3),
  new Student('Grzegorz', 0),
  new Student('Damian', 1),
  anonymousStudent,
  new Student('Kamila', 0),
  new Student('Maksym', 2)
];


let initialValue = 0
const totalCoffees = students.reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue.coffees
}, initialValue);

console.log(totalCoffees);