import Card from "classes/card";
import Allocator from "classes/allocator";

function getCards(input: string): Card[] {

    let cards: Card[] = [];

    input.split(",").forEach(card => {

        cards.push(new Card(card.trim()));
    });

    return cards;
}

function canAllocate(input: string): boolean {

    let cards = getCards(input.match(/\[.+\]/)[0]);
    const target = input.match(/\S+(?=\?)/)[0];

    return new Allocator().canAllocate(cards, target);
}

let input = "Cards [W/B/S/O, W, S/B, S]. Can you make WWSS?";
console.log(canAllocate(input));