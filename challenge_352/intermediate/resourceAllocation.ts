import Card from "classes/card";
import Allocator from "classes/allocator";

function getCards(input: string): Card[] {

    return input.split(",").map(card => {

        return new Card(card.trim());
    })
}

function canAllocate(input: string): boolean {

    let cards = getCards(input.match(/\[.+\]/)[0]);
    const demands = input.match(/\S+(?=\?)/)[0];

    return new Allocator().canAllocate(cards, demands);
}

//challenge & bonus input
const time = new Date().getTime();
console.log(`%cChallenge & Bonus Input:`, "color : red;");

let input = "Cards [W/B/S/O, W, S/B, S]. Can you make WWSS?";
console.log(canAllocate(input));

input = "Cards [W/B/S/O, S/O, W/S, W/B, W/B, W, B]. Can you make WWBSSOO?";
console.log(canAllocate(input));

input = "Cards [A/B/D/E, A/B/E/F/G, A/D, A/D/E, A/D/E, B/C/D/G, B/C/E, B/C/E/F, B/C/E/F, B/D/E, B/D/E, B/E/F, C/D/F, C/E, C/E/F/G, C/F, C/F, D/E/F/G, D/F, E/G]. Can you make AABCCCCCCDDDEEEEFFGG?";
console.log(canAllocate(input));

input = "Cards [A/C/G/K/L/O/R/S, A/D/H/I/M/Q, A/D/K/W/X, A/D/M/U/Z, A/E/J/M/T, A/G/H/I/M/R/T/Z, A/G/M/T/U, A/H/I/J/Q, B/C/Q/U/V, B/D/F/K/M/R/W/Y, B/F/P/T/U/W/Y, B/G/K/M/S/T/X/Y, C/E/F/I/K/N/O, D/E/G/J/M/Q/Z, D/G/I/R/Z, D/H/I/T/U, E/G/H/J/M/Q, E/G/H/J/Q/R/T/U, E/G/J/M/Z, E/H/I/Q/T/U/Z, E/J/O/S/V/X, F/G/H/N/P/V, F/G/N/P/R/S/Z, F/I/M/Q/R/U/Z, F/L/M/P/S/V/W/Y, G/H/J/M/Q]. Can you make ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
console.log(canAllocate(input));

console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");