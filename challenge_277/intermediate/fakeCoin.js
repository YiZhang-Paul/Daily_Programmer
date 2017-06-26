/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * group coins with equal 
		 */
		/**
		 * find out the fake coin
		 * @param array []
		 *
		 * evaluations : list of all evaluations
		 *
		 * returns String
		 */
		function getFakeCoin(evaluations) {
			evaluations = evaluations.map(evaluation => evaluation.split(" "));
			let allCoins = new Set(), realCoins = new Set();
			evaluations.forEach(evaluation => {
				for(let i = 0; i < evaluation[0].length; i++) {
					allCoins.add(evaluation[0][i]);
					if(evaluation[2] == "equal") {
						realCoins.add(evaluation[0][i]);
					}
				}
				for(let i = 0; i < evaluation[1].length; i++) {
					allCoins.add(evaluation[1][i]);
					if(evaluation[2] == "equal") {
						realCoins.add(evaluation[1][i]);
					}	
				}
			});
			let result = null;
			evaluations.forEach(evaluation => {
				if(evaluation[2] != "equal") {
					let lighter = evaluation[2] == "left" ? evaluation[1].split("") : evaluation[0].split("");
					if(lighter.every(label => realCoins.has(label))) {
						result = "Data is inconsistent.";
					}
				}
			});
			if(result) {
				return result;
			}
			if(allCoins.size == realCoins.size) {
				result = "No fake coins detected.";
			}	else if(allCoins.size - realCoins.size == 1) {
				let fakeCoin = ""; 
				allCoins = Array.from(allCoins);
				for(let i = 0; i < allCoins.length; i++) {
					if(!realCoins.has(allCoins[i])) {
						fakeCoin = allCoins[i];
						break;
					}
				}
				result = `${fakeCoin} is lighter.`;
			} else {
				result = "Data is inconsistent.";
			}
			return result;
		} 
		/** 
		 * default input
		 */
		//input 1  
		let input = ["a b left", "a c equal"];
		console.log(getFakeCoin(input));
		//input 2
		input = ["a c equal"];
		console.log(getFakeCoin(input));
		//input 3
		input = ["a c equal", "a b equal", "c b left"];
		console.log(getFakeCoin(input));
		/**
		 * challenge input
		 */
		//challenge 1 
		input = ["ab xy left", "b x equal", "a b equal"];
		console.log(getFakeCoin(input));
		//challenge 2 
		input = ["a x equal", "b x equal", "y a left"];
		console.log(getFakeCoin(input));
		//challenge 3 
		input = ["abcd efgh equal", "abci efjk left", "abij efgl equal", "mnopqrs tuvwxyz equal"];
		console.log(getFakeCoin(input));
		//challenge 4
		input = ["abc efg equal", "a e left"];
		console.log(getFakeCoin(input));
	});
})();		