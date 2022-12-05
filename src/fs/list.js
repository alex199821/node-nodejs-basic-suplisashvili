import { readdir } from "node:fs";

const list = async () => {
  readdir("./src/fs/files", function (err, files) {
    if (err) console.log("FS operation failed");
    console.log(files);
  });
};

await list();
