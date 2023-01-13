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

console.log(latticePathsCombinatorics(4, 4)); // 70
console.log(latticePathsCombinatorics(3, 4)); // 35
console.log(latticePathsCombinatorics(20, 20)); // 137846528820

// Hackerrank - Using BigInt and Modulo
// const latticePathsBinomialHR = (a, b) => {
//     let M = 1000000007n;
//     const factorial = (number) => {
//         if (number === 1n || number === 0n) {
//             return 1n;
//         } else {
//             return number * factorial(number - 1n);
//         }
//     }

//     let n = BigInt(a) + BigInt(b),
//         k = BigInt(a);
//     let res = (factorial(n) / (factorial(k) * factorial(n - k))) % M;
//     return Number(res);
// }