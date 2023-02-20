import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";
import dbFileCheck from "./dbFileCheck.js";


export default async function updateData( info){

    dbFileCheck(info);

    try{

        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message:"enter the user's name : "
            }
        ]);

        let current;
        
        info.forEach((element) => {
            if(element.name === answers.name ){
                current=element;
                updateDetails(current,info);
            }
        });

/*        for (element in answers) {

            if(element.name === answers.name ){

                updateDetails(element,info);
            }

        }

      */

    }catch(error){
        console.log(error);

    }
}

export async function updateDetails(current,info){
    try{
        console.log("\nEnter Update Details: \n")

        const responses= await inquirer.prompt([
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
              }
        ])

        current.name=responses.name;
        current.phone=responses.phone;
        current.age=responses.age;

        await fs.writeFile("db.json", JSON.stringify(info), function(err){
            if(err){
                console.log(err);
            }else{
                console.log("updated");
            }
        } )
    }catch(error){
        console.log("Something went wrong",error)
    }
}

queryDB(updateData);