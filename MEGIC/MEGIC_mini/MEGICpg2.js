const interact = require('interactjs');
//check for press on images part 1
function checkForPress(){
	document.getElementById("sabultamol").style.borderColor="red";
	document.getElementById("niv").style.borderColor="red";
	document.getElementById("supplementaloxygen").style.borderColor="green";
	document.getElementById("cortisol").style.borderColor="red";
	
	document.getElementById("sabultamol").style.backgroundColor="#D0CFD5";
	document.getElementById("niv").style.backgroundColor="#D0CFD5";
	document.getElementById("supplementaloxygen").style.backgroundColor="#D0CFD5";
	document.getElementById("cortisol").style.backgroundColor="#D0CFD5";
	document.getElementById("list1").classList.toggle("done", true);
}
//check for press on images part 2
function checkForPress1(){
	document.getElementById("facemask").style.borderColor="red";
	document.getElementById("ventimask").style.borderColor="red";
	document.getElementById("nasalprongs").style.borderColor="red";
	document.getElementById("nonrebreathermask").style.borderColor="green";
	document.getElementById("bagvalvemask").style.borderColor="red";
	
	document.getElementById("facemask").style.backgroundColor="#D0CFD5";
	document.getElementById("ventimask").style.backgroundColor="#D0CFD5";
	document.getElementById("nasalprongs").style.backgroundColor="#D0CFD5";
	document.getElementById("nonrebreathermask").style.backgroundColor="#D0CFD5";
	document.getElementById("bagvalvemask").style.backgroundColor="#D0CFD5";
	document.getElementById("circle").style.visibility="visible";
	document.getElementById("oxygenBar").style.visibility="visible";
	document.getElementById("list2").classList.toggle("done", true);
}



//Make container disappear after answering
function nextQuestion(){
	var a = document.getElementById("patentYes").checked;
	if(a){
	document.getElementById("answer1").style.visibility="visible";
	document.getElementById("answer1").innerHTML="Correct. As he was still able to communicate with you, his airway would be clear";
	document.getElementById("nextButton").style.visibility="visible";
	}
	else{
	document.getElementById("answer1").style.visibility="visible";
	document.getElementById("answer1").innerHTML="Incorrect. He was still able to communicate with you, his airway would be clear";
	document.getElementById("nextButton").style.visibility="visible";
	}
}
function nextQuestion1(){
	document.getElementById("questionContainer1").style.visibility="visible";
	document.getElementById("questionContainer").style.visibility="hidden";
	document.getElementById("answer1").style.visibility="hidden";
	document.getElementById("nextButton").style.visibility="hidden";
	document.getElementById("nextButton1").style.visibility="visible";
}

function checkAnswer2(){
	var a = document.getElementById("breathingNo").checked;
	if(a){
		document.getElementById("answer2").style.visibility="visible";
		document.getElementById("answer2").innerHTML="Correct. The patient seems to be in respiratory distress. <br/> The pulse oximeter is not a ventilation monitor and should not purely be relied on in assessing his ventilation.";
	}
	else{
		document.getElementById("answer2").style.visibility="visible";
		document.getElementById("answer2").innerHTML="Incorrect";
	}
}

function nextQuestion2(){
	document.getElementById("answer2").style.visibility="hidden";
	document.getElementById("nextButton1").style.visibility="hidden";
	document.getElementById("questionContainer1").style.visibility="hidden";
	document.getElementById("administerContainer").style.visibility="visible";
	document.getElementById("administerContainerLeft").style.visibility="visible";
	document.getElementById("administerContainerRight").style.visibility="visible";
	document.getElementById("dot").style.visibility="visible";
}


/*function revealOxygenBar(){
	
}*/


//check for press on images part 2
/*function checkClickAndDrag(){
	document.getElementById("showMe").innerHTML="clicked";
}*/