function greeting(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Hi ${name}!`);
      resolve(name);
    }, 1500);
  });
}

function speack(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      //   reject("Some error");
      resolve(name);
    }, 1000);
  });
}

function goodbye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Goodbye ${name}!`);
      resolve();
    }, 1000);
  });
}

// console.log("Starting process");
// greeting("Harold")
//   .then((name) => goodbye(name))
//   .then(() => {
//     console.log("Ending el proceso");
//   });

console.log("Starting process");
greeting("Harold")
  .then(speack)
  .then(speack)
  .then(speack)
  .then(speack)
  .then(goodbye)
  .then(() => {
    console.log("Ending el proceso");
  })
  .catch((error) => {
    console.error(`There was an error: ${error}`);
  });
