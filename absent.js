var people = [{}];
var people1 = [{}];
var i = 0;


//Submit clause function
function submit(){
event.preventDefault();
	if (check() === true){
		formsubmit();
	} else{
		//Not working for some reason
		alert("Invalid key, please enter correct key or generate a new key below.");
	}
	 return false;
		
}


//Form submit details
function formsubmit(){

	event.preventDefault();
	people.push({});
	
	people[i].studentname = document.getElementById("name").value;
	people[i].dateabsent = document.getElementById("date").value;
	people[i].studentgrade = document.getElementById("grade").value;
	people[i].guardianx = document.getElementById("guardianx").value;
	people[i].relationship = document.getElementById("guardian").value;
    people[i].pkey = document.getElementById("pkey").value;
	people[i].phone = document.getElementById("phone").value;
	people[i].absenttype = document.getElementById("type").value;
	people[i].reason = document.getElementById("text").value;
	//Input people array into the console
	console.log(people);	
	countInArray();
	i++;
		
}


	//Count how many absenses a certain student has
function countInArray() {
	var student1 = document.getElementById("name").value;
	var newstr = JSON.stringify(people);
	var exp = new RegExp(student1, 'g')
	var match = newstr.match(exp);
	if (match.length > 2){ var txt = "Student is now considered truant, and will be referred to the District School Attendance Review Board. ";
	} else {
		txt = "Student is not yet truant(3 or more absenses). Every absense will cause a student to fall behind in academic work and knowledge. Districts lose money for every absense which could benefit them."
	}
		return alert(txt);
	
}


	


//Check if parent key exists
function check(){
	var x = document.getElementById("pkey").value;
	var newstr1 = JSON.stringify(people1);
	var exp2 = new RegExp(x,'g');
	var match2 = newstr1.match(exp2);
	if(match2.length>0){
	return true;
	} else{
		return false;
	}

}



//Generate the Parent Key
function parentkey(){
event.preventDefault();
people1.push({});
people1[i].guardian = document.getElementById("guardianname").value;
people1[i].pkey = Math.floor(Math.random()*900000) + 100000;

var parentstring =  "\nGuardian Parent Name: " + people1[i].guardian + "\nParent Key: " + people1[i].pkey;
alert(parentstring);
i++;

return false;
}

//Generate report of how many absenses
function generate(){
event.preventDefault();

alert("Total # of Absenses/Early Sign Out:" + people.length);

return false;
}





//Initialization
function init() {
	document.getElementById('theForm').addEventListener("submit",submit,false);
	document.getElementById('generate').addEventListener("click",generate,false);
	document.getElementById('parentkey').addEventListener("submit",parentkey,false);
}
window.addEventListener("load", init, false);


