function asyncFn(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e);
    }
  }, 1000);
}

asyncFn((err, data) => {
  if (err) {
    console.error("Error:");
    console.error(err);
    return false;
    // throw err; Doesn't work with async
  }

  console.log("successful!");
});
