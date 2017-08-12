/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * retrieve Pokémon information
		 * @async
		 * @param {String} [category] - category of information to be retrieved
		 * @param {String} [name] - information name
		 *
		 * @return {Object} [Promise object]
		 */
		function getInfo(category, name) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(JSON.parse(this.responseText));
					if(this.status == 404) reject("Information Not Found.");
				};
				xhttp.open("GET", `http://pokeapi.co/api/v2/${category}/${name}/`, true);
				xhttp.send();
			});
		}
		/**
		 * convert damage relation description into multiplier
		 * @param {String} [desc] - damage relation description
		 *
		 * @return {int} [multiplier]
		 */
		function descToMultiplier(desc) {
			switch(desc) {
				case "no_damage_to" :
					return 0;
				case "half_damage_to" :
					return 0.5;
				case "double_damage_to" :
					return 2;	
				default :
					return 1;	
			}
		}
		/**
		 * check if a type is in damage relation table
		 * @param {Array} [category] - damage relation category
		 * @param {String} [type] - type to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function hasType(category, type) {
			return category.some(item => item.name == type);
		}
		/**
		 * get damage multiplier between types
		 * @param {Array} [relations] - all damage relations for a given type
		 * @param {String} [type] - type to be checekd against
		 *
		 * @return {int} [damage multiplier]
		 */
		function getMultiplier(relations, type) {
			for(let relation in relations) {
				if(relation.search("damage_to") != -1 && hasType(relations[relation], type)) {
					return descToMultiplier(relation);
				}
			}
			return descToMultiplier("normal");
		}
		/**
		 * find damage relations between types
		 * @async
		 * @param {String} [type] - type to be checked
		 * @param {String} [others] - other types to be checked against
		 * @param {Array} [headers] - optional headers for display
		 */
		function getDmgRelation(type, others, headers) {
			getInfo("type", type).then(result => {
				let multiplier = 1;
				others.split(" ").forEach(other => {
					multiplier *= getMultiplier(result.damage_relations, other);
				});
				console.log(`%c${headers ? headers[0] + " -> " + headers[1] : type + " -> " + others} : %c${multiplier}x`, "color : skyblue;", "color : orange;");
			}).catch(error => {console.log(error);});
		}
		/**
		 * find damage relations between moves and Pokémons
		 * @async
		 * @param {String} [move] - move to be checked
		 * @param {String} [pokemon] - pokemon to be checked against
		 */
		function moveToPokemonDmg(move, pokemon) {
			getInfo("move", move.split(" ").join("-")).then(result => {
				let moveType = result.type.name;
				getInfo("pokemon", pokemon).then(result => {
					let pokeTypes = result.types.map(type => type.type.name);
					getDmgRelation(moveType, pokeTypes.join(" "), [move, pokemon]);
				}).catch(error => {console.log(error);});
			}).catch(error => {console.log(error);});
		}
		//challenge & bonus 1 input
		getDmgRelation("fire", "grass");
		getDmgRelation("fighting", "ice rock");
		getDmgRelation("psychic", "poison dark");
		getDmgRelation("water", "normal");
		getDmgRelation("fire", "rock");
		//Bonus 2 input
		moveToPokemonDmg("fire punch", "bulbasaur");
		moveToPokemonDmg("wrap", "onix");
		moveToPokemonDmg("surf", "dewgong");
	});
})();		