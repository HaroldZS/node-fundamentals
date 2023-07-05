let buffer = Buffer.alloc(4);
let buffer1 = Buffer.from([1, 2, 5]);
let buffer2 = Buffer.from("Hello");

console.log(buffer);
console.log(buffer1);
console.log(buffer2);
console.log(buffer2.toString());

//

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i<abc.length; i++){
    abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());
