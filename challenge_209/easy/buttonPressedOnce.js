/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get all user information
		 * @param {String} [info] - usernames and time of button press
		 *
		 * @return {Array} [user information]
		 */
		function getUsers(info) {
			return info.split("\n").map(user => {
				let curUser = user.split(":").map(stat => stat.trim());
				return [curUser[0], Number(curUser[1])];
			});
		}
		/**
		 * calculate flair received by each user
		 * @param {String} [info] - usernames and time of button press
		 *
		 * @return {Array} [flair received by each user] 
		 */
		function getFlairs(info) {
			return getUsers(info).sort((a, b) => a[1] - b[1]).map((user, index, allUser) => 
				[user[0], Math.floor(60 - (user[1] - (index ? allUser[index - 1][1] : 0)))]);
		}
		/**
		 * display flair received by each user
		 * @param {Array} [users] - usernames with flair received
		 *
		 * @return {String} [flair received by each user]
		 */
		function displayFlair(users) {
			return users.map(user => user.join(": ")).join("\n");
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `UserA: 41.04
								 UserB: 7.06
								 UserC: 20.63
								 UserD: 54.28
								 UserE: 12.59
								 UserF: 31.17
								 UserG: 63.04`;
		console.log(`%c${displayFlair(getFlairs(input))}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `Coder_d00d: 3.14
						 Cosmologicon: 22.15
						 Elite6809: 17.25
						 jnazario: 33.81
						 nint22: 10.13
						 rya11111: 36.29
						 professorlamp: 31.60
						 XenophonOfAthens: 28.74`;
		console.log(`%c${displayFlair(getFlairs(input))}`, "color : orange;");
		input = `bholzer: 101.09
						 Cosmologicon: 27.45
						 nint22: 13.76
						 nooodl: 7.29
						 nottoobadguy: 74.56
						 oskar_s: 39.90
						 Steve132: 61.82`;						 		
		console.log(`%c${displayFlair(getFlairs(input))}`, "color : orange;");
	});
})();		