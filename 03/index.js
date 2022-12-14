import { log, bGrn, grn } from '../utils/constants.js';

function largestPrimeFact(num) {
    let divisor = 2;
    while (divisor <= num) {
        if (num % divisor === 0) {
            num /= divisor;
        } else {
            divisor++;
        }
    }
    return divisor;
}

log(bGrn("The largest prime factor of the number 600851475143: "));
log(grn(largestPrimeFact(600851475143)));