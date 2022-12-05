import os from "os";
import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
  BroadcastChannel,
} from "node:worker_threads";

const performCalculations = async () => {
  const cpuCoresNumber = os.cpus().length;
  //Broadcast channel for communication of different threads
  const coresResultBC = new BroadcastChannel("cpuCores");

  if (isMainThread) {
    let log = [];
    coresResultBC.onmessage = (event) => {
      log.push(event.data);
      //If function has gone through all cpu cores it presents results and closes BC
      if (log.length === cpuCoresNumber) {
        console.log(log);
        coresResultBC.close();
      }
    };
    //Creates workers and sends message to child threads
    for (let i = 10; i < cpuCoresNumber + 10; i++) {
      new Worker(
        "C:/Users/frm-user/Desktop/RS School/node-nodejs-basics/src/wt/main.js",
        { workerData: i }
      );
    }
  } else {
    //Validation on correctness of data and sending it to BC
    coresResultBC.postMessage(
      workerData !== null ? `resolved-${workerData}` : `error-${workerData}`
    );
    coresResultBC.close();
  }
};

await performCalculations();
