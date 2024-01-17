import { myGoldProgram } from './runner.mjs'

var myVariables = [
    {
        val: ""
    },
    {
        val: ""
    },
    {
        val: ""
    }
];
var currentError = {
    code: 0,
    des: ""
}
var name = myGoldProgram;
var eggLine = 0;

const x = name.ex.length;
const thisInt = "regInt";

onFileStart();

function onFileStart() {

    if (thisInt == name.int) {



    } else {
    
        console.log("< Warning: This Program is not build for this interpreter!");
    
    }

    loadProgram();

}

function loadProgram() {

    for (var i = 0; i < name.ex.length - 1; i++) {

        if (name.ex[i].fun == 'add') {
    
            if (name.ex[i].saveToVar == true) {
    
                myVariables[name.ex[i].slot].val = name.ex[i].val1 + name.ex[i].val2;
    
                console.log(myVariables[name.ex[i].slot].val);
    
            } else {
    
                console.log(name.ex[i].val1 + name.ex[i].val2);
    
            }
    
        } else if (name.ex[i].fun == 'sub') {
    
            if (name.ex[i].saveToVar == true) {
    
                myVariables[name.ex[i].slot].val = name.ex[i].val1 - name.ex[i].val2;
    
                console.log(myVariables[name.ex[i].slot].val);
    
            } else {
    
                console.log(name.ex[i].val1 - name.ex[i].val2);
    
            }
    
        } else if (name.ex[i].fun == "mul") {
    
            if (name.ex[i].saveToVar == true) {
    
                myVariables[name.ex[i].slot].val = name.ex[i].val1 * name.ex[i].val2;
    
                console.log(myVariables[name.ex[i].slot].val);
    
            } else {
    
                console.log(name.ex[i].val1 * name.ex[i].val2);
    
            }
    
        } else if (name.ex[i].fun == "div") {
    
            if (name.ex[i].saveToVar == true) {
    
                myVariables[name.ex[i].slot].val = name.ex[i].val1 / name.ex[i].val2;
    
                console.log(myVariables[name.ex[i].slot].val);
    
            } else {
    
                console.log(name.ex[i].val1 / name.ex[i].val2);
    
            }
    
        } else if (name.ex[i].fun == "if") {
    
                if (name.ex[i].type == "=") {
    
                    if (name.ex[i].val1 == name.ex[i].val2) {
    
                        console.log(name.ex[i].logvaluetrue);
    
                    } else {
    
                        console.log(name.ex[i].logvaluefalse);
    
                    }
    
                } else if (name.ex[i].type == ">") {
    
                    if (name.ex[i].val1 > name.ex[i].val2) {
    
                        console.log(name.ex[i].logvaluetrue);
    
                    } else {
    
                        console.log(name.ex[i].logvaluefalse);
    
                    }
    
                } else if (name.ex[i].type == "<") {
    
                    if (name.ex[i].val1 < name.ex[i].val2) {
    
                        console.log(name.ex[i].logvaluetrue);
    
                    } else {
    
                        console.log(name.ex[i].logvaluefalse);
    
                    }
    
                } else if (name.ex[i].type == "!") {
    
                    if (name.ex[i].val1 != name.ex[i].val2) {
    
                        console.log(name.ex[i].logvaluetrue);
    
                    } else {
    
                        console.log(name.ex[i].logvaluefalse);
    
                    }
    
                }
    
        } else if (name.ex[i].fun == "log") {
    
            console.log(name.ex[i].val1);
    
        } else if (name.ex[i].fun == "var") {
    
            myVariables[name.ex[i].slot].val = name.ex[i].val1;
    
        } else if (name.ex[i].fun == "logVar") {
    
            console.log(myVariables[name.ex[i].slot].val);
    
        } else if (name.ex[i].fun == "input") {
    
            myVariables[name.ex[i].slot].val = process.argv.slice(2).toString();
            
        } else if (name.ex[i].fun == "xLog") {
    
            if (name.ex[i].variableArea == "first") {
    
                console.log(myVariables[name.ex[i].slot].val + name.ex[i].val1 + name.ex[i].val2);
    
            } else if (name.ex[i].variableArea == "center") {
    
                console.log(name.ex[i].val1 + myVariables[name.ex[i].slot].val + name.ex[i].val2);
    
            } else if (name.ex[i].variableArea == "last") {
    
                console.log(name.ex[i].val1 + name.ex[i].val2 + myVariables[name.ex[i].slot].val);
    
            }
    
        } else if (name.ex[i].fun == "egg") {
    
            eggLine = i;
    
        } else if (name.ex[i].fun == "shell") {
    
            loadEgg(eggLine);
    
        } else if (name.ex[i].fun == "crack") {
    
            eggLine = 0;
    
        } else if (name.ex[i].fun == "kill") {
    
            kill();
    
        } else if (name.ex[i].fun == "ifVar") {
    
            if (name.ex[i].type == "=") {
    
                if (name.ex[i].slot1 == name.ex[i].slot2) {
            
                    console.log(name.ex[i].logvaluetrue);
            
                } else {
            
                    console.log(name.ex[i].logvaluefalse);
            
                }
            
            } else if (name.ex[i].type == ">") {
            
                if (name.ex[i].slot1 > name.ex[i].slot2) {
            
                    console.log(name.ex[i].logvaluetrue);
            
                } else {
            
                    console.log(name.ex[i].logvaluefalse);
            
                }
            
            } else if (name.ex[i].type == "<") {
            
                if (name.ex[i].slot1 < name.ex[i].slot2) {
            
                    console.log(name.ex[i].logvaluetrue);
            
                } else {
            
                    console.log(name.ex[i].logvaluefalse);
            
                }
            
            } else if (name.ex[i].type == "!") {
            
                if (name.ex[i].slot1 != name.ex[i].slot2) {
            
                    console.log(name.ex[i].logvaluetrue);
            
                } else {
            
                    console.log(name.ex[i].logvaluefalse);
            
                }
            
            }
            
        }
    
        if (name.ex[x - 1].fun == "end") {
        } else {
        
            console.log('Error: Program Does not End!');
        
        }
    
    }   
    
    function loadEgg(line) {
    
        if (name.ex[line].eFun == 'add') {
    
            if (name.ex[line].saveToVar == true) {
        
                myVariables[name.ex[line].slot].val = name.ex[line].val1 + name.ex[line].val2;
        
                console.log(myVariables[name.ex[line].slot].val);
        
            } else {
        
                console.log(name.ex[line].val1 + name.ex[line].val2);
        
            }
        
        } else if (name.ex[line].eFun == 'sub') {
        
            if (name.ex[line].saveToVar == true) {
        
                myVariables[name.ex[line].slot].val = name.ex[line].val1 - name.ex[line].val2;
        
                console.log(myVariables[name.ex[line].slot].val);
        
            } else {
        
                console.log(name.ex[line].val1 - name.ex[line].val2);
        
            }
        
        } else if (name.ex[line].eFun == "mul") {
        
            if (name.ex[line].saveToVar == true) {
        
                myVariables[name.ex[line].slot].val = name.ex[line].val1 * name.ex[line].val2;
        
                console.log(myVariables[name.ex[line].slot].val);
        
            } else {
        
                console.log(name.ex[line].val1 * name.ex[line].val2);
        
            }
        
        } else if (name.ex[line].eFun == "div") {
        
            if (name.ex[line].saveToVar == true) {
        
                myVariables[name.ex[line].slot].val = name.ex[line].val1 / name.ex[line].val2;
        
                console.log(myVariables[name.ex[line].slot].val);
        
            } else {
        
                console.log(name.ex[line].val1 / name.ex[line].val2);
        
            }
        
        } else if (name.ex[line].eFun == "if") {
        
                if (name.ex[line].type == "=") {
        
                    if (name.ex[line].val1 == name.ex[line].val2) {
        
                        console.log(name.ex[line].logvaluetrue);
        
                    } else {
        
                        console.log(name.ex[line].logvaluefalse);
        
                    }
        
                } else if (name.ex[line].type == ">") {
        
                    if (name.ex[line].val1 > name.ex[line].val2) {
        
                        console.log(name.ex[line].logvaluetrue);
        
                    } else {
        
                        console.log(name.ex[line].logvaluefalse);
        
                    }
        
                } else if (name.ex[line].type == "<") {
        
                    if (name.ex[line].val1 < name.ex[line].val2) {
        
                        console.log(name.ex[line].logvaluetrue);
        
                    } else {
        
                        console.log(name.ex[line].logvaluefalse);
        
                    }
        
                } else if (name.ex[line].type == "!") {
        
                    if (name.ex[line].val1 != name.ex[line].val2) {
        
                        console.log(name.ex[line].logvaluetrue);
        
                    } else {
        
                        console.log(name.ex[line].logvaluefalse);
        
                    }
        
                }
        
        } else if (name.ex[line].eFun == "log") {
        
            console.log(name.ex[line].val1);
        
        } else if (name.ex[line].eFun == "var") {
        
            myVariables[name.ex[line].slot].val = name.ex[line].val1;
        
        } else if (name.ex[line].eFun == "logVar") {
        
            console.log(myVariables[name.ex[line].slot].val);
        
        } else if (name.ex[line].eFun == "input") {
        
            myVariables[name.ex[line].slot].val = process.argv.slice(2).toString();
            
        } else if (name.ex[line].eFun == "xLog") {
        
            if (name.ex[line].variableArea == "first") {
        
                console.log(myVariables[name.ex[line].slot].val + name.ex[line].val1 + name.ex[line].val2);
        
            } else if (name.ex[line].variableArea == "center") {
        
                console.log(name.ex[line].val1 + myVariables[name.ex[line].slot].val + name.ex[line].val2);
        
            } else if (name.ex[line].variableArea == "last") {
        
                console.log(name.ex[line].val1 + name.ex[line].val2 + myVariables[name.ex[line].slot].val);
        
            }
        
        }
    
    }

}
