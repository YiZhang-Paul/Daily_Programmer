/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get next celular automata states
		 * @param {String} [state] - current celular automata state
		 *
		 * @return {String} [next state of celular automata]
		 */
		function getNextState(state) {
			let newState = "";
			const curState = "0" + state + "0";
			for(let i = 1; i < curState.length - 1; i++) {
				newState += curState[i - 1] == curState[i + 1] ? "0" : "1";
			}
			return newState;
		}
		/**
		 * get states of celular automata for given number of steps
		 * @param {String} [state] - starting celular automata state
		 * @param {int} [steps] - number of steps to simulate
		 *
		 * @return {Array} [states for given steps]
		 */
		function getStates(state, steps) {
			const states = [state];
			for(let i = 0; i < steps; i++) {
				state = getNextState(state);
				states.push(state);
			}
			return states;
		}
		console.log(getStates("1101010", 25));
	});
})();		