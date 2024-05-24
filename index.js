import inquirer from "inquirer";
let myList = [];
let condition = true;
while (condition) {
    let options = await inquirer.prompt([{
            name: "todos",
            type: "input",
            message: "What do you want to add in your Todo list?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        }]);
    myList.push(options.todos);
    condition = options.addmore;
    console.log(myList);
}
