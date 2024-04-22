let myStr = "Hello World!";

console.log(myStr.length); // 12

for(let i = 0; i < myStr.length; i++) {
    console.log(myStr.charAt(i));
}

console.log(myStr.length); // 12

console.log(myStr.trim());

console.log(myStr.replace("Hello", "Hi"));

console.log(myStr.replace(/w/gi, 'q'));

console.log(myStr.concat(200));

console.log(myStr.replace(/[^0-9]/g, ''));

// Backtick | String Template
let name = "John";
let age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);

// Substring
let subStr = 'www://google.com';

console.log(getDomainName(subStr));

function getDomainName(url) {
    let domain;
    const indicator = '://';
    const indexOfIndicator = url.indexOf(indicator);
    if(indexOfIndicator < 0) {
        const err = new Error('Invalid URL');
    };
    const domainStartIndex = indexOfIndicator + indicator.length;
    return url.substring(domainStartIndex).replace(/\//gi, '');
}

// Split
let str = 'Hello, World!';

let arr = str.split(',');
console.log(arr);