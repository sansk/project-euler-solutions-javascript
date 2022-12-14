import { log } from '../utils/constants.js';

const checkPalindrome = (number) => {
    let reminder = 0,
        tempNum = number,
        finalNum = 0;

    while (number > 0) {
        reminder = number % 10;
        number = parseInt(number / 10);
        finalNum = finalNum * 10 + reminder;
    }
    return (finalNum === tempNum) ? true : false;
}

const retLargestPalindrome = () => {
    let maxVal = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            let prod = i * j;
            if (checkPalindrome(prod)) {
                if (prod > maxVal) maxVal = prod;
                break;
            }
        }
    }
    return maxVal;
}

log(retLargestPalindrome());