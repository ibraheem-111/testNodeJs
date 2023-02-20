import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";
import dbFileCheck from "./dbFileCheck.js";


export default async function updateData(current, info){

    dbFileCheck(info);

    try{

        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message:"enter the user's name to search: "
            }
        ])

        for (element in answers) {

            if(element.name === answers.name ){

                updateDetails(element,info);
            }

        }

      

    }catch(error){
        console.log(error);

    }
}

export default async function updateDetails(){
    try{
        console.log("\nEnter Update Details: \n")
        const answers= inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's your name?",
              },

              {
                type: "number",
                name: "phone",
                message: "What's your phone?",
              },
              {
                type: "list",
                name: "age",
                message: "Are you an adult?",
                choices: [
                  { name: "Y", value: "Adult" },
                  { name: "N", value: "Minor" },
                ],
              },
        ])
    }catch(error){
        console.log("Something went wrong",error)
    }
}