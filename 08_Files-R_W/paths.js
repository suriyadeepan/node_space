var path = require('path');
var fsys = require('fs');

console.log(path.dirname('fs.info'));

console.log(path.normalize('fs.info'));

// check if a path exits
//  path.exists() => deprecated
console.log("./fs.info exists: "+fsys.existsSync('./fs.info'));

// lets check the same asynchronously
fsys.exists('fs.info',function(exists){

	console.log("./fs.info exists(async test): "+exists);
});


