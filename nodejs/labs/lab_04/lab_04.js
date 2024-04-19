/* 
# LAB 4
Creating 1 object representing Bank Count Number with below structure:
```js
{
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
```
. Creating another Bank Account Object which clone from the previous one and update the accountNumber only
. Put them into ann array call: bankAccounts

. Write a consolse interface app to:
+ allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
+ allow user to withdraw the money and avoid user to take more than current balance
+ Note: Strongly recommend to create functions to process each tasks

```shell

=== Banking application===
1. Find an account
2. Update balance
0. Exit the program

```
*/

const readLine = require("readline-sync");


let bankAc1 = {
    accountNumber: "123456",
    routingNumber: "10000",
    balance: 1000
};

let bankAc2 = {
    accountNumber: "9234567",
    routingNumber: "20000",
    balance: 2000
};

let bankAccounts = [bankAc1, bankAc2];

let inputBankAcNum = 0;
let inputAmount = 0;
let isContinue = true;



while (isContinue) {
    console.log("=== Banking application===");
    let selectedBankAc = getUserInputBankAc(bankAccounts);

    let withdrawAmount = getUserInputAmount();

    updateAccountBalance(selectedBankAc, withdrawAmount);

    isContinue = getUserInputContinue();
}

function getUserInputBankAc(bankAccounts) {
    console.log("Please input your account number: ");
    const inputBankAcNum = readLine.question();
    for (const bankAc of bankAccounts) {
        if (bankAc.accountNumber === inputBankAcNum) {
            console.log(`Account Number: ${bankAc.accountNumber}`);
            console.log(`Balance: ${bankAc.balance}`);
            return inputBankAcNum;
        } else {
            return null;
        };
    };
};

function getUserInputAmount() {
    console.log('Please input your withdraw amount: ');
    let withdrawAmount = readLine.question();
    return Number(withdrawAmount);
};

function updateAccountBalance(bankAc, withdrawAmount) {
    if (bankAc.balance >= withdrawAmount) {
        bankAc.balance = bankAc.balance - withdrawAmount;
        console.log(`Withdraw successfully. Your new balance is: ${bankAc.balance}`);
        return bankAc;
    } else {
        console.log("Not enough money");
    };
};

function getUserInputContinue() {
    console.log('Do you want to continue? (1: Yes)');
    let userInput = readLine.question();
    return userInput === '1' ? true : false;
};
