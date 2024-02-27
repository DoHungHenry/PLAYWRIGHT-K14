/* 

## Lab 3.4(optional):
Merge 2 SORTED integer array into one SORTED array

```
Array 01: {1, 12, 16, 28, 34}
Array 02: {1, 13, 16, 27, 99}

Expected output: {1, 1, 12, 13, 16, 16, 27, 28, 34, 99}
```

*/

// let intArr1 = [1, 12, 16, 28, 34];
// let intArr2 = [1, 13, 16, 27, 99];

// build-in method
// let intArr12 = intArr1.concat(intArr2).sort((a, b) => a - b);
// console.log(intArr12);

// merge sort
let a = [1, 12, 16, 28, 34];
let b = [1, 13, 16, 27, 99];
const merge = [];

const aLength = a.length;
const bLength = b.length;

let aPosition = 0;
let bPosition = 0;
let mergedPosition = 0;

while (aPosition < aLength && bPosition < bLength) {
  const aValue = a[aPosition];
  const bValue = b[bPosition];
  if (aValue <= bValue) {
    merge[mergedPosition++] = a[aPosition++];
  } else {
    merge[mergedPosition++] = b[bPosition++];
  }
}

while (aPosition < aLength) {
  merge[mergedPosition++] = a[aPosition++];
}

while (bPosition < bLength) {
  merge[mergedPosition++] = b[bPosition++];
}

console.log(merge);
