/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * finite state machine
		 * @param obj {}, String
		 *
		 * owner   : owner of state machine
		 * initial : initial state
		 */
		class StateMachine {
			constructor(owner, initial) {
				this.owner = owner;
				this.states = [];
				if(initial) {
					this.pushState(initial);
				}
			}
			/**
			 * check current active state
			 *
			 * returns String
			 */
			activeState() {
				return this.states.length ? this.states[this.states.length - 1] : null;
			} 
			/**
			 * push new state
			 * @param String
			 *
			 * state : new state 
			 */
			pushState(state) {
				if(this.activeState() != state) {
					this.states.push(state);
				}
			} 
			/**
			 * swap current state
			 * @param String
			 *
			 * state : new state
			 */
			swapState(state) {
				if(this.activeState()) {
					this.states[this.states.length - 1] = state;
				}
			} 
			/**
			 * pop current state
			 */
			popState() {
				if(this.activeState()) {
					this.states.pop();
				}
			} 
			/**
			 * run current state
			 */
			run() {
				if(this.activeState()) {
					this.owner[this.activeState()]();
				}
			}
		} 
	});
})();