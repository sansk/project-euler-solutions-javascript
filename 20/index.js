/*
First Solution: Using Recursion. 
But When the it involves complex problems, this will affect both time & space complexity.
*/
const factorial = (number) => {
    if (number === 1n || number === 0n) {
        return 1n;
    } else {
        return number * factorial(number - 1n);
    }
}

let fact = factorial(100n);
console.log("~~~ First Function Answer: ~~~");
console.log(String(fact).split('').map(Number).reduce((acc, curr) => acc + curr, 0));

/*
Second Solution: Another brute force kind of approach
*/
const factorialSum = (n) => {
    let factCounter = 1n;
    for (let i = n; i > 0n; --i) {
        factCounter *= i;
    }
    let numArr = factCounter.toString().split('');
    let sum = 0;
    numArr.forEach((el) => (sum += +el));
    return (sum);
}
console.log("~~~ Second Function Answer: ~~~");
console.log(factorialSum(100n));