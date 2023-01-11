const collatzSeqCount = n => {
    let seqCount = 1;

    if (n === 1) seqCount = 1;

    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            // You can skip to next possible odd using (3n + 1)/2 while adding 2 to the counter 
            // as (3n + 1) always results in even which again is divided by 2 in the next step.
            // Check HackerreankSolution.js for that approach.
            n = (3 * n + 1);
        }
        seqCount++;
    }
    return seqCount;
}

const calcLongestSeq = limit => {
    let longestSeq = 1,
        longestVal = 1;

    for (let i = 2; i <= limit; i++) {
        let getSeqArrCount = collatzSeqCount(i);

        if (getSeqArrCount >= longestSeq) {
            longestSeq = getSeqArrCount;
            longestVal = i;
        }
    }
    return longestVal;

}

console.log(calcLongestSeq(1000000));

/* 
Another method is to cache all the chain lengths along the way 
Used Map() object to save the chain length for each number.
*/
let seqCountMap = new Map();
const collatzSeqCountAnoterMethod = n => {
    let seqCount = 1,
        initial = n;

    if (n === 1) {
        seqCount = 1;
    }

    while (n > 1) {
        if (seqCountMap.has(n)) {
            seqCount += seqCountMap.get(n);
            return seqCount;
        }

        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (3 * n + 1);
        }
        seqCount++;
    }
    seqCountMap.set(initial, seqCount);
    return seqCount;
}