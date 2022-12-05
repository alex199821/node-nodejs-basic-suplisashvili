import { createReadStream, createWriteStream } from "node:fs";
import { createGzip, createGunzip } from "node:zlib";
import { createUnzip } from "node:zlib";
const decompress = async () => {
  var fileToUnzip = createReadStream("./src/zip/files/archive.gz");
  var dirForUnzipping = createWriteStream("./src/zip/files/fileToCompress.txt");

  fileToUnzip.pipe(createUnzip()).pipe(dirForUnzipping);
};

await decompress();
