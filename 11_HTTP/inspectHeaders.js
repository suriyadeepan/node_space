var http = require('http');
var util = require('util');

// create a http server
server = http.createServer();

server.on('request',function(req,res){

	console.log("request received!");
	//console.log(JSON.stringify(req.headers));
	console.log(util.inspect(req.headers));
	res.end("cool boss!");
});

// bind server to a port
server.listen(1786,'127.0.0.1',function(){
	console.log("Listening");
});
