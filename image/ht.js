import http from "http";
import fs from "fs";
import path from "path";
import {URL} from "node:url";
import util from "node:util";
import { StringDecoder } from "string_decoder";
import formidable from "formidable";


const server = http.createServer((req,res)=>{

    // res.setHeader('Content-type','image/jpeg');
    // res.setHeader("Access-Conntrol-Allow-Origin",'*');
    // res.writeHead(200);

    // let read = fs.createReadStream("squirrel.jpg");

    // read.pipe(res);

    // res.sendDate;


    // console.log(req.url);
    // console.log(req.headers);
    // let path = url.parse(req.url, true);

    let decoder = new StringDecoder('utf-8');
    let buffer = '' ;

    let path = new URL("http://localhost:5000" + req.url);
    console.log(path);

    if(req.method.toLowerCase() == 'post' ){

        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files)=>{
            if(err){
                console.error(err.message);

            }else{
                res.writeHead(200, "OK", {"Content-Type": "text/plain"});
                res.write('The Post output response\n\n');
                res.end(util.inspect({fields:fields, files:files}));
            }
        })
        // req.on('data',(chunk)=>{
        //     buffer += decoder.write(chunk);
        // })
    
        // req.on('end', ()=>{
        //     buffer += decoder.end();
        //     res.writeHead(200,"OK",{"Content-Type": "text/plain"});
        //     res.write("the response\n");
        //     res.write(util.inspect(path.searchParams) + `\n\n`);
        //     res.write(buffer +"\n\n");
        //     res.end("End of message to the browser");
    
        // })

    }else if (req.method.toLowerCase()== 'get'){

        res.writeHead(200,"OK",{"Content-Type": "text/plain"});
        res.write("the response\n");
        res.write(util.inspect(path.searchParams) + `\n\n`);
        //res.write(buffer +"\n\n");
        res.end("End of message to the browser");

    }else {
        
    }

    // req.on('data',(chunk)=>{
    //     buffer += decoder.write(chunk);
    // })

    // req.on('end', ()=>{
    //     buffer += decoder.end();
    //     res.writeHead(200,"OK",{"Content-Type": "text/plain"});
    //     res.write("the response\n");
    //     res.write(util.inspect(path.searchParams) + `\n\n`);
    //     res.write(buffer +"\n\n");
    //     res.end("End of message to the browser");

    // })

    //sconsole.log(req.METHODS)

}).listen(5000);

