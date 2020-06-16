// Task 1.
//
// Is there a way, given classes organized like below to verify if a particular student
// studying at codebrainersBootcamp is at the same time student of the otherBootcamp.
// If so, how to do it.
// If no, why we cannot do it.


class BankAccount {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
    this.balance = 0.0;
    this.debitCardPresent = false;
  }

}

class Student {
  constructor(name, coffees = 0) {
    this.isPrepared = false;
    this.bankAccount = new BankAccount();
    this.name = name;
    this.coffees = coffees;
    this.albumId = 0;
    this.comment = '';
  }
}

class Department {
  constructor(name) {
    this.students = [];
    this.name = name;
  }
}

const anonymousStudent = new Student('Sabina', 2);
anonymousStudent.comment = 'Jedna kawka od Michałów i Damiana!';
let nika = new Student('Nika', 3)
const studentsA = [
  nika,
  new Student('Karolina', 3),
  new Student('Michał K.', 1),
  new Student('Joanna', 2),
  new Student('Grzegorz', 0),
  new Student('Damian', 1),
  anonymousStudent,
  new Student('Kamila', 0),
  new Student('Maksym', 2)
];

const studentsB = [
  nika,
  new Student('Michał K.', 1),
  new Student('Karolina', 3),
  new Student('Damian', 1),
  new Student('Maksym', 2),
  new Student('Michał M.', 1),
];

const codebrainersBootcamp = new Department('Codebrainers Bootcamp');
codebrainersBootcamp.students = [...studentsA];

const otherBootcamp = new Department('Some Other Bootcamp');
otherBootcamp.students = [...studentsB];

function studentInTwoBootCamps(dep1, dep2) {
  for (let i = 0; i < dep1.students.length; i++) {
    for (let j = 0; j < dep2.students.length; j++) {
      if (dep1.students[i] === dep2.students[j]) {
        return 'Student ' + dep1.students[i].name + ' is in two BootCamps'
      }

    }
  }
  return 'No students studying in two BootCamps'
}

console.log(studentInTwoBootCamps(codebrainersBootcamp, otherBootcamp))

// the answer is 'yes'.
