import {Writable} from "stream";
import http from "http";
import fs from "fs";
import PDFDocument from "pdfkit";

const doc = new PDFDocument();

const stream = new Writable({
    async write(chunk){
        //console.log(chunk.toString());
        //console.log(chunk);

        fs.createWriteStream(`txt.pdf`);

        // doc.text(`${chunk.toString()}`);

        // //console.log(chunk.toString());
        
        // fs.writeFile("./write.txt", chunk.toString(), (err) => {
        //     if (err) {
        //         console.log(err,"inwritefile");
        //     } else {
        //         console.log("success");
        //     }
        // });

        // doc.end();
        
        
    }
});

http.get("http://localhost:8000/",(res)=>{
    res.pipe(stream);

})

stream.on("pipe",()=>{
    //let chunks = [];
    console.log("piping to read stream");

    //console.log(chunk);

    // if(chunk!==null){
    //     chunks.push(chunk);
    // }

    // buf1 = Buffer.concat(chunks);

    // fs.open("write.json","w",(err,fd)=>{

    //     if(err){
    //         console.log(err,"Error occured in write file")

    //     }else{
    //         fs.write(fd, buf1);
    //     }

    // })
})


stream.on('end', ()=>{
    console.log("stream has ended")
})

