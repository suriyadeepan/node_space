var http = require('http');
var child_process = require('child_process');

//var child = child_process.spawn('tail', ['-f', '/var/log/system.log']);

var server = http.createServer(function(req,res){
	
	var child = child_process.spawn('ls',['/usr/lib/']);

	child.stdout.pipe(res);

	res.on('end',function(){
		child.kill();
	});

});

server.listen(1786,'127.0.0.1',function(){
	console.log("listening...");
});

/*
server.on('request',function(req,res){

	res.on('end',function(){
		res.end();
		child.kill();
	});
});
*/

