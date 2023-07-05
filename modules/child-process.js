const { exec, spawn } = require("child_process");

let process = exec("dir", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
});

exec("node modules/console.js", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
});

// let process = spawn("ls", ["-la"]);

console.log(process.pid);
console.log(process.connected);

process.stdout.on("data", (data) => {
  console.log("Is dead?");
  console.log(process.killed);
  console.log(data.toString());
});

process.on("exit", () => {
  console.log("Ending process...");
  console.log(process.killed);
});
