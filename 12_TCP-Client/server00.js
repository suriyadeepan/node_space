// import 'net' module
var tcp = require('net');
var fs = require('fs');
// port number
var port = 1786;

// resume the stdin (user input)
process.stdin.resume();

// a write stream to get data from client and write
//  to a file
//var wStream = fs.createWriteStream('dummy_file.txt');

// create TCP server 
tcpServer = tcp.createServer(function(socket){

	// socket => connection object
	
	// pipe the data from user (stdin) to socket
	process.stdin.on('data',function(data){

		socket.write(data);
	});

	// when data arrives,
	socket.on('data',function(data){
		// convert data from client into string, trim
		//  empy spaces, new lines
		console.log(data.toString().trim());

		// if data from client = 'quit' close the socket
		if(data.toString().trim().toLowerCase() == 'quit'){
			console.log('Socket closed!');
			socket.end();
		}

	});// end of socket.on()	

	socket.on('end',function(data){
		console.log("Socket closed!");
	});
	
});// end of createServer()


tcpServer.on('listening', function() {
	console.log('Server is listening on port', port);
});

tcpServer.on('connection', function(socket) {
	console.log('Server has a new connection');
//	socket.end();
//	tcpServer.close();
});

tcpServer.on('close', function() {
	console.log('Server is now closed');
});

tcpServer.on('error', function(err) {
	console.log('Error occurred:', err.message);
});

// make the server listen on a port
tcpServer.listen(port);

