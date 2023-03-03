import cluster from "cluster";
import os from "node:os";

numOfRequests=1

if(cluster.isPrimary){
    const cpus = os.availableParallelism();
    // console.log(cpus);

    for (){

    }

} else {
    import ("../CRUD/server.js");
}


