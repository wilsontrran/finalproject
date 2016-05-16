function emergency(){
	alert("emergency");
	
}


function init() {
	document.getElementById('emergency').addEventListener("submit",emergency,false);
	
}
window.addEventListener("load", init, false);


