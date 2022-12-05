import { readFile } from "node:fs/promises";
const { createHash } = await import("node:crypto");

const calculateHash = async () => {
  const hash = createHash("sha256");
  let fileToHash = await readFile(
    "./src/hash/files/fileToCalculateHashFor.txt",
    {
      encoding: "utf8",
    }
  );
  hash.update(fileToHash);
  console.log(hash.digest("hex"));
};

await calculateHash();
