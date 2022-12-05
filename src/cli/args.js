import { argv } from "node:process";

const parseArgs = async () => {
  argv.forEach((val, index) => {
    if (index > 1 && index % 2 === 0) {
      console.log(
        ` ${argv[index].slice(2, argv[index].length)} is ${argv[index + 1]}`
      );
    }
  });
};

parseArgs();
