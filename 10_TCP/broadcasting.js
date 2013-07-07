// import 'net' module
var tcp = require('net');
var fs = require('fs');
// port number
var port = 1786;

// create TCP server 
tcpServer = tcp.createServer();

// an array of sockets
var sockets = [];

tcpServer.on('listening', function() {
	console.log('Server is listening on port', port);
});

tcpServer.on('connection', function(socket) {
	
	console.log('Server has a new connection');
	sockets.push(socket);

	socket.on('data',function(data){

	for(i=0;i<sockets.length;i++){

		if(sockets[i] != socket)
		{
			var dataStr = data.toString().trim();
			sockets[i].write(dataStr,function(){
				console.log('Broadcasting -->'+data+'<--');
			});
		}
	}});
	

	
});

tcpServer.on('close', function() {
	console.log('Server is now closed');
});

tcpServer.on('error', function(err) {
	console.log('Error occurred:', err.message);
});

// make the server listen on a port
tcpServer.listen(port);

