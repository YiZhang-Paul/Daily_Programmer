/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		let stopWords = new Set(["I" , "a" , "about" , "an" , "and", "are" , "as" , "at" , "be" , "by" , "com" , "for" , "from", "how", "in" , "is" , "it" , "of" , "on" , "or" , "that", "the" , "this", "to" , "was" , "what" , "when", "where", "who" , "will" , "with", "the"]);
		/**
		 * pick alliteration from a sentence
		 * @param String, obj {}
		 *
		 * sentence  : sentence to be examined
		 * stopWords : list of all stop words
		 *
		 * returns String
		 */
		function pickAlliteration(sentence, stopWords) {
			let words = sentence.split(/\s|[,.?']/g)
			                    .filter(word => word && !stopWords.has(word))
			                    .map(word => word.toLowerCase());
			let alliterations = [];
			for(let i = 0; i < words.length; i++) {
				if((words[i - 1] && words[i][0] == words[i - 1][0]) ||
					 (words[i + 1] && words[i][0] == words[i + 1][0])) {
					alliterations.push(words[i]);
				}
			}
			return alliterations.join(" ");
		} 
		/**
		 * detect all alliteration from all sentences
		 * @param array [], obj {}
		 *
		 * sentences : list of all sentences
		 * stopWords : list of all stop words
		 *
		 * returns array []
		 */
		function detectAlliteration(sentences, stopWords) {
			let alliterations = [];
			sentences.forEach(sentence => {
				alliterations.push(pickAlliteration(sentence, stopWords));
			});
			return alliterations;
		}
		//default input
		console.log("%cDefault Input: ", "color : red;");
		let input = ["Peter Piper Picked a Peck of Pickled Peppers", "Bugs Bunny likes to dance the slow and simple shuffle", "You'll never put a better bit of butter on your knife"];
		let result = detectAlliteration(input, stopWords);
		result.forEach(row => {
			console.log(row);
		});
		//challenge input
		console.log("%cChallenge Input: ", "color : red;");
		input = ["The daily diary of the American dream", "For the sky and the sea, and the sea and the sky", "Three grey geese in a green field grazing, Grey were the geese and green was the grazing.", "But a better butter makes a batter better.", "His soul swooned slowly as he heard the snow falling faintly through the universe and faintly falling, like the descent of their last end, upon all the living and the dead.", "Whisper words of wisdom, let it be.", "They paved paradise and put up a parking lot.", "So what we gonna have, dessert or disaster?"];
		result = detectAlliteration(input, stopWords);
		result.forEach(row => {
			console.log(row);
		});
	});
})();				