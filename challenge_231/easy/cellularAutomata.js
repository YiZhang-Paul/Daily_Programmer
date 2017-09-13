/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get next celular automata states
		 * @param {String} [state] - current state of celular automata
		 *
		 * @return {String} [next state of celular automata]
		 */
		function getNextState(state) {
			let curState = "0" + state + "0";
			for(let i = 1; i < curState.length - 1; i++) {
				const newState = curState[i - 1] == curState[i + 2] ? "0" : "1";
				curState = curState.slice(0, i) + newState + curState.slice(i + 1);
			}
			return curState.slice(1, -1);
		}
		console.log(getNextState("1101010"));
	});
})();		