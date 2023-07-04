function greeting(name, otherCallback) {
  setTimeout(function () {
    console.log(`Hi ${name}!`);
    otherCallback(name);
  }, 1500);
}

function goodbye(name, anotherCallback) {
  setTimeout(function () {
    console.log(`Goodbye ${name}!`);
    anotherCallback();
  }, 1000);
}

console.log("Starting process...");
greeting("Harold", function (name) {
  goodbye(name, function () {
    console.log("Ending async...");
  });
});
console.log("Ending process...");

// function iAmAsynchronous(myCallback) {
//     console.log("Async fn!");
//     setTimeout(function () {
//       console.log("Being async!");
//       myCallback();
//     }, 1000);
//   }

//   console.log("Starting process...");
//   iAmAsynchronous(function () {
//     console.log("Ending async...");
//   });
//   console.log("Ending process...");
