#!/usr/bin/env node

/*

    Completed By Colack

    Comments:
        Added better command support
        Next to work on is error handling.
        Added a few more commands too.

*/

import open from 'open';
import https from 'https';
import fs, { readlink } from 'fs';
import readLine from 'readline';
import inquirer from 'inquirer';
import figlet from 'figlet';
import clear from 'clear';
import colors from 'colors';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

var commandFound = false;

var finalMatrix = [];

var whoFight;

var currentFighter = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    quote: "",
    attackQuote: "",
    missQuote: "",
    special: () => {}
}

var enemieFighter = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    quote: "",
    attackQuote: "",
    missQuote: "",
    special: () => {}
}

const fighters = [
    {
        name: "Jotaro Kujo",
        health: 75,
        attack: 20,
        defense: 25,
        quote: "Yare yare daze",
        attackQuote: "ORA!",
        missQuote: "Yare yare daze",
        special: () => {

            console.log("Special!");

            console.log("Jotaro Kujo's special is ready!");

            console.log("Star Platinum, The World!");

            rl.question("Press enter to continue...", (answer) => {

                var randomNumber = Math.floor(Math.random() * 10) + 1;

                for (var i = 0; i < randomNumber; i++) {

                    console.log("ORA!");

                    enemieFighter.health -= 10;

                }

                console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                rl.question("Press enter to continue...", (answer) => {

                    if (whoFight == 0) {

                        fight(1);

                    } else {

                        fight(0);

                    }

                });
                
            });

        }
    },
    {
        name: "Dio",
        health: 100,
        attack: 30,
        defense: 5,
        quote: "Za Warudo!",
        attackQuote: "Muda!",
        missQuote: "Wryyyyyy!",
        special: () => {

            console.log("Special!");

            console.log("Dio's special is ready!");

            if (currentFighter.name === "Jotaro Kujo") {

                console.log("Wryyyyy... I killed Kakyoin, and now your life is mine!");

            } else {

                console.log("Wryyyyy...");

            }

            rl.question("Press enter to continue...", (answer) => {

                console.log("Za Warudo!");

                console.log("|| Time Has Stopped!");

                console.log("Hmmm... These blades will do just fine...");

                rl.question("Press enter to continue...", (answer) => {

                    let stack = 0;

                    var randomNumber = Math.floor(Math.random() * 10) + 1;

                    for (var i = 0; i < randomNumber; i++) {

                        console.log("Muda!");
        
                        stack += 10;
        
                    }

                    rl.question("Press enter to continue...", (answer) => {

                        clear();

                        console.log(`Wryyyyyy... Time shall continue! And you shall take ${stack} damage!`);

                        currentFighter.health -= stack;
            
                        console.log("|| Time Has Resumed!");
            
                        console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                        rl.question("Press enter to continue...", (answer) => {

                            if (whoFight == 0) {
        
                                fight(1);
        
                            } else {
        
                                fight(0);
        
                            }
        
                        });

                    });

                });


            });

        }
    },
    {
        name: "Axel",
        health: 165,
        attack: 20,
        defense: 0,
        quote: "uwu",
        attackQuote: "Oh No!",
        missQuote: "God Damn!",
        special: () => {
                
            console.log("Special!");

            console.log("Axel's special is ready!");

            console.log("Its My Time to Shine!");

            rl.question("Press enter to continue...", (answer) => {

                console.log("Its time for a giant Slam!");

                rl.question("Press enter to continue...", (answer) => {

                    // make a number half of the current fighter's health

                    var randomNumber = Math.floor(currentFighter.health / 2);

                    // take that number from the enemie fighter's health

                    enemieFighter.health -= randomNumber;

                    // print the enemie fighter's health

                    console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                    rl.question("Press enter to continue...", (answer) => {

                        if (whoFight == 0) {
    
                            fight(1);
    
                        } else {
    
                            fight(0);
    
                        }
    
                    });

                });

            });
        
        }
    }
];

