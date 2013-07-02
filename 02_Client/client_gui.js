
alert("client_gui.js is working!");

window.onload = init;

function init(){

	alert("Inside init() method...");
	var button1 = document.getElementById("but1");
	button1.onclick = function(){
		alert("button is clicked!");
	};
}
