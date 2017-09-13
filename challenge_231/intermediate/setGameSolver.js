/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if three cards form a valid set
		 * @param {Array} [cards] - cards to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isValidSet(cards) {
			return cards[0].split("").every((attribute, index) => {
				const attributes = new Set(cards.map(card => card[index]));
				return attributes.size == 1 || attributes.size == cards.length;
			});
		}
		/**
		 * find all valid sets
		 * @param {Array} [cards] - all cards
		 * @param {int} [size] - size of a set
		 * @param {Array} [curSet] - current set
		 *
		 * @return {Array} [all valid sets]
		 */
		function findSets(cards, size = 3, curSet = []) {
			if(curSet.length == size || !cards.length) {
				return curSet.length == size ? (isValidSet(curSet) ? [curSet.join(" ")] : null) : null;
			}
			const sets = [];
			for(let i = 0; i < cards.length; i++) {
				const result = findSets(cards.slice(i + 1), size, [...curSet, cards[i]]);
				if(Array.isArray(result)) {
					sets.push(...result);
				}
			}
			return sets;
		}
		//default input
		console.log(`%cDefault input: `, "color : red;");
		let input = `SP3F
							   DP3O
							   DR2F
							   SP3H
							   DG3O
							   SR1H
							   SG2O
							   SP1F
							   SP3O
							   OR3O
							   OR3H
							   OR2H`;
		console.log(`%c${findSets(input.split("\n").map(card => card.trim())).join("\n")}`, "color : orange;");				
		//challenge input
		console.log(`%cChallenge input: `, "color : red;");
		input = `DP2H
			       DP1F
			       SR2F
			       SP1O
			       OG3F
			       SP3H
			       OR2O
			       SG3O
			       DG2H
			       DR2H
			       DR1O
			       DR3O`;			   
		console.log(`%c${findSets(input.split("\n").map(card => card.trim())).join("\n")}`, "color : orange;");				
	});
})();		