// This code failed for 5 test cases saying `timed out`
// Need to further adjust the complexity.
const sequence = n => {
    let currVal = n,
        seqArr = [n];

    while (currVal != 1) {
        if (currVal % 2 === 0) {
            currVal = currVal / 2;
        } else {
            currVal = ((3 * currVal) + 1);
        }
        seqArr.push(currVal);
    }

    return (seqArr);
}

const calcLongestSeq = (limit, seqMap) => {
    let longestSeq = 1,
        longestVal = 1,
        startNumber = 2;

    if (seqMap.size > 0) {
        startNumber = seqMap.size + 2;
    }
    
    if (startNumber <= limit) {
        for (let i = startNumber; i <= limit; i++) {
            let getSeqArr = sequence(i);
            seqMap.set(i, {
                seq: getSeqArr,
                len: getSeqArr.length
            });
        }
    }
    
    for(let i = 2; i <= limit; i++) {
        let val = seqMap.get(i);
        if (val.len >= longestSeq) {
            longestSeq = val.len;
            longestVal = val.seq[0];
        }
    }

    return longestVal;
}

const seqMap = new Map();
const values = [15, 10, 16, 20];

for (let i = 0; i < values.length; i++) {
    console.time("p#14");
    console.log(calcLongestSeq(values[i], seqMap));
    console.timeEnd("p#14");
    console.log("=================================================================");
}