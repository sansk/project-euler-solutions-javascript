import { readFileSync } from 'fs';

try {
    const data = readFileSync('./22/p022_names.txt', 'utf8');
    //const data = readFileSync('./22/test.txt', 'utf8');
    const values = data.trim().split(',').map(str => str.replace(/^"(.*)"$/, '$1')).sort();
    const alphabet = [0, 'a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let nameValues = values.map(item => item.toLowerCase()
                                            .split('')
                                            .map(x => alphabet.indexOf(x))
                                            .reduce((a, c) => a + c, 0));
    console.log(nameValues.reduce((ac, cv, i) => ac + cv * (i + 1), 0));

} catch (err) {
    console.error(err);
}