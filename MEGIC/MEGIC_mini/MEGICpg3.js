function personReveal(){
	var x=document.getElementById("personPopup");
	document.getElementById("list1").classList.toggle("done", true);
	if(x.style.visibility=="visible"){
		x.style.visibility="hidden";
	}
	else{
		x.style.visibility="visible";
	}
}

function vitalsReveal(){
		var x=document.getElementById("vitalsPopup");
		document.getElementById("list2").classList.toggle("done", true);
	if(x.style.visibility=="visible"){
		x.style.visibility="hidden";
	}
	else{
		x.style.visibility="visible";
	}
}

//check Answer for first Question
function checkAnswer(){
	var a= document.getElementById("patentYes").checked;
	if(a){
		document.getElementById("answer").innerHTML="Correct. As the patient is still rousable, further intervention to secure his airway is not necessary.";
	}
	else{
		document.getElementById("answer").innerHTML="Incorrect. As the patient is still rousable, further intervention to secure his airway is not necessary.";
	}
}

function checkAnswer2(){
	var a= document.getElementById("breathingYes").checked;
	if(a){
		document.getElementById("answer2").innerHTML="Incorrect.";
	}
	else{
		document.getElementById("answer2").innerHTML="Correct. His conscious level, respiratory rate and oxygen saturation levels seem to be dropping rapidly. <br/> Action should be taken to enhance ventilation and improve oxygenation.";
	}
}

function checkAnswer2a(){
	var a= document.getElementById("adminOxygen").checked;
	var b= document.getElementById("adminSalbultamol").checked;
	var c= document.getElementById("adminNIV").checked;
	var d= document.getElementById("adminSteriod").checked;
	if(a){
		document.getElementById("answer2a").innerHTML="Correct. An appropriate initial measure to ensure adequate oxygenation.";
	}
	else if(d){
		document.getElementById("answer2a").innerHTML="Incorrect. Inappropriate use given no indication.";
	}
	else{
		document.getElementById("answer2a").innerHTML=" Incorrect. Unnecessary at this point."
	}
}


function nextQuestion(){
	document.getElementById("questionContainer").style.visibility="hidden";
	document.getElementById("questionContainer1").style.visibility="visible";
}

function nextQuestion1(){
	document.getElementById("questionContainer1").style.visibility="hidden";
	document.getElementById("questionContainer2").style.visibility="visible";
}

function nextQuestion2(){
	document.getElementById("questionContainer2").style.visibility="hidden";
	document.getElementById("questionContainer3").style.visibility="visible";
}

function checkAnswer3(){
	var a= document.getElementById("nasalProngs").checked;
	var b= document.getElementById("simpleFaceMask").checked;
	var c= document.getElementById("nonRebreatherMask").checked;
	var d= document.getElementById("venturiMask").checked;
	var e= document.getElementById("bagValveMask").checked;
	var f= document.getElementById("ett").checked;
	document.getElementById("circle").style.visibility="visible";
	if(a){
		document.getElementById("answer3").innerHTML="Incorrect. This would be inadequate given that the patient’s respiratory distress is worsening";
	}
	else if(b){
		document.getElementById("answer3").innerHTML="Incorrect. This would be inadequate given that the patient’s respiratory distress is worsening.";
	}
	else if(c){
		document.getElementById("answer3").innerHTML="Incorrect. This would be inadequate given that the patient’s respiratory distress is worsening.";
	}
	else if(d){
		document.getElementById("answer3").innerHTML="Incorrect. This is used when precise oxygen titration is required.";
	}
	else if(e){
		document.getElementById("answer3").innerHTML="Correct. This is an appropriate immediate intervention to improve ventilation to a patient with decreasing conscious level";
	}
	else if(f){
		document.getElementById("answer3").innerHTML="Incorrect. This should not be first-line in airway management (ventilation > oxygenation).";
	}
}