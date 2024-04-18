#! /usr/bin/env node

import inquirer from "inquirer";



let loop = true;
interface UserInput{
    currencyInput: string,
    amountInput: number,
    currencyOutput: string 
}

while(loop){

    const userInput: UserInput = await inquirer.prompt([
        {
        type: "list",
        name: "currencyInput",
        choices: ["Saudi Riyal", "Pakistani Rupee", "US Dollar"],
        message: "Select your input currency"
        },
        {
            type: "number",
            name: "amountInput",
            message: "Enter the amount you want to convert"
        },
        {
            type: "list",
            name: "currencyOutput",
            choices: ["Saudi Riyal", "Pakistani Rupee", "US Dollar"],
        message: "Select your output currency"
        }
]);

const input = userInput.currencyInput;
const output = userInput.currencyOutput;
const amount = userInput.amountInput;

if(input === "Pakistani Rupee"){
    if(output === "US Dollar"){
        console.log(`The ${amount} Pakistani Rupee is equal to ${amount / 285} US Dollar`)
    }else if(output === " Saudi Riyal"){
        console.log(`The ${amount} Pakistani Rupee is equal to ${amount / 75} Saudi Riyal`)
    }

}else if(input === "Saudi Riyal"){
    if(output === "Pakistani Rupee"){
        console.log(`The ${amount} Saudi Riyal is equal to ${amount * 75} Pakistani Rupee`)
    }else if(output === "US Dollar"){
        console.log(`The ${amount} Suadi Riyal is equal to ${amount / 3.75} US Dollar`)
    }    

}else if(input === "US Dollar"){
    if(output === "Pakistani Rupee"){
        console.log(`The ${amount} US Dollar is equal to ${amount * 285} Pakistani Rupee`)
    }else if(output === "Saudi Riyal")
            console.log(`The ${amount} US Dollar is equal to ${amount * 3.75} Saudi Riyal`)   
}

const calculateAgain = await inquirer.prompt({
    type: "confirm",
    name: "calculateMore",
    message: "Do you want more conversions?",
    default: false    
});

if(!calculateAgain.calculateMore){
    loop = false;
}

}