const megaShellDetails = {
    name: 'megaShell',
    version: '1.0.2',
    description: "A simple shell/cli"
}

const megaShellCommands = [
    {
        name: 'clear',
        description: 'Clear the screen',
        action: () => {
            clear();
        }
    },
    {
        name: 'exit',
        description: 'Exit the shell',
        action: () => {
            process.exit();
        }
    },
    {
        name: 'help',
        description: 'Show this help menu',
        action: () => {
            console.log("\n");

            console.log(":: Information ::");
            console.log("Welcome to the MegaShell.");
            console.log("This is a simple shell that allows you to execute commands.");

            console.log("\n");

            console.log(":: Version ::");
            console.log("1.0.0");

            console.log("\n");

            console.log(":: Custom Commands Version ::");
            console.log(customCommandsInfo.name);
            console.log(customCommandsInfo.description);
            console.log(customCommandsInfo.version);

            console.log("\n");

            console.log(":: Commands ::");

            console.log(": General :");
            console.log("clear - clear the screen");
            console.log("exit - exit the shell");
            console.log("open - open a website");
            console.log("reload - reload the entire shell");

            console.log(": Help :")
            console.log("commands - search for a command");
            console.log("examples - show examples of JavaScript");
            console.log("help - show this help menu"); 
            console.log("prefix - lists the custom commands prefix");

            console.log(": Files :");
            console.log("create - create a file");
            console.log("read - read a file");
            console.log("delete - delete a file");
            console.log("update - update a file");
            console.log("list - list all files");
            console.log("CD - change directory");

            console.log(": Misc :");
            console.log("figlet - create ascii text from a string");
            console.log("hateAll - enter hateAll mode");
            console.log("session - show the session id");
            console.log("eval - evaluate a string");
            console.log("matrix - display a matrix");

            console.log(":: Games ::");
            console.log("fight - fight enemies in this epic 1-on-1 game!");

            console.log("\n");

            console.log(":: Custom Commands ::");
            console.log(`To use custom commands, type '${prefix}' followed by the command name.`);
            console.log('If you want to exit out of the custom command menu, type "back".');

            console.log("\n");

            console.log(":: Executing Custom Scripts ::");
            console.log("To execute a custom script, type the location of the script in the shell.");
            console.log("For example, if you want to execute the script 'scriptName.js', type 'bin/scriptName.js'");

            console.log("\n");

            console.log(":: Credits ::");
            console.log("This shell was created by Shining-Gold Studios.");
            console.log("You can check out the source code at 'https://github.com/Shining-Gold-Studios/MegaShell'.");
            console.log("If you have any questions, feel free to contact me at 'ColackAlpha@gmail.com'.");
            console.log("Thank you for using MegaShell!");
        }
    },
    {
        name: 'open',
        description: 'Open a website',
        action: () => {
            rl.question('Enter a website to open: ', (answer) => {
                open(answer);
            });
        }
    },
    {
        name: 'create',
        description: 'Create a file',
        action: () => {
            rl.question('Enter the file name: ', (answer) => {
                fs.writeFile(answer, '', (err) => {
                    if (err) throw err;
                    console.log('The file has been created.');
                });
            });
        }
    },
    {
        name: 'read',
        description: 'Read a file',
        action: () => {
            rl.question('Enter the file name: ', (answer) => {
                fs.readFile(answer, 'utf8', (err, data) => {
                    if (err) throw err;
                    console.log(data);
                });
            });
        }
    },
    {
        name: 'delete',
        description: 'Delete a file',
        action: () => {
            rl.question('Enter the file name: ', (answer) => {
                fs.unlink(answer, (err) => {
                    if (err) throw err;
                    console.log('The file has been deleted.');
                });
            });
        }
    },
    {
        name: 'update',
        description: 'Update a file',
        action: () => {
            rl.question('Enter the file name: ', (answer) => {
                fs.readFile(answer, 'utf8', (err, data) => {
                    if (err) throw err;
                    rl.question('Enter the new file contents: ', (answer) => {
                        fs.writeFile(answer, data, (err) => {
                            if (err) throw err;
                            console.log('The file has been updated.');
                        });
                    });
                });
            });
        }
    },
    {
        name: 'list',
        description: 'List all files',
        action: () => {
            fs.readdir('./', (err, files) => {
                if (err) throw err;
                console.log(files);
            });
        }
    },
    {
        name: 'prefix',
        description: 'Lists the custom commands prefix',
        action: () => {
            console.log(`The prefix is '${prefix}'`);
        }
    },
    {
        name: 'reload',
        description: 'Reload the entire shell',
        action: () => {
            console.log("Reloading...");

            setTimeout(() => {

                clear();

                console.log(figlet.textSync('MegaShell', {
                    font: 'Ghost',
                    horizontalLayout: 'default',
                    verticalLayout: 'default'
                }));

                console.log("Reload complete!");

                shell();

            }, 1000);
        }
    },
    {
        name: 'figlet',
        description: 'Create ascii text from a string',
        action: () => {
            rl.question('Enter a string: ', (answer) => {
                console.log(figlet.textSync(answer, {
                    font: 'Ghost',
                    horizontalLayout: 'default',
                    verticalLayout: 'default'
                }));
            });
        }
    },
    {
        name: "session",
        description: "Display the current session ID",
        action: () => {
            console.log(sessionId);
        }
    },
    {
        name: "CD",
        description: "Change the current working directory",
        action: () => {
            rl.question('Enter the new directory: ', (answer) => {
                process.chdir(answer);
            });
        }
    },
    {
        name: "eval",
        description: "Evaluate a string as javascript",
        action: () => {
            rl.question('Enter the string: ', (answer) => {
                console.log(eval(answer));
            });
        }
    },
    {
        name: "examples",
        description: "Show examples of js code",
        action: () => {

            console.log("JavaScript Examples:");
            console.log("\n");
            console.log("IF STATEMENTS");
            console.log("if (aproaching == true) {");
            console.log("    console.log('Oh? You’re approaching me? Instead of running away, you’re coming right to me?');");
            console.log("}");
            console.log("\n");
            console.log("FOR LOOPS");
            console.log("for (let i = 0; i < 10; i++) {");
            console.log("    console.log(i);");
            console.log("}");
            console.log("\n");
            console.log("WHILE LOOPS");
            console.log("while (aproaching == true) {");
            console.log("    console.log('I can’t beat the shit out of you without getting closer.');");
            console.log("}");
            console.log("\n");
            console.log("FUNCTIONS");
            console.log("function ora() {");
            console.log("    console.log('Ora!');");
            console.log("}");
            console.log("\n");
            console.log("OBJECTS");
            console.log("let ora = {");
            console.log("    name: 'Star Platinum',");
            console.log("    age: '?',");
            console.log("    ora: function() {");
            console.log("        console.log('Ora!');");
            console.log("    }");
            console.log("}");
            console.log("\n");
            console.log("ARRAYS");
            console.log("let ora = ['Star Platinum', '?'];");
            console.log("\n");
            console.log("STRINGS");
            console.log("let ora = 'Star Platinum';");
            console.log("\n");
            console.log("NUMBERS");
            console.log("let ora = 10;");
            console.log("\n");
            console.log("BOOLEANS");
            console.log("let ora = true;");
            console.log("\n");
            console.log("NULL");
            console.log("let ora = null;");
            console.log("\n");
            console.log("UNDEFINED");
            console.log("let ora;");
            console.log("\n");
            console.log("I guess that's all there is to it.");

        }
    },
    {
        name: "commands",
        description: "Search a command by name, description, or id",
        action: () => {
            rl.question('Enter the command name, description, or id: ', (answer) => {
                let found = false;

                for (let i = 0; i < megaShellCommands.length; i++) {
                    if (megaShellCommands[i].name == answer || megaShellCommands[i].description == answer || megaShellCommands[i].id == answer) {
                        console.log(megaShellCommands[i]);
                        found = true;
                        shell();
                    }
                }

                if (!found) {
                    console.log("Command not found.");
                    shell();
                }
            });
        }
    },
    {
        name: "flip",
        description: "Flip a coin",
        action: () => {
            let coin = Math.floor(Math.random() * 2);
            if (coin == 0) {
                console.log("Heads");
            } else {
                console.log("Tails");
            }
        }
    },
    {
        name: "matrix",
        description: "Display a matrix",
        action: () => {

            rl.question('This will take a while. Are you sure you want to do this? (y/n) ', (answer) => {

                if (answer == "y") {

                    console.log("Undergoing matrix calculations...");

                    rl.question('How many times? ', (answer) => {

                        for (var i = 0; i < answer * 1000; i++) {
        
                            let oneOrZero = (Math.random()>=0.5)? 1 : 0;
        
                            finalMatrix.push(oneOrZero);
        
                        }
        
                        let matrixString = finalMatrix.join("");
        
                        console.log(matrixString);
        
                        shell();
        
                    });

                } else {

                    shell();

                }

            });

        }
    },
    {
        name: "fight",
        description: "Enter the fighting mode",
        action: () => {

            clear();

            console.log("|| Welcome to the Arena!");
            console.log("|| This Mode was made because I was bored.");

            console.log("|| Fighters: ");

            for (let i = 0; i < fighters.length; i++) {

                console.log("\n");
                console.log(`> ID: ${i} ` + fighters[i].name);       
                console.log(`Health: ` + fighters[i].health);
                console.log(`Attack: ` + fighters[i].attack);
                console.log(`Defense: ` + fighters[i].defense);
                console.log(`Quote: ` + fighters[i].quote);

            }
            
            rl.question("|| What Fighter Would you like to use? ", (answer) => {

                if (fighters[answer]) {

                    currentFighter.name = fighters[answer].name;
                    currentFighter.health = fighters[answer].health;
                    currentFighter.attack = fighters[answer].attack;
                    currentFighter.defense = fighters[answer].defense;
                    currentFighter.attackQuote = fighters[answer].attackQuote;
                    currentFighter.quote = fighters[answer].quote;
                    currentFighter.missQuote = fighters[answer].missQuote;
                    currentFighter.special = fighters[answer].special;
                    

                    let randomFighter = fighters[Math.floor(Math.random() * fighters.length)];

                    enemieFighter.name = randomFighter.name;
                    enemieFighter.health = randomFighter.health;
                    enemieFighter.attack = randomFighter.attack;
                    enemieFighter.defense = randomFighter.defense;
                    enemieFighter.attackQuote = randomFighter.attackQuote;
                    enemieFighter.quote = randomFighter.quote;
                    enemieFighter.missQuote = randomFighter.missQuote;
                    enemieFighter.special = randomFighter.special;

                    console.log(`|| ${currentFighter.name} is ready to fight!`);

                    rl.question("|| Are you ready to fight? (y/n) ", (answer) => {

                        if (answer == "y") {

                            console.log(`|| ${currentFighter.name} is fighting ${enemieFighter.name}!`);

                            fight();

                        } else {

                            console.log("|| You hesitated...");

                            shell();

                        }

                    });



                } else {

                    console.log("|| That's not a fighter!");

                    shell();

                }
                
            });

        }
    }
];

