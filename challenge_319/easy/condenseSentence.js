/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * condense sentences
		 * @param String
		 *
		 * sentence : sentence to be condensed 
		 *
		 * returns String
		 */
		function condense(sentence) {
			sentence = sentence.split(" ");
			for(let i = 0; i < sentence.length; i++) {
				for(let j = 0; j < sentence[i].length; j++) {
					if(sentence[i + 1] && sentence[i + 1].search(sentence[i].slice(j).toLowerCase()) === 0) {
						sentence[i] = sentence[i].slice(0, j) + sentence[i + 1];
						sentence.splice(i + 1, 1);
						i--;
						break;
					}
				}
			}
			return sentence.join(" ");
		} 
		//default input
		let input = "I heard the pastor sing live verses easily.";
		console.log(condense(input));
		//challenge input 
		input = "Deep episodes of Deep Space Nine came on the television only after the news.";
    console.log(condense(input));
    input = "Digital alarm clocks scare area children.";
    console.log(condense(input));
	});
})();		