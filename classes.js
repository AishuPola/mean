// class Bank {
//   constructor(accNo, name, balance, transactions = []) {
//     this.accNo = accNo;
//     this.name = name;
//     this.balance = balance;
//     this.transactions = transactions;
//   }
//   withdraw(amount) {
//     if (this.balance > amount) {
//       //binds this to particular object.

//       this.balance -= amount;
//       let result = this.balance - amount;
//       return result;
//     } else {
//       return "no suffient bal to withdraw";
//     }
//     this.transactions();
//   }

//   displayBalance() {
//     let a = new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//     }).format(this.balance);
//     return `${this.name} contains bank balance of ${a}`;
//   }
//   deposit(amount) {
//     if (amount < 0) {
//       return "invalid amount";
//     }
//     this.balance = this.balance + amount;
//     return `the balance amount is ${this.balance}`;
//   }

//   getTransactions({id,) {
//     this.transactions.push(id);

//     return transactions;
//   }

//   //date,id,deposit/withdraw,amount
// } // array of objects.

// const accholder1 = new Bank(12341, "aishwarya", 80_000);
// const accholder2 = new Bank(12342, "manaswini", 1_80_000);
// const accholder3 = new Bank(12343, "rishika", 2_50_000);
// const accholder4 = new Bank(12343, "teju", 3_40_000);

// console.log(accholder1.withdraw(30_000));
// console.log(accholder1.displayBalance());
// console.log(accholder1.deposit(50_000));
// console.log(accholder1.transactions());

// console.log(accholder1.balance);

// console.log(accholder2);
// console.log(accholder3);
// console.log(accholder4);
// ////get transactions
class HDFC {
  #balance;
  #transacts = [];
  static interest = 0.03;
  static count = 0;
  constructor(accNo, name, ifsc, balance) {
    this.accNo = accNo;
    this.name = name;
    this.ifsc = ifsc;
    this.#balance = balance;
    HDFC.count = HDFC.count + 1;
  }

  getTransactions(type, amount) {
    let id, date;
    id = this.#transacts.length + 1;
    this.type = type;
    this.amount = amount;
    date = new Date();
    this.#transacts.push([{ id, type, amount, date }]);
  }

  displayTransactions() {
    return this.#transacts;
  }

  displayBalance() {
    return `Your current balance is ${new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(this.#balance)} 🤩`;
  }

  withdrawMoney(amount) {
    if (amount > this.#balance) {
      ("Insufficient Balance 😭");
    } else {
      (this.#balance -= amount),
        this.getTransactions("Debit", amount),
        `Hi ${
          this.name
        } After withdraw Your current balance is ${this.displayBalance()}`;
    }
  }
  applyinterest() {
    this.#balance += HDFC.interest * this.#balance;
    return this.#balance;
  }
  static noofAccounts() {
    return HDFC.count;
  }
  depositeMoney(amount) {
    if (amount < 0) {
      ("Amount should be Positive");
    } else {
      (this.#balance += amount),
        this.getTransactions("Credit", amount),
        `Hi ${
          this.name
        } After Deposite Your current balance is ${this.displayBalance()}`;
    }
  }
}

// const aish = new HDFC(123456, "aish", "HDFC0001356", 70_00_000, 0);
// const teja = new HDFC(123457, "teja", "HDFC0001354", 0);
// const rishi = new HDFC(123458, "rishi", "HDFC0001354", 10_00_00_000);
// const manu= new HDFC(123459, "manu", "HDFC0001355", 60_00_000);
console.log(aish.applyinterest());
console.log(aish.displayBalance());
console.log(teja.applyinterest());
console.log(teja.displayBalance());
console.log(HDFC.count);
console.log(HDFC.noofAccounts());

console.log(aish.withdrawMoney(600000));

console.log(aish.depositeMoney(600000));

console.log(aish.displayTransactions());
//oops:we are trying to mimic the real word.
class Animal {
  //animal
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes some sound`;
  }
}
class Dog extends Animal {
  //child
  //method overriding
  constructor(name, speed) {
    super(name);

    this.speed = speed;
  }
  // speak() {
  //   return "woof wofof";
  // }
  run() {
    return `${this.name} wags the tail🐕‍🦺`;
  }
  speedBonus() {
    return `running in ${this.speed} km/hr`;
  }
}
// polymorphism -be like water
const toby = new Animal("toby");
const jimmy = new Dog("Jimmy", 40);
console.log(toby.speak());

console.log(jimmy.speak());
console.log(jimmy.run());
console.log(jimmy.speedBonus()); //running in 40km/hr

//----
//savings account-0.06
//Currentaccount-0.03 every transaction we made,
//they are charging rs.10
class CurrentAccount extends HDFC {
  #balance;
  #transacts = [];
  static interest = 0.03;
  static count = 0;
  constructor(accNo, name, ifsc, balance) {
    this.accNo = accNo;
    this.name = name;
    this.ifsc = ifsc;
    this.#balance = balance;
    CurrentAccount.count = CurrentAccount.count + 1;
  }

  getTransactions(type, amount) {
    let id, date;
    id = this.#transacts.length + 1;
    this.type = type;
    this.amount = amount;
    date = new Date();
    this.#transacts.push([{ id, type, amount, date }]);
  }

  displayTransactions() {
    return this.#transacts;
  }

  displayBalance() {
    return `Your current balance is ${new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(this.#balance)} 🤩`;
  }

  withdrawMoney(amount) {
    if (amount > this.#balance) {
      ("Insufficient Balance 😭");
    } else {
      (this.#balance -= amount),
        this.getTransactions("Debit", amount),
        `Hi ${
          this.name
        } After withdraw Your current balance is ${this.displayBalance()}`;
    }
  }
  applyinterest() {
    this.#balance += HDFC.interest * this.#balance;
    return this.#balance;
  }
  static noofAccounts() {
    return HDFC.count;
  }
  depositeMoney(amount) {
    if (amount < 0) {
      ("Amount should be Positive");
    } else {
      (this.#balance += amount),
        this.getTransactions("Credit", amount),
        `Hi ${
          this.name
        } After Deposite Your current balance is ${this.displayBalance()}`;
    }
  }
}

const aish = new SavingsAccount(123456, "aish", "HDFC0001356", 70_00_000, 0);
const teja = new SavingsAccount(123457, "teja", "HDFC0001354", 0);