const sessionId = Math.floor(Math.random() * 1000000);

const random = Math.floor(Math.random() * 5);

const json = fs.readFileSync('./JSON/data.json');
const data = JSON.parse(json);



// For Adding Custom Commands
// Follow the documentation if you want to learn more
// github.com/Shining-Gold-Studios/megaShell/wiki/

const prefix = '$';

const customCommandsInfo = {
    name: "customCommands",
    description: "This is a custom command system.",
    version: "1.0.0"
}

const myCommands = [
    {
        name: 'clear',
        description: 'Clear the screen',
        action: () => {
            clear();
        }
    },
    {
        name: 'exit',
        description: 'Exit the shell',
        action: () => {
            process.exit();
        }
    },
    {
        name: 'help',
        description: 'Show this help menu',
        action: () => {
            console.log(`${prefix}clear - Clear the screen \n ${prefix}exit - Exit the shell \n ${prefix}help - Show this help menu`);
        }
    }
];

const myNoCommandAction = () => {
    console.log('Command not found');
};



const shell = () => {

    rl.question(`${data.user}-||: `, (answer) => {

        commandFound = false;

        if (answer == "hateAll") {

            console.log("Starting hateAll...");

            setTimeout(() => {

                hateAllStart();

                function hateAllStart() {

                    rl.question("├ ", (hateAll) => {
                   
                        if (hateAll == "displayVersion") {

                            displayVersion();

                            hateAllStart();

                        } else if (hateAll == "back") {

                            shell();

                        } else if (hateAll == "help") {

                            console.log("displayVersion - displays the version of the shell");
                            console.log("back - returns to the main menu");
                            console.log("help - displays this help menu");
                            console.log("exit - exits the shell");
                            console.log("megaShellDetails - displays the details of the shell");
                            console.log("clear - clears the screen");
                            console.log("search - searches a directory");

                            hateAllStart();

                        } else if (hateAll == "megaShellDetails") {

                            displayMegaShellDetails();

                            hateAllStart();

                        } else if (hateAll == "exit") {

                            console.log("Exiting...");

                            setTimeout(() => {

                                process.exit();

                            }, 1000);

                        } else if (hateAll == "clear") {

                            clear();

                            hateAllStart();

                        } else if (hateAll == "search") {
                                
                                rl.question("├├  ", (search) => {
    
                                    fs.readdir(search, (err, files) => {

                                        console.log(files);

                                        hateAllStart();

                                    });
    
                                });
    
                        } else {

                            console.log("Invalid command");

                            hateAllStart();

                        }

                    });    

                }

                function displayVersion() {

                    console.log(megaShellDetails.version);

                }

                function displayMegaShellDetails() {

                    console.log(megaShellDetails.name);
                    console.log(megaShellDetails.description);
                    console.log(megaShellDetails.version);

                }
 
            }, 1000);

        } else if (answer.startsWith(prefix)) {

            const start = () => {

                rl.question(`${prefix}:`, (input) => {

                    for (var i = 0; i < myCommands.length; i++) {
    
                        if (myCommands[i].name === input) {
    
                            commandFound = true;
    
                            myCommands[i].action();
    
                        } else if (input == 'back') {

                            commandFound = true;

                            shell();

                        }
    
                    }
    
                    if (!commandFound) {
    
                        myNoCommandAction();
    
                    }
    
                    start();
    
                });

            }

            start();

        } else {

            for (var i = 0; i < megaShellCommands.length; i++) {

                if (answer === megaShellCommands[i].name) {

                    megaShellCommands[i].action();

                    shell();

                    commandFound = true;

                }

            }
            
            if (!commandFound) {

                console.log("Command not found");

                shell();

            }

        }

    });
};

