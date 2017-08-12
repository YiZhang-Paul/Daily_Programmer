/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create GUID
		 *
		 * @return {String} [GUID] 
		 */
		function getGUID() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
				let seed = Math.random() * 16 | 0;
				return char == "x" ? seed.toString(16) : (seed&0x3|0x8).toString(16);
			});
		}
	});
})();			