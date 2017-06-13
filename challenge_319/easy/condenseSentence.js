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
			let newSentence = sentence.split(" ");
			for(let i = 0; i < newSentence.length - 1; i++) {
				for(let j = 0; j < newSentence[i].length; j++) {
					if(newSentence[i + 1].search(newSentence[i].slice(j).toLowerCase()) === 0) {
						newSentence[i] = newSentence[i].slice(0, j) + newSentence.splice(1 + i--, 1)[0];
						break;
					}
				}
			}
			return newSentence.join(" ");
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