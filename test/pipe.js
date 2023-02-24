import {createReadStream, createWriteStream} from "node:fs"

const readstream = createReadStream("./read.txt");
const write=createWriteStream("./file.txt");

readstream.pipe(write);