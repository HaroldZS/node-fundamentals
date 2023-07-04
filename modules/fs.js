const fs = require("fs");

// Read
function read(route, cb) {
  fs.readFile(route, (err, data) => {
    cb(data.toString());
  });
}

// Write

function write(route, body, cb) {
  fs.writeFile(route, body, (err) => {
    if (err) {
      cb("Error about writing");
    } else {
      cb("Successful writing");
    }
  });
}

// Delete

function deleteFile(route, cb) {
  fs.unlink(route, cb);
}

read(`${__dirname}/file.txt`, console.log);
write(
  `${__dirname}/file1.txt`,
  "New file written from fileSystem",
  console.log
);
read(`${__dirname}/file1.txt`, console.log);
write(
  `${__dirname}/file2.txt`,
  "New file written from fileSystem to be deleted",
  console.log
);

deleteFile(`${__dirname}/file2.txt`, console.log);
