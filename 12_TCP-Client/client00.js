var net = require('net');

// resume stdin
process.stdin.resume();

(function connect(){
socket = net.createConnection(1786,'127.0.0.1',function(){

	console.log("Connection established!");
});

// pipe stdin (user input) to socket
process.stdin.pipe(socket);

// when data arrives,
socket.on('data',function(data){

	console.log("Data from server: "+data);

});

// handling errors
socket.on('error',function(err){

	console.log("Error Code: "+err.code);
});

// reconnect to server, when connection closes
socket.on('close',function(){
	console.log("Connection closed! trying to reconnect!");
	connect();
});

}() );


