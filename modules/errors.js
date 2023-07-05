function otherFn() {
  broken();
}

function broken() {
  return 3 + z;
}

function asyncBroken(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error("There is a problem...");
      cb(err);
    }
  }, 2000);
}

try {
  //   broken();
  asyncBroken(() => {
    console.log(() => {
      console.log("Some error");
    });
  });
} catch (err) {
  console.error("There is an error...");
  console.error(err.message);
  console.error("Captured error");
}

console.log("End");
