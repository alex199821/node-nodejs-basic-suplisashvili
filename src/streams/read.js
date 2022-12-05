import { createReadStream } from "node:fs";

const read = async () => {
  const fileToRead = createReadStream("./src/streams/files/fileToRead.txt");
  fileToRead.on("readable", () => {
    let data;
    while ((data = fileToRead.read()) !== null) {
      process.stdout.write(`${data}`);
    }
  });
};

await read();
