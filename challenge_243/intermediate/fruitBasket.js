/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create fruit table
		 * @param {String} [fruits] - fruit information
		 *
		 * @return {Object} [fruit table]
		 */
		function getFruitTable(fruits) {
			const table = new Map();
			fruits.split("\n").forEach(fruit => {
				const name = fruit.match(/[a-zA-Z\s]+/)[0].trim();
				const price = Number(fruit.match(/\d+.*\d$/)[0]);
				table.set(name, price);
			});
			return table;
		}
		/**
		 * find all affordable fruits
		 * @param {String} [fruits] - fruit information
		 * @param {Object} [fruitTable] - fruit table
		 * @param {int} [budget] - total available budget
		 *
		 * @return {Array} [all affordable fruits]
		 */
		function getAffordableFruits(fruits, fruitTable, budget) {
			return fruits.split("\n")
			             .map(fruit => fruit.match(/[a-zA-Z\s]+/)[0].trim())
			             .filter(fruit => fruitTable.get(fruit) <= budget);
		}
		/**
		 * sort fruits by prices in descending order
		 * @param {Array} [fruits] - all fruits
		 * @param {Object} [fruitTable] - fruit table
		 *
		 * @return {Array} [sorted fruit list]
		 */
		function sortFruit(fruits, fruitTable) {
			return fruits.slice().sort((a, b) => fruitTable.get(b) - fruitTable.get(a));
		}
		/**
		 * find solution with given fruits and budget
		 * @param {Array} [fruits] - all available fruits
		 * @param {Object} [fruitTable] - fruit table
		 * @param {int} [budget] - total available budget
		 * @param {int} [cost] - current total cost
		 * @param {Object} [selection] - current selection
		 *
		 * @return {Array} [all possible solutions]
		 */
		function findSolution(fruits, fruitTable, budget, cost = 0, selection = {}) {
			if(cost >= budget) {
				return cost == budget ? [selection] : null;
			}
			const solution = [];
			for(let i = 0; i < fruits.length; i++) {
				const curSelect = Object.assign({}, selection);
				curSelect[fruits[i]] = curSelect[fruits[i]] ? curSelect[fruits[i]] + 1 : 1;
				const result = findSolution(fruits.slice(i), fruitTable, budget, cost + fruitTable.get(fruits[i]), curSelect);
				if(Array.isArray(result)) {
					solution.push(...result);
				}
			}
			return solution;
		}
		/**
		 * find all possible ways to fill fruit basket
		 * @param {String} [fruits] - fruit information
		 * @param {int} [budget] - total available budget
		 *
		 * @return {Array} [all possible ways to fill fruit basket]
		 */
		function fillBasket(fruits, budget) {
			const fruitTable = getFruitTable(fruits);
			const affordableFruits = getAffordableFruits(fruits, fruitTable, budget);
			return findSolution(sortFruit(affordableFruits, fruitTable), fruitTable, budget).map(solution => 
				Object.keys(solution).map(fruit => `${solution[fruit]} ${fruit + (solution[fruit] > 1 ? "s" : "")}`).join(", "));
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `banana 32
								 kiwi 41
								 mango 97
								 papaya 254
								 pineapple 399`;
		let time = new Date().getTime();
		console.log(fillBasket(input, 500));
		console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `apple 59
						 banana 32
						 coconut 155
						 grapefruit 128
						 jackfruit 1100
						 kiwi 41
						 lemon 70
						 mango 97
						 orange 73
						 papaya 254
						 pear 37
						 pineapple 399
						 watermelon 500`;
		time = new Date().getTime();
		console.log(fillBasket(input, 500));
		console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
	});
})();		