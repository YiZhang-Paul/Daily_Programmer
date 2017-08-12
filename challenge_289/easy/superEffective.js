/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * retrieve Pokémon information 
		 * @param {String} [url] - API call url
		 * @param {String} [info] - information to retrieve
		 *
		 * @return {Object} [Promise object]
		 */
		function getInfo(url, info) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) {
						resolve(JSON.parse(this.responseText));
					}
				};
				xhttp.open("GET", url + info, true);
				xhttp.send();
			});
		}
		/**
		 * retrieve Pokémon type information
		 * @param {String} [type] [Pokémon type]
		 *
		 * @return {Object} [Promise object]
		 */
		function getType(type) {
			return getInfo("http://pokeapi.co/api/v2/type/", type);
		}
		/**
		 * convert damage relation description to number
		 * @param {String} [description] [damage description]
		 *
		 * @return {int} [damage multiplier]
		 */
		function DescToMultiplier(description) {
			switch(description) {
				case "half_damage_to" :
					return 0.5;
				case "double_damage_to" :
					return 2;
				case "no_damage_to" :
					return 0;
				default :
					return 1;			
			}
		}
		/**
		 * get damage multiplier between two types
		 * @param {Object} [relations] [all damage relations for a type]
		 * @param {String} [target] [target Pokémon type to be checked]
		 *
		 * @return {int} [damage multiplier]
		 */
		function getMultiplier(relations, target) {
			let hasType = (types, target) => types.some(type => type.name == target);
			for(let relation in relations) {
				if(relation.search("damage_to") != -1 && hasType(relations[relation], target)) {
					return DescToMultiplier(relation);
				}
			}
			return DescToMultiplier("none");
		}
		/**
		 * retrieve damage relation between different types
		 * @param {String} [type1] [Pokémon type 1]
		 * @param {String} [others] [other Pokémon types]
		 *
		 * @return {String} [damage relation]
		 */
		function getDmgRelation(type1, others) {
			getType(type1).then(result => {
				let totalMultiplier = 1;
				others.split(" ").forEach(type => {
					totalMultiplier *= getMultiplier(result.damage_relations, type);
				});
				console.log(`%c${type1} -> ${others} : %c${totalMultiplier}x`, "color : skyblue;", "color : orange;");
			});
		}
		//challenge & bonus 1 input
		console.log(`%cChallenge & Bonus 1 Input: `, "color : red;");
		getDmgRelation("fire", "grass");
		getDmgRelation("fighting", "ice rock");
		getDmgRelation("psychic", "poison dark");
		getDmgRelation("water", "normal");
		getDmgRelation("fire", "rock");
	});
})();		