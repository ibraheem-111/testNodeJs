import * as http from "http";
import fs from "fs";

http.get("http://localhost:6000/", (res)=>{
    console.log("making request");
    const stream = fs.createWriteStream("squirrel2.jpg");
    res.pipe(stream);
 
})

