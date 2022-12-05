import { Worker, isMainThread, parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (n) => {
  if (isMainThread) {
    let data = nthFibonacci(n);

    const worker = new Worker("./src/wt/worker.js");
    worker.once("message", (message) => {
      console.log(message);
    });
    //This function passed data down to worker's thread
    worker.postMessage(data);
  } else {
    parentPort.once("message", (message) => {
      // This function sends result of nthFibonacci computations to main thread
      parentPort.postMessage(message);
    });
  }
};

sendResult(14);
