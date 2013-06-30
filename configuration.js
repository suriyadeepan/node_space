
// In this file, we parse a config file (JSON)

var fs = require('fs');

console.log("starting!");

// read the contents of config.json
configContents = fs.readFileSync("config.json");

// print the contents
console.log("Contents: " + configContents);

// now lets try parsing the file
var config = JSON.parse(configContents);

// try printing config object
console.log("Config: " + config + "\n");

// now lets try all the config values 
console.log("config.username: " + config.username);
console.log("config.api_key: " + config.api_key);
console.log("config.name: " + config.name);
console.log("config.version: " + config.version);



