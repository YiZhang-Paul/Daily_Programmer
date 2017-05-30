/**
 * codes for challenge No.293[Easy]
 */
var bombDefused = "",  //indicate whether the bomb is successfully defused
validColor = [],       //available wire colors for the next cut
wireSequence = [],     //wire cutting sequence to disarm bomb
wireList = document.getElementById("wireCut"),  //drop down list
wireChosen = -1,       //wire chose by user default -1
displayResult = document.getElementById("displayResult");  //area to display result
//add event listener to drop down list and update color chose by user
wireList.addEventListener("change", function() {
	wireChosen = wireList.value;
});
wireList.addEventListener("click", function() {
	//clear validation message
	document.getElementById("validation").innerHTML = "";
	//clear result
	displayResult.innerHTML = "Result: ";
});
//add event listener to add wire button
var addBtn = document.getElementById("addWire");
addBtn.addEventListener("click", addWire);
//disable defuse button on default
var defuseBtn = document.getElementById("defuseBomb");
defuseBtn.disabled = true;
//add event listener to defuse bomb button
defuseBtn.addEventListener("click", function() {
	defuseBomb(wireSequence);
});
//function to add wire chose by user into wire cutting sequence
function addWire() {
	//if user did not chose a wire color
	if(wireChosen == -1) {
		document.getElementById("validation").innerHTML = "&#42;Please choose a wire color.";
	} else {
			wireSequence.push(wireChosen);
			//reset drop down list and wireChosen to default value
			wireList.value = -1;
			wireChosen = -1;
  }
  //when enough wires have been selected
  if(wireSequence.length > 1) {
  	//re-enable defuse button
  	defuseBtn.disabled = false;
  }
}
//function to determine next available wire colors after each cut 
function wireNext(wireCut) {
	//define disarming rules
	switch(wireCut) {
		case "white" :
			validColor = ["purple", "red", "green", "orange"];
			break; 
		case "red" : 
		  validColor = ["green"];
		  break;
		case "black" : 
		  validColor = ["black", "purple", "red"];
		  break;
		case "orange" : 
		  validColor = ["black", "red"];
		  break;
		case "green" : 
		  validColor = ["white", "orange"];
		  break;
		default : 
		  validColor = ["black", "red"];
		  break;	  	  	  	  		
	}
}
//function to defuse bomb and check if bomb successfully defused
function defuseBomb(cutSequence) {
	for(var i = 0; i < cutSequence.length - 1; i++) {
		//find next available wire colors to cut
		wireNext(cutSequence[i]);
		//check if color of next wire cut is allowed
		if(validColor.indexOf(cutSequence[i + 1]) == -1) {
			bombDefused = "Result: Boom!";
			//exit loop immediately when wrong wire is cut
			break;
		} else {
				bombDefused = "Result: Bomb Defused.";
		}
	}
	//reset wireSequence for other bombs
	wireSequence = [];
	//disable defuse button again
	defuseBtn.disabled = true;
	//display result
	displayResult.innerHTML = bombDefused;
}