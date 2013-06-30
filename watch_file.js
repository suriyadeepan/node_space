// this program watches over a file for changes,
//  notifies if changes occur

var fs = require("fs");
var config_file = "config.json";

console.log("Initial Config: " + fs.readFileSync(config_file));

fs.watchFile("config.json",function(current,previous){

	console.log("config file changed!\n");
	console.log("New Config: " + fs.readFileSync(config_file));
});

console.log("Continuing execution!");
	


