process.on("beforeExit", () => {
  console.log("Process will end");
});

process.on("exit", () => {
  console.log("Process has finished");
  setTimeout(() => {
    console.log("This will never show");
  }, 0);
});

setTimeout(() => {
  console.log("This is going to show");
}, 0);

process.on("uncaughtException", (err, origin) => {
  console.error("Error uncaught");
  console.error(err);
  setTimeout(() => {
    console.log("This is going to show from exeptions");
  }, 0);
});

process.on("uncaughtRejection", () => {
  console.log("Rejection uncaught");
});

// functionDoesntExist();

console.log("If the error is not caught, this is not displayed.");
