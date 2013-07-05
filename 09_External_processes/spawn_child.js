spawn = require('child_process').spawn;
// function signature
//	child_process.spawn(command, [args], [options])

//spawned_child = spawn('ls');
spawned_child = spawn('ls',['*~']);

// listen for child process's stdout
spawned_child.stdout.on('data',function(data){

	console.log("Data from spawned child: "+data);

});

// listen for child process's stderr
spawned_child.stderr.on('data',function(data){

	console.log("Std Error data from spawned child: "+data);

});
