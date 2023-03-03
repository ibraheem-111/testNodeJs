import express from "express";
import cp from "child_process";
const route = express.Router();




route.get("/", (req,res)=>{
    console.log("get request successfull")
    res.render("./create/create");

});

route.post("/",async (req,res)=>{

    const write = cp.fork("./write.js");
    // console.log("post request successfull")
    // console.log(req.body);
    
    const {body:{firstName="john", lastName="doe", email="Johndoe@mail.com"}}=await req;

    const body = {firstName:firstName, lastName:lastName, email:email};
    write.send(body)
    // req.pipe(write.stdin);
    write.on('message',(response)=>{

        console.log(response)

        if(response == 201){
            res.redirect(201,"/create");       
        }else{
            res.sendStatus(500, "write operation unsuccesfull");
        }

        write.disconnect();
    })

})



export default route