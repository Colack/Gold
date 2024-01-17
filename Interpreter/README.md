<p align="center">
     <img src="https://raw.githubusercontent.com/Colack/Gold/main/src/Gold-JS/Gold-Loader/modules/images/Release/Gold-Small.png" />
</p>

# Gold-JS

**This Guide is for the *JavaScript* version of the *Gold* interpreter.**   

The **Gold** Programming Language is an Programming Language designed to be really easy to
edit and overall just being an very Permeable coding Language.



## Setup

The **Gold** Language uses the Following Packages:

```javascript
npm i readline
```

```javascript
npm i open
```

```javascript
npm i colors
```

```javascript
npm i prettier
```

Check the packages out here:

[readline](https://www.npmjs.com/package/readline)   
[open](https://www.npmjs.com/package/open)   
[colors](https://www.npmjs.com/package/colors)   
[prettier](https://www.npmjs.com/package/prettier)



## Commands/Booting 

There are several ways that you can run your **Gold** file:

```javascript
node .
```

```javascript
npm run index
```

**Or you can just use the .bat files:**

- *megaShell.bat*: opens up the megashell.
- *cmd.bat*: opens a blank Command Prompt.
- *setup.bat*: creates an blank directory with some setup files.
- *index.bat*: Boot directly into the Index.js File.
- *install.bat*: Install all packages required in the current Version.
- *regInt.bat*: Run installed gold program using the Regular Interpreter.
- *engInt.bat*: Run installed gold program using the English Interpreter.



## Programming

**Gold** is ran inside of the **.gold** file extension, so your directory would look something like this:   

*./Gold-Loader*   
*gold-save.exe*   
*package-lock.json*   
*package.json*   
*program.gold*   
*README.md*   
*runner.js*   
*megaShell.bat*      

The **.gold** file is your program.   

Your **Gold** Program is interpreted using the interpreter you have, or the default one if you don't have a one.   

An Basic **Gold** Program would look something like this:   

```javascript

// Built for Reg Interpreter.

var myGoldProgram = {
    name: "Example Gold Program",
    des: "An Example Gold Program for the README file.",
    int: "regInt",
    ex: [
        {
            fun: "log",
            val1: "Hello World!"
        },
        {
            fun: "end"
        }
    ]
};

export { myGoldProgram };
```



## Included Projects

The **Gold** Language also includes the following Projects:

* [Gold-Save](https://github.com/Shining-Gold-Studios/Gold-Save)
* [megaShell](https://github.com/Shining-Gold-Studios/megaShell)



## Advanced Programming

Think you got the hang of the **Gold** language? There are still many different things that you can do with the **Gold** language. Check out some tutorials inside of the wiki, or follow the basic Coding guide Below:

```javascript

// Functions for the Regular Interpreter, not the English one. 

fun // - add, sub, mul, div, if, log, var, logVar, input, xLog, egg, shell, crack, kill, ifVar    
saveToVar // - true/false     
val1    
val2   
slot    
slot1   
slot2   
type // - =, >, <, !     
logvaluetrue    
logvaluefalse    
variableArea // - Center, First, Last   
```



## Contribution

Wanting to Contribute to **Gold**? Check out the *README.md* inside of the */info* folder to learn how you can contribute to the **Gold** language.



## Used By

This project is used in the following projects:

- [Gold](https://github.com/Shining-Gold-Studios/Gold-Language)   



## Final Note

Have any more questions? Join our Discord - [Discord](https://discord.gg/CUJrdW5vKn)

- /Colack
