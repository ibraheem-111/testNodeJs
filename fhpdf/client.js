import {Writable} from "stream";
import http from "http";
import fs from "fs";
import PDFDocument from "pdfkit";

const doc = new PDFDocument();

const stream = new Writable({
    async write(chunk){
        //console.log(chunk.toString());
        console.log(chunk);

        doc.pipe(fs.createWriteStream(""))

        /*
        
        fs.writeFile("./write.json", chunk, (err) => {
            if (err) {
                console.log(err,"inwritefile");
            } else {
                console.log("success");
            }
        });
        */
        
    }
});

http.get("http://localhost:3000/",(res)=>{
    res.pipe(stream);

})

stream.on("pipe",(chunk)=>{

    console.log("piping to read stream");


})

stream.on('end', ()=>{
    console.log("stream has ended")
})

