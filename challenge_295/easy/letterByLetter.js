/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * function to change word/sentence to another 
  	 * word/sentence letters by letters
  	 * @param String, String
  	 * 
  	 * a : word/sentence to be changed
  	 * b : word/sentence used for the change
  	 *
  	 * returns String
  	 */
  	s=(a,b)=>{for(i=-1;i<b.length;i++)if(i<0||a[i]!=b[i])console.log(b.slice(0,i+1)+a.slice(i+1));}; 
  	//challenge input 1
  	console.log("challenge 1:");
    let input = ["floor", "brake"];
    s(...input);
    //challenge input 2
  	console.log("challenge 2:");
    input = ["wood", "book"];
    s(...input);
    //challenge input 3
  	console.log("challenge 3:");
    input = ["a fall to the floor", "braking the door in"];
  	s(...input);
  });
})();  	