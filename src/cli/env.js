const parseEnv = async () => {
  //As all env variables are given to the user in an object we have to use Objet Entries to map over all env-s in system
  Object.entries(process.env).map(([key, value]) => {
    //If condition for env starting with "RSS_"
    if (key.slice(0, 4) === "RSS_") {
      console.log(`${key}=${value}`);
    }
  });
};

parseEnv();
