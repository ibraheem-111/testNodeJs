import {Writable} from "stream";
import querry from "./querry.js";
import fs from "fs/promises";
// import { stdin } from "process";

class myWritable extends Writable{
    async _write(chunk, encoding , callback){
        
        const fileHandle = await fs.open("./files/names.json","w");
        const wr = fileHandle.write(JSON.stringify(chunk));

        const response = await wr.then(()=>{
            return(201);
        })

        .catch((err)=>{
            return err;
        })

        await fileHandle.close();

        return response;
    }
}

process.on('message',async (req)=>{ 
    
    const wstream = new myWritable();

    // console.log(req);
    const {firstName="john", lastName="doe", email="Johndoe@mail.com"}= req;
    // const {body:{firstName="john", lastName="doe", email="Johndoe@mail.com"}}= req;

    const arrayData = await querry("./files/names.json");

    const length = arrayData.push({firstName : firstName, lastName: lastName, email:email});

    arrayData[length-1].ID=length;

    const response=await wstream._write(arrayData);

    process.send(response)

    
    
})