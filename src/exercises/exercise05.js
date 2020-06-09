// ...
class BankAccount {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0;
        this.debitCardPresent = false;
    }

}

class Student {
    constructor(name, age) {
        this.isPrepared = false;
        this.bankAccount = new BankAccount();
        this.name = name;
        this.age = age;
        this.albumId = 0;
    }
}


const student = new Student();
const bankAccount = new BankAccount(23498237492734);

student.bankAccount = bankAccount;