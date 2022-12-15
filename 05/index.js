const findPrimeNumbers = (start, end) => {
    let primeArray = [];

    for (let i = start; i <= end; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.ceil(i / 2); j++) {
            if ((i % j) === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            primeArray.push(i);
        }
    }
    return primeArray;
};

const findFactors = (number) => {
    var factorsArray = [];

    for (let i = 2; i <= number; i++) {
        while ((number % i) === 0) {
            factorsArray.push(i);
            number /= i;
        }
    }
    return factorsArray;
}

const smallestDivNumber = () => {
    const primeArray = findPrimeNumbers(2, 20);
    
    for (let i = 0; i < primeArray.length; i++) {
        let maxOccurance = 0;
        for (let j = 2; j <= 20; j++) {
            if (!(primeArray[i] > j)) {
                const factArray = findFactors(j);
                let countOccurance = factArray.filter(x => x === primeArray[i]).length;
                if (countOccurance > maxOccurance) maxOccurance = countOccurance;
            }
        }
        if (maxOccurance > 0) primeArray[i] = Math.pow(primeArray[i], maxOccurance);
    }

    return primeArray.reduce((acc, val) => acc * val, 1);
}

console.time("Time");
console.log(smallestDivNumber());
console.timeEnd("Time");