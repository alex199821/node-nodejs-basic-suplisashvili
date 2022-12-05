import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

const write = async () => {
  const fileToWrite = createWriteStream("./src/streams/files/fileToWrite.txt");
  //This allows us to write to file in live mode without pressing enter
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding("utf8");
  stdin.on("data", function (input) {
    // This allows us to quit process on CTRL+C
    if (input === "\u0003") {
      process.exit();
    }
    fileToWrite.write(input);
    //Additionally write file to stdout to see what was written to fileToWrite
    process.stdout.write(input);
  });
};

await write();
