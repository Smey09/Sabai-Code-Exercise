class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    let _accountNumber = accountNumber;
    let _accountHolderName = accountHolderName;
    let _balance = balance;

    this.showAccountDetails = function () {
      console.log(`Account Number: ${_accountNumber}`);
      console.log(`Account Holder Name: ${_accountHolderName}`);
      console.log(`Balance: ${_balance}`);
    };

    this.deposit = function (amount) {
      _balance += amount;
      this.showAccountDetails();
    };

    this.withdraw = function (amount) {
      if (_balance >= amount) {
        _balance -= amount;
        this.showAccountDetails();
      } else {
        console.log("Insufficient Balance");
      }
    };
  }
}

let myBankAccount = new BankAccount("123456", "John Doe", 1000);
myBankAccount.deposit(500); // Output: Account Number: 123456 Account Holder Name: John Doe Balance: 1500
myBankAccount.withdraw(2000); // Output: Insufficient Balance
