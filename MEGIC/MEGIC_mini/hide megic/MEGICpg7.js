function nextQuestion(){
	var a = document.getElementById("drug").checked;
	var b = document.getElementById("food").checked;
	var c = document.getElementById("venom").checked;
	var d = document.getElementById("environment").checked;
	var e = document.getElementById("medCondition").checked;
	if(a){
	document.getElementById("answer1").style.visibility="visible";
	document.getElementById("answer1").innerHTML="Correct. The administration of Non-Steroidal Anti-Inflammatory drug (NSAID) is a common cause of anaphylaxis.";
	document.getElementById("nextButton").style.visibility="visible";
	}
	else{
	document.getElementById("answer1").style.visibility="visible";
	document.getElementById("answer1").innerHTML="Incorrect. This was not ascertained in the history";
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
	var a = document.getElementById("hdu").checked;
	if(a){
		document.getElementById("answer2").style.visibility="visible";
		document.getElementById("answer2").innerHTML=" Correct. This patient may still have ongoing anaphylaxis despite resolution of symptoms and will need to be monitored closely for the next 24-72 hours.";
	}
	else{
		document.getElementById("answer2").style.visibility="visible";
		document.getElementById("answer2").innerHTML="Incorrect";
	}
}

function nextQuestion2(){
	document.getElementById("questionContainer2").style.visibility="visible";
	document.getElementById("questionContainer1").style.visibility="hidden";
	document.getElementById("answer2").style.visibility="hidden";
	document.getElementById("nextButton1").style.visibility="hidden";
	document.getElementById("nextButton2").style.visibility="visible";
}



function checkAnswer3(){
	var a = document.getElementById("immuno").checked;
	if(a){
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("answer3").innerHTML="Correct. He should be sent for a skin prick test later on.";
	}
	else{
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("answer3").innerHTML="Incorrect";
	}
	
}

function nextQuestion3(){
	document.getElementById("questionContainer2").style.visibility="hidden";
	document.getElementById("nextButton2").style.visibility="hidden";
	document.getElementById("answer3").style.visibility="hidden";
	document.getElementById("tableContainer").style.visibility="visible";
}

function matchAnQ(){
	var a=document.getElementById("medication").value;
	var b=document.getElementById("medication1").value;
	var c=document.getElementById("medication2").value;
	var d=document.getElementById("medication3").value;
	if(a=="Cortico" && b=="NebBroncho" && c=="H1Anti" && d=="H2Anti"){
		document.getElementById("matchNumberAnswer").innerHTML="You are right!";
		document.getElementById("endGame").style.visibility="visible";
		document.getElementById("tableContainer").style.visibility="hidden";
		document.getElementById("rightInfo").style.visibility="visible";
	}
	else{
		document.getElementById("matchNumberAnswer").innerHTML="You are wrong. Please try again";
		document.getElementById("matchNumberAnswer").classList.toggle("changeClass");
	}
}	