import { properDivisors, findTriangularNum } from '../utils/utilities.js';



const findDivTriNum = nDivs => {
    let i = 1,
        triNum = 0;
    while (true) {
        let divCount = 0;

        // Either use formula or a simple addition to triNum.
        //triNum = findTriangularNum(i); => check in utils/utilities.js file.
        triNum += i;
        divCount = properDivisors(triNum).length;

        if (divCount >= nDivs) return triNum;

        i += 1;
    }
}

console.log(findDivTriNum(500));