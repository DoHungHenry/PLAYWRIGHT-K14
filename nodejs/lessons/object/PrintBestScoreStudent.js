let s1 = {
    name: 'John',
    score: [10, 4, 6]
};

let s2 = {
    name: 'Jane',
    score: [10, 8, 5]
};

let s3 = {
    name: 'Tom',
    score:  [10, 9, 7]
};

const students = [s1, s2, s3];

const bestScoreStudent = findBestScore(students);
console.log(bestScoreStudent);

function findBestScore(students) {
    let bestScore = 0;
    let bestStudent = null;

    for (let student of students) {
        let totalScore = 0;
        for (let score of student.score) {
            totalScore += score;
        }

        if (totalScore > bestScore) {
            bestScore = totalScore;
            bestStudent = student;
        }
    }

    return bestStudent;
}