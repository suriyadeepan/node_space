// import our dummy module
var dummy = require("./dummy_mod");
var dummy1 = require("dummy_mod1");

// call the method and print wat it returns
console.log("Function addFunc(2,3) : "+dummy.addFunc(2,3));

// call the other method inside module @ ./node_modules/
console.log("Function subFunc(2,3) : "+dummy1.subFunc(2,3));
