var fs_obj = require("fs"); 

fs_obj.readFile("server.js", function(error,data){
	console.log("*** Reading File ***");
	console.log("Contents of File: " + data);
});

// continuing with other operations
console.log("---Carrying on!---");
