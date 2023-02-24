import http from "http";
import fs from "fs";
import stream from "stream";

const write = new stream.Writable({
    async write(chunk){
        console.log(chunk.toString());
        fs.writeFile("./write.txt", chunk.toString(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("success");
            }
        });
    }
})

http.get({
    hostname: 'localhost',
    port: 8080,
    path: '/',
    agent: false,  
  }, (res) => {
    res.pipe(write);

  });

write.on("pipe", async (data)=>{
    console.log(data.toString(""));
})
