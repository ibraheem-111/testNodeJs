import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";
import dbFileCheck from "./dbFileCheck.js";


async function updateDetails(current, info){
    try{

        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message:"enter the user's name to search: "
            }
        ])

      

    }catch(error){
        console.log(error);

    }
}