import http from "http";
import fs from "fs";

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','image/jpeg');
    res.setHeader("Access-Conntrol-Allow-Origin",'*');
    res.writeHead(200);

    let read = fs.createReadStream("squirrel.jpg");

    read.pipe(res);

}).listen(6000);