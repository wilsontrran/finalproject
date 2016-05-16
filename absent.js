var people = [{}];
var people1 = [{}];
var i = 0;

function submit(){
//	var x = document.getElementById("guardianx").value;
//	alert(x);
//	var y = document.getElementById("pkey").value;
	if (check()){
		formsubmit();
		
	}
	return false;
}

function formsubmit(){
	
	
	event.preventDefault();
	people.push({});
	
	people[i].studentname = document.getElementById("name").value;
	people[i].dateabsent = document.getElementById("date").value;
	people[i].studentgrade = document.getElementById("grade").value;
	people[i].guardianx = document.getElementById("guardianx").value;
	people[i].relationship = document.getElementById("guardian").value;
    people[i].pkey = document.getElementById("pkey").value;
	people[i].absenttype = document.getElementById("type").value;
	people[i].reason = document.getElementById("text").value;
	
	
	console.log(people);

		
	countInArray();

	i++;
		
}


	
function countInArray() {
	var student1 = document.getElementById("name").value;
	var newstr = JSON.stringify(people);
	var exp = new RegExp(student1, 'g')
	var match = newstr.match(exp);
	if (match.length > 2){ var txt = "Truant";
	} else {
		txt = "not yet"
	}
		return alert(txt);
	
	

	//return console.log("Whole Instance: " + newstr + "\nMatch:" + match.length + "\nEntered:" + student1);
	
}
	



function check(){
	return true;
}




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

function generate(){
event.preventDefault();
people1.push({});
people1[i].guardian = document.getElementById("guardianname").value;
people1[i].pkey = Math.floor(Math.random()*900000) + 100000;

var parentstring = document.getElementById("parentspan");
parentstring.innerHTML = "<br/>Guardian Parent Name: " + people1[i].guardian + "<br/>Parent Key: " + people1[i].pkey;
i++;

return false;
}


function init() {
	document.getElementById('theForm').addEventListener("submit",submit,false);
	document.getElementById('generate').addEventListener("click",generate,false);
	document.getElementById('parentkey').addEventListener("submit",parentkey,false);
}
window.addEventListener("load", init, false);


