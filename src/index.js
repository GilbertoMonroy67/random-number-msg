const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const funnyCommit = () => {
    const number = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(`\x1b[34m${number}\x1b[89m`);
}

module.exports = {
    funnyCommit
};