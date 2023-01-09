// Hackerrank has a slightly improvised test case.
// Refer https://www.hackerrank.com/contests/projecteuler/challenges/euler022/problem
import { readFileSync } from 'fs';

try {
    const data = readFileSync('./22/HackerrankSampleTestCase.txt', 'utf8');
    
    const values = data.split('\r\n');
    const alphabet = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let namesMap = new Map();
    let namesArr = values.slice(1, Number(values[0]) + 1)
        .sort();

    namesArr.forEach((item, index) => {
        namesMap.set(item, (index + 1) * (item.toLowerCase()
            .split('')
            .map(x => alphabet.indexOf(x))
            .reduce((a, c, i) => a + c, 0)))
    });

    let fndNameValArr = values.slice(Number(values[0]) + 2);
    fndNameValArr.forEach(item => console.log(namesMap.get(item)));

} catch (err) {
    console.error(err);
}