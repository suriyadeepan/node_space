var util = require('util');
var evem = require('events').EventEmitter;


// creat a new pseudo-class
var MyClass = function(){

	context = this;

	// constructor
	console.log("\n***MyClass => Constructor***\n");

	// emit an event every 1s
	setInterval(function(){
		// our custom event 'tick'	
		context.emit('tick');	
	},1000);

}

// make MyClass inherit EventEmitter pseudo class
util.inherits(MyClass,evem);


// now we'll create a function of type MyClass
//  that'll emit another custom event
MyClass.prototype.someMethod = function() {
	// emit event 'eve1' along with 2 arguments (data1, 2)
	this.emit("eve1", "some data 1", "some data 2");
};

// lets test our class
var myObj = new MyClass();
var count = 0;

myObj.on('tick',function(){
	console.log(count);
	count++;
	
	// we'll call the other method here
	myObj.someMethod();

});

myObj.on('eve1',function(dat1,dat2){
	
	console.log("Our Custom Event : 'eve1' emitted");
	console.log("Data: "+dat1+" , "+dat2);
});	

