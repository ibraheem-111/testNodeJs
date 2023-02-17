import fs from "fs";
import dbFileCheck from "./dbFileCheck.js";

export default async function queryDB(externalFunction)
{
    try{    
        let info=[];
        if (fs.existsSync("db.json")){

            fs.readFile("db.json", function (err, data) {

                info=JSON.parse(data.toString());
                console.log(info);

                if (err) {
                    console.log(err);
                    return;
                }

                if(externalFunction && !err){
                    externalFunction(info);
                    return;
                }
            });

        } else {
            if(externalFunction){
                externalFunction(info);
                return;
            }
            
        }
    } catch(error){
        
        console.error(`Something Happened: ${error.message}`);

    }
}