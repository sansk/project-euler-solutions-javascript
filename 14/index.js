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
  
    return(seqArr);
}

const calcLongestSeq = limit => {
    let longestSeq = 1,
        longestVal = 1;

    for(let i = 2; i <= limit; i++) {
        let getSeqArr = sequence(i);
        
        if (getSeqArr.length >= longestSeq) {
            longestSeq = getSeqArr.length;
            longestVal = i;
        }
    }
    return longestVal;

}
console.time("p#14");
console.log(calcLongestSeq(1000000));
console.timeEnd("p#14");
