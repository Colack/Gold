import fs from 'fs';
import { say } from '../util/say.js';

const folderName = './Blank-Project';
const fileName = './Blank-Project/program.gold'

try {

    if (!fs.existsSync(folderName)) {

        fs.mkdirSync(folderName)

        fs.writeFileSync(fileName, '// Code by: YOUR_NAME // \nvar myGoldProgram; \nexport { myGoldProgram };');

        say('File Written!');

    } else {

        fs.writeFileSync(fileName, '// Code by: YOUR_NAME // \nvar myGoldProgram; \nexport { myGoldProgram };');

        say('File Written!');

    }

  } catch (err) {

        say.error(err)

  }
