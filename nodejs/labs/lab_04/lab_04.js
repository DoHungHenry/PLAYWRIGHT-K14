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

let bankAccounts = [bankAC1, bankAC2];

let inputBankAcNum = 0;
let inputAmount = 0;


while (isContinue) {
    console.log("=== Banking application===");
    console.log("1. Find an account");
    
}
