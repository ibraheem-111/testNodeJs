import fs from "fs/promises";

export default async function querry(path="./files/names.json"){
    try{
        let info = [];
        // let f = false;
        fs.stat(path, async (err,stat)=>{

            if(err){
                console.log(err)
            }else{
                const fileHandle = await fs.open(path, "r");
                info = JSON.parse(await fileHandle.readFile(options.encoding("utf-8")));

                console.log(info);

            }
                

        }).then(async ()=>{
            const fileHandle = await fs.open(path, "r");
            info = JSON.parse(await fileHandle.readFile("utf-8"));
            // info.push(JSON.parse(await fileHandle.readFile("utf-8")));

            //onsole.log(info);
            fileHandle.close();

        })
        .catch((err)=>{

            fs.writeFile(path, JSON.stringify(info));

            console.error(err,"from catch statement");

        })

        // console.log(info);

    // if(f){
    //     const fileHandle = await fs.open(path, "r");
    //     const arr
    //     arr = 
    // }

    return info
    }

    catch{
        console.log("Something went wrong in querry");
    }
    
}

querry()