/* 

## Lab 3.3:
Sort an integer array from min to max
```
Input: {12, 34, 1, 16, 28}
Expected output: {1, 12, 16, 28, 34}
```

*/

// selection sort
let intArr = [11, 34, 1, 16, 58];
let n = intArr.length;

for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
        if (intArr[j] < intArr[min]) {
            min = j;
        }
    }
    if (min !== i) {
        let temp = intArr[i];
        intArr[i] = intArr[min];
        intArr[min] = temp;
    }
};

console.log(intArr);

// insertion sort
let intArr2 = [12, 34, 1, 16, 28];
let n2 = intArr2.length;

for (let i = 1; i < n2; i++) {
    let key = intArr2[i];
    let j = i - 1;
    while (j >= 0 && intArr2[j] > key) {
        intArr2[j + 1] = intArr2[j];
        j = j - 1;
    }
    intArr2[j + 1] = key;
};

console.log(intArr2);

// bubble sort
let intArr3 = [12, 34, 1, 16, 60];
let n3 = intArr3.length;

for (let i = 0; i < n3 - 1; i++) {
    for (let j = 0; j < n3 - i - 1; j++) {
        if (intArr3[j] > intArr3[j + 1]) {
            let temp = intArr3[j];
            intArr3[j] = intArr3[j + 1];
            intArr3[j + 1] = temp;
        }
    }
};

console.log(intArr3);
