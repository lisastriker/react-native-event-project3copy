//show swollen eye
function revealEye(){
	var x = document.getElementById("swollenEye");
	document.getElementById("list1").classList.toggle("done",true);
	if(x.style.visibility=="visible"){
		x.style.visibility="hidden";
	}
	else{
		x.style.visibility="visible";
	}	
}

//show leg
function revealLeg(){
	var x=document.getElementById("rashLeg");
	document.getElementById("list1").classList.toggle("done",true);
	if(x.style.visibility=="visible"){
		x.style.visibility="hidden";
	}
	else{
		x.style.visibility="visible";
	}
}
//reveal answer and show next button
function nextQuestion(){
	var a = document.getElementById("UAO").checked;
	var b = document.getElementById("sepsis").checked;
	var c = document.getElementById("anaShock").checked;
	if(a){
	document.getElementById("answer1").style.visibility="visible";
	document.getElementById("answer1").innerHTML="Incorrect.";
	document.getElementById("nextButton").style.visibility="visible";
	}
	else if(b){
	document.getElementById("answer1").style.visibility="visible";
	document.getElementById("answer1").innerHTML="Incorrect.";
	document.getElementById("nextButton").style.visibility="visible";
	}
	else if(c){
	document.getElementById("answer1").style.visibility="visible";
	document.getElementById("answer1").innerHTML="Correct, given the presence of skin changes, cardiovascular and respiratory effects together (multi-systemic).";
	document.getElementById("nextButton").style.visibility="visible";
	}
	else{
	document.getElementById("answer1").style.visibility="visible";
	document.getElementById("answer1").innerHTML="Incorrect.";
	document.getElementById("nextButton").style.visibility="visible";
	}
}


function revealQuestion(){
	document.getElementById("questionContainer1").style.visibility="visible";
	document.getElementById("questionContainer").style.visibility="hidden";
	document.getElementById("answer1").style.visibility="hidden";
	document.getElementById("nextButton").style.visibility="hidden";
}


function nextQuestion1(){
	var a = document.getElementById("salbutamol").checked;
	var b = document.getElementById("adrenaline").checked;
	var c = document.getElementById("glucagon").checked;
	var d = document.getElementById("antibiotic").checked;
	if(a){
	document.getElementById("answer2").style.visibility="visible";
	document.getElementById("answer2").innerHTML="Incorrect. Salbutamol is only given in anaphylactic shock when there is persistent bronchospasm.";
	document.getElementById("nextButton1").style.visibility="visible";
	}
	else if(b){
	document.getElementById("answer2").style.visibility="visible";
	document.getElementById("answer2").innerHTML="Correct.";
	document.getElementById("nextButton1").style.visibility="visible";
	}
	else if(c){
	document.getElementById("answer2").style.visibility="visible";
	document.getElementById("answer2").innerHTML="Incorrect. Glucagon is given when adrenaline is contraindicated (eg. ischemic heart disease, severe hypertension, pregnancy, on beta blockers) or no response to adrenaline";
	document.getElementById("nextButton1").style.visibility="visible";
	}
	else if(d){
	document.getElementById("answer2").style.visibility="visible";
	document.getElementById("answer2").innerHTML="Incorrect. Antibiotics are not indicated in anaphylactic shock.";
	document.getElementById("nextButton1").style.visibility="visible";
	}
	else{
	document.getElementById("answer2").style.visibility="visible";
	document.getElementById("answer2").innerHTML="Incorrect. Diuretics are not indicated in anaphylactic shock.";
	document.getElementById("nextButton1").style.visibility="visible";
	}
}

//reveal next question
function revealQuestion1(){
	document.getElementById("questionContainer2").style.visibility="visible";
	document.getElementById("questionContainer1").style.visibility="hidden";
	document.getElementById("answer2").style.visibility="hidden";
	document.getElementById("nextButton1").style.visibility="hidden";
}

//Question on IM and IV
function nextQuestion2(){
	var a = document.getElementById("IM").checked;
	var b = document.getElementById("IV").checked;
	if(a){
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("answer3").innerHTML=" Correct. While this patient is hypotensive, if he has no IV access, IM will be your first choice given the convenience and quick ease of administration.";
		document.getElementById("nextButton2").style.visibility="visible";
	}
	else{
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("answer3").innerHTML=" Incorrect. While this patient is hypotensive, if he has no IV access, IM will be your first choice given the convenience and quick ease of administration.";
		document.getElementById("nextButton2").style.visibility="visible";
	}
	
}
//reveal sliderFunction
function revealQuestion2(){
	document.getElementById("syringePage").style.visibility="visible";
	document.getElementById("questionContainer2").style.visibility="hidden";
	document.getElementById("answer3").style.visibility="hidden";
	document.getElementById("nextButton2").style.visibility="hidden"
	document.getElementById("nextButton3").style.visibility="visible";;
	
}

function sliderFunction(){
 switch(slider.value){
	case "0":
	document.getElementById("endSyringe").style.right="185px";
	break;
	case "0.1":
	document.getElementById("endSyringe").style.right="165px";
	break;
	case "0.2":
	document.getElementById("endSyringe").style.right="148px";
	break;
	case "0.3":
	document.getElementById("endSyringe").style.right="130px";
	break;
	case "0.4":
	document.getElementById("endSyringe").style.right="110px";
	break;
	case "0.5":
	document.getElementById("endSyringe").style.right="92px";
	break;
	case "0.6":
	document.getElementById("endSyringe").style.right="72px";
	break;
	case "0.7":
	document.getElementById("endSyringe").style.right="55px";
	break;
	case "0.8":
	document.getElementById("endSyringe").style.right="35px";
	break;
	case "0.9":
	document.getElementById("endSyringe").style.right="15px";
	break;
	case "1":
	document.getElementById("endSyringe").style.right="-2px";
	break;
	}
}


function matchAnQ(){
	var a = document.getElementById("textarea1").value;
	var b = document.getElementById("textarea2").value;
	var c = document.getElementById("textarea3").value;
	var d = document.getElementById("textarea4").value;

	if(a==3 && b==4 && c==2 && d==1){
		document.getElementById("matchNumberAnswer").innerHTML = "You are right!";
	}
	else{
		document.getElementById("matchNumberAnswer").innerHTML = "You are wrong!";
	}	
}	
	
function administerAdrenaline(){
	document.getElementById("syringePage").style.visibility="hidden";
	document.getElementById("syringeContainer").style.visibility="visible";
	document.getElementById("litres").style.visibility="hidden";
	document.getElementById("nextButton3").style.visibility="hidden";
	document.getElementById("syringeContainer").style.animation="3s moveDown 4s forwards, 4s moveOver forwards";
	document.getElementById("nextIcon").style.visibility="visible"
	//document.getElementById("endSyringe").style.animation="2s inject 7s";
	checkInjectedAmount();
	document.getElementById("list2").style.visibility="visible";
	document.getElementById("list2").classList.toggle("done",true);
}

function checkInjectedAmount(){
	if(slider.value == 0.3){
		alert("You have injected the correct amount.");
		setInterval(function(){ 
		slider.value = 0;
		document.getElementById("endSyringe").style.right="185px";		
		}, 5000);

		
		//document.getElementById("tableContainer").style.visibility="visible";
		
	}
	else{
		alert("You should have injected 0.3ml of adrenaline.");
		setInterval(function(){ 
		slider.value = 0;
		document.getElementById("endSyringe").style.right="185px";
		}, 5000);

	}
		//document.getElementById("tableContainer").style.visibility="visible"
		
	
}
	
