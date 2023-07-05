console.log("Something");
console.info("Something");
console.error("Error");
console.warn("Warn");

let table = [
  { a: "Harold", b: "Zurita" },
  { a: "Kevin", b: "Zurita" },
];
console.table(table);

console.group("Conversation");
console.log("Hi");
console.group("Bla");
console.log("Bla bla bla...");
console.log("Bla bla bla...");
console.log("Bla bla bla...");
console.groupEnd("Bla");
console.log("Bye");
console.groupEnd("Conversation");

console.log("Other things");

function fn1() {
  console.group("fn 1");
  console.log("Into fn1");
  console.log("Into fn1");
  console.log("Into fn1");
  fn2();
  console.log("Still into fn1");
  console.groupEnd("fn 1");
}

function fn2() {
  console.group("fn 2");
  console.log("Into fn2");
  console.groupEnd("fn 2");
}

console.log(`Get started!

Start:`);
fn1();

console.count("Times");
console.count("Times");
console.count("Times");
console.countReset("Times");
console.count("Times");
