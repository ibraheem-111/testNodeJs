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

/*
const chunks = [];

stream.on('readable', () => {
  let chunk;
  while (null !== (chunk = stream.read())) {
    chunks.push(chunk);
  }
});

stream.on('end', () => {
  const content = chunks.join('');
  console.log(content);
});
*/

//console.log(f);
/*
(async function() {
    for await (const chunk of stream) {
        //data.push(chunk.toString('utf-8'));

        data.push(chunk);

    }
  })();


const buff=Buffer.concat(data);

console.log(buff.toString());
*/

/*
stream.on('data', (chunk) => {
    //data.push(chunk.toString('utf-8'));
    console.log('data :', chunk, chunk.length);

});

stream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString());
    // end : I am transferring in bytes by bytes called chunk
})


stream.on('error',(err)=>{
    console.log("error: ", err)
})
*/
