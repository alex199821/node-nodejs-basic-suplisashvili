import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    let file = await readFile("./src/fs/files/fileToRead.txt", {
      encoding: "utf8",
    });
    console.log(file);
  } catch (err) {
    console.error("FS operation failed");
  }
};

await read();
