filterEvenNums = (value, index, array) => {
    return value % 2 === 0;
};

function convertToEvenNums(value, index, array) {
    if (value % 2 === 0) {
        return value;
    } else {
        return value + 1;
    };
}

function sortNumAsc(a, b) {
    return a - b;
};

function sortNumDesc(a, b) {
    return b - a;
}

module.exports = {
    filterEvenNums: filterEvenNums,
    convertToEvenNums: convertToEvenNums,
    sortNumAsc: sortNumAsc,
    sortNumDesc: sortNumDesc,
};