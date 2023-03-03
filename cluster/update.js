import {Writable} from "stream";
import querry from "./querry.js";
import fs from "fs/promises";
// import updateid from "../../CRUD/updateid.js";

class myWriteable extends Writable{
    async _write(chunk, encoding , callback){
        // console.log(typeof(chunk));
        const fileHandle = await fs.open("./files/names.json","w");
        const wr = fileHandle.write(JSON.stringify(chunk));

        const response= await wr.then(()=>{
            return(201);
        })

        .catch((err)=>{
            console.log(err);
            return(500);
        })

        fileHandle.close();

        return response;
    }
}

const w = new myWriteable;

process.on('message', async (body)=>{
    const {firstName="john", lastName="doe", email="Johndoe@mail.com", ID=null}= body;

    if(ID!=null){    
        console.log("inside update condition")
        const arr = await querry();
        const n = ID -1;
    
        if(n<arr.length){
            const n = ID -1;
            if(firstName!=1){
                arr[n].firstName=firstName;
            }else {
                res.send("The values of first Name, last Name and email cannot be 1");}
            if(lastName!=1){
                arr[n].lastName=lastName;
            }else {
                res.send("The values of first Name, last Name and email cannot be 1");}
            if(email!=1){
                arr[n].email=email;
            }else{
                res.send("The values of first Name, last Name and email cannot be 1");
            }
        }else{
            res.send(`The ID must be less than or equal to ${arr.length}`)
        }
        const response = await w._write(arr);
        process.send(response);
    }else{
        process.send(400)
    }

})