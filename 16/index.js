const digitSum = n => {
    let power = 2n ** BigInt(n);
    // Convert BigInt into a String. Concatenating with an empty string, ''.
    let strNum = '' + power; 

    return strNum.split('').map(Number).reduce((acc, curr) => acc + curr, 0);
}

console.log(digitSum(1000));
// number.toLocaleString('fullwide', { useGrouping: false })