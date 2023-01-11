function processData(input) {
    //Enter your code here
    const divisors = n => {
        let count = 0;
        // Same as the properDivisor function. But instead of pushng to array,
        // we straight away count the number of divisors.
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                count += 2;
                if (i === Math.sqrt(n)) {
                    count--;
                }
            }
        }
        return count;
    }

    // We make use of the upper bound specified in Hackerrank to pass all the test cases. 
    // If N is a bigger number, the other solution would time-out.
    // What is the value of the first triangle number to have over N divisors & 1 <= N <= 1000
    const triNum = () => {
        let arr = [];
        let arrSize = 1000; // Upper bound specified in Hacker rank.
        let divisorsNumber = 0;
        let triangleNumber = 0;
        for (let i = 0; i <= arrSize; i++) {
            while (divisorsNumber <= i) {
                triangleNumber++;
                divisorsNumber = divisors((triangleNumber * (triangleNumber + 1) / 2));
            }
            arr[i] = (triangleNumber * (triangleNumber + 1) / 2);
            
        }

        let values = input.split("\n");
        for (let i = 1; i < values.length; i++) {
            console.log(arr[values[i]]);
        }
    }
    triNum();
} 