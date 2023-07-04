function greeting(name, otherCallback) {
  setTimeout(function () {
    console.log(`Hi ${name}!`);
    otherCallback(name);
  }, 1500);
}

function speack(callbackSpeack) {
  setTimeout(function () {
    console.log("Bla bla bla bla...");
    callbackSpeack();
  }, 1000);
}

function goodbye(name, anotherCallback) {
  setTimeout(function () {
    console.log(`Goodbye ${name}!`);
    anotherCallback();
  }, 1000);
}

// console.log("Starting process...");
// greeting("Harold", function (name) {
//   speack(function () {
//     speack(function () {
//       speack(function () {
//         goodbye(name, function () {
//           console.log("Ending process...");
//         });
//       });
//     });
//   });
// });

// Recursive solution

function conversation(name, times, callback) {
  if (times > 0) {
    speack(() => {
      conversation(name, --times, callback);
    });
  } else {
    goodbye(name, callback);
  }
}

console.log("Starting process...");
greeting("Harold", (name) => {
  conversation(name, 3, () => {
    console.log("Ending process...");
  });
});
