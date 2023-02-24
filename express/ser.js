import express from "express";

const app = express();

app.set ('vew engine', "ejs");


app.use(express.static('public'));
app.use (logger);

app.listen(3000);

app.get('/',logger,  (req, res, next)=>{

    console.log('get request received');

    //res.status(500).json({message:"Error"});
    //res.download("ser.js");

    res.render('index.ejs',{text:"world"});
     
});

function logger (req, res, next) {
    console.log (req.originalUrl)
    next()
}

import userRouter from "./routes/users.js";

app.use('/users', userRouter);

