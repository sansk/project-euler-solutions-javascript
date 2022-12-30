import { log } from '../utils/constants.js';

const checkPalindrome = (number) => {
    let reverse = String(number)
        .split('')
        .reverse()
        .join('');
      return Number(reverse) === number;
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
