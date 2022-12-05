import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";
const transforms = async () => {
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding("utf8");

  //As raw mode is on we need to detect ctrl+c using this staatement
  stdin.on("data", function (input) {
    if (input === "\u0003") {
      process.exit();
    }
  });

  let string = "";

  //This transform takes string array and reverses it (also clears console so we only see reversed string once)
  const reverse = new Transform({
    transform(chunk, utf8, callback) {
      string += chunk;
      console.clear();
      callback(null, string.toString().split("").reverse().join(""));
    },
  });
  stdin.pipe(reverse).pipe(stdout);
};

await transforms();
