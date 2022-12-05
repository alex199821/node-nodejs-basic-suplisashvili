import { rename } from "node:fs";

const renameFile = async () => {
  rename(
    "./src/fs/files/wrongFilename.txt",
    "./src/fs/files/properFilename.md",
    (err) => {
      if (err) console.log("FS operation failed");
    }
  );
};

await renameFile();
