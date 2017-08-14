/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * santa class
		 * @param {String} [name] - santa's name
		 * @param {Array} [family] - names of family members
		 */
		class Santa {
			constructor(name, family) {
				this.name = name;
				this.family = new Set(family);
				this.recipient = null;
				this.gifter = null;
			}
			/**
			 * find available recipient
			 * @param {Array} [participants] - all participants
			 *
			 * @return {Array} [available participants]
			 */
			validReceiver(participants) {
				return participants.filter(participant => 
					!participant.gifter && participant.name != this.name && !this.family.has(participant.name));
			}
			/**
			 * choose receiver
			 * @param {Object} [receiver] - receiver of the gift
			 */
			pickReceiver(receiver) {
				this.recipient = receiver.name;
				receiver.gifter = this.name;
			}
		}
		/**
		 * check if all participants are properly assigned
		 * @param {Array} [participants] - participants to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function allAssigned(participants) {
			return participants.every(participant => participant.recipient && participant.gifter);
		}
		/**
		 * create all participants
		 * @param {String} [names] - all participants' names
		 *
		 * @return {Array} [all participants]
		 */
		function getParticipants(names) {
			return names.split("\n")
			            .map(family => family.trim().split(" ").map((name, index, arr) => {
			            	let relatives = [...arr.slice(0, index), ...arr.slice(index + 1)];
			            	return new Santa(name, relatives);
			            }))
			            .reduce((acc, val) => [...acc, ...val]);
		}
		/**
		 * assign secret santas
		 * @param {String} [names] - all participants' names
		 *
		 * @return {Array} [secret santa assignments]
		 */
		function assignSanta(names) {
			let participants = getParticipants(names);
			console.log(participants);
			while(!allAssigned(participants)) {
				for(let i = 0; i < participants.length; i++) {
					if(!participants[i].recipient) {
						let receivers = participants[i].validReceiver(participants);
						if(!receivers.length) {
							participants = getParticipants(names);
							break;
						}
						participants[i].pickReceiver(receivers[Math.floor(Math.random() * receivers.length)]);
					}
				}
			}
			return participants;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `Joe
                 Jeff Jerry
                 Johnson`;
		console.log(`%c${input.split("\n").map(name => name.trim()).join("\n")}`, "color : skyblue;");
		console.log("Assignments -> ");
		console.log(assignSanta(input));                 
	});
})();			