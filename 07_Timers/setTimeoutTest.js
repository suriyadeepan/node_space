console.log("\n*** Starting the TimeOut Test ***\n");
// lets print something after a time out of 5secs
// function signature: 
// 	var timeoutId = setTimeout(cb,delay,[arg],....);

var timeoutId = setTimeout(function(){

	console.log("The delay of 5s is over dude!");
	
},5000);

// lets cancel the 5s time out in 2s 
//  :D
setTimeout(function(){

	console.log("Cancelling in 2s");
	clearTimeout(timeoutId);
},2000);
	
