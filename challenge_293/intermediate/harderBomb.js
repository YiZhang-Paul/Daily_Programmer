/**
 * codes for challenge No.293[Intermediate]
 */
var defuseSucceed = false,  //indicate if defuse succeed
defuseFail = false,         //indicate if defuse fail
validColor = [],            //indicate next available colors of wires
wireSequence = [],          //wire cutting sequence to disarm bomb
ruleLength = 1,             //indicate the length of rules checked
wireList = document.getElementById("wireCut"),  //drop down list
wireChosen = -1,            //wire chose by user default -1
result = "",                //defuse result
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
/*
since the sequence "green-orange" or "orange-green" defuses the bomb and green and orange 
can only be chosen after cutting a black wire or orange wire, the final sequence that will 
successfully defuse the bomb will be:
1. black - orange - green
2. black - green - orange
3. orange - orange - green
4. orange - green - orange
*/
//function to check rules and indicate next available wire colors
function wireNext(prevWire, currentWire, nextWire) {
	//initialize rule length
	ruleLength = 1;
	switch(prevWire) {
		//white
		case "white" :
			if(currentWire == "white") {
				//white - white - red
				if(nextWire == "red") {
					validColor = ["white", "red"];
					ruleLength = 3;
					break;
				} else {
						//white - white - other
						validColor = ["black", "red"];
						ruleLength = 2;
						break;
				}
			}	
			//white - other	
			validColor = ["white", "orange"];
			break;
		case "red" :
			if(currentWire == "red") {
				validColor = ["white", "red"];
				ruleLength = 2;
				break;
			}
			validColor = ["black", "red"];
			break;
		case "orange" :
		case "black" :
			if((currentWire == "green" && nextWire == "orange") ||
			  (currentWire == "orange" && nextWire == "green")) {
				defuseSucceed = true;
				break;
			}	else if((currentWire == "green" && nextWire != "orange") ||
			         (currentWire == "orange" && nextWire != "green")) {
					defuseFail = true;
					break;
			}
			validColor = ["green", "orange", "black"];
			break;
	}
}
//function to defuse bomb and check if bomb is successfully disarmed
function defuseBomb(cutSequence) {
	//initialize initial bomb state
	defuseSucceed = false;
	defuseFail = false;
	var firstCut = cutSequence[0];  //first wire cut
	//check the start of cutting sequence
	if(firstCut != "white" && firstCut != "red") {
		defuseFail = true;
		result = "Result: Boom!";	
	} else {
			for(var i = 0; i < cutSequence.length - 2; i++) {
				wireNext(cutSequence[i], cutSequence[i + 1], cutSequence[i + 2]);
				//if bomb is already defused
				if(defuseSucceed) {
					result = "Result: Bomb Defused.";	
					break;
				} else if(validColor.indexOf(cutSequence[i + ruleLength]) == -1 || defuseFail) {
						//if color of next wire is wrong
						defuseFail = true;
						result = "Result: Boom!";	
						break;
				}
				//indicate index of next wire to check 
				i += ruleLength - 1;
		  }
      //if bomb is neither defused nor exploded upon reaching the end of sequence
			if(!defuseSucceed && !defuseFail) {
				result = "Result: Boom!";	
			}
	}
	//reset wireSequence for other bombs
	wireSequence = [];
	//disable defuse button again
	defuseBtn.disabled = true;
	//display result
	displayResult.innerHTML = result;
}