// import the child_process.spawn function
spawn = require('child_process').spawn;

// spawn a child process
child = spawn('node',['child_sample.js']);

// when stdout of child is encountered
child.stdout.on('data',function(data){
	console.log("parent: "+data);
});

i = 0;

// every 1000ms ( 1 sec ), send i to child
setInterval(function(){
	child.stdin.write(i.toString());
	i += 2;
},1000);
