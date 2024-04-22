/* 
Given string: 'Hello, my name is John, and my job is a developer, what your name, what your job'
Use object to group words and count the number of words
name: 2
job: 2
*/

let str = 'Hello, my name is John, and my job is a developer, what your name, what your job';

let individualWords = str.replace(/,/gi, '').split(' ');

let wordCount = groupWordMap(individualWords);

console.log(wordCount);


function groupWordMap(str){
    let myMap = new Map();
    for (const word of individualWords) {
        if (!myMap.has(word)) {
            myMap.set(word, 1);
        } else {
            myMap.set(word, myMap.get(word) + 1);
        }
    }
    return myMap;
}