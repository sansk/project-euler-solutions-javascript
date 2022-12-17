import { execSync } from 'child_process';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { bRed, bBlu, red, blu, log } from './utils/constants.js';

const arg = process.argv[2];

if (isNaN(+(arg))) {
    log(bRed("Input(Arg) Error: ") + "\n" + red("Please check your argument in 'npm start' - It should refer to a Problem Number. Eg: 'npm start 05' to start problem 5."));
} else {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = __dirname + '\\' + arg + '\\index.js';

    try {
        const stats = fs.statSync(file);
        
        if (stats.isFile()) {
            log(bBlu("Executing Problem #" + arg + "..."));
            log(blu("************************"));
            execSync('node ./' + arg + '/index.js', { stdio: [0, 1, 2] });
        }
    } catch (err) {
        log(red("~~~~~~~~~~~~ Node Error Code & Descp ~~~~~~~~~~~~"));
        log(err);
        log(red("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        log(bRed("Access Error: ") + "\n" + red("Problem Solution Doesn't Exist! or Node Error!\nPlease check your Problem Number or Node Error Description."));
    }
}

