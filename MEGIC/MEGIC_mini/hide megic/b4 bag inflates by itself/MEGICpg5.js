function revealHeadTilt(){
	document.getElementById("hospitalImageAfter").style.visibility="visible";
	document.getElementById("hospitalImageToDisappear").style.visibility="hidden";
	document.getElementById("list1").classList.toggle("done");
	document.getElementById("rightInfo").style.visibility="visible";
	document.getElementById("taskComplete").style.visibility="visible";
	document.getElementById("checkListul").style.visibility="visible";
	document.getElementById("list1").style.visibility="visible";
	document.getElementById("list2").style.visibility="visible";
	document.getElementById("list3").style.visibility="visible";
	
}
var count = 0;
var timeElapsed=0;
var timeElapsedCount=0;
var checking = false;
function checkForMove(){
	document.getElementById("mask").style.border="solid 5px red";
	document.getElementById("mask1").style.border="solid 5px green";
	document.getElementById("list2").classList.toggle("done",true);
	document.getElementById("mask").className="movingNow";
	//setInterval
	setTimeout(()=>{
		mask.style.border="none";
	}, 1500);
	checking = true;
}

function checkForMove1(){
	document.getElementById("mask").style.border="solid 5px red";
	document.getElementById("mask1").style.border="solid 5px green";
	document.getElementById("list2").classList.toggle("done",true);
	document.getElementById("mask1").className="movingNow1";
	setTimeout(()=>{
		mask1.style.border="none";
	}, 1500);
	checking = true;
}

function sendMask(){
	checking=false;
	if(document.getElementById("mask").className == "movingNow" && document.getElementById("mask1").className=="movingNow1"){
		document.getElementById("mask").style.animationName="none";
		document.getElementById("mask").style.border="solid 5px red";
		document.getElementById("mask1").className="movingBack1";
		document.getElementById("mask1").style.border="solid 5px green";
	}
	else if(document.getElementById("mask").className == "movingNow"){
		document.getElementById("mask").className="movingBack";
		document.getElementById("mask").style.border="solid 5px red";
	}else if(document.getElementById("mask1").className=="movingNow1"){
	document.getElementById("mask1").className="movingBack1";
	document.getElementById("mask1").style.border="solid 5px green";
	}
}

function sizeChange(){
	if(checking){
	var x = document.getElementById("circleSize");
	x.classList.toggle("circleSize");
	count+=1;
	if(count ==1){
		timeElapsedCount = timeElapsed;
	}
	//Bag is tapped 4 times
	if (count == 8){
		var difference = timeElapsed - timeElapsedCount;
		if(difference < 12 || difference > 20){
			alert(`You're all done. You took ${difference} seconds for 4 squeezes. The optimal timing is 12-20 seconds. Please try again`);
			timeElapsed = 0; 
			count = 0;
			timeElapsedCount = 0;
			sizeChange();
			}
		else{
			alert(`You're all done. You took ${difference} seconds for 4 squeezes. The optimal timing is 12-20 seconds. Please proceed and press the next button`);
			document.getElementById("list3").classList.toggle("done");
		}
	}	
	}else{
		alert("Please put on the patient's mask first.");
	}
}

function runTimer(){
	if(checking){
	var a = document.getElementById("timer");
	a.disabled = true;
	var d = setInterval(()=>{
		timeElapsed +=1;
		
	document.getElementById("time").innerHTML="00." + timeElapsed;
	if (timeElapsed>59){
		clearInterval(d);
		timeElapsed = 0;
		runTimer();
		
	}
	}, 1000);
	}else{
		alert("Please put on the patient's mask first.");
	}
	
}
