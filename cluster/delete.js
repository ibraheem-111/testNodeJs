import {Writable} from "stream";
import updateid from "../CRUD/updateid.js";
import querry from "./querry.js";
import fs from "fs/promises";

class myWriteable extends Writable{
    async _write(chunk, encoding , callback){
        // console.log(typeof(chunk));
        const fileHandle = await fs.open("./files/names.json","w");
        const wr = fileHandle.write(JSON.stringify(chunk));

        const response = await wr.then(()=>{
            return(201);
        })

        .catch((err)=>{
            return(err);
        })

        fileHandle.close();

        return response;
    }
}

const w = new myWriteable;

process.on("message", async (ID)=>{

    const dataArray = await querry();
    let remainingElementsBefore = dataArray.splice(0,ID);
    let remainingElementsAfter = dataArray.splice(1);
    const newDataArray = remainingElementsBefore.concat(remainingElementsAfter);
    updateid(newDataArray);

    const response = await w._write(newDataArray);

})