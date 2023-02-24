//import fs from "fs/promises";
 import fs from "fs";
import PDFParser from "pdf2json";
import { Readable } from "stream";
import http from "http";
const pdfParser = new PDFParser(this,1);


try{
    const server = http.createServer( (req,res)=>{

        
    
    }).listen(8000)

    server.on('request',(req,res)=>{

        res.setHeader("Content-Type", "application/pdf")
        res.setHeader("Access-Conntrol-Allow-Origin",'*');

        const read =fs.createReadStream("../../../Documents/Resume/ibraheem_resume_ns.pdf");

        read.pipe(res);
        
        // console.log("request received \n");
        
           
        // pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    
        // pdfParser.on("pdfParser_dataReady", async (pdfData) => {
        //     console.log("pdfParser_dataReady");
                
        //     //console.log(pdfData);

        //     const filehandle = await fs.open("pdf.txt","w")

        //     const wr = filehandle.write(pdfParser.getRawTextContent());

        //     wr. then(()=>{
        //             console.log("file write successfull");
        //     })

        //     .catch((err)=>{
        //         console.log(err, "error in file write")
        //     })

            
        //     const stream = Readable.from(pdfParser.getRawTextContent())

        //     stream.pipe(res);

        //     await filehandle.close();
    

        // });
        
    
        // pdfParser.loadPDF("../../../Documents/Resume/ibraheem_resume_ns.pdf");
    
            /*
            fs.readFile("../../../Documents/Resume/ibraheem_resume_ns.pdf", (err, pdfBuffer)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("success");
                    pdfParser.parseBuffer(pdfBuffer);
                    fs.writeFile("pdf.json",JSON.stringify(pdfBuffer),(err)=>{
                        if(err){
                            console.log(`${err} occured in write file`);
                        }else{
                            console.log("Write file Succesfull")
                        }
                    });
    
                    //console.log(pdfBuffer.toString());
                    
                    const stream = Readable.from(JSON.stringify(pdfBuffer))
                   
                    //console.log(JSON.stringify(pdfBuffer));

                    stream.pipe(res);
    
                }
            
            })
            
        */
    

    })
    

    
    
}catch(error){
    console.error("Something went wrong \n");
}



