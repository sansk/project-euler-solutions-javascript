import { log, bGrn, grn } from '../utils/constants.js';

let first = 1,
    second = 2,
    sum = 0;

while (first < 4000000) {
    if (first % 2 === 0) sum += first;

    let temp = first + second;
    [first, second] = [second, temp];
}

log(bGrn("Sum of the even-valued terms in a Fibonacci sequence: "));
log(grn(sum));