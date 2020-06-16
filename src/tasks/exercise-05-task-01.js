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

const studentsA = [
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

function checkStudent(bootcamp1, bootcamp2) {
    result = [];
    for (student in bootcamp1) {
        for (student1 in bootcamp2) {
            if (student.name === student1.name) {
                result.push(student.name);
            }
        }
    }
    return result;
}


console.log(checkStudent(studentsA, studentsB));
studentsB.forEach(function (student) {
    console.log(student.name);
});

function all(studentsA, studentsB) {
    let result1 = [];
    let result2 = [];
    let result3 = [];
    studentsB.forEach(function (student) {
        result2.push(student.name);
    })
    studentsA.forEach(function (student) {
        result1.push(student.name);
    })

    for (i in result1) {
        console.log(result1[i]);
        for (j in result2) {
            if (result1[i] === result2[j]) {
                result3.push(result1[i]);
            }
        }
    }
    return result3;
}

console.log(all(studentsA, studentsB));