/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * evaluation coin 
		 * @param String, obj {}
		 *
		 * evaluation : comparision between two coins
		 * tree       : current coin comparision tree
		 *
		 * returns array []
		 */
		function evalCoin(evaluation, tree = new Map()) {
			evaluation = evaluation.split(" ");
			let [label1, label2, result] = [evaluation[0], evaluation[1], evaluation[2]];
			let coin1 = {label : label1, weight : 0};
			let coin2 = {label : label2, weight : 0};
			if(result == "left") {
				coin1.weight = coin2.weight - 1;
			} else if(result == "right") {
				coin2.weight = coin1.weight + 1;
			}
			tree.set(coin1.label, coin1.weight);
			tree.set(coin2.label, coin2.weight);
			return tree;
		}
		/** 
		 * default input
		 */
		//input 1  
		let input = ["a b left", "a c equal"];
		evalCoin(input[0]);
		//input 2
		input = ["a c equal"];
		//input 3
		input = ["a c equal", "a b equal", "c b left"];
	});
})();		