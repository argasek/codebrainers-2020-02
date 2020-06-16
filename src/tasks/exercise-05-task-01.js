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

// ---------------------------------------------------

// It is not possible to compare them as simple objects. Even though the values are the same,
// they are still different instances of the same class.
// console.log(studentsA[1]);
// console.log(studentsB[0]);
console.log(studentsA[1] === studentsB[0]); // returns false!
let student1 = studentsA[1];
let student2 = studentsB[0];
console.log(student1 === student2);

// ---------------------------------------

// Even comparing two objects using the following function is not possible, because of the
// this.bankAccount field - which is another object.

// Just when using the compare function recursively - it is possible to check that two objects are actually the same (their values are the same)
function compareObjects(itemA, itemB) {
    if (typeof itemA !== "object" || typeof itemB !== "object") {
        console.log(`Not equal: itemA is ${typeof itemA}, itemB is ${typeof itemB}`);
        return false;
    }

    const keys = Object.keys(itemA);
    if (keys.length === Object.keys(itemB).length) {
        return keys.every(function (key) {
            // console.log(key, itemA[key], itemB[key]);
            if (typeof itemA[key] === "object" && typeof itemB[key] === "object") {
                return compareObjects(itemA[key], itemB[key]);
            }
            return itemA[key] === itemB[key];
        })
    }

    return false;
}

console.log(compareObjects(student1, student2));

