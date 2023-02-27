import express from "express";

const app = express();

app.set("view engine", "ejs");

app.listen(4000);

app.get('/', (req,res)=>{

    res.send("CRUD application, navigate to <br/>1. /create to create newfile<br/>2. /read t read existing file")

});

import create from "./routes/create.js";

app.use("/create", create);
