/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * record labels
		 * @param String, obj {}
		 *
		 * labels : all labels
		 * set    : set to record all labels
		 *
		 * returns obj {}
		 */
		function recordLabel(labels, set) {
			for(let i = 0; i < labels.length; i++) {
				set.add(labels[i]);
			}
			return set;
		} 
		/**
		 * record all coins
		 * @param array []
		 *
		 * evaluations : list of all evaluations
		 *
		 * returns obj {}
		 */
		function getAllCoins(evaluations) {
			let allCoins = new Set();
			evaluations.forEach(evaluation => {
				recordLabel(evaluation[0], allCoins);
				recordLabel(evaluation[1], allCoins);
			});
			return allCoins;
		}
		/**
		 * record all coins of the same weight (real coins)
		 * @param array []
		 *
		 * evaluations : list of all evaluations
		 *
		 * returns obj {}
		 */
		function getRealCoins(evaluations) {
			let realCoins = new Set();
			evaluations.forEach(evaluation => {
				if(evaluation[2] == "equal") {
					recordLabel(evaluation[0], realCoins);
					recordLabel(evaluation[1], realCoins);
				}
			});
			return realCoins;
		} 
		/**
		 * check for data inconsistency
		 * @param obj {}, obj {}, array []
		 *
		 * allCoins    : set recording all coins
		 * realCoins   : set recording real coins
		 * evaluations : list of all evaluations
		 *
		 * returns String
		 */
		function checkInconsistency(allCoins, realCoins, evaluations) {
			let checkLighter = lighter => lighter.every(label => realCoins.has(label));
			if(allCoins.size - realCoins.size > 1) {
				return false;
			}
			for(let i = 0; i < evaluations.length; i++) {
				if(evaluations[i][2] != "equal") {
					let lighter = evaluations[i][2] == "left" ? evaluations[i][1].split("") : evaluations[i][0].split("");
					if(checkLighter(lighter)) {
						return false;
					}
				}
			}
			return true;
		}
		/**
		 * filter out real coins
		 * @param obj {}, obj {}
		 *
		 * allCoins  : set recording all coins
		 * realCoins : set recording real coins
		 *
		 * returns char
		 */
		function filterReal(allCoins, realCoins) {
			allCoins = Array.from(allCoins);
			for(let i = 0; i < allCoins.length; i++) {
				if(!realCoins.has(allCoins[i])) {
					return allCoins[i];
				}
			}
			return "";
		} 
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
			let allCoins = getAllCoins(evaluations);
			let realCoins = getRealCoins(evaluations);
			let result = null;
			if(!checkInconsistency(allCoins, realCoins, evaluations)) {
				result = "Data is inconsistent.";
			} else if(allCoins.size == realCoins.size) {
				result = "No fake coins detected.";
			} else {
				result = `${filterReal(allCoins, realCoins)} is lighter.`;
			}
			return result;
		} 
		/** 
		 * default input
		 */
		//input 1  
		console.log("Default 1:");
		let input = ["a b left", "a c equal"];
		input.forEach(evaluation => {
			console.log(evaluation);
		});
		console.log(getFakeCoin(input));
		//input 2
		console.log("Default 2:");
		input = ["a c equal"];
		input.forEach(evaluation => {
			console.log(evaluation);
		});
		console.log(getFakeCoin(input));
		//input 3
		console.log("Default 3:");
		input = ["a c equal", "a b equal", "c b left"];
		input.forEach(evaluation => {
			console.log(evaluation);
		});
		console.log(getFakeCoin(input));
		/**
		 * challenge input
		 */
		//challenge 1 
		console.log("Challenge 1:");
		input = ["ab xy left", "b x equal", "a b equal"];
		input.forEach(evaluation => {
			console.log(evaluation);
		});
		console.log(getFakeCoin(input));
		//challenge 2 
		console.log("Challenge 2:");
		input = ["a x equal", "b x equal", "y a left"];
		input.forEach(evaluation => {
			console.log(evaluation);
		});
		console.log(getFakeCoin(input));
		//challenge 3 
		console.log("Challenge 3:");
		input = ["abcd efgh equal", "abci efjk left", "abij efgl equal", "mnopqrs tuvwxyz equal"];
		input.forEach(evaluation => {
			console.log(evaluation);
		});
		console.log(getFakeCoin(input));
		//challenge 4
		console.log("Challenge 4:");
		input = ["abc efg equal", "a e left"];
		input.forEach(evaluation => {
			console.log(evaluation);
		});
		console.log(getFakeCoin(input));
	});
})();	