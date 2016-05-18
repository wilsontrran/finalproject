var people = [{}];
var i = 0;

//Updating contact info
function emergency(){
	event.preventDefault();
	people.push({});
	
	people[i].studentname = document.getElementById("name").value;
	people[i].guardianx = document.getElementById("guardian1").value;
	people[i].relationship = document.getElementById("relationship1").value;
	people[i].phone = document.getElementById("phone1").value;
	
	people[i].guardianx = document.getElementById("guardian2").value;
	people[i].relationship = document.getElementById("relationship2").value;
	people[i].phone = document.getElementById("phone2").value;
	
	people[i].guardian3 = document.getElementById("guardian3").value;
	people[i].relationship3 = document.getElementById("relationship3").value;
	people[i].phone3 = document.getElementById("phone3").value;
	alert("Successfully Updated Emergency Contact Information.");
	
	i++;

}

//Initialization
function init() {
	document.getElementById('emergency').addEventListener("submit",emergency,false);
	
}
window.addEventListener("load", init, false);


