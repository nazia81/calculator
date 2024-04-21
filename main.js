#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "enter your first number", type: "number", name: "firstnumber" },
    { message: "enter your second number", type: "number", name: "secondnumber" },
    { message: "select one of the following operator to perform action", type: "list", name: "operator", choices: ["+", "-", "*", "/"] },
]);
//conditional statements,
if (answer.operator === "+")
    console.log(answer.firstnumber + answer.secondnumber);
else if (answer.operator === "-")
    console.log(answer.firstnumber - answer.secondnumber);
else if (answer.operator === "*")
    console.log(answer.firstnumber * answer.secondnumber);
else if (answer.operator === "/")
    console.log(answer.firstnumber / answer.secondnumber);
else {
    console.log("please select a valid operator");
}
