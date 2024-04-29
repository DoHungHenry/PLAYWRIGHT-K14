// day 9

console.log('this is first line');

const argument = 'this is second line';

setTimeout(secondLine(argument), 2000);

console.log('this is third line');

function secondLine(argument) {
    console.log(this.ten); // bonus part // Teo
    console.log(argument);
};

// bonus: modify secondline function by bind method

setTimeout(secondLine.bind({ten: 'Teo'}, argument), 2000);

