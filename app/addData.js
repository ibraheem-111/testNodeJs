import fs from "fs";
import inquirer from "inquirer";
import {v4 as uuidv4} from "uuid";
import queryDB from "./queryDB.js";

export default async function addData(info) {
    try {

        const answers = await inquirer.prompt([
            {
              type: "input",
              name: "name",
              message: "What's your name?",
            },
            {
                type:"list",
                name:"test",
                message:"Does it work?",
                choices:[
                    {name: "Y", value: "It does"},
                    {name: "N", value: "Doesn't"}
                ]
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
          ]);
          /*const data = {
            id: uuidv4(),
            name: answers.name,
            phone: answers.phone,
            age: answers.age,
          };*/
          //const data={id=uuidv4(),name,phone,age}=answers
          const data = (({ name, phone, age})=>{ return {id:uuidv4(), name ,phone, age}})(answers);

          console.log(data);
          info.push(data);
          
          if (fs.existsSync("db.json")) {
            createDetails(info);
          } else {
            fs.appendFile("db.json", "[]", (err) => {
              if (err) {
                console.log("Could not create db.json", err);
                return;
              }
              createDetails(info);
            });
          }

          async function createDetails(info) {
            await fs.writeFile("db.json", JSON.stringify(info), function (err) {
              if (err) {
                console.log(err);
              }
              console.log("saved!");
            });
          }
      
    } catch (error) {
      console.log("Something went wrong!", error);
    }
  }

  queryDB(addData);