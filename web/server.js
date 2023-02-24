import http from "http";
import {createReadStream} from "fs";

const server = http.createServer( (req,res)=>{

    const src= createReadStream("./read.txt");
    src.on("data", (chunk)=>{
        console.log(chunk.toString("utf-8"));
    })
    //console.log(src);
    src.pipe(res);

}).listen(8080)