function onCli() {

    clear();

    console.log(figlet.textSync('MegaShell', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));

    if (random === 0) {

        console.log("Ruining your life one line at a time...");
    
    } else if (random === 1) {
    
        console.log("Powering Gold and other projects...");
    
    } else if (random === 2) {
    
        console.log("Generating a new session...");
    
    } else if (random === 3) {
    
        console.log("Loading...");
    
    } else if (random === 4) {
    
        console.log("Destroying the world...");
    
    } else if (random === 5) {
    
        console.log("Hello World!");
    
    }

    console.log("Session ID: " + sessionId);

    if (data.user === undefined) {

        console.log("Welcome to MegaShell!");
    
        rl.question("Please enter your username: ", (username) => {
    
            data.user = username;
    
            console.log("Welcome " + data.user + "!");
    
            fs.writeFileSync('./JSON/data.json', JSON.stringify(data));
    
            rl.close();
    
        });
    
    } else {
    
        console.log("Welcome back " + data.user + "!");
    
    }

    const jsonN = fs.readFileSync('./JSON/data.json');
    const dataN = JSON.parse(jsonN);

    dataN.sessionId = sessionId;

    fs.writeFileSync('./JSON/data.json', JSON.stringify(dataN));

    shell();

}

function fight() {

    console.log("|| Its time to Fight!");

    // flip a coin to see who goes first

    const coin = Math.floor(Math.random() * 2);

    if (coin === 0) {

        console.log("|| " + currentFighter.name + " goes first!");

        fightStart(1);

    } else {

        console.log("|| " + enemieFighter.name + " goes first!");

        fightStart(0);

    }

}

