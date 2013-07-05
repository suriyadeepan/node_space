// resume listening to STDIN
process.stdin.resume();

process.stdin.on('data',function(data){

	console.log("Child: "+data);

	process.stdout.write( (parseInt(data,10)+1).toString() );
});
