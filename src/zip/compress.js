import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
const compress = async () => {
  const fileToCompress = createReadStream("./src/zip/files/fileToCompress.txt");
  fileToCompress
    .pipe(createGzip())
    .pipe(createWriteStream("./src/zip/files/archive.gz"));
};

await compress();
