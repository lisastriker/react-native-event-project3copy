

function onOpenClick(){
	document.getElementById("vitalsPopup").classList.toggle("showThis");
	document.getElementById("list1").classList.toggle("done",true);
}

function audioOpenClick(){
	document.getElementById("stridorSound").classList.toggle("showThisOne");
	document.getElementById("list2").classList.toggle("done", true);
}

function purselipsOpenClick(){
	document.getElementById("purselipsPopup").classList.toggle("showThisTwo");
	document.getElementById("list3").classList.toggle("done", true);
}


//check answer for breathing
function checkAnswer(){
	var a = document.getElementById("stridor").checked;
	var b = document.getElementById("stertor").checked;
	var c = document.getElementById("wheeze").checked;
	var d = document.getElementById("crepitations").checked;
	var e = document.getElementById("clearLungSounds").checked;
	if(a){
		document.getElementById("answer1").style.visibility="visible";
		document.getElementById("answer1").innerHTML="Correct. A loud, intense, monophasic sound that is most commonly inspiratory, but can be expiratory or biphasic in timing and originates from the upper airway.";
		document.getElementById("nextQuestion").style.visibility="visible";
	}
	else if(b){
		document.getElementById("answer1").style.visibility="visible";
		document.getElementById("answer1").innerHTML="Incorrect. A low-pitched, inspiratory sound (a.k.a. snoring), originating at the level of the naso/oropharynx.";
		document.getElementById("nextQuestion").style.visibility="visible";
	}
	else if(c){
		document.getElementById("answer1").style.visibility="visible";
		document.getElementById("answer1").innerHTML="Incorrect. A high-pitched, polyphonic (musical) sound that can be inspiratory or expiratory and originates from the lower airway.";
		document.getElementById("nextQuestion").style.visibility="visible";
	}
	else if(d){
		document.getElementById("answer1").style.visibility="visible";
		document.getElementById("answer1").innerHTML=" Incorrect. A non-continuous, explosive popping sounds heard more often on inspiration, but can also be expiratory, and originate from the lower, smaller airways.";
		document.getElementById("nextQuestion").style.visibility="visible";
	}
	else if(e){
		document.getElementById("answer1").style.visibility="visible";
		document.getElementById("answer1").innerHTML="Incorrect. Noises auscultated over the lung fields on respiration. Types include vesicular (normal), bronchial and tracheal.";
		document.getElementById("nextQuestion").style.visibility="visible";
	}
}

function revealQuestion2(){
	document.getElementById("questionContainer").style.visibility="hidden";
	document.getElementById("answer1").style.visibility="hidden";
	document.getElementById("nextQuestion").style.visibility="hidden";
	document.getElementById("questionContainer2").style.visibility="visible";
}


//check answer for vitals
function checkAnswer2(){
	var ans1 = document.getElementById("heartrate").checked;
	var ans2 = document.getElementById("temperature").checked;
	var ans3 = document.getElementById("respiratoryrate").checked;
	var ans4 = document.getElementById("bloodpressure").checked;
	if(ans1==true && ans2==false && ans3==true && ans4==false){
		document.getElementById("answer2").innerHTML="Yes, you are right!";
		document.getElementById("nextQuestion2").style.visibility="visible";
	}
	else{
		document.getElementById("answer2").innerHTML="You are wrong. The correct answer is heart rate and respiratory rate.";
		document.getElementById("nextQuestion2").style.visibility="visible";
	}
}

function revealQuestion3(){
	document.getElementById("questionContainer2").style.visibility="hidden";
	document.getElementById("answer2").style.visibility="hidden";
	document.getElementById("nextQuestion2").style.visibility="hidden";
	document.getElementById("questionContainer3").style.visibility="visible";
}

function checkAnswer3(){
	var ans1 = document.getElementById("nurse").checked;
	var ans2 = document.getElementById("surgery").checked;
	var ans3 = document.getElementById("respiratoryMedicine").checked;
	var ans4 = document.getElementById("anaesthesia").checked;
	var ans5 = document.getElementById("otolaryngology").checked;
	if(ans1){
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("circle").style.visibility="visible";
		document.getElementById("answer3").innerHTML="Incorrect";
	}	
	else if(ans2){
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("circle").style.visibility="visible";
		document.getElementById("answer3").innerHTML="Correct. Call your direct senior first.";
	}
	else if(ans3){
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("circle").style.visibility="visible";
		document.getElementById("answer3").innerHTML="Incorrect";
	}		
	else if(ans4){
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("circle").style.visibility="visible";
		document.getElementById("answer3").innerHTML="Incorrect";
	}
	else if(ans5){
		document.getElementById("answer3").style.visibility="visible";
		document.getElementById("circle").style.visibility="visible";
		document.getElementById("answer3").innerHTML="Incorrect";
	}
	
}


/*check for press on images part 1
function checkForPress(){
	var clicked = false;
	document.getElementById("showMe").innerHTML="clicked";
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("showMe").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
  document.getElementById("showMe").innerHTML="letmestay";
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("showMe").innerHTML = "The p element was dropped";
}
*/
