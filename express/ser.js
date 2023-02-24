import express from "express";

const app = express();

app.set ('vew engine', "ejs")

app.listen(3000);

app.get('/', (req, res, next)=>{

    console.log('get request received');

    //res.status(500).json({message:"Error"});
    //res.download("ser.js");

    res.render('index.ejs',{text:"world"});
     
});