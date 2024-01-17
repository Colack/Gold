import fs from 'fs';
import { say } from '../util/say.js';

export function deleteContent(fileName, dest) {

    try {
        fs.unlink(fileName, (err) => {
            if (err) throw err;
        });
        fs.writeFile(fileName, 'var myGoldProgram; \nexport { myGoldProgram };', (err) => {
            if (err) throw err;
        });
        say("Finished!");
        return true;
    } catch (err) {
        say()
        return false;
    }

}
