// This function is used to find the nth triangular Number.
// Eg: 7th Triangular Number = 28
// const findTriangularNum = n => {
//     return ((n * (n + 1)) / 2);
// }

function divisorCount(n) {
    let count = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            if (i ** 2 !== n) {
                count += 2;
            }
        }
    }
    if (Number.isInteger(Math.sqrt(n))) {
        count = count + 1
    }
    return count;
}

const findDivTriNum = nDivs => {
    let i = 1,
        triNum = 0;
    while (true) {
        let divCount = 0;

        triNum += i;
        divCount = divisorCount(triNum);

        if (divCount >= nDivs) return triNum;

        i += 1;
    }
}

console.log(findDivTriNum(500));