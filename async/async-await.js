async function greeting(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Hi ${name}!`);
      resolve(name);
    }, 1500);
  });
}

async function speack(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      //   reject("Some error");
      resolve(name);
    }, 1000);
  });
}

async function goodbye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Goodbye ${name}!`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let name = await greeting("Harold");
  await speack();
  await speack();
  await speack();
  await goodbye(name);
  console.log("Ending process...");
}

console.log("Starting process...");
main();
console.log("Other process...");
