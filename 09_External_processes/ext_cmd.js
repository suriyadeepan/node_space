child_proc = require('child_process');

// lets execute an external cmd 
//  "ls ../" => list files of parent directory
// function signature
// 	child_process.exec(cmd,[options],callback);
child_proc.exec('ls ../',function(err,stdout,stderr){

	if(err)
		console.log("Error occured while exec cmd");
	else	
		console.log("Std out: "+stdout);

});

console.log("Continuing execution....");

