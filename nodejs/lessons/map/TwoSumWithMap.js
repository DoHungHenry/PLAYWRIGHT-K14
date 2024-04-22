// 0(n^2) 
/* 
[1,4,22,6] , target num = 10
find index[1] and index[2] that sum of them is 10
assume that only one indices exist
*/
let arr = [1,4,22,6];
let target = 10;
// 2 loops
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] === target) {
            console.log(i, j);
            break;
        }
    }
}

// using map 0(n)
let myMap = new Map();
for(let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if(myMap.has(diff)) {
        console.log(myMap.get(diff), i);
        break;
    }
    myMap.set(arr[i], i);
}

