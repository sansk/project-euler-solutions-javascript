function processData(input) {
    const collatzSeqCount = n => {
        let seqCount = 1;

        if (n === 1) {
            seqCount = 1;
        }

        while (n > 1) {
            if (n % 2 === 0) {
                n = n / 2;
                seqCount++;
            } else {
                n = (3 * n + 1) / 2;
                seqCount += 2;
            }
        }
        return seqCount;
    }

    const calcSeq = () => {
        let arr = [];
        let arrSize = 5 * Math.pow(10, 6);
        let maxCount = 0;
        let result = 0;

        for (let i = 0; i <= arrSize; i++) {
            let count = collatzSeqCount(i);
            if (count > maxCount || count === maxCount) {
                maxCount = count;
                result = i;
            }
            arr[i] = result;
        }
        let values = input.split("\n");
        for (let i = 1; i < values.length; i++) {
            console.log(arr[values[i]]);
        }
    }
    calcSeq();
}