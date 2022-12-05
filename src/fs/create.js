import { appendFile } from "node:fs";

const create = async () => {
  appendFile(
    "./src/fs/files/hello.txt",
    "I am fresh and young",
    function (err) {
      if (err) console.log("FS operation failed");
    }
  );
};

await create();
