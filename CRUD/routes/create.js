import express from "express";
import fs from "fs/promises";
// import fs from "fs";
import {Writable} from "node:stream";
import querry from "../querry.js";

const route = express.Router();
// const wstream =fs.createWriteStream("./files/name.txt")
// const wstream = stream.Writable();

class myWritable extends Writable{
    async _write(chunk, encoding , callback){
        console.log(chunk);
        const fileHandle = await fs.open("./files/names.json","w");
        const wr = fileHandle.write(chunk);

        wr.then(()=>{
            console.log("File Write Successfull");
            
        })

        .catch((err)=>{
            console.log(err, "error in write file");
        })
    }
}

const wstream = new myWritable();

// wstream.on("data" ,async (data)=>{

//     const fileHandle = fs.open("./files/name.json");
//     const wr = await fileHandle.appendFile(JSON.stringify(data));

//     wr.then(()=>{
//         console.log("File Write Successfull");
          
//     })

//     .catch((err)=>{
//         console.log(err, "error in write file");
//     })

// }); 

route.get("/", (req,res)=>{
    //res.sendStatus(200);
    res.render("./create/create");

});

route.post("/",async (req,res)=>{
    let arr = [];

    arr.concat( await querry("./files/names.json"));

    console.log("Post request recieved")
    arr.push({fistName : req.body.firstName});
    wstream._write(JSON.stringify(arr));

    res.redirect("/create");

}) 

export default route