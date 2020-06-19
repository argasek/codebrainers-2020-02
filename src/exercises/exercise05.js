// ...
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

function getStudentNumberOfCoffees(student) {
    if (student instanceof Student) {
        return student.coffees;
    }
    throw new Error('getStudentNumberOfCoffees() expects Student object');
}

function sumStudentsCoffes(students) {
    let coffees = 0;
    students.forEach(function (student) {
        coffees += getStudentNumberOfCoffees(student);
    });
    return coffees;
}

console.log(sumStudentsCoffes(students));


function sortByCoffees(a, b) {
    const c = a.coffees - b.coffees;
    return c;
}

function sortStudents(students) {
    students.sort(sortByCoffees);
}

const bankAccount = new BankAccount(23498237492734);

const codebrainersBootcamp = new Department('Codebrainers Bootcamp');
// Spread operator
codebrainersBootcamp.students = [ ...students ];
console.log(codebrainersBootcamp.students.length);

const otherBootcamp = new Department('Some Other Bootcamp');
otherBootcamp.students = students;
console.log(otherBootcamp.students.length);


//
// const student = new Student();
// const bankAccount = new BankAccount(23498237492734);
//
// student.bankAccount = bankAccount;