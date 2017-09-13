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
		 * replace state with characters
		 * @param {String} [state] - state to be replaced
		 *
		 * @return {String} [replaced state]
		 */
		function replaceState(state) {
			return state.split("").map(char => char == "0" ? " " : "X").join("");
		}
		/**
		 * get states of celular automata for given number of steps
		 * @param {String} [state] - starting celular automata state
		 * @param {int} [steps] - number of steps to simulate
		 *
		 * @return {Array} [states for given steps]
		 */
		function getStates(state, steps = 25) {
			const states = [replaceState(state)];
			for(let i = 0; i < steps; i++) {
				state = getNextState(state);
				states.push(replaceState(state));
			}
			return states.filter(state => /\w/.test(state));
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "1101010";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${getStates(input, 25).join("\n")}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "00000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${getStates(input, 25).join("\n")}`, "color : orange;");
	});
})();