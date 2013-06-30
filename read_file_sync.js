var fs = require("fs");

fileName = "./temp_file.txt"

console.log("Reading File");

// read file synchronously
var fileContents = fs.readFileSync(fileName);

console.log("File Read");

// display file contents
console.log("Contents: " + fileContents);
