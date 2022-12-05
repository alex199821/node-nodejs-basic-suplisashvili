const spawnChildProcess = async (args) => {
  child_process.spawn({ cwd: "./src/cp/files/script.js" });
};

spawnChildProcess();
