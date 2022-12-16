const sumOfSqrNums = (start, end) => {
    let sumOfSqrs = 0;

    if (start > end) {
        console.log(`Error: ${start} is greater than ${end}! Please enter a valid Start & End of the Sequence.`);
    } else {
        for (let i = start; i <= end; i++) {
            sumOfSqrs += Math.pow(i, 2);
        }
    }
    return sumOfSqrs;
}

const sqrOfSumNums = (start, end) => {
    let sumOfNums = 0;

    if (start > end) {
        console.log(`Error: ${start} is greater than ${end}! Please enter a valid Start & End of the Sequence.`);
    } else {
        for (let i = start; i <= end; i++) {
            sumOfNums += i;
        }
    }
    return Math.pow(sumOfNums, 2);
}

let difference = sqrOfSumNums(1, 100) - sumOfSqrNums(1, 100);
console.log(difference);