console.time("All");

let sum = 0;

console.time("Loop");

for (let i = 0; i < 1000; i++) {
  sum += 1;
}

console.timeEnd("Loop");

let sum2 = 0;

console.time("Loop 2");

for (let j = 0; j < 10000; j++) {
  sum2 += 1;
}

console.timeEnd("Loop 2");

console.time("Async");
asyncFn().then(() => {
  console.timeEnd("Async");
});

console.timeEnd("All");

function asyncFn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async fn finished...");
      resolve();
    }, 9000);
  });
}
