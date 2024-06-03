#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Currency List
const curList = ["GBP", "USD", "PKR", "INR", "YEN"];
// Currency Rate Objects
const converRates = {
    "GBP": {
        "GBP": 1.0,
        "USD": 1.21,
        "PKR": 348.59,
        "INR": 101.09,
        "YEN": 8.88
    },
    "USD": {
        "GBP": 0.82,
        "USD": 1.0,
        "PKR": 286.98,
        "INR": 83.23,
        "YEN": 7.31
    },
    "PKR": {
        "GBP": 0.0028,
        "USD": 1.21,
        "PKR": 1.0,
        "INR": 0.29,
        "YEN": 0.025
    },
    "INR": {
        "GBP": 0.0099,
        "USD": 0.012,
        "PKR": 3.45,
        "INR": 1.0,
        "YEN": 0.088
    },
    "YEN": {
        "GBP": 0.11,
        "USD": 0.14,
        "PKR": 39.27,
        "INR": 11.39,
        "YEN": 1.0
    }
};
// Variable to perform restart process
let condition = true;
// Currency input and conversion 
while (condition) {
    console.log(chalk.yellowBright("WELCOME"));
    console.log("");
    const { curFrom, curTo, amount } = await inquirer.prompt([{
            name: "curFrom",
            type: "list",
            choices: curList,
            message: "Select Currency [From]."
        },
        {
            name: "curTo",
            type: "list",
            choices: curList,
            message: "Select Currency [To]."
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Amount to Convert:"
        },
    ]);
    if (curFrom && curTo && amount) {
        let result = converRates[curFrom][curTo] * amount;
        console.clear();
        console.log(chalk.greenBright(`${curFrom} ${amount} = ${curTo} ${result}`));
        console.log("");
    }
    else {
        console.clear();
        console.log(chalk.redBright("Invalid Opeartion, Please try again"));
        console.log("");
    }
    // ask question to restart the application 
    const { restart } = await inquirer.prompt({
        name: "restart",
        type: "confirm",
        message: "Do you wish to perform more operations?"
    });
    restart == false ? [condition = false, console.clear(), console.log(chalk.yellowBright("THANKYOU"))] : null;
}
;
