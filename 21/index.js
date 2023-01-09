// This is not the best solution as we are
// exploiting the fact that we know the upper limit, which is 10,000 here,
// to avoid time complexity or space complexity failure.
const divSumArray = Array(10000).fill(0);
const sumDivisors = n => {
    if (divSumArray[n]) return divSumArray[n];

    let sum = 1,
        sqrt = Math.floor(Math.sqrt(n));
    for (let i = 2; i < sqrt; i++) {
        if (n % i === 0) sum += i + n / i;
    }
    if (n % sqrt === 0) sum += sqrt;
    return divSumArray[n] = sum;
}

let sum = 0,
    n = 10000;
for (let i = 1; i < n; i++) {
    let possiblePair = sumDivisors(i);
    if (possiblePair !== i && sumDivisors(possiblePair) === i)
        sum += i;
}
console.log(sum);