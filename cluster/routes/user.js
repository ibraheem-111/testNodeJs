// import render from "ejs";
import express from "express";
import querry from "../querry.js";
import Writable from "stream";
import fs from "fs/promises"

import cp from "child_process";

const route = express.Router()

class myWritable extends Writable{
    async _write(chunk, encoding , callback){
        // console.log(typeof(chunk));
        const fileHandle = await fs.open("./files/names.json","w");
        const wr = fileHandle.write(JSON.stringify(chunk));

        wr.then(()=>{
            res.send(201);
        })

        .catch((err)=>{
            console.log(err, "error in write file");
        })

        fileHandle.close();
    }
}

const w = new myWritable;

route.get("/", async (req, res)=>{
    const arr = await querry();

    res.json(arr);

})

route.get("/delete",(req,res)=>{
    res.render("./user/delete.ejs");

})

route.post("/delete", async (req,res)=>{
    const {body:{ID}}=req;

    const del = cp.fork("./delete.js");
    del.send(ID);

    res.redirect("/user")

})


route
    .route("/update")
    .get((req,res)=>{
        res.render("../views/user/updatedata.ejs");
    })



    .post(async (req,res)=>{
        const {body:{firstName="john", lastName="doe", email="Johndoe@mail.com", ID}}= req;

        const body = {firstName:firstName, lastName:lastName, email:email, ID:ID};

        const update = cp.fork("./update.js");

        update.send(body);
        let response;
        update.on('message',async (code)=>{
            if(code == 201){
                res.redirect(201,"/user");
            } else {
                res.redirect(500,"/user");
            }
        })
    
        // res.redirect(response,"/user");
    })



route
    .route("/:id")
    .get(async (req,res)=>{
        const id = req.params.id;
        const arr = await querry();
        const l = arr.length;
        
        if (id<=l){
            res.json(arr[id-1]);
        }else{
            res.send(`Invalid ID, the ID must be a number equal to or smaller than ${l}`);
        }
        
        // con
    })

export default route