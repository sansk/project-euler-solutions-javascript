function processData(input) {
    //Enter your code here
    
    const divisorCount = n => {
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

    const findTriangularNum = n => {
        return ((n * (n + 1)) / 2);
    }

    const findDivTriNum = () => {
        let divNum = 0,
            arr = [],
            arrSize = 1000,
            triNum = 0;

        for(let i = 0; i <= arrSize; i++) {
            while (divNum <= i) {
                triNum++;
                divNum = divisorCount(findTriangularNum(triNum));
            }
            arr[i] = (findTriangularNum(triNum));
        }
        
        let values = input.split("\n");
        
        for (let i = 0; i < values.length; i++) {
            console.log(arr[values[i]]);
        }
    }

    findDivTriNum();
}