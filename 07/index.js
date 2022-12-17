const isPrime = num => {
    if (num === 1) return "Number is 1";
    for (let i = 2; i <= Math.ceil(num / 2); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const nthPrime = nth => {
    let count = 0;

    for (let i = 2; i < Number.MAX_SAFE_INTEGER; i++) {
        if (isPrime(i)) {
            count++;
        }
        if (count === nth) {
            return i;
        }
    }
}
console.time("10th");
console.log(nthPrime(10));
console.timeEnd("10th");

console.time("100th");
console.log(nthPrime(100));
console.timeEnd("100th");

console.time("10001th");
console.log(nthPrime(10001));
console.timeEnd("10001th");