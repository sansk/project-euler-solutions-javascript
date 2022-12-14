import { log, bGrn, grn } from '../utils/constants.js';

const multiples = [];

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
    }
}

log(bGrn("Sum of the multiles of 3 & 5 below 1000: "))
log(grn(multiples.reduce((acc, curVal) => acc + curVal)));
