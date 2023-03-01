import express from "express";

const app = express();

app.set ('view engine', "ejs");


app.use(express.static('public'));
app.use(express.urlencoded({extended : true}))
app.use (logger);

app.listen(3000);

app.get('/',logger,  (req, res, next)=>{

    console.log('get request received');

    res.render('index.ejs',{text:"world"});
     
});

function logger (req, res, next) {

    next()
}

import userRouter from "./routes/users.js";

app.use('/users', userRouter);

