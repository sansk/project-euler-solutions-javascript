const isPrime = n => {
    if (n === 2) return true;
    if (n === 3) return true;
    if (n % 2 === 0) return false;
    if (n % 3 === 0) return false;

    var i = 5;
    var w = 2;
    while (i * i <= n) {
        if (n % i === 0) {
            return false;
        }
        i += w;
        w = 6 - w;
    }
    return true;
}

let allPrimes = [];

for (let i = 2; i <= 2000000; i++) {
    if (isPrime(i)) allPrimes.push(i);
}

console.log(allPrimes.reduce((a, b) => a + b, 0));
//142913828922 -- 2000000