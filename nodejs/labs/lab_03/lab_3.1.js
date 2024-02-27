/* 
Count how many odd, even number(s) in an integer array

```
int[] intArr = {1, 2, 3, 4, 5};

Even numders: 2
Odd numbers: 3
```
*/

let intArr = [1, 2, 3, 4, 5];
let even = 0;
let odd = 0;

intArr.forEach((num) => {
    if (num % 2 === 0) {
        even++;
    } else {
        odd++;
    }
});

console.log(`Even numbers: ${even}`);

console.log(`Odd numbers: ${odd}`);