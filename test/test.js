import { createReadStream, createWriteStream } from 'node:fs';
import { Buffer } from 'node:buffer';

const stream = createReadStream('read.txt');

let data = [];
//let f;

stream.on('readable', (chunk)=> {
    while(chunk !== null){
        chunk=stream.read();
        //console.log(chunk);
        data.push(chunk);
        console.log(chunk?.toString());
    }

})
stream.on('end', ()=>{
    console.log('stream has ended');
})

console.log(data.toString());

const stream2 = createWriteStream("./file.txt");

stream.pipe(stream2);

stream2.on("pipe", (data)=>{
  console.log(data);
})