function fightStart(who) {

    whoFight = who;

    if (who == 1) {

        const random = Math.floor(Math.random() * 2) + 1;

        if (random == "1") {

            console.log("|| " + currentFighter.name + " used their special attack!");

            clear();

            currentFighter.special();

        } else {

            clear();

        const attack = Math.floor(Math.random() * currentFighter.attack);

        const defense = Math.floor(Math.random() * enemieFighter.defense);

        const damage = attack - defense;

        if (damage < 0) {

            console.log(currentFighter.missQuote);

            console.log("|| Attacked Missed!");

            console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

            rl.question("|| Press enter to continue...", (answer) => {

                fightStart(0);

            });

        } else {

            console.log(currentFighter.attackQuote);

            console.log("|| " + currentFighter.name + " deals " + damage + " damage!");

            console.log("|| " + enemieFighter.name + " has " + (enemieFighter.health - damage) + " health left!");

            enemieFighter.health -= damage;

            if (enemieFighter.health <= 0) {

                console.log("|| " + enemieFighter.name + " has been defeated!");

                console.log("|| " + currentFighter.name + " wins!");

                shell();

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(0);

                });

            }
            
        }

        }

    } else {

        const random = Math.floor(Math.random() * 100) + 1;

        if (random == "1") {

            console.log("|| " + enemieFighter.name + " used their special attack!");

            clear();

            enemieFighter.special();

            if (currentFighter.health <= 0) {

                console.log("|| " + currentFighter.name + " has been defeated!");

                console.log("|| " + enemieFighter.name + " wins!");

                shell();

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(1);

                });

            }

        } else {

            clear();

        const attack = Math.floor(Math.random() * enemieFighter.attack);

        const defense = Math.floor(Math.random() * currentFighter.defense);

        const damage = attack - defense;

        if (damage < 0) {

            console.log(enemieFighter.missQuote);

            console.log("|| Attacked Missed!");

            console.log("|| " + currentFighter.name + " has " + (currentFighter.health - damage) + " health left!");

            rl.question("|| Press enter to continue...", (answer) => {

                fightStart(1);

            });

        } else {

            console.log(enemieFighter.attackQuote);

            console.log("|| " + enemieFighter.name + " deals " + damage + " damage!");

            console.log("|| " + currentFighter.name + " has " + (currentFighter.health - damage) + " health left!");

            currentFighter.health -= damage;

            if (currentFighter.health <= 0) {

                console.log("|| " + currentFighter.name + " has been defeated!");

                console.log("|| " + enemieFighter.name + " wins!");

                shell();

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(1);

                });

            }
        
        }   

        }

    }

}

rl.on('close', () => {
    
    console.log("\nExiting...");

    setTimeout(() => {

        process.exit();

    }, 1000);

});

onCli();
