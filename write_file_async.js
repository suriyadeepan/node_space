var fs = require("fs");

var text = "This text goes to temp_file_async.txt";

// writing text to file asynchronously
fs.writeFile("temp_file_async.txt",text,function(error){

	console.log("Written to File!");
});

console.log("\nExecution continues...");
