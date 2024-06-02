#! /usr/bin/env node 

import inquirer from "inquirer";

let myList = [];

let condition = true;
while (condition)
 {   let addItems = await inquirer.prompt([{
        name: "items",
        type: "input",
        message: "write the item name",
    },{
        name: "continue",
        type: "confirm",
        message: "Do you want to add more?",
        default: "true"
    }])

    condition = addItems.continue;
    myList.push(addItems.items)
    console.log(myList);
}

