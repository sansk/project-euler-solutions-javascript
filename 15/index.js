const latticePathsBinomialCoefficient = (size) => {
    const factorial = (number) => {
        if (number === 1) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }
    
    // Based on Binomial Coeffecient Forumula at https://en.wikipedia.org/wiki/Binomial_coefficient#Factorial_formula
    
    let n = 2 * size, // Number of Choices to make
        k = size // Number of times each choice can be made

    // n! / k! * (n-k)!
    return factorial(n) / (factorial(k) * factorial(n - k));

}

const latticePathsRecursive = (m, n = m) => {
    if (m < 0 || n < 0) return 0;
    if (m === 0 && n === 0) return 1;
    return (latticePathsRecursive(m - 1, n) + latticePathsRecursive(m, n - 1));
}

const latticePaths = (m,n) => {
    const factorial = (number) => {
        if (number === 1) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }

    let res = factorial(m + n) / (factorial(m) * factorial(n));
    return res;
}

console.log('Result is ' + latticePaths(3, 2));