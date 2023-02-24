import * as path from 'path';
import express from 'express';
var app = express();

import { URL } from 'url'; // in Browser, the URL in native accessible on window

//const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.listen(3000, ()=> {
    console.log('Listening on http://localhost:3000/');
});

app.get("/", (req,res)=>{
    console.log("/ request received");
    //res.send()
})

app.get("/squirrel.jpg", (req,res)=>{
    console.log("squirrel request received");
    //res.send()
})
// app.request("http://localhost:3000/squirrel.jpg",()=>{

// })