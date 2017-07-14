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
			 * @param args []
			 *
			 * args : arguments for specified state
			 */
			run(...args) {
				if(this.activeState()) {
					this.owner[this.activeState()](...args);
				}
			}
		} 
		/**
		 * garage door class
		 */
		class GarageDoor {
			constructor() {
				this.state = new StateMachine(this, "closed");
			}
			/**
			 * process single input
			 * @param String
			 *
			 * input : input to be processed
			 */
			processInput(input) {
				console.log(`> ${input[0].toUpperCase() + input.slice(1)}.`);
				this.state.run(input);
				console.log(`Door: ${this.state.activeState().toUpperCase()}`);
			} 
			/**
			 * process a series of inputs
			 * @param array []
			 *
			 * inputs : all inputs to be processed
			 */
			processAllInput(inputs) {
				console.log(`Door: ${this.state.activeState().toUpperCase()}`);
				inputs.split("\n").forEach(input => {
					this.processInput(input.trim().replace("_", " "));
			  });
			} 
			/**
       * closed state
       * @param String
			 *
			 * input : input to be processed
       */
      closed(input) {
      	if(input == "button clicked") {
      		this.state.swapState("opening");
      	}
      } 
      /**
       * closing state
       * @param String
			 *
			 * input : input to be processed
       */
      closing(input) {
      	if(input == "cycle complete") {
      		this.state.swapState("closed");
      	} else if(input == "button clicked") {
      		this.state.swapState("stopped_while_closing");
      	}
      } 
      /**
       * open state
       * @param String
			 *
			 * input : input to be processed
       */
      open(input) {
      	if(input == "button clicked") {
      		this.state.swapState("closing");
      	}
      } 
      /**
       * opening state
       * @param String
			 *
			 * input : input to be processed
       */
      opening(input) {
      	if(input == "cycle complete") {
      		this.state.swapState("open");
      	} else if(input == "button clicked") {
      		this.state.swapState("stopped_while_opening");
      	}
      } 
      /**
       * stopped while closing state
       * @param String
       *
       * input : input to be processed
       */
      stopped_while_closing(input) {
      	if(input == "button clicked") {
      		this.state.swapState("opening");
      	}
      } 
      /**
       * stopped while opening state
       * @param String
       *
       * input : input to be processed
       */
      stopped_while_opening(input) {
      	if(input == "button clicked") {
      		this.state.swapState("closing");
      	}
      } 
		} 
		//challenge input
		let input = `button_clicked
								 cycle_complete
								 button_clicked
								 button_clicked
								 button_clicked
								 button_clicked
								 button_clicked
								 cycle_complete`;
		let door = new GarageDoor();
		door.processAllInput(input);
	});
})();