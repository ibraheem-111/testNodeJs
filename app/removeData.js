import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";
import dbFileCheck from "./dbFileCheck.js";

export default async function removeData(info){
    try{   
        dbFileCheck()
        const feedback = await inquirer.prompt([
            {
                type:"input",
                name:"id",
                message:"id:"
            }
        ]);

        let arr=[]; //remaining data

        info.forEach((element) => {

            if(element.id !== feedback.id){
                arr.push(element);
            }
            
        });

        fs.writeFile("db.json", JSON.stringify(arr), function(err){
            if(err){
                console.log("Something went wrong", err);

            }else{
                console.log("deleted");
            }
        });


    }catch(error){
        console.log("something went wrong",error);
    }

}

queryDB(removeData);