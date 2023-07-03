// Starts then ends
console.log("Hi there!");

// Thread Interruption

let i = 0;
setInterval(function () {
  console.log(i);
  i++;

  if (i === 5) {
    // Forced error
    var a = 3 + z;
  }
}, 1000);

// Async
console.log("second instruction");
