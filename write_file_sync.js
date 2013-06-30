var fs = require("fs");

// write this to a file
var text = "This text goes into temp_file_sync.txt";

console.log("Writing to file!");
fs.writeFileSync("temp_file_sync.txt",text);

console.log("\nWritten successfully");


