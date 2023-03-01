import http from "http";

import {URL} from "node:url";
import util from "node:util";
import { StringDecoder } from "string_decoder";
import formidable from "formidable";
import debug from "debug";


const server = http.createServer((req,res)=>{

   
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


    }else if (req.method.toLowerCase()== 'get'){

        res.writeHead(200,"OK",{"Content-Type": "text/plain"});
        res.write("the response\n");
        res.write(util.inspect(path.searchParams) + `\n\n`);
        //res.write(buffer +"\n\n");
        res.end("End of message to the browser");

    }else {
        
    }


}).listen(5000);

