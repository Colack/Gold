import fs from 'fs';
import { say } from '../util/say.js';

export function copyContent(fileName, dest) {

    try {

        fs.copyFileSync(fileName, dest);

        say("Saving " + fileName + " to " + dest);

        say('Completed!');

        return true;

    } catch (err) {

        say();

        return false;

    }

}
