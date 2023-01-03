// const factorial = (number) => {
//     if (number === 1) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// }

// const latticePaths = (m, n) => {


// }

const numberOfPathsRecursive = (m, n = m) => {
    if (m < 0 || n < 0) return 0;
    if (m === 0 && n === 0) return 1;
    return (numberOfPathsRecursive(m - 1, n) + numberOfPathsRecursive(m, n - 1));
}

console.log('Result is ' + numberOfPathsRecursive(2));