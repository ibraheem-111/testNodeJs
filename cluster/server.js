import express from "express";


const app = express();
app.use(express.urlencoded({extended : true}))
app.listen(8080);

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    // cp.execFile("homepage.js")
    res.sendStatus(201);
})


import create from "./routes/create.js";
import user from "./routes/user.js";

app.use("/create", create);
app.use("/user", user);
