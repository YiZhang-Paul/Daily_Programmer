/**
 * codes for challenge No.296[Easy]
 */
/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    //main description
    var mainDescript = "On the day of Christmas\nmy true love sent to me: ";
    //gifts received
    var giftByDay = { 1 : ["a", "first"],
                      2 : ["two", "second"],
                      3 : ["three", "third"],
                      4 : ["four", "fourth"],
                      5 : ["five", "fifth"],
                      6 : ["six", "sixth"],
                      7 : ["seven", "seventh"],
                      8 : ["eight", "eighth"],
                      9 : ["nine", "ninth"],
                     10 : ["ten", "tenth"],
                     11 : ["eleven", "eleventh"],
                     12 : ["twelfe", "twelfth"] };
    //input gift list
    var inputList = ["Partridge in a Pear Tree",
                     "Turtle Doves",
                     "French Hens",
                     "Calling Birds",
                     "Golden Rings",
                     "Geese a Laying",
                     "Swans a Swimming",
                     "Maids a Milking",
                     "Ladies Dancing",
                     "Lords a Leaping",
                     "Pipers Piping",
                     "Drummers Drumming"];
    //insert input gift list
    for(var i = 1; i < inputList.length + 1; i++) {
      giftByDay[i].push(inputList[i - 1]);
    }       
    //get day and gift through a loop
    for(var dayNum in giftByDay) {
      if(dayNum != 1) {
        console.log("\n");
      } 
      console.log(mainDescript.slice(0, 7) + giftByDay[dayNum][1] + mainDescript.slice(6));
      for(i = dayNum; i > 0; i--) {
        if(dayNum == 1) {
          console.log(giftByDay[i][0] + " " + giftByDay[i][2]);
        } else if(i != 1) {
            console.log(giftByDay[i][0] + " " + giftByDay[i][2]);
        } else {
            console.log("and " + giftByDay[i][0] + " " + giftByDay[i][2]);
        }
      }
    }
  });
})();