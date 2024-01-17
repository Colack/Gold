/*
    Completed By Colack

    Comments: 

        If you want, you can add your own commands by using; if (answer == "INSERT_COMMAND_HERE") {
        This is also the current replacement for shell. 
        If you notice some things, like this being called "Flip", thats just from the old shell.

*/

import open from 'open';
import https from 'https';
import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const megaShellVersion = {
    major: 1,
    minor: 0
}

const customBuild = {
    present: false,
    name: "",
    des: "",
    version: {
        major: 0,
        minor: 0
    },
    helpCommand: ""
}

megaShellLoad();

export function megaShellLoad() {

    rl.question('| ', function (answer) {

            if (answer == "make") {

                rl.question('- Directory: ', function (dir) {

                    rl.question('- FileName: ', function (name) {

                        rl.question('- Content: ', function(content) {

                            fs.writeFile(`${dir}/${name}`, content, err => {

                                if (err) {

                                    console.error(err)
                                    return

                                }

                                console.log(`Created ${name} in ${dir}`);

                                megaShellLoad();

                            });

                        });

                    });

                });

            } else if (answer == "edit") {

                rl.question('- Directory: ', function (dir) {

                    rl.question('- FileName: ', function (name) {

                        rl.question('- Content: ', function(content) {

                            fs.writeFile(`${dir}/${name}`, content, err => {

                                if (err) {

                                    console.error(err)
                                    return

                                }

                                console.log(`Edited ${name} in ${dir}`);

                                megaShellLoad();

                            });

                        });

                    });

                });

            } else if (answer == "leave") {

                rl.close();

            } else if (answer == "source") {

                open('https://github.com/Shining-Gold-Studios/megaShell');

            } else if (answer == "help") {

                console.log("- Welcome to the megaShell, an open source Shell built for JavaScript.");

            } else if (answer == "reload") {

                megaShellLoad();

            } else if (answer == "clear") {

                console.clear();

            } else if (answer == "motd") {

                let url = "https://api.npoint.io/d177dce4fa0ef6f25aee";

                https.get(url,(res) => {

                    let body = "";
    
                    res.on("data", (chunk) => {
    
                        body += chunk;
                
                     });
    
                    res.on("end", () => {
    
                        try {
    
                        let json = JSON.parse(body);
    
                        say(json.motd);
    
                        megaShellLoad();
    
                            } catch (error) {
    
                                console.error(error.message);
                    
                        };
    
                    });
    
                }).on("error", (error) => {
    
                    console.error(error.message);
    
                });

            } else if (answer == "version") {

                console.log(megaShellVersion.major + "." + megaShellVersion.minor);

            } else if (answer == "this") {

                rl.question('- Arguments: ', function (args) {

                    if (args == "custom") {

                        if (customBuild.present == true) {

                            console.log(customBuild.name);
                            console.log(customBuild.des);
                            console.log(customBuild.version.major + "." + customBuild.version.minor);
                            console.log(customBuild.helpCommand);

                        } else {

                            console.log('No custom build present.');

                        }

                    } else if (args == "help") {

                        console.log("Thank you for using the THIS framework.");
                        console.log("If you want to add custom commands to THIS, please follow the guide in the wiki.");
                        open("https://github.com/Shining-Gold-Studios/Gold-Language/wiki");

                    } else {

                        
                        // ############### CUSTOM COMMANDS ###############



                        // ###############################################

                    }

                    megaShellLoad();

                });

            } else if (answer == "destroy") {

                rl.question('- Directory: ', function (dir) {

                    rl.question('- FileName: ', function (name) {

                        fs.unlink(`${dir}/${name}`, err => {

                            if (err) {

                                console.error(err)
                                return

                            }

                            console.log(`Deleted ${name} in ${dir}`);

                            megaShellLoad();

                        });

                    });

                });

            } 

            megaShellLoad();

    });

}

rl.on('close', function () {

    console.log('Exiting Shell.');

    process.exit(0);

});

// - Colack/
