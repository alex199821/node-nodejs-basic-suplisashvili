import fs from "fs";

const copy = async () => {
  fs.cp(
    "./src/fs/files",
    "./src/fs/files_copy",
    { recursive: true, force: false, errorOnExist: true },
    (err) => {
      if (err) console.error("FS operation failed");
    }
  );
};

copy();
