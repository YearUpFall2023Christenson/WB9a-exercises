"use strict";

class Account {


    constructor(accountName, accountType) {
        this.accountName = accountName;
        this.accountType = accountType;
        this.overdraftLimit = 500;
        this.overdraftFee = 50;
        this.balance = 0;
        this.accountHistory = [];
        this.addHistory("CREATING ACCOUNT");
        this.Display();
    }

    addHistory(record){
        this.accountHistory.push(record);
    }


    getBalance() {
        return this.balance;
    }

    setBalance(newAmount){
        this.balance = newAmount;
    }

    Deposit(amountToDeposit) {
        this.balance += amountToDeposit;
        this.addHistory("Depositing " + amountToDeposit + " into account.")
        this.Display();
    }

    Withdrawal(amountToWithdrawal) {
        this.addHistory("Withdrawaling " + amountToWithdrawal)
        if (this.balance >= amountToWithdrawal) {
            this.balance -= amountToWithdrawal;
            this.Display();
        }
        else if((this.balance + this.overdraftLimit)  >= amountToWithdrawal ) {
            this.balance -= amountToWithdrawal;
            this.balance -= this.overdraftFee;
            this.addHistory("incurring overdraft fee of " + this.overdraftFee)
            this.Display();
        }
        else{
            this.addHistory("Withdrawal failed.")
            this.Display();
        }



    }


    Display() {
        console.log("----------------------------")
        console.log(`ACCOUNT NAME: ${this.accountName}  ${this.accountType}`)
        console.log("CURRENT BALANCE " + this.getBalance());
        console.log("Full account history:");
        
        this.accountHistory.forEach( record => console.log(record));
        console.log("---------------------------")
    }

}

class SavingsAccount extends Account{

    constructor(accountName, interestRate){
        super(accountName, "Savings Account");
        this.interestRate = interestRate;
    }

    AccrueInterestFor1Month(){
        let monthlyInterestRate = this.interestRate / 12;
        let interestThisMonth = super.getBalance() * monthlyInterestRate;
        super.addHistory("Accruing Interest of " + interestThisMonth);
        super.setBalance(super.getBalance() + interestThisMonth);
        super.Display();
    }

}


// let a1 = new Account("Matt", "Checking");

// a1.Deposit(200);

// a1.Withdrawal(20);

// a1.Deposit(1000);

// a1.Withdrawal(500);

// a1.Withdrawal(1200);

let a2 = new SavingsAccount("Koichi", .08);

a2.Deposit(500);

for(let month = 1; month < 13 ; month++){
    a2.AccrueInterestFor1Month();
}


a2.Withdrawal(500);

