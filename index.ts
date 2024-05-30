import inquirer from "inquirer";

let myList = [];

// let options = await inquirer.prompt([{
//     name: "start",
//     type: "list",
//     message: "Please select any option to continue.",
//     choices: ["Add items to your lsit"]
// },])

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

