const latticePathsRecursive = (m, n = m) => {
    if (m < 0 || n < 0) return 0;
    if (m === 0 && n === 0) return 1;
    return (latticePathsRecursive(m - 1, n) + latticePathsRecursive(m, n - 1));
}

const latticePathsCombinatorics = (k, n) => {
    const factorial = (number) => {
        if (number === 1 || number === 0) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }

    let r = k + n;
    let res = factorial(r) / (factorial(r-n) * factorial(n));
    return res;
}

console.log('Result is ' + latticePathsCombinatorics(4, 4));