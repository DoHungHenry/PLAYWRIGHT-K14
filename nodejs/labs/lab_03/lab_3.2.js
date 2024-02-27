/* 

## Lab 3.2:
Finding maximum value/minimum value from an integer array

```
int[] intArr = {1, 2, 3, 4, 5};

Minimum: 1
Maximum: 5
```

*/

let intArr = [1, 2, 3, 4, 5];
let min = intArr[0];
let max = intArr[0];

intArr.forEach((num) => {
    if (num < min) {
        min = num;
    }
    if (num > max) {
        max = num;
    }
});

console.log(`Minimum: ${min}`);

console.log(`Maximum: ${max}`);