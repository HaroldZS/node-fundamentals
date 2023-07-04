const fs = require("fs").promises;

const read = async (route) => {
  const file = await fs.readFile(route, {
    encoding: "utf-8",
  });
  console.log(file);
};

read(`${__dirname}/file.txt`);
